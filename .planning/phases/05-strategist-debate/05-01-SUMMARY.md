---
phase: 05-strategist-debate
plan: "01"
subsystem: ai-skill-layer
tags: [audience-presets, narrative-planner, debate-triad, scqa, pyramid-principle, hard-rules, soft-rules]
dependency_graph:
  requires: []
  provides: [audience-presets-hard-soft-rules, narrative-planner-agent]
  affects: [presentation-architect, presentation-critic, build-new-deck-workflow]
tech_stack:
  added: []
  patterns: [pure-xml-agent-body, hard-soft-rule-taxonomy, debate-protocol, scqa-framework]
key_files:
  created:
    - .claude/agents/narrative-planner.md
  modified:
    - .claude/skills/build-presentation/references/audience-presets.md
decisions:
  - "D-13: Hard rules (BLOCKING) for C-Suite max 15 slides, min 24pt, ban text-heavy, no content animations"
  - "D-13: Hard rules for Stakeholder max 25 slides, min 18pt, no content animations"
  - "D-13: Hard rules for Technical max 40 slides, min 14pt, no content animations"
  - "D-13: Hard rules for Sales max 15 slides, min 24pt"
  - "D-13/D-16: Workshop and Internal are advisory-only mode -- no hard rules"
  - "D-14: Consistency guardrail max 2 unique font-size-body values per deck added to all 6 audience soft rules"
  - "D-15: Hybrid audiences -- primary hard rules always apply, soft rules blend (averages, union/intersection)"
  - "D-16: Enhancement options documented as hooks: stakes:high, lightweight, advisory-only"
  - "D-02/D-09: narrative-planner uses documented markdown convention for rich deck-plan, not parseable YAML schema"
  - "D-10: Narrative Flow Map is always the first content section in round-N-plan.md"
  - "D-11: 7 required per-slide fields: Headline, Component, Archetype, Visual treatment, Elements, Animation, Master layer"
  - "D-12: Validation Warnings and Consensus Notes sections mandatory in every plan output"
metrics:
  duration: "~3 min"
  completed: "2026-04-06"
  tasks_completed: 2
  files_modified: 2
---

# Phase 5 Plan 1: Audience Presets Rewrite + Narrative Planner Agent Summary

Rewrote audience-presets.md with two-tier hard/soft rule taxonomy and created the narrative-planner agent definition with SCQA/Pyramid Principle methodology and rich deck-plan output format.

## Tasks Completed

| Task | Name | Commit | Key Files |
|------|------|--------|-----------|
| 1 | Rewrite audience-presets.md with hard/soft rule taxonomy | e94109b | .claude/skills/build-presentation/references/audience-presets.md |
| 2 | Create narrative-planner agent definition | 63ded93 | .claude/agents/narrative-planner.md |

## What Was Built

### Task 1: audience-presets.md Rewrite

Fully rewrote the audience presets reference to introduce a two-tier rule taxonomy:

- **Hard Rules (BLOCKING):** Explicit numeric thresholds the architect agent enforces. C-Suite: max 15 slides, min 24pt, ban text-heavy, no content animations. Stakeholder: max 25 slides, min 18pt, no content animations. Technical: max 40 slides, min 14pt, no content animations. Sales: max 15 slides, min 24pt. Workshop and Internal have no hard rules (advisory-only mode).
- **Soft Rules (ADVISORY):** Quantified defaults that can be overridden with justification. All existing font size ranges, word counts, bullet counts, component preferences preserved and restructured into this section. Added max 2 unique font-size-body consistency guardrail to all 6 audience types.
- **Quick Reference table:** Added Hard Rules column summarizing enforcement thresholds at a glance.
- **Hybrid Audiences section:** Primary audience hard rules always apply. Soft rules blend via averages and preference list union/intersection. Two worked examples provided (C-Suite+Technical, Stakeholder+Workshop).
- **Enhancement Options section:** Document hooks for stakes:high (tighter 3-cycle debate), lightweight (planner+critic only for <5 slides), advisory-only (automatic for Internal/Workshop).

### Task 2: narrative-planner.md Agent Definition

Created the first agent in the debate triad. Follows the agent-architecture-spec.md standard with pure XML body:

- **7 XML sections:** role, required_reading, workflow, output_format, constraints, deviation_rules, success_criteria
- **Required reading (9 files):** brief.md, research.md, brand-context.md, audience-presets.md, component-catalog.md, visual-vocabulary.md, design-principles.md + round-{N-1} critique files for debate rounds 2+
- **Workflow (9 steps):** SCQA extraction (skipped for Internal/Workshop), Pyramid Principle structure, action title enforcement, archetype classification, bullet-list smell test, pacing check, hard rule verification, round 2+ BLOCKING address, write plan
- **Rich output format:** Narrative Flow Map table first, then per-slide specs with Content/Design/Narrative groups, Validation Warnings, Consensus Notes
- **Write path:** Always `projects/{name}/.pipeline/debate/round-{N}-plan.md` -- never directly to deck-plan.md
- **6 deviation rules:** Missing research.md (warn+proceed), missing brand-context.md (default+note), missing brief.md (STOP), missing critique files (treat as round 1), unrecognized audience (default Stakeholder), hard rule escalation (STOP if unresolvable)
- **12-item success criteria:** Self-check covering write path, Narrative Flow Map position, action titles, 7 required fields, hard rule compliance, smell test, pacing, debate protocol, warnings section, German umlauts

## Deviations from Plan

None -- plan executed exactly as written. The `references/audience-presets.md` path in audience-presets.md required_reading was adjusted to `.claude/skills/build-presentation/references/audience-presets.md` (full path) to match the actual repo structure -- this is consistent with how other agents reference skill files.

## Known Stubs

None -- both files are complete standalone artifacts. The narrative-planner references `visual-vocabulary.md` and `design-principles.md` which exist under `references/` in the repo root. No data is missing from either output.

## Verification

All acceptance criteria met:
- audience-presets.md: 6x "#### Hard Rules" sections, 20x "BLOCKING" references, Hybrid Audiences section, Enhancement Options section, max 2 font-size-body guardrail in all 6 audiences
- narrative-planner.md: all 7 XML sections present, 9-file required_reading, Narrative Flow Map in output format, round-N-plan.md write path, MUST/NEVER/ALWAYS modal constraints, 6 deviation rules, 12-item success criteria

## Self-Check: PASSED
