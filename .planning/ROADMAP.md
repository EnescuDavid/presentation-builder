# Roadmap: Presentation Builder

## Milestones

- ✅ **v1.0 MVP** - Phases 1-6 (shipped 2026-03-27)
- 🚧 **v2.0 Agent Pipeline + Component Architecture** - Phases 1-6 (in progress)

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

### v2.0 Agent Pipeline + Component Architecture

**Milestone Goal:** Rewrite the presentation builder from a single-strategist, template-ignoring system into a multi-agent pipeline with locked CSS, visual argumentation, brand awareness, and consensus debate.

- [x] **Phase 1: Component Architecture** - Monolithic components.css, @layer skeleton, --comp-* variable contract, template rewrite, builder agent rewrite (completed 2026-04-05)
- [ ] **Phase 2: Visual Vocabulary** - 15 content archetypes, bullet-list smell test, curated icons, CSS property map, slide-stylist agent
- [ ] **Phase 3: Brand System** - brands/ directory, brand.yaml + rules.md per brand, brand-checker/profiler agents, onboard-brand workflow
- [ ] **Phase 4: Orchestration & Entry Points** - SKILL.md rewrite, /build /refine /onboard commands, workflow rewrites, pipeline resumability
- [ ] **Phase 5: Strategist Debate** - Narrative-planner, architect, critic agents, verdict-driven debate protocol, rich deck-plan.md, audience hard/soft rules, slide-editor agent
- [ ] **Phase 6: Review Pipeline** - Presentation-reviewer agent, Playwright screenshots, build-log.yaml, review integration in build workflow

## Phase Details

### Phase 1: Component Architecture
**Goal**: Builder produces presentations with near-100% CSS adherence by copying locked, pre-written component CSS verbatim
**Depends on**: v1.0 (all phases shipped)
**Requirements**: COMP-01, COMP-02, COMP-03, COMP-04, COMP-05, COMP-06, COMP-07, BRAND-06
**Success Criteria** (what must be TRUE):
  1. Monolithic `components.css` contains pre-written CSS for all 21 components with `--comp-*` variables as only customization surface
  2. Skeleton template uses `@layer tokens, animations, base-theme, theme, components, overrides` structure
  3. All 21 templates refactored with exact BEM class names matching components.css
  4. Component catalog enriched with per-component `--comp-*` variable reference
  5. Builder agent copies locked CSS verbatim, uses exact class names, generates `@layer overrides` map
**Plans**: 5 plans

Plans:
- [x] 01-01-PLAN.md -- Monolithic components.css with @layer structure and --comp-* variable contract
- [x] 01-02-PLAN.md -- Skeleton template rewrite with @layer ordering and _base.css embedding
- [x] 01-03-PLAN.md -- All 21 template rewrites with BEM class names matching components.css
- [x] 01-04-PLAN.md -- Component catalog enrichment with --comp-* variable reference per component
- [x] 01-05-PLAN.md -- Builder agent rewrite (locked CSS, exact class names, @layer overrides map)

### Phase 2: Visual Vocabulary
**Goal**: AI agents have a visual vocabulary reference that maps content types to visual treatments, with a slide-stylist agent that applies per-slide CSS tweaks
**Depends on**: Phase 1
**Requirements**: VIS-01, VIS-02, VIS-03, VIS-04
**Success Criteria** (what must be TRUE):
  1. Visual vocabulary reference documents 15 content archetypes with recommended component + visual treatment for each
  2. Bullet-list smell test identifies slides that are just bullet lists and suggests visual alternatives
  3. Curated Lucide icon set is mapped to common consulting concepts (growth, risk, timeline, etc.)
  4. CSS property map reference documents every `--comp-*` variable and safe CSS properties for the slide-stylist agent
  5. Slide-stylist agent produces per-slide CSS tweaks via `@layer overrides` without modifying components.css
**Plans**: TBD

### Phase 3: Brand System
**Goal**: Corporate branding is managed through a structured brands/ directory with machine-readable profiles, automated extraction, and agent-driven validation
**Depends on**: Phase 2
**Requirements**: BRAND-01, BRAND-02, BRAND-03, BRAND-04, BRAND-05
**Success Criteria** (what must be TRUE):
  1. `brands/` directory replaces `themes/`, each brand has `brand.yaml` + `rules.md` + `theme.css`
  2. Hand-written `brand.yaml` exists for 3 bundled brands (default, startup, enterprise)
  3. Brand-checker agent validates brief against brand profile and produces `brand-context.md`
  4. Brand-profiler agent generates `brand.yaml` from corporate assets (PPTX, PDF, style guides)
  5. Onboard-brand workflow generates test presentations per component type to verify brand rendering
**Plans**: TBD

### Phase 4: Orchestration & Entry Points
**Goal**: The presentation builder has clean entry points with model comprehension routing, pipeline resumability, and workspace-initializing slash commands
**Depends on**: Phase 3
**Requirements**: ORCH-01, ORCH-02, ORCH-03, ORCH-04, ORCH-05
**Success Criteria** (what must be TRUE):
  1. SKILL.md uses model comprehension routing (not keyword dispatch) to select the right workflow
  2. `/build`, `/refine`, `/onboard` slash commands initialize workspaces and route to workflows
  3. `build-new-deck.md` workflow orchestrates the full agent pipeline with resumability from any stage
  4. `refine-deck.md` workflow routes change requests to the appropriate agent (stylist, editor, strategist)
  5. Pipeline state detection resumes from `.pipeline/` artifacts on entry instead of starting fresh
**Plans**: TBD

### Phase 5: Strategist Debate
**Goal**: Presentations are structured through a multi-agent consensus debate that enforces consulting methodology (SCQA, Pyramid Principle, action titles)
**Depends on**: Phase 4
**Requirements**: DEBATE-01, DEBATE-02, DEBATE-03, DEBATE-04, DEBATE-05, DEBATE-06, DEBATE-07
**Success Criteria** (what must be TRUE):
  1. Narrative-planner agent structures presentations using SCQA framework and Pyramid Principle with action titles and visual treatment suggestions
  2. Presentation-architect agent runs 10 structural checks including brand + brief compliance
  3. Presentation-critic agent runs 6 adversarial checks (evidence gaps, "So What" test, audience fit)
  4. Verdict-driven debate protocol resolves with zero BLOCKINGs = pass, 3-round ceiling, user escalation
  5. Rich deck-plan.md format includes Narrative Flow Map and per-slide specs
  6. Audience-presets.md rewritten with hard rules (enforced) and soft rules (suggested)
  7. Slide-editor agent performs surgical HTML edits (content, component swaps, element add/remove)
**Plans**: TBD

### Phase 6: Review Pipeline
**Goal**: Built presentations go through automated review with visual verification, compliance checks, and traceable build logs
**Depends on**: Phase 5
**Requirements**: REVIEW-01, REVIEW-02, REVIEW-03, REVIEW-04
**Success Criteria** (what must be TRUE):
  1. Presentation-reviewer agent checks story coherence, visual quality, and brand compliance
  2. Playwright screenshot capture tool (`tools/capture-slides.py`) produces per-slide images for visual review
  3. Build-log.yaml records every pipeline decision for traceability and debugging
  4. Review integration in build-new-deck workflow auto-routes BLOCKER findings to builder for fix (max 2 rounds)
**Plans**: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 -> 2 -> 3 -> 4 -> 5 -> 6

| Phase | Milestone | Plans Complete | Status | Completed |
|-------|-----------|----------------|--------|-----------|
| 1. Component Architecture | v2.0 | 5/5 | Complete | 2026-04-05 |
| 2. Visual Vocabulary | v2.0 | 0/0 | Not started | - |
| 3. Brand System | v2.0 | 0/0 | Not started | - |
| 4. Orchestration & Entry Points | v2.0 | 0/0 | Not started | - |
| 5. Strategist Debate | v2.0 | 0/0 | Not started | - |
| 6. Review Pipeline | v2.0 | 0/0 | Not started | - |
