---
phase: 05-strategist-debate
plan: "02"
subsystem: ai-skill-layer
tags: [debate-triad, presentation-architect, presentation-critic, blocking-advisory, structural-checks, adversarial-review]
dependency_graph:
  requires:
    - phase: 05-strategist-debate-01
      provides: audience-presets-hard-soft-rules, narrative-planner-agent
  provides:
    - presentation-architect agent with 10 structural checks and BLOCKING/ADVISORY verdict protocol
    - presentation-critic agent with 6 adversarial checks and argument quality validation
  affects: [build-new-deck-workflow, narrative-planner, debate-protocol-step-4.2]
tech_stack:
  added: []
  patterns: [pure-xml-agent-body, hard-soft-rule-taxonomy, debate-verdict-protocol, adversarial-review-pattern]
key_files:
  created:
    - .claude/agents/presentation-architect.md
    - .claude/agents/presentation-critic.md
  modified: []
key-decisions:
  - "D-03: Architect checks structural quality (10 checks) -- pacing, density, variety, balance, rhythm, transitions, opening/closing, audience compliance, brief compliance, brand compliance"
  - "D-04: Critic checks argument quality (6 checks) -- action title enforcement, Pyramid compliance, evidence gaps, transition logic, summary-content consistency, So What test"
  - "D-05: Both agents use pure XML body, MUST/NEVER/ALWAYS constraints, mandatory pre-read, numbered workflow, success criteria checkbox lists"
  - "D-06: Zero BLOCKINGs from both agents = debate ends; any BLOCKING = planner revision required"
  - "Internal/Workshop audiences use advisory-only mode in architect -- no hard rule enforcement per D-16"
  - "Critic must distinguish evidence-not-available vs evidence-contradicts-claim with different severities"
  - "Argument Strengths section required in critic output -- empty strengths section is a quality failure"

patterns-established:
  - "10-check structural review table with PASS/FAIL/SKIP per row"
  - "6-check adversarial verdict with argument strengths section required"
  - "Deviation rules for missing files (research.md, brand-context.md, brief.md) consistent across both agents"
  - "round-{N} variable path pattern (not hardcoded) for debate file I/O"

requirements-completed: [DEBATE-02, DEBATE-03, DEBATE-04]

duration: 5min
completed: "2026-04-06"
tasks_completed: 2
files_modified: 2
---

# Phase 5 Plan 2: Presentation Architect + Presentation Critic Agent Definitions Summary

**Structural engineer (10-check architect) and adversarial challenger (6-check critic) debate triad agents with machine-parseable [BLOCKING-N]/[ADVISORY-N] verdict protocol**

## Performance

- **Duration:** 5 min
- **Started:** 2026-04-06T13:39:17Z
- **Completed:** 2026-04-06T13:44:26Z
- **Tasks:** 2
- **Files modified:** 2

## Accomplishments

- Created `presentation-architect.md` with 10 structural checks and hard rule enforcement from audience-presets.md
- Created `presentation-critic.md` with 6 adversarial checks including evidence cross-referencing and action title alternative text
- Both agents use identical [BLOCKING-N]/[ADVISORY-N] verdict format compatible with build-new-deck.md Step 4.3 gate logic

## Task Commits

Each task was committed atomically:

1. **Task 1: Create presentation-architect agent definition** - `7819d4e` (feat)
2. **Task 2: Create presentation-critic agent definition** - `e41a4cf` (feat)

## Files Created/Modified

- `.claude/agents/presentation-architect.md` - Structural critique agent: 10 checks (pacing, density curve, component variety, section balance, visual rhythm, transition quality, opening/closing strength, audience compliance, brief compliance, brand compliance). Reads round-{N}-plan.md + audience-presets.md + brief.md + brand-context.md. Writes round-{N}-architect.md.
- `.claude/agents/presentation-critic.md` - Adversarial review agent: 6 checks (action title enforcement, Pyramid Principle compliance, evidence gaps, transition logic, summary-content consistency, "So What" test). Reads round-{N}-plan.md + research.md + brief.md + brand-context.md. Writes round-{N}-critic.md.

## Decisions Made

- D-03 enforced: Architect's 10th check is brand compliance (ADVISORY only, consistent with brand-checker advisory-only pattern)
- D-04: Critic is explicitly scoped to argument quality -- structural concerns deliberately excluded with NEVER directive
- Critic deviation rule 5 added (not in original plan spec): explicit guidance on which round file to read when multiple round files exist in .pipeline/debate/
- Architect deviation rule 6 added: Internal/Workshop audiences use advisory-only mode (no hard rule enforcement per D-16 from 05-CONTEXT.md)
- Critic requires non-empty Argument Strengths section -- an empty or generic strengths section is a quality failure

## Deviations from Plan

None -- plan executed exactly as written. Two minor additions beyond plan scope:
- Architect deviation rule 6 (Internal/Workshop advisory-only) added per D-16 from 05-CONTEXT.md -- this is a correctness addition since the plan referenced D-16 implicitly
- Critic deviation rule 5 (round file selection guidance) added because Pitfall 5 from 05-RESEARCH.md explicitly called this out as a common failure mode

## Known Stubs

None -- both agent definitions are complete standalone artifacts. They reference `visual-vocabulary.md` and `design-principles.md` which exist in the `references/` directory.

## Issues Encountered

None.

## Next Phase Readiness

- All 3 debate triad agents complete: narrative-planner (Plan 01), presentation-architect (Plan 02), presentation-critic (Plan 02)
- Plan 03 can now create the slide-editor agent and delete presentation-strategist.md (D-20)
- build-new-deck.md Step 4.2 spawn contracts are now fulfilled for architect and critic

---
*Phase: 05-strategist-debate*
*Completed: 2026-04-06*
