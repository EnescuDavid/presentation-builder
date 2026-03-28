#!/usr/bin/env node
// ==========================================================================
//  Presentation Builder — "Read the Titles" Summary Export
// ==========================================================================
//  Usage: node tools/extract-titles.js <presentation.html> [output.md]
//  Extracts action titles from all slides into a Markdown coherence check
//  document. Groups slides by section-break boundaries with German labels.
//
//  If output.md is provided, writes to file. Otherwise prints to stdout.
// ==========================================================================

const fs = require('fs');
const cheerio = require('cheerio');

// ---------------------------------------------------------------------------
//  Argument Parsing
// ---------------------------------------------------------------------------

const [,, inputPath, outputPath] = process.argv;

if (!inputPath) {
  console.error('Usage: node tools/extract-titles.js <presentation.html> [output.md]');
  console.error('');
  console.error('Extracts action titles from all slides into a Markdown coherence');
  console.error('check document grouped by section breaks.');
  process.exit(1);
}

if (!fs.existsSync(inputPath)) {
  console.error(`Error: File not found: ${inputPath}`);
  process.exit(1);
}

// ---------------------------------------------------------------------------
//  HTML Parsing
// ---------------------------------------------------------------------------

const html = fs.readFileSync(inputPath, 'utf-8');
const $ = cheerio.load(html);

// Select top-level slides (direct children of .slides)
const slides = $('.reveal .slides > section');

if (slides.length === 0) {
  console.error('Error: No slides found in presentation HTML.');
  console.error('Expected structure: .reveal .slides > section[data-component]');
  process.exit(1);
}

// ---------------------------------------------------------------------------
//  Title Extraction
// ---------------------------------------------------------------------------

const lines = [];
let sectionCount = 0;
let slideNumber = 0;
let presentationTitle = null;

slides.each(function () {
  const el = $(this);
  const component = el.attr('data-component') || '';
  const titleEl = el.find('h1, h2').first();
  const title = titleEl.length ? titleEl.text().trim() : null;

  if (component === 'title') {
    // Title slide becomes the document heading
    presentationTitle = title || 'Ohne Titel';
    return; // Skip numbering
  }

  if (component === 'section-break') {
    // Start a new section group
    sectionCount++;
    if (lines.length > 0) {
      lines.push(''); // Blank line before new section
    }
    lines.push(`## Abschnitt ${sectionCount}: ${title || 'Ohne Titel'}`);
    lines.push('');
    return; // Skip numbering
  }

  // Regular slide -- numbered entry
  slideNumber++;
  const slideTitle = title || '_(kein Titel)_';
  lines.push(`${slideNumber}. **Folie ${slideNumber}:** ${slideTitle}`);
});

// ---------------------------------------------------------------------------
//  Markdown Assembly
// ---------------------------------------------------------------------------

const output = [
  `# Folientitel: ${presentationTitle || 'Ohne Titel'}`,
  '',
  ...lines,
  '' // Trailing newline
].join('\n');

// ---------------------------------------------------------------------------
//  Output
// ---------------------------------------------------------------------------

if (outputPath) {
  fs.writeFileSync(outputPath, output, 'utf-8');
  console.log(`Titles exported to: ${outputPath}`);
} else {
  process.stdout.write(output);
}
