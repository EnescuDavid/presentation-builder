# Presentation Builder

## What This Is

A shareable, code-based slide deck framework that turns natural language prompts into polished, self-contained HTML presentations powered by reveal.js. Designed for strategic consultants who build decks constantly — pitch decks, board presentations, stakeholder updates, technical deep-dives — across different audiences and corporate brands. The framework provides a 21-component library with semantic descriptions so any AI coding assistant can automatically select the right layouts and assemble professional slides from natural language prompts.

## Core Value

Anyone can clone the repo, import their corporate PowerPoint theme, and build a professional presentation by prompting an AI assistant — regardless of which AI tool they use.

## Current Milestone: v2.0 Agent Pipeline + Component Architecture

**Goal:** Rewrite the presentation builder from a single-strategist, template-ignoring system into a 10-agent pipeline with locked CSS, visual argumentation, brand awareness, and consensus debate.

**Target features:**
- Component Architecture — Monolithic `components.css` with `@layer` structure, `--comp-*` variables as only customization surface, builder copies CSS verbatim (fixes 40-50% adherence gap)
- Visual Vocabulary + Stylist — 15 content archetypes, bullet-list smell test, curated icons, slide-stylist agent for `@layer overrides`
- Brand System — `brands/` directory replacing `themes/`, `brand.yaml` + `rules.md` per brand, brand-checker/profiler agents, onboard-brand workflow
- SKILL.md + Slash Commands — Model comprehension routing (not keyword dispatch), `/build` `/refine` `/onboard` commands, pipeline resumability
- Strategist Overhaul — 3-agent consensus debate (planner/architect/critic), slide-editor agent, rich deck-plan.md format, audience hard/soft rules
- Review Pipeline — presentation-reviewer agent, Playwright screenshots, build-log.yaml

## Requirements

### Validated (v1.0)

- [x] Reusable design token system (CSS custom properties for colors, fonts, spacing, shadows) — v1.0
- [x] Animation library (fadeUp, blurIn, slideL, slideR, scalePop, lineGrow) — v1.0
- [x] Self-contained HTML output — single file, zero runtime dependencies beyond CDN — v1.0
- [x] 21 slide component templates — v1.0
- [x] Theme layer with CSS custom property overrides — v1.0
- [x] PPTX theme extraction tool (12 color slots, 2 font families, logos) — v1.0
- [x] PDF export via DeckTape — v1.0
- [x] Speaker notes infrastructure (YAML format, generation-time injection) — v1.0
- [x] German-first typography (text handling CSS, conventions reference) — v1.0
- [x] Semantic component descriptions in AI-readable catalog — v1.0
- [x] Claude Code skill with subagent pipeline (researcher, strategist, builder) — v1.0
- [x] Audience presets documented with design rules (6 types) — v1.0
- [x] Clone-and-use installation — v1.0

### Validated (Phase 1 — Component Architecture, 2026-04-05)

- [x] Monolithic `components.css` with pre-written CSS for all 21 components
- [x] `@layer` structure in skeleton (tokens, animations, base-theme, theme, components, overrides)
- [x] `--comp-*` CSS variables as only builder customization surface
- [x] State variants and visual micro-patterns per component

### Active
- [ ] Visual vocabulary reference (15 content archetypes, bullet-list smell test, curated icons)
- [ ] CSS property map reference for slide-stylist agent
- [ ] Slide-stylist agent for per-slide `@layer overrides` tweaks
- [ ] `brands/` directory with `brand.yaml` + `rules.md` + `theme.css` per brand
- [ ] Brand-checker agent (pre-debate gate producing brand-context.md)
- [ ] Brand-profiler agent (generates brand.yaml from corporate assets)
- [ ] Onboard-brand workflow with test-presentation generation
- [x] SKILL.md rewrite with model comprehension routing — Phase 4
- [x] `/build`, `/refine`, `/onboard` thin slash commands as workspace initializers — Phase 4
- [x] `build-new-deck.md` workflow rewrite with orchestration logic + pipeline resumability — Phase 4
- [x] `refine-deck.md` workflow rewrite with change-scope routing — Phase 4
- [ ] Narrative-planner agent (SCQA, Pyramid, action titles, visual treatment)
- [ ] Presentation-architect agent (10 structural checks, pacing, rhythm)
- [ ] Presentation-critic agent (6 adversarial checks, evidence gaps, "So What" test)
- [ ] Slide-editor agent for surgical HTML edits
- [ ] Verdict-driven debate protocol (auto-gate, 3-round ceiling)
- [ ] Rich deck-plan.md format with Narrative Flow Map
- [ ] Audience-presets.md rewrite with hard/soft rules
- [ ] Presentation-reviewer agent (story + visual + brand compliance)
- [ ] Playwright screenshot capture tool
- [ ] Build-log.yaml format for pipeline traceability
- [ ] Builder agent rewrite (copies locked CSS, exact class names, `--comp-*` vars only)

### Out of Scope

- Real-time collaboration — adds massive complexity, not needed for AI-assisted solo workflow
- SaaS/hosted version — this is a local framework, not a web app
- Slide-by-slide WYSIWYG editor — the AI prompt IS the editor
- React/Vue component wrappers — keep it plain HTML/CSS for maximum portability
- Copilot CLI port — deferred until all Claude Code agents are finalized (after Phase 6)
- Migration paths from v1 presentations — POC mode, wholesale rewrites acceptable

## Context

- v1.0 shipped in 6 days (2026-03-22 → 2026-03-27), 6 phases, 18 plans, 50+ commits
- Template audit finding: templates are B+ to A quality, but the AI ignores them (~40-50% adherence gap). Fixing adherence matters 4x more than fixing template quality.
- 17 design decisions resolved during v2 design review (see `new_insights/TODO.md`)
- 5 detailed feature plans in `new_insights/plans/` covering all 6 phases
- Full agent architecture spec in `new_insights/agent-architecture-spec.md`
- POC mode: wholesale rewrites acceptable, existing presentations will break

## Constraints

- **No build step required**: AI generates HTML directly from templates. Build tools are optional developer utilities.
- **Platform agnostic**: Core framework uses documentation files only. Claude Code skill layer is an enhancement, not a requirement.
- **Self-contained output**: Single HTML files that work offline (except CDN fonts/reveal.js).
- **German-first**: All templates handle German text lengths and typography conventions.
- **Consulting quality**: Output matches McKinsey/BCG deck quality.
- **POC mode**: No migration constraints. Wholesale rewrites and breaking changes acceptable.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Monolithic components.css over per-component files | Eliminates builder selection logic; single file copied verbatim | — Pending |
| Verdict-driven debate gate (not orchestrator-judged) | Architect + Critic BLOCKINGs auto-gate the loop. Orchestrator is traffic controller only | — Pending |
| 3-agent consensus debate over single-agent role-play | Real disagreement > self-anchoring. Independent contexts per OMX pattern | — Pending |
| brands/ directory replacing themes/ | A brand is more than a theme.css — includes rules, preferences, component biases | — Pending |
| Model comprehension routing in SKILL.md | Natural language understanding, not keyword dispatch. Proven by Superpowers/OMX | — Pending |
| deck-plan.md as markdown convention, not YAML schema | Planner (opus) needs creative freedom; builder (sonnet) needs unambiguous instructions | — Pending |
| slide-editor agent separate from builder and stylist | Surgical HTML edits vs generation vs CSS-only. Most-used agent in refine-deck | — Pending |
| Pipeline resumability via .pipeline/ state detection | Prevents wasting expensive opus debate rounds on context resets | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd:transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd:complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-06 after Phase 4 completion*
