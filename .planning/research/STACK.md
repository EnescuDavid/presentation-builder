# Technology Stack: v2.0 Additions

**Project:** Presentation Builder v2.0
**Researched:** 2026-03-27
**Scope:** New libraries only. Existing stack (reveal.js 5.2.1, CSS custom properties, Inter font, adm-zip, fast-xml-parser, DeckTape) is validated and unchanged.

## Recommended Stack Additions

### Data Visualization

| Technology | Version | CDN URL | Purpose | Why |
|------------|---------|---------|---------|-----|
| Chart.js | 4.5.1 | `https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.5.1/chart.umd.min.js` | Bar, line, pie, doughnut, radar charts (VIZ-01) | Industry standard, 60K+ GitHub stars, canvas-based (renders reliably inside reveal.js iframes), extensive plugin ecosystem, AI can generate config JSON directly. Use `chart.umd.min.js` (not ESM) for CDN `<script>` tag compatibility. |
| chartjs-plugin-annotation | 3.1.0 | `https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-annotation/3.1.0/chartjs-plugin-annotation.min.js` | Target lines, reference bands, callout labels on charts | Required for consulting charts (benchmark lines, target indicators). Official Chart.js plugin, compatible with Chart.js >= 4.0.0. |
| Mermaid | 11.x (pin to 11.12.x) | `https://cdnjs.cloudflare.com/ajax/libs/mermaid/11.12.0/mermaid.min.js` | Flowcharts, org charts, sequence diagrams, Gantt (VIZ-02) | Text-based diagrams are perfect for AI generation -- far more reliable than having AI produce SVG. Renders client-side from text definitions. Pin to major version 11 for stability. |

### PPTX Export

| Technology | Version | Install | Purpose | Why |
|------------|---------|---------|---------|-----|
| PptxGenJS | 4.0.1 | `npm install pptxgenjs` (optionalDependency) | HTML-to-PPTX export script (PLAT-02) | Only viable JS library for programmatic PPTX generation. 2K+ stars, actively maintained, supports slides/text/images/charts/tables. Node.js-only tool (not loaded in browser presentations). |

### Accessibility Validation

| Technology | Version | Install | Purpose | Why |
|------------|---------|---------|---------|-----|
| wcag-contrast | latest | `npm install -D wcag-contrast` | WCAG 2.1 AA contrast ratio calculations (A11Y-01) | Minimal, focused library -- just the math (luminance, contrast ratio, score). Use over BBC's color-contrast-checker because it's smaller and has no opinions about UI. Our validation script wraps it with theme-specific logic. |

### reveal.js Plugins (already bundled with reveal.js 5.2.1 CDN)

| Plugin | CDN URL | Purpose | Why |
|--------|---------|---------|-----|
| RevealHighlight | `https://cdnjs.cloudflare.com/ajax/libs/reveal.js/5.2.1/plugin/highlight/highlight.min.js` | Code syntax highlighting (PLAT-04) | Ships with reveal.js -- no additional dependency. Uses highlight.js internally. Add Monokai CSS theme: `https://cdnjs.cloudflare.com/ajax/libs/reveal.js/5.2.1/plugin/highlight/monokai.min.css` |
| RevealNotes | `https://cdnjs.cloudflare.com/ajax/libs/reveal.js/5.2.1/plugin/notes/notes.min.js` | Speaker notes (already referenced but not loaded -- fix in v2) | Ships with reveal.js. Currently documented but plugin not actually loaded in templates. |

## What NOT to Add

| Considered | Decision | Rationale |
|-----------|----------|-----------|
| D3.js | SKIP | Massively overkill for presentation charts. Chart.js covers all needed chart types with simpler API. D3 configs are too complex for AI generation. |
| chartjs-plugin-waterfall (everestate) | SKIP | Last updated for Chart.js 2.x, incompatible with Chart.js 4. Build waterfall charts using Chart.js floating bar technique (stacked bars with transparent base segments). This is a well-documented pattern and avoids a dead dependency. |
| reveal.js-mermaid-plugin | SKIP | Unmaintained (last update years ago). Instead, initialize Mermaid directly with `mermaid.initialize()` in a `<script>` block after reveal.js loads. Simpler, more reliable, no plugin dependency. |
| Plotly.js | SKIP | 3.5MB bundle, designed for interactive dashboards not static slides. Chart.js at ~200KB is 17x smaller. |
| axe-core | SKIP for now | Full accessibility testing engine (800KB+). Too heavy for our use case. Our A11Y validation is focused on contrast ratios (wcag-contrast) and structural checks (custom script parsing HTML). Revisit if A11Y-07 (EAA compliance) needs automated DOM auditing. |
| highlight.js standalone | SKIP | reveal.js bundles highlight.js in its RevealHighlight plugin. Loading standalone would conflict. |
| pptx-automizer | SKIP | Template-based approach (modify existing PPTX). PptxGenJS is better for our use case: generating PPTX from scratch based on HTML slide content. |

## Integration Notes

### Chart.js + reveal.js

Chart.js canvas elements must be initialized after the slide becomes visible (reveal.js uses `display:none` for non-active slides, which gives canvas zero dimensions). Two approaches:

1. **Recommended:** Use reveal.js `slidechanged` event to call `chart.resize()` when a chart slide becomes active.
2. **Alternative:** Set explicit `width`/`height` attributes on `<canvas>` elements (avoids the resize issue but less responsive).

Chart.js `animation` config should use `onComplete` callback to work with reveal.js fragments for progressive data reveal.

### Mermaid + reveal.js

Mermaid renders `<div class="mermaid">` blocks into SVGs on page load. For reveal.js:

1. Call `mermaid.initialize({ startOnLoad: false, theme: 'base', themeVariables: {...} })` to set theme colors from CSS tokens.
2. Use `mermaid.run({ nodes: [element] })` on `slidechanged` event to render diagrams lazily (avoids rendering hidden slides incorrectly).
3. Map `themeVariables` to presentation design tokens: `primaryColor` -> `--color-primary`, `primaryTextColor` -> `--color-on-primary`, etc.

### PptxGenJS Export Architecture

PptxGenJS runs as a Node.js script (not in-browser). The export pipeline:

1. Parse the HTML presentation file (DOM parsing with jsdom or regex for simple extraction)
2. Map each `<section>` slide to a PptxGenJS slide
3. Map CSS custom property values to PPTX theme colors
4. Map component layouts to PPTX text/image/shape placements
5. Output: `presentation.pptx`

This is a `tools/export-pptx.js` script, following the pattern of existing `tools/extract-theme.js` and `tools/export-pdf.sh`. Add as optionalDependency (not required for core framework).

### Contrast Validation Script

A `tools/check-contrast.js` script that:

1. Reads a theme CSS file
2. Extracts all `--color-*` token values
3. Tests relevant foreground/background pairs using wcag-contrast
4. Outputs pass/fail report with ratios

Add wcag-contrast as devDependency (validation tool, not runtime).

## CDN Pattern

**Consistent with v1.0:** All browser-loaded libraries use cdnjs.cloudflare.com. Pin exact versions (not `@latest`) for reproducibility.

```html
<!-- Data Visualization (add to presentations that use charts) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.5.1/chart.umd.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-annotation/3.1.0/chartjs-plugin-annotation.min.js"></script>

<!-- Diagrams (add to presentations that use Mermaid) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/mermaid/11.12.0/mermaid.min.js"></script>

<!-- Code highlighting (add to presentations with code blocks) -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/5.2.1/plugin/highlight/monokai.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/5.2.1/plugin/highlight/highlight.min.js"></script>
```

**Conditional loading:** These scripts should only be included in presentations that use the corresponding features. The AI builder adds them based on which components are used in the deck plan. This keeps simple text-only presentations lightweight.

## package.json Changes

```json
{
  "optionalDependencies": {
    "adm-zip": "0.5.16",
    "decktape": "3.15.0",
    "fast-xml-parser": "5.5.9",
    "pptxgenjs": "4.0.1"
  },
  "devDependencies": {
    "wcag-contrast": "^3.0.0"
  }
}
```

## Harvey Balls and Sparklines: No Library Needed

VIZ-05 (Harvey balls) and VIZ-06 (sparklines) are implemented as pure CSS/SVG within component templates. No external dependency.

- **Harvey balls:** CSS circles with `conic-gradient` fills (0%, 25%, 50%, 75%, 100%)
- **Sparklines:** Inline SVG `<polyline>` elements with token-colored strokes

This is the right approach -- these are visual styling, not data processing.

## Waterfall Charts: Custom Implementation

VIZ-04 (waterfall/bridge charts) should use Chart.js floating bars, not a plugin:

```javascript
// Floating bar technique: [bottom, top] data format
data: {
  datasets: [{
    data: [
      [0, 100],      // Starting value: 0 to 100
      [100, 130],     // Positive: 100 to 130 (+30)
      [130, 110],     // Negative: 130 to 110 (-20)
      [0, 110]        // Ending value: 0 to 110
    ],
    backgroundColor: ['#808080', '#28a745', '#dc3545', '#808080']
  }]
}
```

The component template will include a helper function that converts simple waterfall data (start, deltas, end) into floating bar format. This avoids any plugin dependency and is well-supported in Chart.js 4.x.

## Confidence Assessment

| Item | Confidence | Basis |
|------|------------|-------|
| Chart.js 4.5.1 | HIGH | Official docs, cdnjs, npm registry confirm current version |
| chartjs-plugin-annotation 3.1.0 | HIGH | Official Chart.js ecosystem, confirmed Chart.js 4 compatibility |
| Mermaid 11.12.x | HIGH | GitHub releases, cdnjs confirm latest |
| PptxGenJS 4.0.1 | HIGH | npm registry confirms current version |
| wcag-contrast | MEDIUM | Functional but less prominent than alternatives; may need to evaluate actual API at implementation time |
| Waterfall via floating bars | HIGH | Well-documented Chart.js pattern, multiple CodePen examples confirm approach |
| Mermaid direct init (skip plugin) | MEDIUM | Community approach; the reveal.js-mermaid-plugin is unmaintained but direct init is standard Mermaid usage |
| RevealHighlight CDN | HIGH | Ships with reveal.js 5.2.1 on cdnjs, confirmed |

## Sources

- [Chart.js Installation Docs](https://www.chartjs.org/docs/latest/getting-started/installation.html)
- [Chart.js v4.5.1 API Reference](https://www.chartjs.org/docs/latest/api/)
- [Chart.js Releases (GitHub)](https://github.com/chartjs/Chart.js/releases)
- [chartjs-plugin-annotation Docs](https://www.chartjs.org/chartjs-plugin-annotation/latest/)
- [chartjs-plugin-annotation Releases](https://github.com/chartjs/chartjs-plugin-annotation/releases)
- [Mermaid.js Releases (GitHub)](https://github.com/mermaid-js/mermaid/releases)
- [Mermaid CDN on jsDelivr](https://www.jsdelivr.com/package/npm/mermaid)
- [PptxGenJS npm](https://www.npmjs.com/package/pptxgenjs)
- [PptxGenJS Docs](https://gitbrent.github.io/PptxGenJS/)
- [wcag-contrast npm](https://www.npmjs.com/package/wcag-contrast)
- [BBC color-contrast-checker (GitHub)](https://github.com/bbc/color-contrast-checker)
- [reveal.js Code Highlighting Docs](https://revealjs.com/code/)
- [reveal.js Plugins Docs](https://revealjs.com/plugins/)
- [reveal.js on cdnjs](https://cdnjs.com/libraries/reveal.js/)
- [Chart.js Waterfall via Floating Bars (CodePen)](https://codepen.io/elizzk/pen/BaBwGLr)
- [reveal.js-mermaid-plugin (GitHub)](https://github.com/ludwick/reveal.js-mermaid-plugin)
