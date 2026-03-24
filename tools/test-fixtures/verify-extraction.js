#!/usr/bin/env node
// ==========================================================================
//  Verification script for extract-theme.js
//  Runs extraction against sample-theme.pptx and validates output against
//  known expected values for all 12 color slots, 2 fonts, and image extraction.
// ==========================================================================

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const EXPECTED = {
  colors: {
    dk1:      '#1A1A1A',   // From sysClr lastClr (tests sysClr code path)
    lt1:      '#FAFAFA',
    dk2:      '#2B4C7E',
    lt2:      '#E8ECF1',
    accent1:  '#3498DB',
    accent2:  '#E74C3C',
    accent3:  '#2ECC71',
    accent4:  '#9B59B6',
    accent5:  '#1ABC9C',
    accent6:  '#F39C12',
    hlink:    '#2980B9',
    folHlink: '#8E44AD',
  },
  fonts: {
    major: 'Calibri Light',
    minor: 'Calibri',
  },
};

// Paths
const pptxPath = path.join(__dirname, 'sample-theme.pptx');
const outputDir = path.join(__dirname, 'test-output');
const extractScript = path.join(__dirname, '..', 'extract-theme.js');

// Ensure sample PPTX exists
if (!fs.existsSync(pptxPath)) {
  console.error('FAIL: sample-theme.pptx not found. Run create-sample-pptx.js first.');
  process.exit(1);
}

// Run extraction
try {
  execSync(`node "${extractScript}" "${pptxPath}" "${outputDir}"`, { stdio: 'pipe' });
} catch (e) {
  console.error('FAIL: Extraction script errored:', e.stderr?.toString());
  process.exit(1);
}

// Read output
const jsonPath = path.join(outputDir, 'extracted-theme.json');
if (!fs.existsSync(jsonPath)) {
  console.error('FAIL: extracted-theme.json not created');
  process.exit(1);
}

const result = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
let failures = 0;

// Verify all 12 color slots
for (const [slot, expected] of Object.entries(EXPECTED.colors)) {
  const actual = result.colors[slot];
  if (!actual || actual.toUpperCase() !== expected.toUpperCase()) {
    console.error(`FAIL: colors.${slot} expected ${expected}, got ${actual}`);
    failures++;
  }
}

// Verify major font
if (result.fonts.major?.latin !== EXPECTED.fonts.major) {
  console.error(`FAIL: fonts.major.latin expected "${EXPECTED.fonts.major}", got "${result.fonts.major?.latin}"`);
  failures++;
}

// Verify minor font
if (result.fonts.minor?.latin !== EXPECTED.fonts.minor) {
  console.error(`FAIL: fonts.minor.latin expected "${EXPECTED.fonts.minor}", got "${result.fonts.minor?.latin}"`);
  failures++;
}

// Verify Google Fonts fallbacks are present
if (!result.fonts.major?.googleFallback) {
  console.error('FAIL: fonts.major.googleFallback missing');
  failures++;
}
if (!result.fonts.minor?.googleFallback) {
  console.error('FAIL: fonts.minor.googleFallback missing');
  failures++;
}

// Verify images extracted
const logoExists = fs.existsSync(path.join(outputDir, 'test-logo.png'));
if (!logoExists) {
  console.error('FAIL: test-logo.png not extracted to output dir');
  failures++;
}

// Verify image listed in output JSON
if (!result.images || result.images.length === 0) {
  console.error('FAIL: images array empty or missing');
  failures++;
}

// Verify colorMapping present and has expected keys
if (!result.colorMapping || typeof result.colorMapping !== 'object') {
  console.error('FAIL: colorMapping not present in output');
  failures++;
} else {
  const requiredTokens = ['--color-text', '--color-background', '--color-primary', '--color-accent'];
  for (const token of requiredTokens) {
    if (!result.colorMapping[token]) {
      console.error(`FAIL: colorMapping missing "${token}"`);
      failures++;
    }
  }
}

// Verify source field
if (!result.source) {
  console.error('FAIL: source field missing');
  failures++;
}

// Verify extracted timestamp
if (!result.extracted) {
  console.error('FAIL: extracted timestamp missing');
  failures++;
}

// Verify slideMasters field
if (!result.slideMasters || typeof result.slideMasters.count !== 'number') {
  console.error('FAIL: slideMasters field missing or malformed');
  failures++;
}

// Cleanup
fs.rmSync(outputDir, { recursive: true, force: true });

if (failures === 0) {
  console.log('PASS: All extraction checks passed');
  process.exit(0);
} else {
  console.error(`FAIL: ${failures} check(s) failed`);
  process.exit(1);
}
