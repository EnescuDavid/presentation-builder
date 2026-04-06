---
phase: 04-orchestration-entry-points
plan: "01"
subsystem: skill-layer
tags: [skill, routing, slash-commands, entry-points, model-comprehension]
dependency_graph:
  requires: [03-brand-system]
  provides: [SKILL.md-routing, slash-commands, pipeline-gitignore]
  affects: [build-new-deck-workflow, refine-deck-workflow, onboard-brand-workflow]
tech_stack:
  added: []
  patterns: [model-comprehension-routing, thin-slash-commands, workspace-initializer]
key_files:
  created:
    - .claude/commands/build.md
    - .claude/commands/refine.md
    - .claude/commands/onboard.md
  modified:
    - .claude/skills/build-presentation/SKILL.md
    - .gitignore
  deleted:
    - .claude/skills/build-presentation/workflows/extract-theme.md
decisions:
  - "Model comprehension routing replaces keyword dispatch table in SKILL.md -- describes workflows in natural language with use-when signals, model selects based on intent"
  - "Three slash commands are pure workspace initializers (5-10 lines each): create folder + input/, set context, hand off to SKILL.md"
  - "projects/*/.pipeline/ added to root .gitignore to prevent agent pipeline artifacts from polluting git history"
metrics:
  duration: "5min"
  completed: "2026-04-06"
  tasks: 2
  files: 5
---

# Phase 04 Plan 01: Orchestration Entry Points -- SKILL.md + Slash Commands Summary

Rewritten SKILL.md with model comprehension routing, three thin slash commands as workspace initializers, deleted obsolete extract-theme.md workflow, and added .pipeline/ to .gitignore.

## Tasks Completed

| Task | Description | Commit | Files |
|------|-------------|--------|-------|
| 1 | Rewrite SKILL.md with model comprehension routing | 62222a4 | .claude/skills/build-presentation/SKILL.md |
| 2 | Create slash commands, delete extract-theme.md, update .gitignore | df1b89a | .claude/commands/{build,refine,onboard}.md, .gitignore, workflows/extract-theme.md (deleted) |

## What Was Built

### SKILL.md Rewrite (Task 1)

The `<routing>` section with keyword dispatch table (`| Response | Workflow |`) was replaced with a `<workflows>` section using natural language descriptions. Each workflow now includes:
- **Purpose** -- what it does
- **Use when** -- when to apply it (mutual exclusivity enforced)
- **Signals** -- natural language triggers the model watches for
- **Pipeline summary** -- what agents run
- **Input/Output** -- file contract
- **File path** -- explicit reference to workflow file

The `<intake>` section was rewritten from a numbered menu (1/2/3) to an open-ended prompt with three example descriptions. The `<reference_index>` was updated to include brand-system.md, visual-vocabulary.md, and css-property-map.md (Phase 2-3 additions). The `<essential_principles>` section was updated to reference `brands/` instead of `themes/` per Phase 3 migration.

### Slash Commands (Task 2)

Three 6-line workspace initializers created in `.claude/commands/`:

- **build.md** -- creates `projects/$ARGUMENTS/input/`, prompts user to describe deck, hands off to SKILL.md build-new-deck workflow
- **refine.md** -- checks for existing `presentation.html`, loads context, asks what to change, hands off to SKILL.md refine-deck workflow
- **onboard.md** -- creates `brands/$ARGUMENTS/input/`, prompts user to drop assets, hands off to SKILL.md onboard-brand workflow

### Cleanup

- `extract-theme.md` deleted -- superseded by `onboard-brand.md` shipped in Phase 3
- `projects/*/.pipeline/` added to `.gitignore` -- agent artifacts (research.md, brand-context.md, debate/ rounds, review-report.md) will not be committed

## Decisions Made

1. **Model comprehension routing** -- Natural language workflow descriptions replace keyword matching. Each workflow description has mutually exclusive use-when signals (build-new-deck = no existing deck; refine-deck = existing deck; onboard-brand = brand setup).

2. **Slash commands as pure workspace initializers** -- Commands do exactly one thing: create folder structure and input/ drop zone, then hand off. No routing logic, no pipeline steps, no conditionals. Enforced by 5-10 line limit.

3. **Root .gitignore for .pipeline/** -- Added `projects/*/.pipeline/` to root .gitignore rather than per-project. Covers all projects automatically, no per-project action needed.

## Deviations from Plan

None -- plan executed exactly as written.

## Known Stubs

None. This plan produces routing/entry-point files only. No data sources, no UI rendering.

## Self-Check: PASSED

- `.claude/skills/build-presentation/SKILL.md` -- FOUND, 89 lines, 0 "routing" matches
- `.claude/commands/build.md` -- FOUND, 6 lines
- `.claude/commands/refine.md` -- FOUND, 6 lines
- `.claude/commands/onboard.md` -- FOUND, 6 lines
- `.claude/skills/build-presentation/workflows/extract-theme.md` -- CONFIRMED DELETED
- `.gitignore` contains `projects/*/.pipeline/` -- CONFIRMED
- Commits: 62222a4 (feat: SKILL.md rewrite), df1b89a (feat: slash commands + cleanup)
