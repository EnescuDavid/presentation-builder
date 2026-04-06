# Phase 4: Orchestration & Entry Points - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-04-06
**Phase:** 04-orchestration-entry-points
**Areas discussed:** Build pipeline orchestration timing

---

## Build Pipeline Orchestration Timing

| Option | Description | Selected |
|--------|-------------|----------|
| Write complete workflow now | Reference Phase 5 agents (narrative-planner, architect, critic) even though they don't exist yet. Workflow is the full spec. | ✓ |
| Write simplified workflow | Work with current agents only (researcher → strategist → builder → stylist), leave debate orchestration for Phase 5 to wire in. | |

**User's choice:** Write complete workflow now (Option A)
**Notes:** User confirmed immediately — the workflow should be the spec that Phase 5 implements against.

---

## Pre-Discussion Assessment

Most gray areas were already resolved in `new_insights/TODO.md` (17 design decisions). Only one genuine ambiguity remained: whether to write the full 9-agent orchestration now or a simplified version. All other areas (SKILL.md routing, refine-deck detection, resumability UX, slash commands) were fully specified in prior design decisions.

## Claude's Discretion

- SKILL.md prose structure and verbosity
- .pipeline/ artifact naming
- Workflow formatting details
- Refine-deck routing heuristics beyond the specified gradient

## Deferred Ideas

None
