# Feature Landscape: Presentation Builder v2.0

**Domain:** Code-based consulting presentation framework (reveal.js)
**Researched:** 2026-03-27
**Focus:** Data visualization, consulting intelligence, accessibility, platform expansion

## Table Stakes

Features users expect in a consulting presentation tool claiming data visualization and professional output. Missing = product feels incomplete for its stated audience.

| Feature | Why Expected | Complexity | Dependencies | Notes |
|---------|--------------|------------|--------------|-------|
| Chart.js bar/line/pie charts (VIZ-01) | 40%+ of consulting slides contain charts; bar and line charts are the minimum viable data viz | Medium | CDN dependency, existing `--color-chart-1` through `--color-chart-5` tokens | Chart.js v4 has native floating bar support needed for waterfall. rajgoel/reveal.js-plugins provides a chart plugin but it wraps Chart.js in a `data-chart` attribute pattern -- for AI generation, direct Chart.js config JSON in a `<canvas>` is more flexible. Confidence: HIGH |
| Data table component (VIZ-03) | Every board deck has at least one table; HTML tables with no styling look amateur | Low-Medium | Token system (borders, backgrounds), German text handling CSS | Pure CSS component, no external dependencies. Right-aligned numbers, alternating rows, summary row are consulting conventions. Should integrate with Harvey balls for capability matrices. Confidence: HIGH |
| Harvey balls (VIZ-05) | Consulting staple for capability assessments, vendor comparisons, maturity models. McKinsey/BCG/Bain use them constantly | Low | None -- pure CSS/SVG circles | Two proven approaches: pure CSS (conic-gradient or clip-path) or inline SVG circles with arc paths. CSS is simpler; SVG renders crisper at all sizes. Recommend SVG with 5 states (0/25/50/75/100%). Must work inline within table cells. Confidence: HIGH |
| WCAG contrast validation (A11Y-01) | Legal requirement in EU (European Accessibility Act 2025); DACH consulting market especially affected | Low-Medium | Token system CSS files as input | BBC's `color-contrast-checker` npm package is lightweight. Custom script reading CSS custom properties and checking all foreground/background pairs is ~50-100 lines JS. 4.5:1 for normal text, 3:1 for large text. Confidence: HIGH |
| ARIA landmarks in templates (A11Y-02) | Screen reader users cannot navigate slides without proper roles/labels; baseline accessibility | Low | All 14 existing templates + new components | Add `role="group"` and `aria-label` (from action title) to each `<section>`. Correct heading hierarchy (one `<h2>` per slide). reveal-a11y plugin by Marcy Sutton adds skip-nav and aria-labels automatically. Confidence: HIGH |
| PPTX export (PLAT-02) | Consulting clients expect .pptx deliverables; HTML-only output is a deal-breaker for many engagements | High | Node.js, PptxGenJS library, all component templates | PptxGenJS is the standard JS library (actively maintained, 2K+ GitHub stars). Two strategies: (1) semantic export -- map each component type to PptxGenJS API calls preserving editability, or (2) screenshot export -- render slides as images and embed. Semantic is far more valuable but 5-10x harder. dom-to-pptx is a newer option that does coordinate-based DOM-to-PPTX but produces non-editable positioned shapes. Recommend semantic mapping per component type. Confidence: MEDIUM -- complexity is high, fidelity tradeoffs are real |
| copilot-instructions.md (PLAT-01) | Core value proposition is "any AI tool"; without this, it is Claude Code-only | Low | Existing CLAUDE.md and component catalog as source material | Straightforward documentation task. Copilot's context window is smaller, so this needs to be more concise than CLAUDE.md. Confidence: HIGH |
| Semantic state color tokens (A11Y-05) | Hardcoded `rgba()` values bypass theming and break contrast checking; tokens must be complete | Low | Token system, all templates that use hardcoded colors | Missing: `--color-warning`, `--color-info`, `--color-overlay`, `--color-on-primary`. Audit all templates for raw color values and tokenize. Prerequisite for reliable WCAG checking. Confidence: HIGH |

## Differentiators

Features that set this framework apart from generic reveal.js setups and competing tools. Not expected, but create significant value for the consulting use case.

| Feature | Value Proposition | Complexity | Dependencies | Notes |
|---------|-------------------|------------|--------------|-------|
| Mermaid diagram integration (VIZ-02) | AI generates text-based diagrams far more reliably than SVG; flowcharts/org charts are common in consulting | Medium | Mermaid.js CDN, theme token mapping | Multiple reveal.js-mermaid plugins exist (ludwick, zjffun) but they are thin wrappers. Better approach: load Mermaid CDN, use `<div class="mermaid">` blocks, initialize with theme colors mapped from tokens. Fragment animation (progressive reveal of diagram nodes) is the hard part -- Mermaid's SVG output does not natively support reveal.js fragments. Confidence: MEDIUM |
| Waterfall/bridge chart (VIZ-04) | Revenue walks, cost bridges, margin analysis -- a consulting signature chart type that generic tools lack | Medium | Chart.js v4 (floating bars), `--color-success`/`--color-danger` tokens | Chart.js v4 floating bars (`[start, end]` data format) make this feasible without a plugin. The deprecated `chartjs-plugin-waterfall` is for Chart.js v2. Custom implementation using floating bars + connecting lines + total-bar styling is the right approach. Grey totals, green increases, red decreases is the consulting convention. Confidence: MEDIUM |
| SCQA narrative scaffolding (CONSULT-01) | No other presentation framework encodes consulting methodology; transforms AI from slide builder to presentation coach | Medium | Strategist subagent workflow, deck-plan.md format | Not a visual component -- it is a workflow/prompt enhancement. The strategist subagent asks SCQA questions during planning, tags slides with narrative roles in deck-plan.md. Implementation is documentation + prompt engineering, not code. Confidence: HIGH |
| Pyramid Principle validation (CONSULT-02) | Validates top-down logic and MECE groupings; catches structural flaws before the deck is built | Medium | SCQA scaffolding, deck-plan.md with action titles | No existing tools do this -- it is a novel differentiator. Implementation is heuristic: check first slide states conclusion, subsequent slides support it, groupings cover the space. Cannot be fully automated (MECE is subjective) but can flag obvious violations. Output is a validation report with warnings. Confidence: MEDIUM -- heuristic quality depends on prompt engineering |
| "Read the titles" export (CONSULT-03) | BCG's famous coherence check; if you read only the slide titles, the argument should be clear | Low | Generated HTML with `<h2>` elements in `<section>` tags | Simple script: extract all `<h2>` from `<section>` elements, output numbered list. Optionally include SCQA markers. 20-line bash/JS script. High value for minimal effort. Confidence: HIGH |
| Action title enforcement (CONSULT-04) | Prevents the #1 consulting deck sin: topic labels ("Revenue Overview") instead of insights ("Revenue declined 15% driven by enterprise churn") | Low | Component catalog, strategist subagent prompts | Documentation + validation. Flag titles under 5 words or without a verb. No code changes to templates needed -- this is catalog documentation and AI prompt guidance. Confidence: HIGH |
| Audience preset CSS (CONSULT-05) | Adjusts density/sizing per audience type without manual CSS; C-Suite gets bigger fonts, technical gets denser content | Medium | Existing audience-presets.md reference, token system | Implementation: CSS modifier classes (`.audience--csuite`, `.audience--technical`) that override font-size and spacing tokens. Applied at the `<div class="reveal">` level. 6 audience types already documented. Confidence: HIGH |
| Sparkline/KPI micro-charts (VIZ-06) | Adds trend context to metrics cards; turns static numbers into mini stories | Low-Medium | Existing metrics component (COMP-05) | Pure CSS/SVG -- no library needed. SVG `<polyline>` for trend lines, CSS `linear-gradient` for mini bars. Enhances COMP-05 without replacing it. Confidence: HIGH |
| Accessible linear HTML export (A11Y-04) | Screen-reader-friendly version, email distribution, archival -- accessibility beyond just the presentation view | Medium | All components with alt text slots (A11Y-03), heading hierarchy (A11Y-02) | Script that strips reveal.js framework, outputs sequential HTML with heading structure. Charts become text descriptions (from aria-labels). Depends on A11Y-02 and A11Y-03 being implemented first. Confidence: HIGH |
| Team/People component (PLAT-03) | "Meet the team" slides appear in nearly every consulting pitch deck | Low | Token system, existing component patterns | Circular photo crops, name/role/contact grid. 2-6 members per slide. Straightforward CSS grid component following existing BEM patterns. Confidence: HIGH |

## Anti-Features

Features to explicitly NOT build in v2.0. Tempting but wrong for this framework.

| Anti-Feature | Why Avoid | What to Do Instead |
|--------------|-----------|-------------------|
| Data-bound live slides (VIZ-07) | Requires runtime JS loader, breaks offline-first constraint, adds complexity for a niche use case (recurring reports). Most consulting decks are point-in-time snapshots, not live dashboards | Defer to v3 or later. For now, AI regenerates the deck when data changes. Document as a future possibility |
| Presentation analytics (PLAT-07) | Requires server component, conflicts with offline-first and self-contained HTML constraints. Privacy concerns in DACH market (GDPR) | Out of scope. If needed, users can add their own tracking pixel as a post-processing step |
| Real-time Mermaid fragment animation | Progressively revealing Mermaid diagram nodes on advance requires deep SVG manipulation of Mermaid's output, which changes between versions. Brittle and high maintenance | Render the complete diagram on slide entry with a fade animation. If progressive reveal is needed, use multiple slides with incrementally complex Mermaid definitions |
| Full semantic PPTX export for all components | Mapping every CSS nuance of 20+ components to PowerPoint's object model is months of work and will never be pixel-perfect | Support semantic export for the 6-8 most common component types (title, text, metrics, table, chart, comparison). Fall back to image-based export for complex layouts (framework, card-grid) |
| Interactive chart tooltips/hover states | Consulting decks are presented, not explored interactively. Hover states do not work in PDF export or PPTX. Adds complexity for zero value in the primary use case | Static chart labels and annotations. If interactive exploration is needed, link to a separate dashboard |
| WCAG AAA compliance | AA is the legal requirement (EAA 2025). AAA requires 7:1 contrast ratios that severely limit color palette options, making professional-looking themes nearly impossible | Target WCAG 2.1 AA. Document AAA as aspirational. Flag the contrast checker to show AAA results but do not fail on them |
| Code syntax highlighting themes | Low priority for pure consulting. The RevealHighlight plugin handles this adequately from CDN. Custom syntax themes are polish, not substance | Use RevealHighlight plugin defaults (PLAT-04). Style `pre`/`code` blocks in themes for basic readability. Do not build a syntax theme system |

## Feature Dependencies

```
Dependency Chain (build order matters):

A11Y-05 (state color tokens) --> A11Y-01 (WCAG contrast checker)
  Rationale: Cannot check contrast if colors are hardcoded, not tokenized

A11Y-02 (ARIA landmarks) --> A11Y-03 (alt text slots) --> A11Y-04 (linear HTML export)
  Rationale: Export needs landmarks and alt text to produce accessible output

VIZ-01 (Chart.js) --> VIZ-04 (waterfall chart)
  Rationale: Waterfall uses Chart.js floating bars

VIZ-03 (data table) + VIZ-05 (Harvey balls) --> combined capability matrix
  Rationale: Harvey balls are most useful inside table cells

CONSULT-01 (SCQA) --> CONSULT-02 (Pyramid validation)
  Rationale: Pyramid validation checks SCQA-structured deck plans

CONSULT-04 (action titles) --> CONSULT-03 ("read the titles" export)
  Rationale: Export is meaningless if titles are topic labels, not action titles

PLAT-01 (copilot-instructions) has NO dependencies -- can ship anytime

VIZ-01 (Chart.js) + VIZ-02 (Mermaid) + VIZ-03 (tables) --> PLAT-02 (PPTX export)
  Rationale: PPTX export must handle data viz components; build them first
```

## MVP Recommendation

### Must-Have for v2.0 (build these)

1. **Chart.js integration (VIZ-01)** -- Unlocks all chart types including waterfall. The single highest-impact addition for consulting decks. Build with consulting defaults (no gridlines, restrained palette, annotation support).

2. **Data table component (VIZ-03)** -- Low complexity, high usage frequency. Every board deck needs tables.

3. **Harvey balls (VIZ-05)** -- Pure CSS/SVG, low effort, high consulting signal. Immediately useful in comparison tables.

4. **State color tokens (A11Y-05) + WCAG checker (A11Y-01)** -- Legal compliance (EAA). Token completion is a prerequisite for everything else. Build early.

5. **ARIA landmarks (A11Y-02)** -- Low effort retrofit across existing templates. Foundation for all accessibility work.

6. **SCQA scaffolding (CONSULT-01) + action title enforcement (CONSULT-04)** -- Pure documentation/prompt changes. No code risk. Highest differentiation per effort.

7. **"Read the titles" export (CONSULT-03)** -- 20-line script, massive consulting value.

8. **copilot-instructions.md (PLAT-01)** -- Delivers on core value prop. No dependencies.

9. **Team/People component (PLAT-03)** -- Missing from nearly every pitch deck template set.

### Should-Have (build if time permits)

10. **Waterfall chart (VIZ-04)** -- Depends on Chart.js being in place. Consulting signature.
11. **Mermaid diagrams (VIZ-02)** -- Good AI-generation story but less frequent than charts/tables.
12. **Audience preset CSS (CONSULT-05)** -- Documentation exists, CSS implementation is medium effort.
13. **Sparklines (VIZ-06)** -- Enhances existing metrics component, pure CSS/SVG.
14. **PPTX export (PLAT-02)** -- Highest complexity item. Critical for adoption but should be last to avoid blocking other features.

### Defer to Later

15. **Pyramid Principle validation (CONSULT-02)** -- Heuristic quality is uncertain; needs iteration.
16. **Accessible linear HTML export (A11Y-04)** -- Depends on A11Y-02 and A11Y-03 being complete.
17. **Data-bound slides (VIZ-07)** -- Future version.
18. **Presentation analytics (PLAT-07)** -- Out of scope.

## Complexity Budget

| Complexity | Count | Features |
|------------|-------|----------|
| Low | 7 | Harvey balls, "read the titles", action title enforcement, copilot-instructions, state color tokens, ARIA landmarks, team/people component |
| Medium | 6 | Chart.js, data table, Mermaid, waterfall, SCQA scaffolding, audience preset CSS |
| High | 1 | PPTX export |

**Total estimated effort:** The low items are each 1-2 hours of focused work. Medium items are half-day to full-day each. PPTX export is multi-day. Reasonable for a v2.0 milestone if PPTX export is scoped carefully (6-8 components semantic, rest as images).

## Sources

- [rajgoel/reveal.js-plugins chart module](https://github.com/rajgoel/reveal.js-plugins/tree/master/chart) -- reveal.js Chart.js integration
- [Chart.js floating bars documentation](https://www.chartjs.org/docs/latest/samples/bar/floating.html) -- native waterfall chart support
- [ludwick/reveal.js-mermaid-plugin](https://github.com/ludwick/reveal.js-mermaid-plugin) -- Mermaid reveal.js integration
- [CSSHarvey](https://github.com/manojmaninair/CSSHarvey) -- pure CSS Harvey balls implementation
- [HarveyBallSVG](https://github.com/layer8braincourt/HarveyBallSVG) -- SVG-based Harvey balls
- [BBC color-contrast-checker](https://github.com/bbc/color-contrast-checker) -- WCAG contrast validation library
- [marcysutton/reveal-a11y](https://github.com/marcysutton/reveal-a11y) -- reveal.js accessibility plugin
- [PptxGenJS](https://gitbrent.github.io/PptxGenJS/) -- JavaScript PowerPoint generation
- [PptxGenJS HTML to PowerPoint](https://gitbrent.github.io/PptxGenJS/docs/html-to-powerpoint/) -- table export capability
- [dom-to-pptx](https://github.com/atharva9167j/dom-to-pptx) -- DOM coordinate-based PPTX export (alternative approach)
- [SCQA Framework - ManagementConsulted](https://managementconsulted.com/scqa-framework/) -- SCQA methodology reference
- [Minto Pyramid Principle](https://www.barbaraminto.com/) -- original methodology source
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) -- WCAG contrast ratio standards
