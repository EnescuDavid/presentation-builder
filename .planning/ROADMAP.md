# Roadmap: Presentation Builder v2.0

## Overview

Rewrite the presentation builder from a single-strategist, template-ignoring system into a 10-agent pipeline with locked CSS, visual argumentation, brand awareness, and consensus debate. Three parallel foundation tracks (component architecture, visual vocabulary, brand system) feed into orchestration and strategist overhaul, culminating in a review pipeline that closes the quality loop.

## Milestones

- v1.0 MVP (Shipped: 2026-03-27) -- 6 phases, 18 plans
- v2.0 Agent Pipeline + Component Architecture (In progress)

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

**Dependency Waves:**
- Wave 1 (parallel): Phases 1, 2, 3
- Wave 2 (needs Wave 1 subsets): Phases 4, 5
- Wave 3 (needs everything): Phase 6

- [ ] **Phase 1: Component Architecture** - Monolithic locked CSS, @layer skeleton, --comp-* variables, template refactoring, builder rewrite
- [ ] **Phase 2: Visual Vocabulary + Stylist** - 15 content archetypes, icon set, CSS property map, slide-stylist agent
- [ ] **Phase 3: Brand System** - brands/ directory, brand.yaml for 3 brands, brand-checker/profiler agents, onboard workflow
- [ ] **Phase 4: SKILL.md + Slash Commands + Workflows** - Comprehension routing, /build /refine /onboard commands, pipeline resumability
- [ ] **Phase 5: Strategist Overhaul** - 3-agent debate (planner/architect/critic), slide-editor, deck-plan format, audience presets
- [ ] **Phase 6: Review Pipeline** - Presentation-reviewer, Playwright screenshots, build-log, review integration

## Phase Details

### Phase 1: Component Architecture
**Goal**: Builder produces presentations with near-100% CSS adherence by copying locked, pre-written component CSS verbatim
**Depends on**: Nothing (Wave 1)
**Requirements**: COMP-01, COMP-02, COMP-03, COMP-04, COMP-05, COMP-06, COMP-07, BRAND-06
**Success Criteria** (what must be TRUE):
  1. A generated presentation includes a single `components.css` block containing pre-written CSS for all 21 components -- builder never writes component CSS from scratch
  2. The skeleton template layers CSS in strict order (tokens, animations, base-theme, theme, components, overrides) and each layer is independently overridable
  3. Builder customizes component appearance only through `--comp-*` CSS custom properties, never by writing raw CSS rules
  4. All 21 HTML templates use exact BEM class names that match `components.css` definitions, and the component catalog documents every `--comp-*` variable
  5. Components support state variants (e.g., active, highlighted, compact) that the builder can toggle via class names
**Plans:** 5 plans

Plans:
- [ ] 01-01-PLAN.md -- Author components.css (21 components) and visuals.css (9 micro-patterns)
- [ ] 01-02-PLAN.md -- Rewrite 11 templates (title through timeline)
- [ ] 01-03-PLAN.md -- Rewrite 10 templates (quote through team)
- [ ] 01-04-PLAN.md -- Enrich component catalog + rewrite skeleton with @layer structure
- [ ] 01-05-PLAN.md -- Rewrite builder agent with locked CSS contract

**UI hint**: yes

### Phase 2: Visual Vocabulary + Stylist
**Goal**: AI agents select visual treatments based on content archetypes instead of defaulting to bullet lists
**Depends on**: Nothing (Wave 1, parallel with Phases 1 and 3)
**Requirements**: VIS-01, VIS-02, VIS-03, VIS-04
**Success Criteria** (what must be TRUE):
  1. Strategist can look up any of 15 content archetypes (e.g., "comparison", "process flow", "single metric") and get a recommended component + visual treatment
  2. Builder can insert semantically appropriate Lucide icons for common consulting concepts (growth, risk, timeline, etc.) without inventing icon names
  3. Slide-stylist agent can produce per-slide CSS overrides in `@layer overrides` that adjust spacing, emphasis, or color without touching component CSS
  4. A bullet-list smell test flags slides that could use a richer visual treatment, preventing lazy text-heavy defaults
**Plans**: TBD

### Phase 3: Brand System
**Goal**: Users can onboard their corporate brand once and have every presentation automatically follow brand rules
**Depends on**: Nothing (Wave 1, parallel with Phases 1 and 2)
**Requirements**: BRAND-01, BRAND-02, BRAND-03, BRAND-04, BRAND-05
**Success Criteria** (what must be TRUE):
  1. Each brand lives in `brands/{name}/` with `brand.yaml` (colors, fonts, logo, component biases), `rules.md` (do/don't guidelines), and `theme.css` (CSS overrides)
  2. Three bundled brands (default, startup, enterprise) ship with complete hand-written `brand.yaml` files ready for immediate use
  3. Brand-checker agent reads the user's brief and brand profile, then produces a `brand-context.md` that downstream agents consume for brand-consistent decisions
  4. Brand-profiler agent can generate a `brand.yaml` from a corporate PPTX or PDF, extracting colors, fonts, and logo
  5. Onboard-brand workflow generates a test presentation exercising multiple component types to verify the new brand looks correct
**Plans**: TBD
**UI hint**: yes

### Phase 4: SKILL.md + Slash Commands + Workflows
**Goal**: Users invoke the pipeline through natural slash commands and the system resumes interrupted pipelines without losing work
**Depends on**: Phase 1, Phase 2, Phase 3
**Requirements**: ORCH-01, ORCH-02, ORCH-03, ORCH-04, ORCH-05
**Success Criteria** (what must be TRUE):
  1. SKILL.md routes user intent through model comprehension (understanding what the user wants) rather than keyword matching
  2. `/build`, `/refine`, and `/onboard` commands initialize the correct workspace and launch the appropriate workflow with minimal user friction
  3. `build-new-deck` workflow orchestrates the full 9-agent pipeline from brief through debate through build, with each agent receiving the right context
  4. `refine-deck` workflow routes change requests to the appropriate agent (stylist for CSS, editor for content, full debate for structural changes)
  5. Pipeline detects existing `.pipeline/` artifacts on entry and offers to resume from last checkpoint instead of starting over
**Plans**: TBD

### Phase 5: Strategist Overhaul
**Goal**: Deck plans emerge from genuine multi-agent debate rather than single-agent self-review, producing richer narrative structure
**Depends on**: Phase 2, Phase 3
**Requirements**: DEBATE-01, DEBATE-02, DEBATE-03, DEBATE-04, DEBATE-05, DEBATE-06, DEBATE-07
**Success Criteria** (what must be TRUE):
  1. Narrative-planner produces a deck plan with SCQA framing, Pyramid Principle structure, action titles, and per-slide visual treatment recommendations
  2. Presentation-architect runs 10 structural checks (including brand compliance and brief alignment) and can issue BLOCKING verdicts that prevent progression
  3. Presentation-critic runs 6 adversarial checks (evidence gaps, "So What" test, audience mismatch) independently from the architect
  4. Debate resolves automatically when zero BLOCKINGs remain, caps at 3 rounds, and escalates to user if stuck
  5. Slide-editor agent can make surgical HTML edits (swap a component, change content, add/remove elements) without regenerating the entire presentation
**Plans**: TBD

### Phase 6: Review Pipeline
**Goal**: Every generated presentation passes automated quality checks before delivery, catching visual and narrative issues the builder missed
**Depends on**: Phase 1, Phase 3, Phase 4, Phase 5
**Requirements**: REVIEW-01, REVIEW-02, REVIEW-03, REVIEW-04
**Success Criteria** (what must be TRUE):
  1. Presentation-reviewer agent checks story coherence, visual consistency, and brand compliance against the deck plan and brand profile
  2. Playwright captures a screenshot of every slide, giving the reviewer visual evidence to judge layout and readability
  3. Build-log.yaml records every pipeline decision (which agents ran, what verdicts were given, what was changed) for traceability
  4. Review integration in build-new-deck triggers auto-fix via builder when reviewer issues BLOCKERs, with a 2-round ceiling before escalating to user
**Plans**: TBD

## Progress

**Execution Order:**
Wave 1 (parallel): Phases 1, 2, 3
Wave 2: Phases 4, 5 (after their dependencies complete)
Wave 3: Phase 6 (after all prior phases)

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Component Architecture | 0/5 | Planned | - |
| 2. Visual Vocabulary + Stylist | 0/TBD | Not started | - |
| 3. Brand System | 0/TBD | Not started | - |
| 4. SKILL.md + Slash Commands + Workflows | 0/TBD | Not started | - |
| 5. Strategist Overhaul | 0/TBD | Not started | - |
| 6. Review Pipeline | 0/TBD | Not started | - |
