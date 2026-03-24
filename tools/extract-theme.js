#!/usr/bin/env node
// ==========================================================================
//  Presentation Builder — PPTX Theme Extraction Tool
//  ==========================================================================
//  Usage: node tools/extract-theme.js <path-to-pptx> [output-dir]
//  Default output-dir: ./extracted
//
//  Extracts colors, fonts, and images from a PowerPoint template and outputs
//  structured JSON with recommended design token mappings and Google Fonts
//  fallbacks. Claude reads this JSON to assemble a theme CSS file.
// ==========================================================================

const AdmZip = require('adm-zip');
const { XMLParser } = require('fast-xml-parser');
const path = require('path');
const fs = require('fs');

// ---------------------------------------------------------------------------
//  Google Fonts fallback lookup table
//  Maps common corporate fonts to their closest Google Fonts equivalent.
//  Claude can refine these choices based on the specific presentation context.
// ---------------------------------------------------------------------------
const FONT_FALLBACKS = {
  // Sans-serif corporate fonts
  'Calibri':          'Carlito',
  'Calibri Light':    'Carlito',
  'Arial':            'Roboto',
  'Arial Narrow':     'Roboto Condensed',
  'Helvetica':        'Inter',
  'Helvetica Neue':   'Inter',
  'Frutiger':         'Hind',
  'Futura':           'Nunito Sans',
  'Gill Sans':        'Lato',
  'Gill Sans MT':     'Lato',
  'Gotham':           'Montserrat',
  'Avenir':           'Nunito',
  'Avenir Next':      'Nunito',
  'Proxima Nova':     'Montserrat',
  'Myriad Pro':       'Source Sans 3',
  'Segoe UI':         'Inter',
  'Verdana':          'Open Sans',
  'Tahoma':           'Open Sans',
  'Trebuchet MS':     'Ubuntu',
  'Century Gothic':   'Poppins',
  'Franklin Gothic':  'Libre Franklin',
  'Lucida Sans':      'Nunito Sans',
  // Serif corporate fonts
  'Georgia':          'Merriweather',
  'Garamond':         'EB Garamond',
  'Times New Roman':  'Libre Baskerville',
  'Palatino':         'Lora',
  'Palatino Linotype':'Lora',
  'Book Antiqua':     'Lora',
  'Cambria':          'Caladea',
  'Constantia':       'Crimson Text',
};

// ---------------------------------------------------------------------------
//  XML Parser configuration
// ---------------------------------------------------------------------------
const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
});

// ---------------------------------------------------------------------------
//  Color extraction helpers
// ---------------------------------------------------------------------------
const COLOR_SLOTS = [
  'dk1', 'lt1', 'dk2', 'lt2',
  'accent1', 'accent2', 'accent3', 'accent4', 'accent5', 'accent6',
  'hlink', 'folHlink',
];

/**
 * Extract hex color from a color slot node.
 * Handles both <a:srgbClr val="RRGGBB"/> and <a:sysClr val="windowText" lastClr="000000"/>.
 */
function extractColor(node) {
  if (!node) return null;

  // Check srgbClr first (most common)
  if (node['a:srgbClr']) {
    const val = node['a:srgbClr']['@_val'];
    if (val) return '#' + val.toUpperCase();
  }

  // Fall back to sysClr (used for dk1/lt1 defaults)
  if (node['a:sysClr']) {
    const lastClr = node['a:sysClr']['@_lastClr'];
    if (lastClr) return '#' + lastClr.toUpperCase();
  }

  return null;
}

// ---------------------------------------------------------------------------
//  Token mapping: PowerPoint colors -> framework design tokens
// ---------------------------------------------------------------------------
function buildColorMapping(colors) {
  const mapping = {};

  // Direct mappings
  if (colors.dk1)     mapping['--color-text']       = colors.dk1;
  if (colors.lt1)     mapping['--color-background']  = colors.lt1;
  if (colors.dk2)     mapping['--color-primary']     = colors.dk2;
  if (colors.lt2)     mapping['--color-surface']     = colors.lt2;
  if (colors.accent1) mapping['--color-accent']      = colors.accent1;
  if (colors.accent2) mapping['--color-danger']      = colors.accent2;
  if (colors.accent3) mapping['--color-success']     = colors.accent3;
  if (colors.accent5) mapping['--color-secondary']   = colors.accent5;

  // Chart colors
  if (colors.accent1) mapping['--color-chart-1']     = colors.accent1;
  if (colors.accent3) mapping['--color-chart-2']     = colors.accent3;
  if (colors.accent4) mapping['--color-chart-3']     = colors.accent4;
  if (colors.accent2) mapping['--color-chart-4']     = colors.accent2;
  if (colors.accent6) mapping['--color-chart-5']     = colors.accent6;

  // Derived tokens (with notes for Claude to refine)
  if (colors.dk2) {
    mapping['--color-text-muted'] = colors.dk2 + ' /* apply 60% opacity */';
  }
  if (colors.lt2) {
    mapping['--color-border'] = colors.lt2 + ' /* darken slightly */';
  }
  if (colors.accent1) {
    mapping['--color-highlight'] = colors.accent1 + ' /* lighten to 10% opacity on white */';
  }
  if (colors.accent2) {
    mapping['--color-callout'] = colors.accent2 + ' /* lighten to 10% opacity on white */';
  }

  return mapping;
}

// ---------------------------------------------------------------------------
//  Main extraction function
// ---------------------------------------------------------------------------
function extractTheme(pptxPath, outputDir) {
  // Open PPTX as ZIP
  const zip = new AdmZip(pptxPath);
  const entries = zip.getEntries();

  // --- Find theme XML ---
  let themeEntryName = 'ppt/theme/theme1.xml';
  let themeEntry = zip.getEntry(themeEntryName);

  if (!themeEntry) {
    // Scan for any theme file
    const themeEntries = entries.filter(e =>
      /^ppt\/theme\/theme\d*\.xml$/i.test(e.entryName)
    );
    if (themeEntries.length > 0) {
      themeEntry = themeEntries[0];
      themeEntryName = themeEntry.entryName;
      console.error(`Note: Using ${themeEntryName} (theme1.xml not found)`);
    } else {
      console.error('Error: No theme XML found in PPTX file.');
      console.error('Searched for: ppt/theme/theme*.xml');
      process.exit(1);
    }
  }

  // --- Parse theme XML ---
  const themeXml = zip.readAsText(themeEntryName);
  const theme = parser.parse(themeXml);

  const themeRoot = theme['a:theme'];
  if (!themeRoot || !themeRoot['a:themeElements']) {
    console.error('Error: Invalid theme XML structure. Missing a:theme or a:themeElements.');
    process.exit(1);
  }

  const themeElements = themeRoot['a:themeElements'];

  // --- Extract colors ---
  const clrScheme = themeElements['a:clrScheme'];
  const colors = {};

  for (const slot of COLOR_SLOTS) {
    const node = clrScheme ? clrScheme['a:' + slot] : null;
    const color = extractColor(node);
    if (color) {
      colors[slot] = color;
    } else {
      console.error(`Warning: Color slot "${slot}" could not be extracted (set to null)`);
      colors[slot] = null;
    }
  }

  // --- Extract fonts ---
  const fontScheme = themeElements['a:fontScheme'];
  const fonts = { major: { latin: null, googleFallback: null }, minor: { latin: null, googleFallback: null } };

  if (fontScheme) {
    const majorFont = fontScheme['a:majorFont'];
    const minorFont = fontScheme['a:minorFont'];

    if (majorFont && majorFont['a:latin']) {
      const typeface = majorFont['a:latin']['@_typeface'];
      fonts.major.latin = typeface || null;
      fonts.major.googleFallback = FONT_FALLBACKS[typeface] || null;
    }

    if (minorFont && minorFont['a:latin']) {
      const typeface = minorFont['a:latin']['@_typeface'];
      fonts.minor.latin = typeface || null;
      fonts.minor.googleFallback = FONT_FALLBACKS[typeface] || null;
    }
  }

  // --- Extract images from ppt/media/ ---
  fs.mkdirSync(outputDir, { recursive: true });
  const images = [];

  for (const entry of entries) {
    if (entry.entryName.startsWith('ppt/media/') && !entry.isDirectory) {
      const fileName = path.basename(entry.entryName);
      const destPath = path.join(outputDir, fileName);
      fs.writeFileSync(destPath, entry.getData());
      images.push({
        name: fileName,
        originalPath: entry.entryName,
        size: entry.getData().length,
      });
    }
  }

  // --- Count slide masters and extract layout names ---
  const slideMasterEntries = entries.filter(e =>
    /^ppt\/slideMasters\/slideMaster\d+\.xml$/.test(e.entryName)
  );
  const slideLayoutEntries = entries.filter(e =>
    /^ppt\/slideLayouts\/slideLayout\d+\.xml$/.test(e.entryName)
  );

  const layoutNames = [];
  for (const layoutEntry of slideLayoutEntries) {
    try {
      const layoutXml = zip.readAsText(layoutEntry.entryName);
      const layoutDoc = parser.parse(layoutXml);
      const cSld = layoutDoc['p:sldLayout'];
      if (cSld && cSld['p:cSld'] && cSld['p:cSld']['@_name']) {
        layoutNames.push(cSld['p:cSld']['@_name']);
      } else if (cSld && cSld['@_type']) {
        layoutNames.push(cSld['@_type']);
      } else {
        layoutNames.push(path.basename(layoutEntry.entryName, '.xml'));
      }
    } catch {
      layoutNames.push(path.basename(layoutEntry.entryName, '.xml'));
    }
  }

  const slideMasters = {
    count: slideMasterEntries.length,
    layouts: layoutNames,
  };

  // --- Build recommended color mapping ---
  const colorMapping = buildColorMapping(colors);

  // --- Assemble output ---
  const result = {
    source: path.basename(pptxPath),
    extracted: new Date().toISOString(),
    colors,
    fonts,
    images,
    slideMasters,
    colorMapping,
  };

  // Write JSON to output directory
  const jsonPath = path.join(outputDir, 'extracted-theme.json');
  fs.writeFileSync(jsonPath, JSON.stringify(result, null, 2));

  return result;
}

// ---------------------------------------------------------------------------
//  CLI entry point
// ---------------------------------------------------------------------------
const [,, pptxPath, outputDir = './extracted'] = process.argv;

if (!pptxPath) {
  console.error('Usage: node tools/extract-theme.js <path-to-pptx> [output-dir]');
  console.error('');
  console.error('Extracts colors, fonts, and images from a PowerPoint template.');
  console.error('Output: extracted-theme.json + image files in the output directory.');
  console.error('');
  console.error('Examples:');
  console.error('  node tools/extract-theme.js corporate-template.pptx');
  console.error('  node tools/extract-theme.js template.pptx ./themes/corporate');
  process.exit(1);
}

// Validate input file exists
if (!fs.existsSync(pptxPath)) {
  console.error(`Error: File not found: ${pptxPath}`);
  process.exit(1);
}

try {
  const result = extractTheme(pptxPath, outputDir);
  // Print JSON to stdout for Claude to read directly
  console.log(JSON.stringify(result, null, 2));
} catch (err) {
  if (err.message && err.message.includes('Invalid or unsupported zip format')) {
    console.error(`Error: "${pptxPath}" is not a valid PPTX/ZIP file.`);
  } else {
    console.error(`Error extracting theme: ${err.message}`);
  }
  process.exit(1);
}
