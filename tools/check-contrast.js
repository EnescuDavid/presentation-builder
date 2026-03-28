#!/usr/bin/env node
// ==========================================================================
//  Presentation Builder — WCAG Contrast Validator
// ==========================================================================
//  Usage: node tools/check-contrast.js [--theme <name>]
//  Checks all bundled themes by default. Exit 0 = all pass, 1 = any fail.
//
//  Parses color tokens from tokens/base.css and theme overrides, then tests
//  foreground/background pairs against WCAG 2.1 AA contrast thresholds.
// ==========================================================================

const fs = require('fs');
const path = require('path');

// ---------------------------------------------------------------------------
//  WCAG 2.1 Contrast Math
// ---------------------------------------------------------------------------

/**
 * Parse a hex color string to normalized [r, g, b] values (0-1).
 * Supports "#1E3A5F" and "1E3A5F" formats.
 */
function hexToRgb(hex) {
  const clean = hex.replace(/^#/, '');
  if (clean.length !== 6) return null;
  const r = parseInt(clean.substring(0, 2), 16) / 255;
  const g = parseInt(clean.substring(2, 4), 16) / 255;
  const b = parseInt(clean.substring(4, 6), 16) / 255;
  if (isNaN(r) || isNaN(g) || isNaN(b)) return null;
  return [r, g, b];
}

/**
 * Calculate WCAG 2.1 relative luminance from a hex color.
 * Uses sRGB linearization + ITU-R BT.709 weighted sum.
 */
function luminance(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;
  const [r, g, b] = rgb.map(c =>
    c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * Calculate WCAG contrast ratio between two hex colors.
 * Returns ratio >= 1.0 (lighter + 0.05) / (darker + 0.05).
 */
function contrastRatio(hex1, hex2) {
  const l1 = luminance(hex1);
  const l2 = luminance(hex2);
  if (l1 === null || l2 === null) return null;
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

// ---------------------------------------------------------------------------
//  CSS Token Parsing
// ---------------------------------------------------------------------------

/**
 * Extract all --color-* tokens from CSS text.
 * Returns object: { 'color-primary': '#1E3A5F', ... }
 */
function parseTokens(cssText) {
  const tokens = {};
  const regex = /--(color-[\w-]+)\s*:\s*([^;]+)/g;
  let match;
  while ((match = regex.exec(cssText)) !== null) {
    tokens[match[1]] = match[2].trim();
  }
  return tokens;
}

/**
 * Resolve var(--color-*) references within token values.
 * E.g., --color-dark-bg: var(--color-primary) resolves to the primary hex value.
 */
function resolveVars(tokens) {
  const resolved = { ...tokens };
  const varRegex = /var\(--([^)]+)\)/;
  // Multiple passes for chained references
  for (let pass = 0; pass < 3; pass++) {
    for (const [key, value] of Object.entries(resolved)) {
      const match = varRegex.exec(value);
      if (match && resolved[match[1]]) {
        resolved[key] = resolved[match[1]];
      }
    }
  }
  return resolved;
}

// ---------------------------------------------------------------------------
//  Color Pair Definitions
// ---------------------------------------------------------------------------

const COLOR_PAIRS = [
  // Normal text (4.5:1)
  { fg: 'color-text',       bg: 'color-background', type: 'normal', label: 'Body text on background' },
  { fg: 'color-text-muted', bg: 'color-background', type: 'normal', label: 'Muted text on background' },
  { fg: 'color-text',       bg: 'color-surface',    type: 'normal', label: 'Body text on surface' },
  { fg: 'color-text-muted', bg: 'color-surface',    type: 'normal', label: 'Muted text on surface' },
  { fg: 'color-text',       bg: 'color-highlight',  type: 'normal', label: 'Text on highlight' },
  { fg: 'color-text',       bg: 'color-callout',    type: 'normal', label: 'Text on callout' },
  { fg: 'color-on-primary', bg: 'color-primary',    type: 'normal', label: 'White text on primary' },
  { fg: 'color-success',    bg: 'color-background', type: 'normal', label: 'Success on background' },
  { fg: 'color-danger',     bg: 'color-background', type: 'normal', label: 'Danger on background' },
  // Large text (3:1)
  { fg: 'color-primary',    bg: 'color-background', type: 'large',  label: 'Primary heading on background' },
  { fg: 'color-accent',     bg: 'color-background', type: 'large',  label: 'Accent heading on background' },
];

// ---------------------------------------------------------------------------
//  ANSI Colors
// ---------------------------------------------------------------------------

const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const YELLOW = '\x1b[33m';
const DIM = '\x1b[2m';
const RESET = '\x1b[0m';

// ---------------------------------------------------------------------------
//  Main
// ---------------------------------------------------------------------------

const rootDir = path.resolve(__dirname, '..');
const baseTokenPath = path.join(rootDir, 'tokens/base.css');
const themesDir = path.join(rootDir, 'themes');

// Parse CLI args
const args = process.argv.slice(2);
let filterTheme = null;
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--theme' && args[i + 1]) {
    filterTheme = args[i + 1];
    i++;
  }
}

// Load base tokens
if (!fs.existsSync(baseTokenPath)) {
  console.error('Error: tokens/base.css not found at', baseTokenPath);
  process.exit(1);
}
const baseCSS = fs.readFileSync(baseTokenPath, 'utf-8');
const baseTokens = parseTokens(baseCSS);

// Discover themes
let themeNames;
if (filterTheme) {
  const themePath = path.join(themesDir, filterTheme, 'theme.css');
  if (!fs.existsSync(themePath)) {
    console.error(`Error: Theme "${filterTheme}" not found at ${themePath}`);
    process.exit(1);
  }
  themeNames = [filterTheme];
} else {
  themeNames = fs.readdirSync(themesDir).filter(name => {
    const themePath = path.join(themesDir, name, 'theme.css');
    return fs.statSync(path.join(themesDir, name)).isDirectory() && fs.existsSync(themePath);
  });
}

if (themeNames.length === 0) {
  console.error('Error: No themes found in', themesDir);
  process.exit(1);
}

// Check each theme
let totalPassed = 0;
let totalTested = 0;
let totalSkipped = 0;
let anyFailed = false;

console.log('WCAG 2.1 AA Contrast Validator');
console.log('='.repeat(80));

for (const themeName of themeNames) {
  const themeCSS = fs.readFileSync(path.join(themesDir, themeName, 'theme.css'), 'utf-8');
  const themeTokens = parseTokens(themeCSS);

  // Merge: theme overrides base
  const merged = resolveVars({ ...baseTokens, ...themeTokens });

  console.log(`\nTheme: ${themeName}`);
  console.log('-'.repeat(80));
  console.log(
    'Pair'.padEnd(35) +
    'Ratio'.padEnd(10) +
    'Required'.padEnd(12) +
    'Result'
  );
  console.log('-'.repeat(80));

  for (const pair of COLOR_PAIRS) {
    const fgVal = merged[pair.fg];
    const bgVal = merged[pair.bg];

    // Skip rgba() or unresolved values
    if (!fgVal || !bgVal || fgVal.startsWith('rgba') || bgVal.startsWith('rgba') || fgVal.includes('var(') || bgVal.includes('var(')) {
      const reason = !fgVal || !bgVal ? 'token not found' : 'context-dependent alpha';
      console.log(
        pair.label.padEnd(35) +
        '-'.padEnd(10) +
        '-'.padEnd(12) +
        `${YELLOW}SKIP${RESET} ${DIM}(${reason})${RESET}`
      );
      totalSkipped++;
      continue;
    }

    const ratio = contrastRatio(fgVal, bgVal);
    if (ratio === null) {
      console.log(
        pair.label.padEnd(35) +
        '-'.padEnd(10) +
        '-'.padEnd(12) +
        `${YELLOW}SKIP${RESET} ${DIM}(unparseable color)${RESET}`
      );
      totalSkipped++;
      continue;
    }

    const threshold = pair.type === 'large' ? 3.0 : 4.5;
    const passed = ratio >= threshold;
    const ratioStr = ratio.toFixed(2) + ':1';
    const reqStr = threshold.toFixed(1) + ':1';
    const resultStr = passed
      ? `${GREEN}PASS${RESET}`
      : `${RED}FAIL${RESET}`;

    console.log(
      pair.label.padEnd(35) +
      ratioStr.padEnd(10) +
      reqStr.padEnd(12) +
      resultStr
    );

    totalTested++;
    if (passed) {
      totalPassed++;
    } else {
      anyFailed = true;
    }
  }
}

console.log('\n' + '='.repeat(80));
console.log(
  `${totalPassed}/${totalTested} pairs passed across ${themeNames.length} theme(s)` +
  (totalSkipped > 0 ? ` (${totalSkipped} skipped)` : '')
);

process.exit(anyFailed ? 1 : 0);
