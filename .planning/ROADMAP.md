# Roadmap: Presentation Builder

## Overview

Transform a monolithic reveal.js experiment into a modular, theme-able, AI-friendly slide deck framework. The journey builds outward from a solid foundation of design tokens and reveal.js configuration, through a complete component library (15 layouts), layered theming with PPTX import, German-ready localization with speaker notes, and finally AI integration documentation that ties everything together for prompt-driven deck creation.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Foundation** - Design tokens, reveal.js config, animations, build pipeline, and master layer (completed 2026-03-23)
- [ ] **Phase 2: Essential Components** - Eight core slide layouts that cover 80% of consulting presentations
- [x] **Phase 3: Extended Components** - Six specialized layouts for comparison, timeline, grid, and matrix slides (completed 2026-03-24)
- [x] **Phase 4: Theming & Branding** - Theme system, default theme, PPTX extraction, dark/light variants (completed 2026-03-24)
- [ ] **Phase 5: Localization & Speaker Notes** - German-ready layouts, typography conventions, and speaker notes support
- [ ] **Phase 6: AI Integration & Tooling** - AI instruction files, semantic component catalog, audience presets, PDF export, and gallery mode

## Phase Details

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
- [ ] 06-01-PLAN.md -- Reference files: component catalog, audience presets, design principles, theme system, animation guide
- [ ] 06-02-PLAN.md -- DeckTape PDF export, gallery view, AI-02 deferral housekeeping
- [ ] 06-03-PLAN.md -- Skill router (SKILL.md), three workflows, CLAUDE.md framework teaching content
- [ ] 06-04-PLAN.md -- Three subagent definitions (researcher, strategist, builder)

## Progress

**Execution Order:**
Phases execute in numeric order: 1 -> 2 -> 3 -> 4 -> 5 -> 6

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation | 2/2 | Complete   | 2026-03-23 |
| 2. Essential Components | 0/3 | In progress | - |
| 3. Extended Components | 3/3 | Complete | 2026-03-24 |
| 4. Theming & Branding | 3/3 | Complete | 2026-03-24 |
| 5. Localization & Speaker Notes | 2/3 | In Progress|  |
| 6. AI Integration & Tooling | 0/4 | Not started | - |
