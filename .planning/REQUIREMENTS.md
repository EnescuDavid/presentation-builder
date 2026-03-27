# Requirements: Presentation Builder v2.0

**Defined:** 2026-03-27
**Core Value:** Anyone can clone the repo, import their corporate PowerPoint theme, and build a professional presentation by prompting an AI assistant.

## v2.0 Requirements

### Polish & Fixes (remaining from v1.0 audit)

- [x] **FIX-06**: Nested bullet list styles (`ul ul`, `ol ul`) with visual indentation differentiation across all themes
- [x] **FIX-07**: Theme CSS deduplication — extract shared structural rules to base, themes contain only token overrides
- [ ] **FIX-08**: Print/PDF `@media print` styles in theme files (force backgrounds, hide nav, clean page breaks)
- [ ] **FIX-09**: Dark variant connected to real background color (couple `data-background-color="dark"` to token-based background)
- [x] **FIX-10**: Master footer date auto-population from `presentationConfig.date` (default to current date if empty)

### Data Visualization

- [ ] **VIZ-01**: Chart.js 4.x integration — bar, line, pie, doughnut, radar charts with consulting-grade defaults (token colors, no gridlines, clean axes, annotation support). Conditional CDN loading. Lazy initialization on slide change to handle hidden canvas.
- [ ] **VIZ-02**: Mermaid 11.x diagram integration — flowcharts, sequence diagrams, Gantt charts, org charts. Conditional CDN loading. Theme-aware colors via token-to-Mermaid variable mapping. Fragment animation for progressive diagram reveal.
- [x] **VIZ-03**: Data table component — styled table with header row, alternating colors, right-aligned numbers, 2-6 columns, 3-12 rows. Pure CSS, token-aware.
- [ ] **VIZ-04**: Waterfall/bridge chart component — revenue walks, cost bridges using Chart.js floating bar technique (not plugin). Consulting conventions: grey totals, colored changes.
- [x] **VIZ-05**: Harvey ball component — pure CSS capability-rating dots (0/25/50/75/100%). Inline rendering for tables and comparisons.
- [x] **VIZ-06**: Sparkline/KPI micro-charts — trend lines, mini bars, progress indicators inside metrics cards. Pure CSS/SVG.

### Consulting Intelligence

- [ ] **CONSULT-01**: SCQA narrative scaffolding — strategist subagent structures presentations using Situation-Complication-Question-Answer framework. deck-plan.md includes SCQA markers.
- [ ] **CONSULT-02**: Pyramid Principle validation — strategist checks slide sequence for top-down logic, flags titles without verbs, validates MECE groupings. Output: validation warnings in deck-plan.md.
- [ ] **CONSULT-03**: "Read the titles" summary export — script extracts action titles from all slides into a one-page coherence check document.
- [ ] **CONSULT-04**: Action title enforcement — component catalog, strategist prompts, and validation all require complete-sentence action titles (not topic labels).
- [ ] **CONSULT-05**: Audience preset CSS implementation — modifier classes or `presentationConfig.audience` that adjusts font sizes, content density, animation density per audience type.
- [ ] **CONSULT-06**: Slide count guidance per audience — strategist applies recommended ranges (C-Suite: 8-12, Technical: 15-25, etc.) and warns if deck-plan exceeds.

### Accessibility & Compliance

- [ ] **A11Y-01**: WCAG contrast validation tool — script checks theme color combinations against 4.5:1 (normal text) and 3:1 (large text) ratios. Pass/fail report per color pair.
- [ ] **A11Y-02**: ARIA landmarks in all 14+ component templates — `role`, `aria-label`, correct heading hierarchy.
- [ ] **A11Y-03**: Alt text slots for visual components — required `alt`/`aria-label` on images, charts, diagrams, framework/matrix.
- [ ] **A11Y-04**: Accessible linear HTML export — screen-reader-friendly version without reveal.js framework. Charts replaced with text descriptions.
- [x] **A11Y-05**: Semantic state color tokens — add `--color-warning`, `--color-info`, `--color-overlay`, `--color-on-primary`. Eliminate all hardcoded color values.
- [ ] **A11Y-06**: Keyboard navigation verification — all interactive elements Tab-reachable, focus indicators visible, no keyboard traps.
- [ ] **A11Y-07**: European Accessibility Act compliance checklist — document mapping framework features to EAA requirements, per-presentation checklist.

### Platform Expansion

- [ ] **PLAT-01**: copilot-instructions.md — GitHub Copilot CLI equivalent of CLAUDE.md framework teaching content.
- [ ] **PLAT-02**: PPTX export via PptxGenJS — semantic mapping for core components with image fallback for complex layouts. Node.js script in tools/.
- [x] **PLAT-03**: Team/People component (COMP-20) — photo grid with name, role, contact info. 2-6 team members.
- [ ] **PLAT-04**: Code block styling — `pre`/`code` elements styled in all themes + RevealHighlight plugin loaded.
- [x] **PLAT-05**: Timeline vertical variant — `comp-timeline--vertical` modifier class for 5-6 step layouts.
- [x] **PLAT-06**: Card grid 5-6 item variant — `comp-card-grid--compact` modifier for larger item counts.
- [ ] **PLAT-08**: Gallery UX for component selection — enhanced gallery showing all components with type badges and labels.

## Future Requirements (deferred from v2.0)

- **VIZ-07**: Data-bound slides (CSV/JSON data source) — v3 scope
- **PLAT-07**: Presentation analytics (viewing tracking) — requires server component, conflicts with offline-first

## Out of Scope

| Feature | Reason |
|---------|--------|
| Real-time collaboration | Adds massive complexity, not needed for AI-assisted solo workflow |
| SaaS/hosted version | This is a local framework, not a web app |
| WYSIWYG editor | The AI prompt is the editor |
| React/Vue component wrappers | Keep it plain HTML/CSS for maximum portability |
| npm/npx distribution | Clone-and-use is simpler for the target audience |
| Custom chart rendering engine | Use Chart.js for charts, Mermaid for diagrams |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| FIX-06 | Phase 7 | Complete |
| FIX-07 | Phase 7 | Complete |
| FIX-08 | Phase 10 | Pending |
| FIX-09 | Phase 10 | Pending |
| FIX-10 | Phase 7 | Complete |
| VIZ-01 | Phase 9 | Pending |
| VIZ-02 | Phase 9 | Pending |
| VIZ-03 | Phase 8 | Complete |
| VIZ-04 | Phase 9 | Pending |
| VIZ-05 | Phase 8 | Complete |
| VIZ-06 | Phase 8 | Complete |
| CONSULT-01 | Phase 11 | Pending |
| CONSULT-02 | Phase 11 | Pending |
| CONSULT-03 | Phase 12 | Pending |
| CONSULT-04 | Phase 11 | Pending |
| CONSULT-05 | Phase 10 | Pending |
| CONSULT-06 | Phase 11 | Pending |
| A11Y-01 | Phase 12 | Pending |
| A11Y-02 | Phase 10 | Pending |
| A11Y-03 | Phase 10 | Pending |
| A11Y-04 | Phase 12 | Pending |
| A11Y-05 | Phase 7 | Complete |
| A11Y-06 | Phase 10 | Pending |
| A11Y-07 | Phase 13 | Pending |
| PLAT-01 | Phase 11 | Pending |
| PLAT-02 | Phase 12 | Pending |
| PLAT-03 | Phase 8 | Complete |
| PLAT-04 | Phase 9 | Pending |
| PLAT-05 | Phase 8 | Complete |
| PLAT-06 | Phase 8 | Complete |
| PLAT-08 | Phase 11 | Pending |

**Coverage:**
- v2.0 requirements: 31 total
- Mapped to phases: 31
- Unmapped: 0

---
*Requirements defined: 2026-03-27*
