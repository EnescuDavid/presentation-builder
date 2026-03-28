#!/usr/bin/env node
// ==========================================================================
//  Presentation Builder — PPTX Export Tool
// ==========================================================================
//  Usage: node tools/export-pptx.js <presentation.html> [output.pptx]
//  Captures each slide as a 1920x1080 PNG image and assembles into an
//  editable PPTX with speaker notes.
//
//  Requires: npm install (decktape and pptxgenjs are optional dependencies)
// ==========================================================================

const fs = require('fs');
const path = require('path');
const os = require('os');
const { spawn, execSync } = require('child_process');

// ---------------------------------------------------------------------------
//  CLI argument parsing
// ---------------------------------------------------------------------------
const [,, inputPath, outputArg] = process.argv;

if (!inputPath) {
  console.error('Usage: node tools/export-pptx.js <presentation.html> [output.pptx]');
  console.error('');
  console.error('Captures each slide as a 1920x1080 PNG image and assembles into');
  console.error('an editable PPTX file with speaker notes.');
  console.error('');
  console.error('Requires: npm install (decktape and pptxgenjs are optional dependencies)');
  console.error('');
  console.error('Examples:');
  console.error('  node tools/export-pptx.js projects/example/presentation.html');
  console.error('  node tools/export-pptx.js presentation.html output.pptx');
  process.exit(1);
}

if (!fs.existsSync(inputPath)) {
  console.error(`Error: File not found: ${inputPath}`);
  process.exit(1);
}

const outputPath = outputArg || inputPath.replace(/\.html$/, '.pptx');

// ---------------------------------------------------------------------------
//  Dependency checks
// ---------------------------------------------------------------------------
let pptxgen;
try {
  pptxgen = require('pptxgenjs');
} catch (e) {
  console.error('Error: pptxgenjs not installed. Run: npm install');
  console.error('Note: pptxgenjs is listed in optionalDependencies');
  process.exit(1);
}

let cheerio;
try {
  cheerio = require('cheerio');
} catch (e) {
  console.error('Error: cheerio not installed. Run: npm install');
  process.exit(1);
}

try {
  execSync('npx decktape --version', { stdio: 'pipe' });
} catch (e) {
  console.error('Error: decktape not available. Run: npm install');
  console.error('Note: decktape is listed in optionalDependencies');
  process.exit(1);
}

// ---------------------------------------------------------------------------
//  Main async flow
// ---------------------------------------------------------------------------
(async function main() {
  let server = null;
  let tmpDir = null;

  // Cleanup handler
  function cleanup() {
    if (server) {
      try { server.kill(); } catch (e) { /* ignore */ }
      server = null;
    }
    if (tmpDir && fs.existsSync(tmpDir)) {
      try { fs.rmSync(tmpDir, { recursive: true }); } catch (e) { /* ignore */ }
    }
  }

  process.on('exit', cleanup);
  process.on('SIGINT', () => { cleanup(); process.exit(1); });
  process.on('SIGTERM', () => { cleanup(); process.exit(1); });

  try {
    // -----------------------------------------------------------------------
    //  Step 1: Parse HTML — count slides and extract speaker notes
    // -----------------------------------------------------------------------
    const html = fs.readFileSync(inputPath, 'utf-8');
    const $ = cheerio.load(html);
    const slideNotes = [];
    const htmlSlides = $('.reveal .slides > section');
    const htmlSlideCount = htmlSlides.length;

    if (htmlSlideCount === 0) {
      console.error('Error: No slides found in presentation. Expected .reveal .slides > section elements.');
      process.exit(1);
    }

    console.log(`Found ${htmlSlideCount} slides in HTML`);

    htmlSlides.each((i, el) => {
      const $slide = $(el);
      // Check for <aside class="notes"> content
      const notesEl = $slide.find('aside.notes');
      const notes = notesEl.length ? notesEl.text().trim() : '';
      // Also check data-notes attribute
      const dataNotes = $slide.attr('data-notes') || '';
      slideNotes.push(notes || dataNotes);
    });

    console.log(`Extracted notes from ${slideNotes.length} slides`);

    // -----------------------------------------------------------------------
    //  Step 2: Capture per-slide screenshots with DeckTape
    // -----------------------------------------------------------------------
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pptx-export-'));
    const PORT = process.env.PORT || 8174;

    // Start local HTTP server
    console.log(`Starting local server on port ${PORT}...`);
    server = spawn('npx', ['-y', 'serve', '-l', String(PORT), '-s', '.'], {
      stdio: 'pipe',
      detached: false,
    });

    // Wait for server startup
    await new Promise(resolve => setTimeout(resolve, 2500));

    // Run DeckTape with screenshots flag
    console.log('Capturing slides with DeckTape...');
    const deckTapeCmd = `npx decktape reveal --screenshots --screenshots-format png --screenshots-size 1920x1080 -p 3000 "http://localhost:${PORT}/${inputPath}" "${path.join(tmpDir, 'output.pdf')}"`;

    try {
      execSync(deckTapeCmd, { stdio: 'inherit', timeout: 120000 });
    } catch (e) {
      console.error('Error: DeckTape capture failed.');
      console.error(e.message);
      process.exit(1);
    }

    // Kill server after capture
    if (server) {
      server.kill();
      server = null;
    }

    // -----------------------------------------------------------------------
    //  Step 2b: Validate screenshots
    // -----------------------------------------------------------------------
    const allFiles = fs.readdirSync(tmpDir);
    const pngFiles = allFiles.filter(f => f.endsWith('.png'));
    console.log(`DeckTape produced ${pngFiles.length} screenshots:`);
    pngFiles.forEach(f => console.log(`  ${f}`));

    if (pngFiles.length !== htmlSlideCount) {
      console.warn(`WARNING: Screenshot count (${pngFiles.length}) does not match HTML slide count (${htmlSlideCount})`);
      console.warn('PPTX may have missing or extra slides. Check DeckTape output above.');
    }

    if (pngFiles.length === 0) {
      console.error('ERROR: DeckTape produced no screenshots. Cannot assemble PPTX.');
      cleanup();
      process.exit(1);
    }

    // -----------------------------------------------------------------------
    //  Step 3: Assemble PPTX with PptxGenJS
    // -----------------------------------------------------------------------
    console.log('Assembling PPTX...');
    const pres = new pptxgen();
    pres.layout = 'LAYOUT_16x9'; // 10" x 5.625"

    // Sort PNG files by number
    const sortedFiles = pngFiles.sort((a, b) => {
      const numA = parseInt(a.match(/(\d+)/)[1]);
      const numB = parseInt(b.match(/(\d+)/)[1]);
      return numA - numB;
    });

    for (let i = 0; i < sortedFiles.length; i++) {
      const imgPath = path.join(tmpDir, sortedFiles[i]);
      const base64 = fs.readFileSync(imgPath).toString('base64');

      const slide = pres.addSlide();
      slide.addImage({
        data: 'image/png;base64,' + base64,
        x: 0,
        y: 0,
        w: 10,
        h: 5.625,
      });

      // Add speaker notes if available
      if (slideNotes[i]) {
        slide.addNotes(slideNotes[i]);
      }
    }

    console.log(`Assembled ${sortedFiles.length} slides into PPTX`);

    // -----------------------------------------------------------------------
    //  Step 4: Write PPTX and cleanup
    // -----------------------------------------------------------------------
    await pres.writeFile({ fileName: path.resolve(outputPath) });
    cleanup();

    console.log(`PPTX exported to: ${outputPath} (${sortedFiles.length} slides)`);

  } catch (err) {
    console.error(`Error: ${err.message}`);
    cleanup();
    process.exit(1);
  }
})();
