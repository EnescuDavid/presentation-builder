---
phase: 04-orchestration-entry-points
plan: 02
subsystem: skill-workflows
tags: [orchestration, pipeline, workflow, agents, debate-loop, resumability]
dependency_graph:
  requires: [04-01]
  provides: [build-new-deck-orchestration-spec]
  affects: [05-debate-pipeline-agents]
tech_stack:
  added: []
  patterns: [pipeline-as-orchestrator, file-as-state-bus, verdict-driven-debate, resumability-detection]
key_files:
  created: []
  modified:
    - .claude/skills/build-presentation/workflows/build-new-deck.md
decisions:
  - "9-step pipeline with named agents: researcher, brand-checker, narrative-planner, architect, critic, builder, stylist, reviewer, delivery"
  - "Architect and critic run in parallel (both read same round-N-plan.md, produce independent verdicts)"
  - "Debate ceiling at N==3: remaining BLOCKINGs escalate to user with Consensus Notes"
  - "Resumability: 3 states only (no .pipeline/ -> fresh, artifacts found -> ask, resume -> skip completed steps)"
  - "D-08 compliance: all pipeline intermediates surfaced in conversation, never referenced as files"
  - "Step 7 (stylist pass) is conditional — only runs when builder flags visual concerns or brand has strict rules"
metrics:
  duration_minutes: 2
  completed_date: "2026-04-06"
  tasks_completed: 1
  files_modified: 1
---

# Phase 4 Plan 2: Build-New-Deck Workflow Rewrite Summary

**One-liner:** Complete 9-agent pipeline orchestration with 3-round verdict-driven debate loop, .pipeline/ resumability detection, and 4-branch brand selection flow written directly into the workflow file.

## What Was Built

`build-new-deck.md` was rewritten from a 6-step linear workflow into a full 9-agent orchestration spec. The file is now the authoritative traffic controller for the entire presentation build pipeline — it specifies exactly which agent to spawn, what files to pass as input, what each agent writes, and how to evaluate verdicts to determine pipeline progression.

### Pipeline Overview

| Step | Agent | Reads | Writes |
|------|-------|-------|--------|
| Entry | main chat | .pipeline/ artifacts | — (resumability decision) |
| 1 | main chat | — | brief.md |
| 2 | presentation-researcher | brief.md, input/* | .pipeline/research.md |
| 3 | brand-checker | brand.yaml, rules.md, brief.md, research.md | .pipeline/brand-context.md |
| 4.1 | narrative-planner | brief.md, research.md, brand-context.md, prev critiques | .pipeline/debate/round-N-plan.md |
| 4.2 | presentation-architect (parallel) | round-N-plan.md + refs | .pipeline/debate/round-N-architect.md |
| 4.2 | presentation-critic (parallel) | round-N-plan.md + refs | .pipeline/debate/round-N-critic.md |
| 5 | main chat | round-N-plan.md | deck-plan.md (user-approved) |
| 6 | presentation-builder | deck-plan.md, brand.yaml, refs | presentation.html |
| 7 | slide-stylist (conditional) | presentation.html, brand.yaml, rules.md | presentation.html (in-place) |
| 8 | presentation-reviewer | deck-plan.md, presentation.html, research.md, brand.yaml | .pipeline/review-report.md |
| 9 | main chat | review-report.md | — (delivery) |

### Key Design Decisions

**Debate loop mechanics:** Narrative-planner runs first, then architect and critic run in parallel on the same plan. Zero BLOCKINGs from both ends the debate. BLOCKINGs trigger a new round with critiques fed back to the planner. Hard ceiling at round 3: any remaining BLOCKINGs escalate to the user with Consensus Notes.

**Resumability:** Exactly 3 states to avoid over-complex branching (per Pitfall 2 from research). No .pipeline/ = start fresh silently. .pipeline/ artifacts found = ask user to resume or fresh. Resume = identify last completed artifact, skip to next step.

**Brand selection:** 4-branch flow matching D-14: unprocessed input files → offer onboard redirect; multiple brand.yaml files → ask user; exactly one brand.yaml → use automatically; no brands → offer default or create.

**Forward references:** narrative-planner, presentation-architect, presentation-critic, and presentation-reviewer are all specified with exact I/O contracts even though they don't exist until Phase 5. The workflow is the spec; Phase 5 agents implement against it.

**D-08 compliance:** No pipeline artifact paths are ever surfaced to the user as file references. Every "surface findings" instruction directs the model to quote/summarize inline.

## Deviations from Plan

None — plan executed exactly as written. The plan template was used directly with all structural requirements met.

## Verification Results

All automated acceptance criteria pass:
- All 7 pipeline agents referenced: presentation-researcher, brand-checker, narrative-planner, presentation-architect, presentation-critic, presentation-builder, presentation-reviewer
- "Resumability" section present (Entry section header)
- .pipeline/ occurrences: 27 (well above minimum 10)
- "BLOCKING" occurrences: 4 (minimum 3)
- "round-" occurrences: 12 (debate round numbering throughout)
- "parallel" appears in architect+critic step
- "max 3 rounds" and "N == 3" and "ceiling" all present
- "brands/" appears 12 times (brand selection flow)
- "brand.yaml" appears 10 times
- "see .pipeline/" occurrences: 0 (D-08 compliant)
- "deck-plan.md" as user-approved output: present
- Line count: 269 (within 150-300 range)
- "brief.md" present (brief intake output)
- Steps 1-9 all present

## Known Stubs

None. The workflow is a complete orchestration spec. Forward-referenced agents (narrative-planner, presentation-architect, presentation-critic, presentation-reviewer) are by design not yet implemented — Phase 5 creates them. The workflow referencing agents that don't exist yet is intentional per D-06 ("write the COMPLETE orchestration NOW").

## Self-Check: PASSED

- File exists: .claude/skills/build-presentation/workflows/build-new-deck.md ✓
- Commit exists: 444208e ✓
