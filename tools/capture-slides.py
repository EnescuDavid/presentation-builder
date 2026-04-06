#!/usr/bin/env python3
"""
tools/capture-slides.py
Capture per-slide screenshots of a reveal.js presentation.

Usage: python3 tools/capture-slides.py projects/{name}/presentation.html
Output: projects/{name}/screenshots/
         - slide-01.png ... slide-NN.png
         - manifest.json (slide count + overflow metadata)
         - contact-sheet.html (3-column thumbnail grid)

Requirements:
  pip3 install playwright
  playwright install chromium
"""
import sys
import os
import json
import random
import threading
import pathlib
import socket
import http.server
import argparse

from playwright.sync_api import sync_playwright


def find_free_port(start=8100, end=8999):
    """Find an available TCP port by probing a random sample."""
    candidates = random.sample(range(start, end), min(end - start, 50))
    for port in candidates:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            if s.connect_ex(('localhost', port)) != 0:
                return port
    raise RuntimeError("No free port found in range {}-{}".format(start, end))


def start_server(directory, port):
    """Start a local HTTP server serving directory on port. Returns httpd handle."""
    original_dir = os.getcwd()
    os.chdir(directory)

    class SilentHandler(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *args):
            pass  # silence access log

    httpd = http.server.HTTPServer(('localhost', port), SilentHandler)
    t = threading.Thread(target=httpd.serve_forever, daemon=True)
    t.start()
    # Restore working directory so pathlib operations remain correct
    os.chdir(original_dir)
    return httpd


def capture(html_path):
    """
    Screenshot every slide of a reveal.js presentation.

    Args:
        html_path: Path to the presentation HTML file.

    Returns:
        pathlib.Path pointing to the screenshots output directory.
    """
    html_path = pathlib.Path(html_path).resolve()
    if not html_path.exists():
        print("Error: File not found: {}".format(html_path), file=sys.stderr)
        sys.exit(1)

    project_dir = html_path.parent
    out_dir = project_dir / 'screenshots'
    out_dir.mkdir(exist_ok=True)

    port = find_free_port()
    httpd = start_server(str(project_dir), port)
    url = "http://localhost:{}/{}".format(port, html_path.name)

    slides_data = []
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page(viewport={'width': 1280, 'height': 720})
            page.goto(url, wait_until='networkidle')

            # Wait for Reveal.js to fully initialize
            page.wait_for_function(
                '() => typeof Reveal !== "undefined" && Reveal.isReady()',
                timeout=15000
            )

            total = page.evaluate('() => Reveal.getTotalSlides()')
            print("Capturing {} slides...".format(total))

            for i in range(total):
                page.evaluate('(idx) => Reveal.slide(idx)', i)
                page.wait_for_timeout(150)  # allow animations to settle

                # Detect overflow on elements within the current (present) slide
                overflows = page.evaluate('''() => {
                    const slide = document.querySelector(".present");
                    if (!slide) return [];
                    return Array.from(slide.querySelectorAll("*"))
                        .filter(el => el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight)
                        .map(el => el.tagName + (el.className ? "." + Array.from(el.classList).join(".") : ""));
                }''')

                fname = "slide-{:02d}.png".format(i + 1)
                page.screenshot(path=str(out_dir / fname))
                slides_data.append({
                    'index': i + 1,
                    'file': fname,
                    'overflows': overflows
                })

                if overflows:
                    print("  slide {:02d} captured (overflow detected on {} element(s))".format(
                        i + 1, len(overflows)))
                else:
                    print("  slide {:02d} captured".format(i + 1))

            browser.close()
    finally:
        httpd.shutdown()

    # Write manifest.json
    manifest = {'total': total, 'slides': slides_data}
    (out_dir / 'manifest.json').write_text(json.dumps(manifest, indent=2))

    # Write contact-sheet.html
    imgs = ''.join(
        '<figure>'
        '<img src="{file}" alt="Slide {index}">'
        '<figcaption>Slide {index}{warn}</figcaption>'
        '</figure>'.format(
            file=s['file'],
            index=s['index'],
            warn=' \u26a0 overflow' if s['overflows'] else ''
        )
        for s in slides_data
    )

    contact_sheet = (
        '<!DOCTYPE html>'
        '<html lang="de">'
        '<head>'
        '<meta charset="utf-8">'
        '<title>Contact Sheet</title>'
        '<style>'
        'body { font-family: Inter, sans-serif; background: #f5f5f5; padding: 2rem; }'
        '.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }'
        'figure { margin: 0; background: white; border-radius: 6px; overflow: hidden;'
        ' box-shadow: 0 2px 6px rgba(0,0,0,.1); }'
        'img { width: 100%; display: block; }'
        'figcaption { padding: .5rem .75rem; font-size: .8rem; color: #555; }'
        '</style>'
        '</head>'
        '<body>'
        '<h1 style="margin-bottom:1.5rem">Contact Sheet \u2014 {name}</h1>'
        '<div class="grid">{imgs}</div>'
        '</body>'
        '</html>'
    ).format(name=html_path.name, imgs=imgs)

    (out_dir / 'contact-sheet.html').write_text(contact_sheet)

    print("Done. Captured {} slides -> {}".format(total, out_dir))
    return out_dir


def main():
    parser = argparse.ArgumentParser(
        description='Capture per-slide screenshots of a reveal.js presentation'
    )
    parser.add_argument(
        'html_path',
        help='Path to the presentation HTML file (e.g., projects/{name}/presentation.html)'
    )
    args = parser.parse_args()
    capture(args.html_path)


if __name__ == '__main__':
    main()
