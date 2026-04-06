# Requirements: Presentation Builder

**Defined:** 2026-04-05
**Core Value:** Anyone can clone the repo, import their corporate PowerPoint theme, and build a professional presentation by prompting an AI assistant -- regardless of which AI tool they use.

## v2.0 Requirements

Requirements for the Agent Pipeline + Component Architecture milestone. Each maps to roadmap phases.

### Component Architecture

- [x] **COMP-01**: Builder copies monolithic `components.css` verbatim into every presentation (pre-written CSS for all 21 components)
- [ ] **COMP-02**: Skeleton template uses `@layer` structure (tokens, animations, base-theme, theme, components, overrides)
- [x] **COMP-03**: Each component exposes `--comp-*` CSS custom properties as only customization surface
- [x] **COMP-04**: Components include state variants and visual micro-patterns
- [ ] **COMP-05**: All 21 templates refactored with exact BEM class names matching components.css
- [ ] **COMP-06**: Component catalog enriched with per-component `--comp-*` variable reference
- [ ] **COMP-07**: Builder agent rewritten to copy locked CSS, use exact class names, `--comp-*` vars only

### Visual Vocabulary

- [x] **VIS-01**: Visual vocabulary reference with 15 content archetypes and bullet-list smell test
- [x] **VIS-02**: Curated Lucide icon set mapped to common consulting concepts
- [x] **VIS-03**: CSS property map reference for slide-stylist agent
- [x] **VIS-04**: Slide-stylist agent produces per-slide CSS tweaks via `@layer overrides`

### Brand System

- [x] **BRAND-01**: `brands/` directory replaces `themes/`, each brand has `brand.yaml` + `rules.md` + `theme.css`
- [x] **BRAND-02**: Hand-written `brand.yaml` for 3 bundled brands (default, startup, enterprise)
- [x] **BRAND-03**: Brand-checker agent validates brief against brand profile and produces `brand-context.md`
- [x] **BRAND-04**: Brand-profiler agent generates `brand.yaml` from corporate assets (PPTX, PDF)
- [x] **BRAND-05**: Onboard-brand workflow with test-presentation generation per component type
- [ ] **BRAND-06**: `_base.css` embedded in skeleton's `@layer base-theme` (not in brands/)

### Orchestration & Entry Points

- [ ] **ORCH-01**: SKILL.md rewritten with model comprehension routing (no keyword dispatch)
- [ ] **ORCH-02**: `/build`, `/refine`, `/onboard` thin slash commands as workspace initializers
- [x] **ORCH-03**: `build-new-deck.md` workflow rewrite with 9-agent orchestration + pipeline resumability
- [x] **ORCH-04**: `refine-deck.md` workflow rewrite with change-scope routing to appropriate agents
- [x] **ORCH-05**: Pipeline state detection from `.pipeline/` artifacts on entry (resume or start fresh)

### Strategist Debate

- [ ] **DEBATE-01**: Narrative-planner agent (SCQA, Pyramid Principle, action titles, visual treatment)
- [ ] **DEBATE-02**: Presentation-architect agent (10 structural checks including brand + brief compliance)
- [ ] **DEBATE-03**: Presentation-critic agent (6 adversarial checks, evidence gaps, "So What" test)
- [ ] **DEBATE-04**: Verdict-driven debate protocol (zero BLOCKINGs = pass, 3-round ceiling, user escalation)
- [ ] **DEBATE-05**: Rich deck-plan.md format with Narrative Flow Map and per-slide specs
- [ ] **DEBATE-06**: Audience-presets.md rewrite with hard rules (enforced) and soft rules (suggested)
- [ ] **DEBATE-07**: Slide-editor agent for surgical HTML edits (content, component swaps, element add/remove)

### Review Pipeline

- [ ] **REVIEW-01**: Presentation-reviewer agent with story + visual + brand compliance checks
- [ ] **REVIEW-02**: Playwright screenshot capture tool (`tools/capture-slides.py`)
- [ ] **REVIEW-03**: Build-log.yaml for pipeline traceability
- [ ] **REVIEW-04**: Review integration in build-new-deck workflow (BLOCKER -> builder auto-fix, max 2 rounds)

## Future Requirements

### Platform Expansion (deferred from v1.0 scope)

- **PLAT-01**: PPTX export via PptxGenJS
- **PLAT-02**: Copilot CLI agent port (after v2.0 agents finalized)

## Out of Scope

| Feature | Reason |
|---------|--------|
| Real-time collaboration | Massive complexity, not needed for AI-assisted solo workflow |
| SaaS/hosted version | This is a local framework, not a web app |
| Slide-by-slide WYSIWYG editor | The AI prompt IS the editor |
| React/Vue component wrappers | Keep it plain HTML/CSS for maximum portability |
| Migration paths from v1 presentations | POC mode, wholesale rewrites acceptable |
| Data visualization components (Chart.js, Mermaid, etc.) | Already shipped in v1.0 component set |
| WCAG/EAA accessibility compliance | Deferred -- focus on pipeline architecture first |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| COMP-01 | Phase 1 | Complete |
| COMP-02 | Phase 1 | Pending |
| COMP-03 | Phase 1 | Complete |
| COMP-04 | Phase 1 | Complete |
| COMP-05 | Phase 1 | Pending |
| COMP-06 | Phase 1 | Pending |
| COMP-07 | Phase 1 | Pending |
| BRAND-06 | Phase 1 | Pending |
| VIS-01 | Phase 2 | Complete |
| VIS-02 | Phase 2 | Complete |
| VIS-03 | Phase 2 | Delivered |
| VIS-04 | Phase 2 | Complete |
| BRAND-01 | Phase 3 | Complete |
| BRAND-02 | Phase 3 | Complete |
| BRAND-03 | Phase 3 | Complete |
| BRAND-04 | Phase 3 | Complete |
| BRAND-05 | Phase 3 | Complete |
| ORCH-01 | Phase 4 | Pending |
| ORCH-02 | Phase 4 | Pending |
| ORCH-03 | Phase 4 | Complete |
| ORCH-04 | Phase 4 | Complete |
| ORCH-05 | Phase 4 | Complete |
| DEBATE-01 | Phase 5 | Pending |
| DEBATE-02 | Phase 5 | Pending |
| DEBATE-03 | Phase 5 | Pending |
| DEBATE-04 | Phase 5 | Pending |
| DEBATE-05 | Phase 5 | Pending |
| DEBATE-06 | Phase 5 | Pending |
| DEBATE-07 | Phase 5 | Pending |
| REVIEW-01 | Phase 6 | Pending |
| REVIEW-02 | Phase 6 | Pending |
| REVIEW-03 | Phase 6 | Pending |
| REVIEW-04 | Phase 6 | Pending |

**Coverage:**
- v2.0 requirements: 33 total
- Mapped to phases: 33
- Unmapped: 0

---
*Requirements defined: 2026-04-05*
*Last updated: 2026-04-05 after roadmap creation*
