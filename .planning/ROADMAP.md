# Roadmap: Presentation Builder

## Milestones

- ✅ **v1.0 MVP** - Phases 1-6 (shipped 2026-03-27)
- 🚧 **v2.0 Data Viz, Consulting Intelligence & Platform** - Phases 7-13 (in progress)

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

<details>
<summary>v1.0 MVP (Phases 1-6) - SHIPPED 2026-03-27</summary>

- [x] **Phase 1: Foundation** - Design tokens, reveal.js config, animations, build pipeline, and master layer (completed 2026-03-23)
- [x] **Phase 2: Essential Components** - Eight core slide layouts that cover 80% of consulting presentations
- [x] **Phase 3: Extended Components** - Six specialized layouts for comparison, timeline, grid, and matrix slides (completed 2026-03-24)
- [x] **Phase 4: Theming & Branding** - Theme system, default theme, PPTX extraction, dark/light variants (completed 2026-03-24)
- [x] **Phase 5: Localization & Speaker Notes** - German-ready layouts, typography conventions, and speaker notes support
- [x] **Phase 6: AI Integration & Tooling** - AI instruction files, semantic component catalog, audience presets, PDF export, and gallery mode (completed 2026-03-25)

### Phase 1: Foundation
**Goal**: A working reveal.js scaffold where developers can create slides using design tokens, animations, and a persistent master layer -- all assembling into a single self-contained HTML file
**Depends on**: Nothing (first phase)
**Requirements**: CORE-01, CORE-02, CORE-03, CORE-04, CORE-05, CORE-06
**Success Criteria** (what must be TRUE):
  1. Developer can create a slide using CSS custom properties for colors, fonts, spacing, and shadows -- changing a token value updates every slide that references it
  2. A reveal.js presentation loads in 16:9 with keyboard navigation, progress bar, and speaker notes enabled out of the box
  3. Developer can apply entrance animation classes (fadeUp, blurIn, slideL, scalePop) to any element and see smooth transitions during presentation
  4. Running the build command produces a single self-contained HTML file that opens and renders correctly in Chrome, Firefox, and Safari
  5. Every slide shows a persistent logo, footer bar, and slide number from the master layer
**Plans**: 2 plans

Plans:
- [x] 01-01-PLAN.md -- Design tokens, animation library, and reveal.js skeleton template
- [x] 01-02-PLAN.md -- Default theme, example presentation assembly, and browser verification

### Phase 2: Essential Components
**Goal**: Eight foundational slide components are available as copy-paste HTML templates, covering the layouts used in the vast majority of consulting decks
**Depends on**: Phase 1
**Requirements**: COMP-01, COMP-02, COMP-03, COMP-04, COMP-05, COMP-06, COMP-07, COMP-08
**Success Criteria** (what must be TRUE):
  1. Developer can create a title slide with hero text, subtitle, and background image by copying the COMP-01 template and filling content slots
  2. Developer can build a section break, text-heavy, two-column, metrics, image full-bleed, agenda, and summary slide -- each from its own distinct template
  3. All eight components render cleanly within the design token system and respect the master layer (logo, footer, slide numbers visible)
  4. Each component works with placeholder content of varying lengths without layout breakage
**Plans**: 3 plans

Plans:
- [x] 02-01-PLAN.md -- Title/Cover, Section Break, Text-Heavy, and Two-Column component templates
- [x] 02-02-PLAN.md -- Metrics/KPI, Image Full-Bleed, Agenda, and Summary/Takeaway component templates
- [x] 02-03-PLAN.md -- Component index catalog and example presentation with all 8 components

### Phase 3: Extended Components
**Goal**: Six specialized slide components complete the 14-layout library, enabling advanced consulting patterns like comparisons, timelines, and frameworks
**Depends on**: Phase 2
**Requirements**: COMP-09, COMP-10, COMP-11, COMP-12, COMP-13, COMP-14
**Success Criteria** (what must be TRUE):
  1. Developer can create contact/CTA, comparison, timeline, quote, card grid, and framework/matrix slides from templates
  2. Timeline component correctly renders 3-6 sequential steps with visual connectors
  3. Framework/matrix component displays a labeled 2x2 quadrant grid that maintains alignment across content lengths
  4. All six components integrate with existing design tokens, animations, and master layer from Phases 1-2
**Plans**: 3 plans

Plans:
- [x] 03-01-PLAN.md -- Contact/CTA, Quote/Testimonial, and Comparison component templates
- [x] 03-02-PLAN.md -- Timeline/Process, Card Grid, and Framework/Matrix component templates
- [x] 03-03-PLAN.md -- Component index catalog update and example presentation with all 14 components

### Phase 4: Theming & Branding
**Goal**: Corporate branding can be applied on top of the component library via a theme layer, including automated extraction from PowerPoint templates
**Depends on**: Phase 3
**Requirements**: THEME-01, THEME-02, THEME-03, THEME-04, THEME-05, THEME-06
**Success Criteria** (what must be TRUE):
  1. Framework ships with a polished default theme that produces consulting-grade output (clean typography, proper hierarchy, professional color palette)
  2. Developer can create a new theme CSS file that overrides design tokens, and all 14 components adopt the new branding automatically
  3. Running the PPTX extraction tool against a corporate .pptx template generates a CSS theme file with extracted colors (12 slots), fonts (2 families), and logo images
  4. Developer can set a slide to dark or light background variant, and text/element colors adjust accordingly
  5. Logo placement and footer content (company name, confidentiality text, slide number) are configurable per theme
**Plans**: 3 plans

Plans:
- [x] 04-01-PLAN.md -- Polish default theme, create startup and enterprise personality themes, dark/light variants
- [x] 04-02-PLAN.md -- PPTX theme extraction tool with test fixture and verification
- [x] 04-03-PLAN.md -- Themed showcase presentation and skeleton template update with visual checkpoint

### Phase 5: Localization & Speaker Notes
**Goal**: All components handle German text gracefully, with typography conventions documented and speaker notes infrastructure in place
**Depends on**: Phase 4
**Requirements**: LANG-01, LANG-02, LANG-03, NOTE-01, NOTE-02, NOTE-03
**Success Criteria** (what must be TRUE):
  1. All 14 components render correctly with German text at 130-300% expansion -- no overflow, truncation, or visual breakage
  2. CSS includes German typography defaults (quotation marks, dash conventions, decimal comma guidance) that apply automatically
  3. A complete demo presentation exists with German content showcasing all components
  4. Speaker notes injection mechanism is documented with file format and HTML examples, and notes display correctly in reveal.js speaker view when injected at generation time
  5. Documentation provides AI prompt patterns for generating speaker notes and timing estimation guidance (words-per-minute to duration)
**Plans**: 3 plans

Plans:
- [x] 05-01-PLAN.md -- Global German text handling CSS, umlaut fixes, and typography conventions reference
- [x] 05-02-PLAN.md -- Speaker notes infrastructure documentation with file format and injection mechanism
- [x] 05-03-PLAN.md -- Complete German demo presentation with all 14 components and speaker notes

### Phase 6: AI Integration & Tooling
**Goal**: Any AI coding assistant can generate professional presentations from natural language prompts using the framework's documentation and component catalog
**Depends on**: Phase 5
**Requirements**: AI-01, AI-02, AI-03, AI-04, COMP-15, TOOL-01, TOOL-02, TOOL-03
**Success Criteria** (what must be TRUE):
  1. CLAUDE.md exists and teaches Claude Code the full framework: component catalog, theme system, build process, and audience presets
  2. copilot-instructions.md exists with equivalent guidance for GitHub Copilot CLI
  3. Each of the 14 components has a semantic description file documenting when to use it, required content slots, optional variants, and layout behavior
  4. Audience presets (C-Suite, technical, sales, workshop, internal) are documented with design rules an AI can apply (font sizes, content density, visual weight)
  5. PDF export works via DeckTape, presentation works with full reveal.js navigation, and a gallery/thumbnail view shows all slides on one page
**Plans**: 4 plans

Plans:
- [x] 06-01-PLAN.md -- Reference files: component catalog, audience presets, design principles, theme system, animation guide
- [x] 06-02-PLAN.md -- DeckTape PDF export, gallery view, AI-02 deferral housekeeping
- [x] 06-03-PLAN.md -- Skill router (SKILL.md), three workflows, CLAUDE.md framework teaching content
- [x] 06-04-PLAN.md -- Three subagent definitions (researcher, strategist, builder)

</details>

### v2.0 Data Viz, Consulting Intelligence & Platform

**Milestone Goal:** Add data visualization components, consulting methodology intelligence, accessibility compliance, and platform expansion to transform the framework from a layout tool into a full consulting presentation platform.

- [ ] **Phase 7: Foundation Fixes & Token Expansion** - Fix v1 bugs, deduplicate theme CSS, expand design token palette
- [ ] **Phase 8: Pure CSS Components** - Data tables, Harvey balls, sparklines, team/people, timeline vertical, card grid compact
- [ ] **Phase 9: CDN-Dependent Components** - Chart.js charts, Mermaid diagrams, waterfall charts, code blocks
- [ ] **Phase 10: Audience Presets & Accessibility CSS** - Audience modifier classes, print CSS, dark variant fix, ARIA landmarks, keyboard nav
- [ ] **Phase 11: Consulting Intelligence & AI Skill Layer** - SCQA scaffolding, Pyramid Principle, action titles, slide count guidance, copilot-instructions.md, gallery UX
- [ ] **Phase 12: Export Tools** - PPTX export, accessible HTML export, WCAG contrast validator, read-the-titles script
- [ ] **Phase 13: Documentation & Compliance** - EAA compliance checklist and accessibility documentation

## Phase Details

### Phase 7: Foundation Fixes & Token Expansion
**Goal**: The existing v1 framework is bug-free, theme CSS is deduplicated for maintainability, and the design token palette covers all semantic use cases including state colors
**Depends on**: Phase 6
**Requirements**: FIX-06, FIX-07, FIX-10, A11Y-05
**Success Criteria** (what must be TRUE):
  1. Nested bullet lists (`ul ul`, `ol ul`) display with visually distinct indentation across all three themes
  2. Theme CSS files contain only token overrides -- shared structural rules live in a single base file with no duplication
  3. Footer date auto-populates from `presentationConfig.date` and defaults to the current date when the field is empty
  4. Design tokens include `--color-warning`, `--color-info`, `--color-overlay`, and `--color-on-primary` with no hardcoded color values remaining in any CSS file
**Plans**: 2 plans

Plans:
- [x] 07-01-PLAN.md -- Theme CSS deduplication (extract shared structural rules to _base.css) and nested bullet list styles
- [ ] 07-02-PLAN.md -- Semantic state color tokens, hardcoded color replacement, and German date auto-population

### Phase 8: Pure CSS Components
**Goal**: Six new component templates extend the library to 20+ layouts using only CSS -- no external library dependencies
**Depends on**: Phase 7
**Requirements**: VIZ-03, VIZ-05, VIZ-06, PLAT-03, PLAT-05, PLAT-06
**Success Criteria** (what must be TRUE):
  1. Data table component renders 2-6 columns and 3-12 rows with header styling, alternating row colors, and right-aligned numbers using design tokens
  2. Harvey ball component displays 5 states (0/25/50/75/100%) as pure CSS dots that render inline within tables and comparison slides
  3. Sparkline/KPI micro-charts (trend lines, mini bars, progress indicators) render inside metrics cards without JavaScript
  4. Team/People component displays 2-6 team members with photo, name, role, and contact info in a responsive grid
  5. Timeline vertical variant (`comp-timeline--vertical`) and card grid compact variant (`comp-card-grid--compact`) work correctly with 5-6 items
**Plans**: TBD

Plans:
- [ ] 08-01: TBD
- [ ] 08-02: TBD

### Phase 9: CDN-Dependent Components
**Goal**: Chart.js and Mermaid integration gives users data visualization and diagramming capabilities with consulting-grade defaults and conditional loading
**Depends on**: Phase 8
**Requirements**: VIZ-01, VIZ-02, VIZ-04, PLAT-04
**Success Criteria** (what must be TRUE):
  1. Chart.js renders bar, line, pie, doughnut, and radar charts with token-based colors, no gridlines, clean axes, and annotation support -- charts initialize correctly on slide change
  2. Mermaid renders flowcharts, sequence diagrams, Gantt charts, and org charts with theme-aware colors derived from design tokens
  3. Waterfall/bridge chart displays revenue walks and cost bridges with grey totals and colored changes using Chart.js floating bar technique
  4. Code blocks (`pre`/`code`) are styled across all themes with RevealHighlight plugin loaded and syntax highlighting active
  5. CDN scripts load conditionally -- presentations without charts or diagrams incur zero additional payload
**Plans**: TBD

Plans:
- [ ] 09-01: TBD
- [ ] 09-02: TBD

### Phase 10: Audience Presets & Accessibility CSS
**Goal**: Presentations adapt to their audience via CSS modifier classes, print cleanly, and meet baseline accessibility standards in HTML structure
**Depends on**: Phase 9
**Requirements**: CONSULT-05, FIX-08, FIX-09, A11Y-02, A11Y-03, A11Y-06
**Success Criteria** (what must be TRUE):
  1. Setting `presentationConfig.audience` (or adding a modifier class) adjusts font sizes, content density, and animation density for the target audience type
  2. Print/PDF output via `@media print` forces backgrounds, hides navigation, and produces clean page breaks across all themes
  3. Dark variant slides correctly derive background color from design tokens when `data-background-color="dark"` is set
  4. All 20+ component templates include correct ARIA landmarks (`role`, `aria-label`) and maintain proper heading hierarchy (h1 > h2 > h3)
  5. All interactive elements are Tab-reachable with visible focus indicators, and visual components (images, charts, diagrams, frameworks) have required alt text or aria-label slots
**Plans**: TBD

Plans:
- [ ] 10-01: TBD
- [ ] 10-02: TBD

### Phase 11: Consulting Intelligence & AI Skill Layer
**Goal**: AI assistants apply consulting methodology (SCQA, Pyramid Principle, action titles) when generating presentations, with platform-agnostic instruction files
**Depends on**: Phase 10
**Requirements**: CONSULT-01, CONSULT-02, CONSULT-04, CONSULT-06, PLAT-01, PLAT-08
**Success Criteria** (what must be TRUE):
  1. Strategist subagent structures presentations using SCQA framework and includes SCQA markers in deck-plan.md
  2. Strategist validates slide sequences for top-down logic, flags titles without verbs, checks MECE groupings, and outputs validation warnings in deck-plan.md
  3. Component catalog, strategist prompts, and validation all enforce complete-sentence action titles (not topic labels)
  4. Strategist applies audience-specific slide count ranges (C-Suite: 8-12, Technical: 15-25) and warns when deck-plan exceeds the recommended range
  5. copilot-instructions.md exists with equivalent framework teaching content for GitHub Copilot CLI, and the gallery view shows all components with type badges and labels
**Plans**: TBD

Plans:
- [ ] 11-01: TBD
- [ ] 11-02: TBD

### Phase 12: Export Tools
**Goal**: Users can export presentations to PPTX, accessible HTML, and title-summary formats, with automated WCAG contrast checking
**Depends on**: Phase 11
**Requirements**: PLAT-02, A11Y-01, A11Y-04, CONSULT-03
**Success Criteria** (what must be TRUE):
  1. Running the PPTX export script produces an editable .pptx file with semantic component mappings for core layouts and image fallbacks for complex ones
  2. Accessible HTML export generates a screen-reader-friendly linear document without reveal.js framework, with charts replaced by text descriptions
  3. WCAG contrast validator checks all theme color combinations against 4.5:1 (normal text) and 3:1 (large text) ratios and produces a pass/fail report
  4. "Read the titles" script extracts action titles from all slides into a one-page coherence check document
**Plans**: TBD

Plans:
- [ ] 12-01: TBD
- [ ] 12-02: TBD

### Phase 13: Documentation & Compliance
**Goal**: The framework's accessibility compliance is documented with a traceable checklist mapping features to European Accessibility Act requirements
**Depends on**: Phase 12
**Requirements**: A11Y-07
**Success Criteria** (what must be TRUE):
  1. EAA compliance checklist exists mapping framework features to European Accessibility Act requirements
  2. Per-presentation checklist template allows users to verify their specific deck meets EAA requirements before distribution
**Plans**: TBD

Plans:
- [ ] 13-01: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 7 -> 8 -> 9 -> 10 -> 11 -> 12 -> 13

| Phase | Milestone | Plans Complete | Status | Completed |
|-------|-----------|----------------|--------|-----------|
| 1. Foundation | v1.0 | 2/2 | Complete | 2026-03-23 |
| 2. Essential Components | v1.0 | 3/3 | Complete | 2026-03-23 |
| 3. Extended Components | v1.0 | 3/3 | Complete | 2026-03-24 |
| 4. Theming & Branding | v1.0 | 3/3 | Complete | 2026-03-24 |
| 5. Localization & Speaker Notes | v1.0 | 3/3 | Complete | 2026-03-25 |
| 6. AI Integration & Tooling | v1.0 | 4/4 | Complete | 2026-03-25 |
| 7. Foundation Fixes & Token Expansion | v2.0 | 0/2 | Planned | - |
| 8. Pure CSS Components | v2.0 | 0/? | Not started | - |
| 9. CDN-Dependent Components | v2.0 | 0/? | Not started | - |
| 10. Audience Presets & Accessibility CSS | v2.0 | 0/? | Not started | - |
| 11. Consulting Intelligence & AI Skill Layer | v2.0 | 0/? | Not started | - |
| 12. Export Tools | v2.0 | 0/? | Not started | - |
| 13. Documentation & Compliance | v2.0 | 0/? | Not started | - |
