# Architecture Patterns: v2.0 Integration

**Domain:** Data visualization, consulting intelligence, accessibility, and platform expansion for existing reveal.js presentation framework
**Researched:** 2026-03-27

## Recommended Architecture

### Design Principle: Additive Layers, Not Rewrites

v2.0 features integrate as **new layers on top of the existing v1.0 architecture**. The core pattern remains: templates provide HTML patterns with `<style>` blocks, tokens provide CSS custom properties, themes override token values, and the skeleton wires reveal.js initialization + master layer JS.

New features fall into four architectural categories:

1. **New component templates** (Chart, Mermaid, Data Table, Waterfall, Harvey Ball, Team/People, Code Block) -- follow the existing `templates/*.html` pattern exactly
2. **New CSS infrastructure** (audience presets, nested bullets, print styles, theme dedup, accessibility) -- extend `tokens/` and `themes/`
3. **New tools** (PPTX export, WCAG validator, "read the titles" extractor, accessible HTML export) -- go in `tools/`
4. **AI skill layer updates** (SCQA scaffolding, Pyramid validation, component catalog expansion) -- update `.claude/` files

```bash
presentation_builder/
  tokens/
    base.css              [MODIFY] Add new tokens (warning, info, overlay, on-primary, chart-6..8)
    animations.css        [MODIFY] Add chart-draw animation for Chart.js entry
    base-components.css   [NEW] Extracted shared structural CSS from themes (FIX-07)
    audience-presets.css  [NEW] Audience modifier classes (CONSULT-05)
    print.css             [NEW] @media print rules (FIX-08)
  templates/
    _skeleton.html        [MODIFY] Add Chart.js + Mermaid CDN links, audience config, init hooks
    chart.html            [NEW] VIZ-01: Chart.js component
    mermaid-diagram.html  [NEW] VIZ-02: Mermaid diagram component
    data-table.html       [NEW] VIZ-03: Styled data table component
    waterfall.html        [NEW] VIZ-04: Waterfall/bridge chart component
    harvey-ball.html      [NEW] VIZ-05: Harvey ball inline component
    team.html             [NEW] PLAT-03: Team/people grid component
    code-block.html       [NEW] PLAT-04: Code block component (optional)
    index.md              [MODIFY] Add new components to catalog index
  themes/
    _base-structural.css  [NEW] Shared structural CSS extracted from all 3 themes (FIX-07)
    default/theme.css     [MODIFY] Strip structural CSS, keep only token overrides + dark variant
    startup/theme.css     [MODIFY] Same dedup treatment
    enterprise/theme.css  [MODIFY] Same dedup treatment
  tools/
    export-pptx.js        [NEW] PLAT-02: PptxGenJS-based PPTX export
    validate-wcag.js      [NEW] A11Y-01: WCAG contrast checker
    export-accessible.js  [NEW] A11Y-04: Accessible linear HTML export
    read-titles.sh        [NEW] CONSULT-03: Extract h2 action titles
    gallery.html          [MODIFY] Add new component thumbnails
  .claude/
    skills/build-presentation/
      references/
        component-catalog.md     [MODIFY] Add 5-7 new component entries
        audience-presets.md      [MODIFY] Add CSS class references
        data-viz-guide.md        [NEW] Chart.js defaults, Mermaid syntax ref, table patterns
        consulting-methods.md    [NEW] SCQA, Pyramid Principle, action title reference
      workflows/
        build-new-deck.md        [MODIFY] Add data viz and SCQA steps
    agents/
      presentation-strategist.md [MODIFY] SCQA scaffolding, Pyramid validation, slide count
      presentation-builder.md    [MODIFY] Chart.js/Mermaid init, new component patterns
  docs/
    accessibility.md             [NEW] A11Y-07: EAA compliance checklist
    pptx-export.md               [NEW] PPTX export usage guide
  .github/
    copilot-instructions.md      [NEW] PLAT-01: GitHub Copilot equivalent of CLAUDE.md
```

### Component Boundaries

| Component | Responsibility | Communicates With |
|-----------|---------------|-------------------|
| `tokens/base.css` | Design token definitions (colors, typography, spacing) | All templates read tokens via `var()` |
| `tokens/base-components.css` | Shared structural CSS for all components | All theme files import; replaces duplicated rules |
| `tokens/audience-presets.css` | Audience-specific font/density overrides | Applied via `data-audience` attribute on `<html>` or `.reveal` |
| `templates/_skeleton.html` | HTML shell, CDN includes, reveal.js init, master layer | All presentations are built from this skeleton |
| `templates/chart.html` | Chart.js component pattern | Reads tokens for colors; needs Chart.js CDN from skeleton |
| `templates/mermaid-diagram.html` | Mermaid diagram component pattern | Reads tokens for colors; needs Mermaid CDN from skeleton |
| `templates/data-table.html` | Styled HTML table component | Pure CSS, reads tokens only |
| `templates/waterfall.html` | Waterfall/bridge chart via Chart.js floating bars | Depends on Chart.js CDN; reads chart tokens |
| `templates/harvey-ball.html` | Inline capability-rating dots | Pure CSS, reads tokens only |
| `tools/export-pptx.js` | HTML-to-PPTX conversion | Reads presentation.html, maps to PptxGenJS API |
| `tools/validate-wcag.js` | WCAG contrast checking | Reads theme CSS files, reports pass/fail |
| Strategist agent | Deck planning with SCQA + Pyramid | Reads brief.md, writes deck-plan.md |
| Builder agent | HTML generation from deck-plan | Reads deck-plan.md + all templates, writes presentation.html |

### Data Flow

**v1.0 flow (unchanged):**
```
User prompt -> Researcher agent -> brief.md/research.md
  -> Strategist agent -> deck-plan.md
  -> Builder agent -> presentation.html
```

**v2.0 additions to the flow:**

```
Strategist: now applies SCQA scaffolding + Pyramid validation + audience slide count
  |
  v
deck-plan.md: now includes SCQA markers, chart configs (JSON), Mermaid syntax blocks
  |
  v
Builder: now initializes Chart.js/Mermaid after Reveal.ready, renders charts per-slide
  |
  v
presentation.html: contains Chart.js canvas + Mermaid div elements + data tables
  |
  v
[Optional] tools/export-pptx.js -> presentation.pptx
[Optional] tools/read-titles.sh -> title-summary.txt (Pyramid coherence check)
[Optional] tools/export-accessible.js -> accessible.html (linear, no reveal.js)
[Optional] tools/validate-wcag.js -> wcag-report.txt (contrast checking)
```

## Integration Details

### 1. Chart.js Integration (VIZ-01, VIZ-04)

**CDN:** Chart.js 4.5.x via cdnjs (consistent with existing reveal.js CDN pattern).

```html
<!-- In _skeleton.html, after reveal.js script -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.5.1/chart.umd.min.js"></script>
```

**Component pattern:** The `chart.html` template provides the HTML structure and CSS. The chart data is specified as a JSON object in a `<script>` tag within each slide's `<section>`, following Chart.js's standard configuration format.

**Skeleton init hook:** After `Reveal.on('ready')`, scan for `<canvas data-chart>` elements and initialize Chart.js instances. On `slidechanged`, trigger chart animations for the current slide only (performance).

```javascript
// Added to skeleton JS after Reveal.on('ready')
function initCharts() {
  document.querySelectorAll('canvas[data-chart]').forEach(function(canvas) {
    var config = JSON.parse(canvas.getAttribute('data-chart'));
    // Apply consulting defaults: no gridlines, token colors, clean axes
    config.options = Object.assign({}, consultingChartDefaults, config.options);
    new Chart(canvas, config);
  });
}
```

**Consulting defaults object:** Stored in skeleton JS. Sets `scales.x.grid.display: false`, `scales.y.grid.display: false`, maps `--color-chart-1` through `--color-chart-5` to the palette, sets `plugins.legend.position: 'bottom'`, `plugins.legend.labels.font.family` to `var(--font-family-body)` resolved value.

**Token integration:** Chart.js colors read from CSS custom properties via `getComputedStyle(document.documentElement).getPropertyValue('--color-chart-1')`. This means charts automatically adopt theme colors.

**Waterfall (VIZ-04):** Implemented as a Chart.js bar chart with floating bars (stacked bars with transparent base). No external plugin needed -- Chart.js 4.x supports this natively with `data: [[start, end], [start, end], ...]` array pairs. The `waterfall.html` template includes a helper function that converts simple input data (category, value, isTotal) into the floating bar format.

**Confidence:** HIGH -- Chart.js 4.x CDN is well-tested, canvas rendering inside reveal.js's 1280x720 scaled viewport works (canvas uses parent container sizing, not viewport units). The reveal-chart plugin confirms this pattern works.

### 2. Mermaid Integration (VIZ-02)

**CDN:** Mermaid 11.x via cdnjs.

```html
<!-- In _skeleton.html, loaded as ES module -->
<script type="module">
  import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
  mermaid.initialize({
    startOnLoad: false,
    theme: 'base',
    themeVariables: {
      primaryColor: getComputedStyle(document.documentElement).getPropertyValue('--color-accent').trim(),
      primaryTextColor: getComputedStyle(document.documentElement).getPropertyValue('--color-text').trim(),
      lineColor: getComputedStyle(document.documentElement).getPropertyValue('--color-border').trim(),
      // ... map all Mermaid theme variables to our tokens
    }
  });
  // Render after Reveal ready
  document.addEventListener('DOMContentLoaded', async function() {
    await mermaid.run({ nodes: document.querySelectorAll('.mermaid') });
  });
</script>
```

**Component pattern:** The `mermaid-diagram.html` template wraps a `<div class="mermaid">` inside the standard component layout with title, optional subtitle, and source citation. The AI writes Mermaid syntax directly (far more reliable than SVG generation).

**Fragment animation:** Mermaid renders to SVG. After rendering, a post-processing step adds `class="fragment"` and `data-fragment-index` attributes to SVG nodes/edges for progressive reveal. This is the established pattern from the reveal-md-mermaid-animation-example project.

**Confidence:** MEDIUM -- Mermaid 11.x ESM import from CDN is the official recommended approach. Theme variable mapping to tokens works but needs testing per diagram type. Fragment animation post-processing is a known pattern but requires custom JS.

### 3. Data Table Component (VIZ-03)

**Pure CSS component.** No external dependencies.

Follows the existing template pattern exactly: `<style>` block with `.comp-data-table` BEM classes + `<section>` example HTML.

Key CSS features:
- `.comp-data-table__header` row with `--color-primary` background, white text
- Alternating row colors using `:nth-child(even)` with `--color-surface`
- Right-aligned number columns via `data-align="right"` attribute
- Summary/total row with `--font-weight-bold` and top border
- Column highlighting via `data-highlight` class using `--color-highlight` background
- German-aware: wider column widths as default, `overflow-wrap: break-word`

**Confidence:** HIGH -- pure HTML/CSS, follows established component pattern perfectly.

### 4. Harvey Ball Component (VIZ-05)

**Pure CSS component.** Inline-renderable (works inside table cells, list items, or standalone).

Implementation: CSS circles with conic-gradient fills.

```css
.harvey-ball {
  display: inline-block;
  width: 1.2em;
  height: 1.2em;
  border-radius: var(--radius-full);
  border: 2px solid var(--color-primary);
  vertical-align: middle;
}
.harvey-ball--0   { background: transparent; }
.harvey-ball--25  { background: conic-gradient(var(--color-primary) 0deg 90deg, transparent 90deg); }
.harvey-ball--50  { background: conic-gradient(var(--color-primary) 0deg 180deg, transparent 180deg); }
.harvey-ball--75  { background: conic-gradient(var(--color-primary) 0deg 270deg, transparent 270deg); }
.harvey-ball--100 { background: var(--color-primary); }
```

This is an inline element, not a full slide component. The template file documents usage patterns (in tables, in lists) rather than providing a full slide layout.

**Confidence:** HIGH -- pure CSS, `conic-gradient` has 97%+ browser support (including headless Chrome for PDF export).

### 5. Sparklines / KPI Micro-Charts (VIZ-06)

**Pure SVG/CSS.** Enhances the existing `metrics.html` component.

Implementation: Inline SVG `<polyline>` elements inside `.comp-metrics__card` after the label. The builder agent generates SVG coordinates from trend data.

```html
<div class="comp-metrics__card">
  <span class="comp-metrics__number">12,4 Mio. EUR</span>
  <svg class="comp-metrics__sparkline" viewBox="0 0 80 24" preserveAspectRatio="none">
    <polyline points="0,20 15,18 30,15 45,12 60,8 75,4" fill="none"
              stroke="var(--color-success)" stroke-width="2"/>
  </svg>
  <span class="comp-metrics__label">Umsatz</span>
</div>
```

**Modification to `metrics.html`:** Add `.comp-metrics__sparkline` CSS rules. The sparkline is an optional slot -- existing metrics without sparklines continue to work.

**Confidence:** HIGH -- inline SVG with CSS custom property colors, no dependencies.

### 6. PPTX Export (PLAT-02)

**Two viable approaches:**

**Approach A: PptxGenJS (semantic mapping)** -- Node.js script that parses the HTML and maps component structures to PptxGenJS API calls. Each component type gets a mapping function: `comp-metrics` -> PptxGenJS text boxes with large numbers, `comp-two-col` -> two side-by-side content areas, etc.

**Approach B: dom-to-pptx (pixel-accurate)** -- Browser-based library that renders DOM to PowerPoint by computing styles and mapping to native PPTX shapes. Higher visual fidelity but less editable output.

**Recommendation: Approach A (PptxGenJS)** because:
- Consulting clients need **editable** PPTX, not image-based slides
- Semantic mapping produces real text boxes, tables, and shapes
- Token colors can be mapped to PowerPoint theme color slots
- Charts can be re-created as native PowerPoint charts
- Node.js aligns with existing `tools/extract-theme.js` pattern

**Implementation:** `tools/export-pptx.js` -- a Node.js script (requires `pptxgenjs` and `cheerio` packages).

```
node tools/export-pptx.js projects/example/presentation.html [output.pptx]
```

The script:
1. Parses HTML with cheerio
2. Extracts `presentationConfig` from the `<script>` block
3. Reads CSS custom properties from the `<style>` block for color mapping
4. Iterates over `<section>` elements, reads `data-component` attribute
5. Calls component-specific mapper functions (one per component type)
6. Outputs .pptx file

**Chart handling in PPTX:** Chart.js canvas cannot be directly exported. Two options:
- Re-create charts as native PptxGenJS charts (preferred, editable)
- Render canvas to PNG and embed as image (fallback)

The chart data is available in the `data-chart` attribute, so re-creation is feasible.

**Confidence:** MEDIUM -- PptxGenJS API is well-documented and the HTML-to-PPTX table feature works. Custom component mapping functions need significant development effort. Chart re-creation adds complexity.

### 7. Audience Preset CSS (CONSULT-05)

**New file: `tokens/audience-presets.css`**

Applied via `data-audience` attribute on the `<html>` element or `.reveal` div:

```css
/* C-Suite: larger fonts, less density */
[data-audience="c-suite"] .reveal .slides section {
  --font-size-body: 1.125rem;    /* 18px, up from 17px */
  --font-size-caption: 0.875rem; /* 14px, up from 13px */
}
[data-audience="c-suite"] .reveal .slides section ul li:nth-child(n+5) {
  display: none; /* Hard cap at 4 bullets for C-Suite */
}

/* Technical: smaller fonts, higher density */
[data-audience="technical"] .reveal .slides section {
  --font-size-body: 0.9375rem;   /* 15px */
  --font-size-caption: 0.75rem;  /* 12px */
}
```

**Skeleton modification:** Add `audience` field to `presentationConfig` and set `data-audience` on `<html>` in the ready handler.

**Confidence:** HIGH -- CSS custom property scoping with attribute selectors is well-supported.

### 8. Theme CSS Deduplication (FIX-07)

**New file: `themes/_base-structural.css`**

Extract the ~120 lines of shared structural CSS (slide layout, bullet styling, heading rules, accent bar, dark variant, card elevation) from the three theme files into a shared base.

Theme files become token-override-only (~30-40 lines each):

```css
/* themes/startup/theme.css */
@import '../_base-structural.css'; /* NOT possible in inline <style> */

:root {
  --color-primary: #1A365D;
  --font-family-display: 'Space Grotesk', ...;
  /* ... only overrides ... */
}
```

**Problem:** The skeleton uses inline `<style>` blocks, not external CSS files. `@import` does not work inside inline `<style>`. Two options:

1. **Build-time concatenation** (conflicts with "no build step" constraint)
2. **AI agent concatenation** -- the builder agent reads `_base-structural.css` + theme overrides and concatenates them into the inline `<style>` block at generation time

**Recommendation:** Option 2. The base structural CSS becomes a source file the builder agent reads and inlines. Theme files contain only overrides. The builder concatenates: base tokens + animations + base structural + theme overrides into the single `<style>` block.

**Confidence:** HIGH -- this is a code organization change, not a runtime change. The builder agent already reads and inlines template CSS.

### 9. Consulting Intelligence (CONSULT-01, CONSULT-02, CONSULT-04)

**These are AI skill layer changes, not framework architecture changes.**

SCQA scaffolding and Pyramid Principle validation modify the **strategist agent** (`presentation-strategist.md`), not the HTML/CSS framework. The strategist:

1. Prompts for SCQA elements during deck planning (CONSULT-01)
2. Validates top-down logic after producing deck-plan.md (CONSULT-02)
3. Enforces action titles (flags titles under 5 words or without verbs) (CONSULT-04)
4. Adds SCQA markers to deck-plan.md (`[S]`, `[C]`, `[Q]`, `[A]` prefixes)

**New reference file:** `.claude/skills/build-presentation/references/consulting-methods.md` -- documents SCQA framework, Pyramid Principle rules, action title examples, MECE checklist.

**Confidence:** HIGH -- these are prompt engineering changes to existing agent definitions, not code changes.

### 10. "Read the Titles" Export (CONSULT-03)

**New tool: `tools/read-titles.sh`**

Simple bash script using grep/sed to extract `<h2>` content from each `<section>` in a presentation.html:

```bash
#!/bin/bash
# Usage: ./tools/read-titles.sh projects/example/presentation.html
grep -oP '(?<=<h2[^>]*>).*?(?=</h2>)' "$1" | sed 's/<[^>]*>//g' | nl
```

Alternative: Node.js script with cheerio for more robust HTML parsing.

**Confidence:** HIGH -- trivial implementation.

### 11. Accessibility (A11Y-01 through A11Y-07)

**WCAG Contrast Validator (A11Y-01):** New Node.js tool `tools/validate-wcag.js`. Reads theme CSS, extracts all color token values, computes contrast ratios for all foreground/background pairs. Uses the WCAG 2.1 AA formula (relative luminance). No external dependencies needed -- the formula is simple math.

**ARIA Landmarks (A11Y-02):** Modify all 14 existing templates + new templates to include `role` and `aria-label` attributes. Add `role="region"` and `aria-label` derived from slide title to each `<section>`. Ensure single `<h2>` per slide, `<h3>` for sub-sections.

**Accessible HTML Export (A11Y-04):** New Node.js tool `tools/export-accessible.js`. Strips reveal.js wrapper, outputs sequential HTML with heading structure. Charts replaced with `aria-label` text descriptions.

**New Tokens (A11Y-05):** Add to `tokens/base.css`:
```css
--color-warning:    #D69E2E;
--color-info:       #3182CE;
--color-overlay:    rgba(0, 0, 0, 0.7);
--color-on-primary: #FFFFFF;
```

**Confidence:** MEDIUM -- ARIA additions are straightforward. WCAG validator needs careful implementation of contrast ratio math. Accessible export is feasible but chart-to-text conversion quality depends on alt text quality.

### 12. Skeleton Modifications Summary

The `_skeleton.html` file needs these specific changes:

```
HEAD section:
  + Chart.js CDN <script> (conditional -- only if presentation uses charts)
  + Mermaid CDN <script type="module"> (conditional -- only if presentation uses diagrams)
  + RevealHighlight plugin CDN (conditional -- only if code blocks used)

STYLE section:
  + tokens/audience-presets.css content (inlined)
  + tokens/print.css content (inlined)
  + themes/_base-structural.css content (inlined, before theme overrides)

presentationConfig object:
  + audience: ''          // 'c-suite' | 'stakeholder' | 'technical' | 'sales' | 'workshop' | 'internal'

Reveal.on('ready') handler:
  + Set data-audience attribute on <html> from presentationConfig.audience
  + Initialize Chart.js instances (if any canvas[data-chart] elements exist)
  + Initialize Mermaid diagrams (if any .mermaid elements exist)
  + Auto-populate date if cfg.date is empty (FIX-10)

Reveal.on('slidechanged') handler:
  + Trigger chart entry animations for current slide (optional)
```

**Critical design decision:** CDN scripts for Chart.js and Mermaid should be **conditionally included** by the builder agent. If a presentation has no charts, no Chart.js CDN link is emitted. This keeps simple decks lightweight.

## Patterns to Follow

### Pattern 1: Component Template Convention
**What:** Every new component follows the exact same file structure as existing templates.
**When:** Always, for all new templates.
**Structure:**
```html
<!--
  ============================================================================
  COMPONENT: [Name] (COMP-XX)
  ============================================================================
  USE WHEN: [description]
  REQUIRED SLOTS: [list]
  OPTIONAL SLOTS: [list]
  MASTER LAYER: [Visible/Hidden]
  LAYOUT NOTES: [details]
  FRAGMENTS: [animation guidance]
  EXAMPLE: [HTML]
  ============================================================================
-->
<style>
  .comp-[name] { ... }
  .comp-[name]__[element] { ... }
</style>
<section data-component="[name]">
  <div class="comp-[name]">
    ...
  </div>
</section>
```

### Pattern 2: Token-First Styling
**What:** All colors, fonts, spacing reference CSS custom properties. Never hardcode values.
**When:** Always, including Chart.js theme config and Mermaid theme variables.
**Why:** Themes override tokens, and all components (including charts) automatically adopt the new palette.

### Pattern 3: Conditional CDN Loading
**What:** The builder agent includes CDN scripts only when the presentation uses the corresponding feature.
**When:** Chart.js, Mermaid, RevealHighlight.
**Why:** A simple 8-slide text deck should not load 200KB of Chart.js.

## Anti-Patterns to Avoid

### Anti-Pattern 1: Viewport-Relative Units in reveal.js
**What:** Using `vw`, `vh`, `vmin`, `dvh` in CSS inside the reveal.js canvas.
**Why bad:** reveal.js scales its 1280x720 canvas via CSS transform. Viewport units resolve to the browser window, not the canvas, causing unpredictable sizes on different screens/projectors.
**Instead:** Use `rem`, `em`, `px`, or `%` (relative to parent container).

### Anti-Pattern 2: External CSS File References
**What:** Using `<link rel="stylesheet" href="tokens/base.css">` for framework CSS.
**Why bad:** Self-contained HTML constraint. The presentation must work as a single file.
**Instead:** Inline all CSS in `<style>` blocks. The builder agent reads source CSS files and inlines them.

### Anti-Pattern 3: Build-Step Dependencies for End Users
**What:** Requiring npm install / webpack / vite to produce a presentation.
**Why bad:** End users are consultants, not developers. The AI generates the HTML directly.
**Instead:** Build tools (Node.js scripts in `tools/`) are optional developer utilities, never required for the core workflow.

### Anti-Pattern 4: Chart Data in External Files (for MVP)
**What:** Loading chart data from external JSON/CSV files.
**Why bad:** Breaks self-contained constraint. VIZ-07 (data-bound slides) is explicitly marked as future/stretch.
**Instead:** Chart configuration is embedded in `data-chart` attributes or inline `<script>` blocks within each slide.

## Build Order (Dependency-Driven)

Dependencies determine the implementation sequence:

### Layer 0: Foundation Fixes (no dependencies)
- FIX-01 through FIX-10 (bug fixes, structural cleanup)
- FIX-07 (theme dedup) must come first because it restructures CSS files that everything else depends on
- A11Y-05 (new tokens) -- adds tokens that new components will use

### Layer 1: Pure CSS Components (depends on Layer 0 tokens)
- VIZ-03: Data Table -- pure CSS, no external deps
- VIZ-05: Harvey Balls -- pure CSS, inline element
- VIZ-06: Sparklines -- pure SVG/CSS, extends existing metrics
- PLAT-03: Team/People -- pure CSS component
- FIX-06: Nested bullet styles -- CSS addition

### Layer 2: CDN-Dependent Components (depends on skeleton CDN changes)
- VIZ-01: Chart.js component -- needs Chart.js CDN in skeleton + init hook
- VIZ-04: Waterfall chart -- depends on Chart.js integration (Layer 2)
- VIZ-02: Mermaid diagrams -- needs Mermaid CDN in skeleton + init hook
- PLAT-04: Code blocks -- needs RevealHighlight CDN in skeleton

### Layer 3: Cross-Cutting CSS (depends on Layer 0 dedup)
- CONSULT-05: Audience preset CSS -- new CSS file, needs skeleton config change
- FIX-08: Print CSS -- new CSS file
- FIX-09: Dark variant fix -- modifies theme structural CSS

### Layer 4: AI Skill Layer (depends on Layers 1-2 component templates existing)
- Component catalog updates -- adds new components to reference
- Data viz guide reference -- new reference file
- Consulting methods reference -- new reference file
- Strategist agent SCQA/Pyramid updates -- modifies agent prompt
- Builder agent updates -- knows how to init Chart.js/Mermaid
- PLAT-01: copilot-instructions.md -- can only be written after all components exist

### Layer 5: Export Tools (depends on complete framework)
- PLAT-02: PPTX export -- needs all components finalized to write mappers
- A11Y-04: Accessible HTML export -- needs all components with ARIA
- CONSULT-03: Read the titles -- standalone, but most useful after all templates have proper h2 slots
- A11Y-01: WCAG validator -- needs finalized token set

### Layer 6: Documentation & Compliance
- A11Y-07: EAA compliance checklist
- PPTX export documentation
- Accessibility documentation

## Scalability Considerations

| Concern | Current (14 components) | At 21 components | At 30+ components |
|---------|------------------------|-------------------|-------------------|
| Inline CSS size | ~8KB per presentation | ~12KB (+4KB for new components) | Consider CSS tree-shaking (builder only inlines used component CSS) |
| CDN payload | reveal.js only (162KB) | +Chart.js (200KB) +Mermaid (2MB) | Conditional loading critical; Mermaid is heavy |
| Builder agent context | 5 reference files | 7 reference files (+data-viz, +consulting) | May need to split component-catalog.md into categories |
| PPTX export mappers | N/A | 21 mapper functions | Consider auto-generation from component metadata |

**Mermaid size concern:** Mermaid.js is ~2MB. For presentations that use only one or two diagrams, this is a significant payload. The conditional CDN loading pattern is essential. For offline mode, Mermaid inlining is impractical -- recommend SVG pre-rendering as an alternative for offline decks.

## Sources

- [Chart.js Responsive Configuration](https://www.chartjs.org/docs/latest/configuration/responsive.html) -- HIGH confidence
- [Chart.js Installation / CDN](https://www.chartjs.org/docs/latest/getting-started/installation.html) -- HIGH confidence
- [reveal-chart plugin](https://dvenkatsagar.github.io/prez/reveal-chart.html) -- confirms Chart.js + reveal.js integration pattern
- [Mermaid CDN / ESM usage](https://cdn.jsdelivr.net/npm/mermaid@11/dist/) -- HIGH confidence
- [reveal.js-mermaid-plugin](https://github.com/zjffun/reveal.js-mermaid-plugin) -- confirms Mermaid + reveal.js integration
- [Mermaid fragment animation example](https://github.com/maiermic/reveal-md-mermaid-animation-example) -- MEDIUM confidence, needs adaptation
- [PptxGenJS HTML to PowerPoint](https://gitbrent.github.io/PptxGenJS/docs/html-to-powerpoint/) -- HIGH confidence
- [dom-to-pptx](https://github.com/atharva9167j/dom-to-pptx) -- evaluated but not recommended (less editable output)
- [chartjs-plugin-waterfall](https://github.com/everestate/chartjs-plugin-waterfall) -- evaluated; native floating bars preferred
- [Chart.js floating bars](https://github.com/chartjs/Chart.js/issues/3077) -- confirms native support in Chart.js 4.x
