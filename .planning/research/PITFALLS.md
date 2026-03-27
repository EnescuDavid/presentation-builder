# Domain Pitfalls

**Domain:** Adding data visualization, PPTX export, accessibility, and platform expansion to an existing reveal.js HTML presentation framework
**Researched:** 2026-03-27

## Critical Pitfalls

Mistakes that cause rewrites, corrupt output, or break the existing framework.

### Pitfall 1: Chart.js Canvas Renders at Zero Size in Hidden Slides

**What goes wrong:** Chart.js uses `<canvas>` which requires a visible, sized container at render time. Reveal.js only displays the current slide -- all other slides have `display: none` or zero-height containers. Charts on slides 2+ render as blank canvases or with wrong dimensions (0x0 or default 300x150).

**Why it happens:** Chart.js reads the container's computed width/height from the DOM at instantiation time. Hidden elements report zero dimensions. This is the single most common integration failure between Chart.js and any tabbed/carousel framework.

**Consequences:** Charts appear blank when navigating to their slide. Users see empty space where a chart should be. Resize/window events may partially fix it, but behavior is inconsistent.

**Prevention:**
- Do NOT initialize Chart.js instances on page load. Use reveal.js `slidechanged` and `ready` events to initialize charts lazily when their slide becomes visible.
- Set explicit `width` and `height` attributes on `<canvas>` elements (in pixels, not percentages) as a fallback.
- After initializing a chart on slide entry, call `chart.resize()` to force correct dimensions.
- Store chart instances in a map keyed by slide index for cleanup/re-render.

**Detection:** Any chart beyond the first slide appearing blank or microscopic during testing.

**Confidence:** HIGH -- documented in Chart.js issues [#1639](https://github.com/chartjs/Chart.js/issues/1639), [#2114](https://github.com/chartjs/Chart.js/issues/2114) and repeatedly confirmed across integration contexts.

---

### Pitfall 2: Mermaid Diagrams Break After Slide 3

**What goes wrong:** Mermaid diagrams on slides 1-3 render correctly, but from slide 4 onward, diagrams render at unusably small sizes or as blank SVGs. This is a well-known, long-standing bug.

**Why it happens:** Mermaid renders SVGs based on the container's available space. Reveal.js lazy-loads slide content, and Mermaid's render timing does not wait for the slide to be fully in the DOM with correct dimensions. The SVG gets generated with the dimensions of the hidden container.

**Consequences:** Presentations with more than 3 Mermaid diagrams produce broken output. The bug is subtle because the first few slides work fine, so it passes initial testing.

**Prevention:**
- Never call `mermaid.init()` or `mermaid.run()` at page load for all diagrams.
- Hook into `Reveal.on('slidechanged')` and `Reveal.on('ready')` to render Mermaid diagrams only when their slide becomes visible.
- Use a deferred rendering pattern: store Mermaid source as `data-mermaid` attribute on a container div, render to SVG only on slide entry.
- After rendering, explicitly set the SVG viewBox and dimensions to fill the container.

**Detection:** Test with 5+ Mermaid slides. If diagrams after slide 3 are tiny or missing, the timing bug is present.

**Confidence:** HIGH -- documented in [reveal.js #2863](https://github.com/hakimel/reveal.js/issues/2863), [mermaid #1824](https://github.com/mermaid-js/mermaid/issues/1824), [quarto-cli #2607](https://github.com/quarto-dev/quarto-cli/issues/2607).

---

### Pitfall 3: Chart.js Cannot Read CSS Custom Properties for Colors

**What goes wrong:** The framework defines chart colors as CSS custom properties (`--color-chart-1` through `--color-chart-5` in `tokens/base.css`). Chart.js does not resolve CSS custom properties -- it expects literal color values (hex, rgb, hsl) in its JavaScript config objects.

**Why it happens:** Chart.js renders to `<canvas>` using the Canvas 2D API, which operates outside the CSS cascade. `getComputedStyle()` can resolve CSS variables, but Chart.js does not do this internally. Passing `var(--color-chart-1)` as a backgroundColor produces transparent/black.

**Consequences:** Charts ignore the theme palette entirely. All charts render in Chart.js defaults (blue, red, etc.) regardless of the active theme. Theme switching has no effect on charts.

**Prevention:**
- Build a `getChartColors()` helper function that reads computed CSS custom property values via `getComputedStyle(document.documentElement).getPropertyValue('--color-chart-1')` and passes resolved hex values to Chart.js config.
- Call this helper at chart initialization time (not at page load), so it picks up the active theme's values.
- Document this in the component template so AI generators always use the helper.

**Detection:** Switch themes and check if chart colors change. If they stay the same across themes, the bridge is missing.

**Confidence:** HIGH -- Chart.js docs confirm only literal color values are supported in dataset configuration.

---

### Pitfall 4: PptxGenJS Cannot Convert Chart.js Charts to Native PowerPoint Charts

**What goes wrong:** Teams assume they can round-trip Chart.js visualizations to editable PowerPoint charts. PptxGenJS has its own chart API (`slide.addChart()`) that is completely separate from Chart.js. There is no automatic conversion.

**Why it happens:** PptxGenJS creates native OOXML chart objects using its own data format. Chart.js creates HTML5 canvas renderings. These are fundamentally different representations. Converting between them requires extracting the raw data from the Chart.js config and re-mapping it to PptxGenJS's chart format.

**Consequences:** Without explicit handling, charts are either missing from PPTX exports entirely, or exported as rasterized screenshots (non-editable images). Consulting clients who expect to edit chart data in PowerPoint will be disappointed.

**Prevention:**
- Design the data model to be chart-library-agnostic from the start. Store chart data as plain JSON (labels, datasets, type), then render to Chart.js for HTML and to PptxGenJS for PPTX independently.
- For charts that cannot map to PptxGenJS's supported types (waterfall, Harvey balls), fall back to high-resolution PNG export from the canvas and embed as an image.
- PptxGenJS supports: bar, line, pie, doughnut, radar, scatter, bubble, area. It does NOT support: waterfall, treemap, funnel, or Mermaid diagrams.

**Detection:** Export any chart slide to PPTX. If the chart is missing or is a flat image where you expected an editable chart, the mapping layer is missing.

**Confidence:** HIGH -- confirmed from [PptxGenJS docs](https://gitbrent.github.io/PptxGenJS/docs/api-charts/) and [Anthropic skills reference](https://github.com/anthropics/skills/blob/main/skills/pptx/pptxgenjs.md).

---

### Pitfall 5: PptxGenJS Object Mutation Corrupts Multi-Slide Exports

**What goes wrong:** PptxGenJS mutates option objects in-place (e.g., converting shadow pixel values to EMU units internally). If you reuse a shared options object across multiple slides or shapes, the second shape receives already-converted values, producing corrupted or visually broken output.

**Why it happens:** PptxGenJS modifies the objects you pass to it rather than cloning them. This is an API design quirk that is not obvious from the documentation.

**Consequences:** Subtle visual corruption in exported PPTX files. Shadows appear wrong, sizes are off, or PowerPoint shows a "repair file" dialog on open.

**Prevention:**
- NEVER reuse option objects across `addText()`, `addShape()`, or `addImage()` calls.
- Use spread operator or `structuredClone()` to create fresh copies: `slide.addShape(type, { ...sharedOptions })`.
- Wrap PptxGenJS calls in a helper that auto-clones options.

**Detection:** Open exported PPTX in PowerPoint. If it shows "repair this file" dialog, or shapes on later slides look distorted, object mutation is the cause.

**Confidence:** HIGH -- documented in [Anthropic PptxGenJS skills guide](https://github.com/anthropics/skills/blob/main/skills/pptx/pptxgenjs.md).

---

### Pitfall 6: Adding CDN Dependencies Breaks Offline Mode

**What goes wrong:** The framework has a carefully designed 3-mode system (Offline/Online/ZIP) in `_skeleton.html`. Adding Chart.js CDN, Mermaid CDN, and RevealHighlight CDN means 3 more external dependencies that must be handled in all 3 modes. The offline mode instructions become significantly more complex.

**Why it happens:** Each new CDN library adds ~50-200KB that must be inlined for offline mode. The skeleton template's comment-based mode switching becomes unwieldy with 5+ CDN references. AI generators may forget to handle all modes correctly.

**Consequences:** Presentations that work in development (online mode) fail when shared offline. Corporate environments with restrictive CSP headers or air-gapped networks get blank slides where charts should be.

**Prevention:**
- Add Chart.js and Mermaid as conditional script tags with clear mode comments, following the existing pattern in `_skeleton.html`.
- For offline mode, provide a bundling script in `tools/` that downloads and inlines all CDN dependencies.
- Keep the number of CDN dependencies minimal: Chart.js (~80KB gzipped) + Mermaid (~180KB gzipped) + RevealHighlight (~15KB) is substantial overhead for inline mode.
- Consider: Mermaid is the heaviest dependency. For offline mode, pre-render Mermaid diagrams to SVG at generation time rather than requiring the full runtime.

**Detection:** Test every presentation in offline mode (disconnect network, open HTML file). If charts/diagrams are missing, the CDN fallback is broken.

**Confidence:** HIGH -- follows directly from the existing framework architecture.

---

## Moderate Pitfalls

### Pitfall 7: Mermaid Theme Integration Requires Its Own Theming API

**What goes wrong:** Mermaid diagrams ignore CSS custom properties. Mermaid has its own theming system (`themeVariables`) that must be configured separately. Simply setting CSS variables does not change diagram colors.

**Prevention:**
- Use Mermaid's `initialize()` config with `themeVariables` that map to the presentation's design tokens. Read CSS custom properties via `getComputedStyle()` and pass resolved values to Mermaid's config.
- Mermaid's theme engine only accepts hex colors, not CSS variable references or named colors.
- Mermaid renders inline CSS into its SVGs, which can conflict with strict Content Security Policies.

**Confidence:** MEDIUM -- confirmed by [Mermaid theming docs](https://mermaid.js.org/config/theming.html) and [issue #856](https://github.com/mermaid-js/mermaid/issues/856).

---

### Pitfall 8: Reveal.js Has Fundamental Accessibility Defects

**What goes wrong:** Reveal.js does not properly manage focus or the accessibility tree. All slides remain "visible" to screen readers simultaneously, hidden slide links are focusable via Tab, and slide transitions are not announced to assistive technology.

**Prevention:**
- Add `aria-hidden="true"` to all non-current slides and toggle on `slidechanged` event.
- Send focus to the current slide container after each transition.
- Add `aria-live="polite"` region that announces slide changes.
- Add `role="group"` and `aria-roledescription="slide"` to each `<section>`.
- These fixes must be implemented as a reveal.js plugin or initialization script, not per-template.

**Detection:** Navigate the presentation using only Tab key and a screen reader (VoiceOver on macOS). If all slides' content is read at once or focus jumps to hidden content, the issue is present.

**Confidence:** HIGH -- documented in [reveal.js #932](https://github.com/hakimel/reveal.js/issues/932).

---

### Pitfall 9: PptxGenJS Layout Mapping Is Manual, Not Automatic

**What goes wrong:** Teams expect PptxGenJS to automatically convert CSS grid/flexbox layouts to PowerPoint positioning. It does not. Every element must be positioned with explicit x, y, w, h values in inches.

**Prevention:**
- Create a layout mapping layer that translates each component template's visual layout to PptxGenJS coordinates.
- Define constants for standard positions: title area (x: 0.5, y: 0.3, w: 9.0), body area (x: 0.5, y: 1.2, w: 9.0, h: 4.0), two-column left/right, etc.
- Map each of the 14 existing component templates to a PptxGenJS layout function.
- Use PptxGenJS's default layout `LAYOUT_16x9` (10" x 5.625") which matches reveal.js's default 960x540 / 1280x720 aspect ratio.

**Detection:** Export a presentation with all 14 component types. Compare HTML and PPTX side by side. Misaligned text, overlapping elements, or missing content indicates incomplete mapping.

**Confidence:** HIGH -- PptxGenJS docs confirm all positioning is manual.

---

### Pitfall 10: PptxGenJS Font Handling Requires System Fonts

**What goes wrong:** The framework uses Google Fonts (Inter) via CDN. PptxGenJS can specify font names in text options, but PowerPoint renders fonts from the local system. If the recipient doesn't have Inter installed, PowerPoint substitutes a fallback font (usually Calibri), breaking the visual design.

**Prevention:**
- Specify `fontFace: 'Inter'` in PptxGenJS text options, but also document that recipients need Inter installed.
- Alternatively, use PowerPoint-safe fonts (Calibri, Segoe UI) as the PPTX export font and accept visual divergence from the HTML version.
- For corporate themes extracted from PPTX (the existing `extract-theme.js` workflow), the font family will already be a system font -- use that for PPTX export.

**Detection:** Open exported PPTX on a machine without Inter font installed. If text spacing changes dramatically, the font fallback is not handled.

**Confidence:** HIGH -- this is a fundamental PowerPoint limitation.

---

### Pitfall 11: WCAG Contrast Validation Must Cover Dynamic Token Combinations

**What goes wrong:** A contrast checker that only validates the default theme's colors misses failures in the startup and enterprise themes, or in audience-preset CSS adjustments. Each theme has different `--color-chart-*` and `--color-bg-*` values that produce different contrast ratios.

**Prevention:**
- The contrast validation tool (A11Y-01) must iterate over ALL theme files, not just `base.css`.
- Check every foreground/background token pair that can appear together (not just text-on-background, but also chart colors on card backgrounds, overlay text on images, etc.).
- The existing 5 chart colors per theme must all pass 3:1 contrast against both light and dark backgrounds they might appear on.

**Detection:** Run the contrast tool against the startup theme specifically -- its vibrant colors (FF6B35, FFD166) are most likely to fail contrast against light backgrounds.

**Confidence:** MEDIUM -- based on analysis of existing token values.

---

### Pitfall 12: Heading Hierarchy Breaks Across Slide Decks

**What goes wrong:** Each reveal.js slide uses `<h2>` for the slide title per A11Y-02 requirements. But the overall document has no `<h1>`. Or, different component templates use inconsistent heading levels (some use `<h2>`, others `<h3>` for what should be the same semantic level).

**Prevention:**
- Use the presentation title as a single `<h1>` (can be visually hidden with `sr-only` class) at the top of the reveal container.
- Enforce exactly one `<h2>` per slide (the slide title / action title).
- Sub-content within slides uses `<h3>`.
- Add a linting rule to the accessibility checker that validates heading hierarchy.

**Detection:** Run an accessibility audit tool (axe, WAVE) on a generated presentation. Heading hierarchy warnings indicate the issue.

**Confidence:** MEDIUM -- standard WCAG requirement, specific to reveal.js slide structure.

---

## Minor Pitfalls

### Pitfall 13: Chart.js Animation Conflicts with Reveal.js Fragments

**What goes wrong:** Chart.js has its own animation system (progressive draw on render). Reveal.js has fragments (step-by-step reveal). Using both simultaneously can cause charts to animate before the fragment is visible, or re-animate every time the slide is revisited.

**Prevention:**
- Disable Chart.js default animations (`animation: false` in config).
- Implement custom animation triggered by reveal.js fragment events if progressive draw is desired.
- Use `Reveal.on('fragmentshown')` to trigger chart updates for data-reveal patterns.

**Confidence:** MEDIUM -- logical consequence of two animation systems.

---

### Pitfall 14: PptxGenJS Color Format Requires Bare Hex (No # Prefix)

**What goes wrong:** The framework stores colors as standard CSS hex (`#3182CE`). PptxGenJS requires 6-character hex WITHOUT the `#` prefix (`3182CE`). Passing `#3182CE` to PptxGenJS produces black or transparent elements.

**Prevention:**
- Build a `cssToPowtColor(cssHex)` helper that strips `#` and handles any format conversion.
- Apply this helper to ALL color values passed to PptxGenJS, including the 5 chart colors, background colors, text colors, and border colors.

**Detection:** If PPTX exports show all-black or all-white elements where colors should appear, the `#` prefix is the cause.

**Confidence:** HIGH -- explicitly documented in PptxGenJS.

---

### Pitfall 15: Mermaid's Inline SVG CSS Conflicts with Content Security Policy

**What goes wrong:** Mermaid injects `<style>` elements inside its generated SVGs. Strict CSP headers that disallow `style-src 'unsafe-inline'` will block Mermaid rendering entirely.

**Prevention:**
- If the framework ever adds CSP headers (for enterprise deployment), Mermaid will need `'unsafe-inline'` exemption or pre-rendered SVGs.
- For now (self-contained HTML files), this is not an issue. Flag it for future if a server-based deployment mode is added.

**Confidence:** LOW -- only relevant if CSP is added later.

---

### Pitfall 16: Harvey Balls and Sparklines in PPTX Export

**What goes wrong:** Harvey balls (pure CSS circles) and sparklines (inline SVG) have no PowerPoint equivalent. PptxGenJS cannot render CSS or inline SVG. These components will be missing from PPTX exports unless explicitly handled.

**Prevention:**
- For Harvey balls: render as PptxGenJS pie charts (with 2 data points: filled %, empty %) or as filled/unfilled circle shapes.
- For sparklines: render as small PptxGenJS line charts or rasterize to PNG and embed as images.
- Document which components have full PPTX support vs. image-fallback from the start.

**Confidence:** MEDIUM -- follows from PptxGenJS's API capabilities.

---

### Pitfall 17: Accessible Linear HTML Export Loses Visual Context

**What goes wrong:** The A11Y-04 "accessible linear HTML export" strips reveal.js and renders slides as sequential HTML. But charts become meaningless without their visual rendering (a `<canvas>` element in a linear doc is blank), and Mermaid source text is unreadable without rendering.

**Prevention:**
- The accessible export must replace each `<canvas>` chart with a data table showing the underlying numbers.
- Mermaid diagrams must be replaced with their text description (from the `aria-label` attribute, per A11Y-03).
- This requirement should be built into the chart and diagram components from day one, not bolted on later.

**Confidence:** MEDIUM -- logical consequence of the accessible export requirement.

---

## Phase-Specific Warnings

| Phase Topic | Likely Pitfall | Mitigation |
|-------------|---------------|------------|
| Chart.js integration | Canvas zero-size in hidden slides (Pitfall 1), CSS variable bridge (Pitfall 3) | Build lazy-init pattern and color resolver FIRST, before any chart templates |
| Mermaid integration | Rendering after slide 3 (Pitfall 2), theme disconnection (Pitfall 7) | Use deferred rendering pattern with slidechanged events from the start |
| Data visualization (general) | Animation conflicts (Pitfall 13) | Disable library animations, use reveal.js fragments as sole animation controller |
| PPTX export | No auto-layout (Pitfall 9), object mutation (Pitfall 5), color format (Pitfall 14), font mismatch (Pitfall 10) | Build layout mapping constants and color conversion helpers before any export logic |
| PPTX charts | Chart.js to PptxGenJS gap (Pitfall 4), Harvey balls/sparklines (Pitfall 16) | Design chart data model to be library-agnostic, plan image fallback for non-mappable components |
| Accessibility | Reveal.js core a11y defects (Pitfall 8), heading hierarchy (Pitfall 12), contrast validation breadth (Pitfall 11) | Fix reveal.js focus management as a plugin first, then layer ARIA onto templates |
| Accessible export | Charts/diagrams lose meaning (Pitfall 17) | Require alt text and data tables as mandatory component slots from initial implementation |
| Offline mode | CDN dependency expansion (Pitfall 6) | Add bundling script to tools/, consider pre-rendering Mermaid to SVG |

## Sources

- [Chart.js hidden container issue #1639](https://github.com/chartjs/Chart.js/issues/1639)
- [Chart.js display:none issue #2114](https://github.com/chartjs/Chart.js/issues/2114)
- [Chart.js color docs](https://www.chartjs.org/docs/latest/general/colors.html)
- [Reveal.js Mermaid rendering broken after slide 3 #2863](https://github.com/hakimel/reveal.js/issues/2863)
- [Mermaid size issue after slide 4 #1824](https://github.com/mermaid-js/mermaid/issues/1824)
- [Quarto Mermaid clip issue #2607](https://github.com/quarto-dev/quarto-cli/issues/2607)
- [Mermaid hidden container issue #1846](https://github.com/mermaid-js/mermaid/issues/1846)
- [Mermaid theming docs](https://mermaid.js.org/config/theming.html)
- [Mermaid inline CSS in SVG #856](https://github.com/mermaid-js/mermaid/issues/856)
- [PptxGenJS documentation](https://gitbrent.github.io/PptxGenJS/)
- [PptxGenJS HTML to PowerPoint](https://gitbrent.github.io/PptxGenJS/docs/html-to-powerpoint/)
- [PptxGenJS chart API](https://gitbrent.github.io/PptxGenJS/docs/api-charts/)
- [Anthropic PptxGenJS skills guide](https://github.com/anthropics/skills/blob/main/skills/pptx/pptxgenjs.md)
- [Reveal.js accessibility issue #932](https://github.com/hakimel/reveal.js/issues/932)
- [WCAG 2.1 specification](https://www.w3.org/TR/WCAG21/)
- [WebAIM WCAG checklist](https://webaim.org/standards/wcag/checklist)
