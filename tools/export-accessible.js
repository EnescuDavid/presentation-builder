#!/usr/bin/env node
// ==========================================================================
//  Presentation Builder — Accessible HTML Export
// ==========================================================================
//  Usage: node tools/export-accessible.js <presentation.html> [output.html]
//  Generates a screen-reader-friendly linear HTML document without reveal.js.
//
//  Strips all reveal.js framework, animations, and fragments. Replaces
//  charts and diagrams with their aria-label text descriptions. Preserves
//  semantic heading hierarchy (h1 > h2 > h3) for screen reader navigation.
// ==========================================================================

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// ---------------------------------------------------------------------------
//  CLI argument parsing
// ---------------------------------------------------------------------------
const [,, inputPath, outputPath] = process.argv;

if (!inputPath) {
  console.error('Usage: node tools/export-accessible.js <presentation.html> [output.html]');
  console.error('');
  console.error('Generates a screen-reader-friendly linear HTML document without reveal.js.');
  console.error('Charts and diagrams are replaced with their aria-label text descriptions.');
  console.error('');
  console.error('Examples:');
  console.error('  node tools/export-accessible.js projects/example/presentation.html');
  console.error('  node tools/export-accessible.js presentation.html accessible.html');
  process.exit(1);
}

if (!fs.existsSync(inputPath)) {
  console.error(`Error: File not found: ${inputPath}`);
  process.exit(1);
}

// ---------------------------------------------------------------------------
//  Default output path
// ---------------------------------------------------------------------------
const outPath = outputPath || inputPath.replace(/\.html$/, '-accessible.html');

// ---------------------------------------------------------------------------
//  Parse HTML and extract slides
// ---------------------------------------------------------------------------
const html = fs.readFileSync(inputPath, 'utf-8');
const $ = cheerio.load(html);

const slides = $('.reveal .slides > section');
const slideCount = slides.length;

if (slideCount === 0) {
  console.error('Error: No slides found in presentation. Expected .reveal .slides > section elements.');
  process.exit(1);
}

console.log(`Found ${slideCount} slides`);

// ---------------------------------------------------------------------------
//  Extract presentation title from title slide
// ---------------------------------------------------------------------------
let presentationTitle = path.basename(inputPath, '.html');
const titleSlide = $('.reveal .slides > section[data-component="title"]').first();
if (titleSlide.length) {
  const h1Text = titleSlide.find('h1').first().text().trim();
  if (h1Text) presentationTitle = h1Text;
}

// ---------------------------------------------------------------------------
//  Helper: replace charts/diagrams with text descriptions
// ---------------------------------------------------------------------------
function replaceChartsAndDiagrams($slide) {
  // Replace <canvas> elements (Chart.js charts)
  $slide.find('canvas').each(function () {
    const ariaLabel = $(this).attr('aria-label') || 'Kein Beschreibungstext vorhanden';
    $(this).replaceWith(`<div class="chart-description"><p><strong>Diagramm:</strong> ${ariaLabel}</p></div>`);
  });

  // Replace Mermaid diagram containers
  $slide.find('.comp-mermaid, [data-mermaid]').each(function () {
    const ariaLabel = $(this).attr('aria-label') || 'Kein Beschreibungstext vorhanden';
    $(this).replaceWith(`<div class="chart-description"><p><strong>Diagramm:</strong> ${ariaLabel}</p></div>`);
  });

  // Replace standalone SVGs with aria-label (likely diagrams)
  $slide.find('svg[aria-label]').each(function () {
    const ariaLabel = $(this).attr('aria-label');
    $(this).replaceWith(`<div class="chart-description"><p><strong>Diagramm:</strong> ${ariaLabel}</p></div>`);
  });
}

// ---------------------------------------------------------------------------
//  Helper: clean reveal.js classes and attributes
// ---------------------------------------------------------------------------
function stripRevealClasses($el) {
  // Remove fragment-related classes
  $el.find('.fragment').removeClass('fragment visible current-fragment');
  $el.find('[class*="anim-"]').each(function () {
    const classes = ($(this).attr('class') || '').split(/\s+/);
    const cleaned = classes.filter(c => !c.startsWith('anim-') && c !== 'fragment' && c !== 'visible' && c !== 'current-fragment');
    if (cleaned.length) {
      $(this).attr('class', cleaned.join(' '));
    } else {
      $(this).removeAttr('class');
    }
  });

  // Remove data-delay, data-fragment-index attributes
  $el.find('[data-delay]').removeAttr('data-delay');
  $el.find('[data-fragment-index]').removeAttr('data-fragment-index');
}

// ---------------------------------------------------------------------------
//  Helper: extract content from a slide
// ---------------------------------------------------------------------------
function extractSlideContent($slide, slideIndex) {
  const componentType = $slide.attr('data-component') || '';
  const parts = [];

  // Slide number
  parts.push(`<p class="slide-number">Folie ${slideIndex + 1}</p>`);

  // Remove speaker notes before extracting content
  const $clone = cheerio.load($slide.html() || '');
  $clone('aside.notes').remove();

  // Replace charts/diagrams
  replaceChartsAndDiagrams($clone.root());

  // Strip reveal.js classes
  stripRevealClasses($clone.root());

  switch (componentType) {
    case 'title': {
      const h1 = $clone('h1').first().text().trim();
      if (h1) parts.push(`<h1>${h1}</h1>`);
      // Extract subtitle
      const subtitle = $clone('.comp-title__subtitle').first().text().trim()
        || $clone('h1').first().next('p').text().trim();
      if (subtitle) parts.push(`<p>${subtitle}</p>`);
      // Extract any remaining paragraphs (author, date, etc.)
      $clone('p').each(function () {
        const text = $clone(this).text().trim();
        if (text && text !== subtitle) {
          parts.push(`<p>${text}</p>`);
        }
      });
      break;
    }

    case 'section-break': {
      const h2 = $clone('h2').first().text().trim() || $clone('h1').first().text().trim();
      if (h2) parts.push(`<h2>${h2}</h2>`);
      // Optional description
      const desc = $clone('p').first().text().trim();
      if (desc) parts.push(`<p>${desc}</p>`);
      break;
    }

    default: {
      // Extract heading (use first h1/h2/h3 found, output as h3)
      const heading = $clone('h1, h2, h3').first();
      if (heading.length) {
        const headingText = heading.text().trim();
        if (headingText) parts.push(`<h3>${headingText}</h3>`);
        heading.remove();
      }

      // Extract remaining content
      const contentHtml = $clone.root().html() || '';
      const $content = cheerio.load(contentHtml);

      // Include images with alt text
      $content('img').each(function () {
        const alt = $content(this).attr('alt') || '';
        if (alt) {
          parts.push(`<p><em>Bild: ${alt}</em></p>`);
        }
      });

      // Include tables as-is (already semantic)
      $content('table').each(function () {
        parts.push($content(this).toString());
      });

      // Include lists as-is
      $content('ul, ol').each(function () {
        parts.push($content(this).toString());
      });

      // Include chart-description divs (from replacement)
      $content('.chart-description').each(function () {
        parts.push($content(this).toString());
      });

      // Include paragraphs not already captured
      $content('p').each(function () {
        // Skip paragraphs inside already-captured elements
        if ($content(this).parents('table, ul, ol, .chart-description').length) return;
        const text = $content(this).text().trim();
        if (text) parts.push(`<p>${text}</p>`);
      });

      // Include definition lists
      $content('dl').each(function () {
        parts.push($content(this).toString());
      });

      break;
    }
  }

  return parts.join('\n    ');
}

// ---------------------------------------------------------------------------
//  Build accessible HTML
// ---------------------------------------------------------------------------
const slideContents = [];

slides.each((i, el) => {
  const content = extractSlideContent($(el), i);
  slideContents.push(`  <article class="slide">\n    ${content}\n  </article>`);
});

const accessibleHtml = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Accessible: ${presentationTitle}</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 800px; margin: 2rem auto; padding: 0 1rem; line-height: 1.6; color: #1a202c; }
    h1 { font-size: 2rem; border-bottom: 2px solid #3182ce; padding-bottom: 0.5rem; }
    h2 { font-size: 1.5rem; margin-top: 2rem; color: #1e3a5f; }
    h3 { font-size: 1.25rem; margin-top: 1.5rem; }
    .slide-separator { border: none; border-top: 1px solid #e2e8f0; margin: 2rem 0; }
    .chart-description { background: #f7fafc; padding: 1rem; border-left: 3px solid #3182ce; margin: 1rem 0; }
    .slide-number { color: #718096; font-size: 0.875rem; }
    table { border-collapse: collapse; width: 100%; margin: 1rem 0; }
    th, td { border: 1px solid #e2e8f0; padding: 0.5rem; text-align: left; }
    th { background: #f7fafc; }
    img { max-width: 100%; height: auto; }
    .slide { margin-bottom: 1rem; }
  </style>
</head>
<body>
  <main>
${slideContents.join('\n  <hr class="slide-separator">\n')}
  </main>
</body>
</html>`;

// ---------------------------------------------------------------------------
//  Write output
// ---------------------------------------------------------------------------
fs.writeFileSync(outPath, accessibleHtml, 'utf-8');
console.log(`Accessible HTML exported to: ${outPath}`);
