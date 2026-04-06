---
phase: 03-brand-system
plan: "02"
subsystem: agent-definitions
tags: [brand-checker, brand-profiler, agent, brand-awareness]
dependency_graph:
  requires: [03-01]
  provides: [brand-checker-agent, brand-profiler-agent, brand-aware-builder, brand-aware-strategist]
  affects: [presentation-builder, presentation-strategist, brand-checker, brand-profiler]
tech_stack:
  added: []
  patterns: [GSD-XML-agent-structure, advisory-pipeline-gate, native-PDF-reading]
key_files:
  created:
    - .claude/agents/brand-checker.md
    - .claude/agents/brand-profiler.md
  modified:
    - .claude/agents/presentation-builder.md
    - .claude/agents/presentation-strategist.md
decisions:
  - "brand-checker is advisory-only: all conflicts flagged but pipeline never blocked"
  - "brand-profiler uses Claude native document understanding for PDFs (no parsing library per D-02)"
  - "builder reads brand.yaml for rendering fields only (theme_css, logo, master_layer, color_semantics) — not component_preferences or tone"
  - "strategist reads brand-context.md (pre-digested by brand-checker), not brand.yaml directly"
metrics:
  duration: "4 minutes"
  completed_date: "2026-04-06"
  tasks_completed: 2
  files_changed: 4
---

# Phase 03 Plan 02: Brand Agent Definitions Summary

Two new brand agent definitions created and two existing agents updated with brand awareness. Brand-checker provides advisory pre-debate conflict detection producing brand-context.md. Brand-profiler generates brand.yaml + rules.md from PPTX/PDF/markdown corporate assets using Claude native document understanding.

## Tasks Completed

| Task | Description | Commit | Files |
|------|-------------|--------|-------|
| 1 | Create brand-checker and brand-profiler agent definitions | e3b33b0 | `.claude/agents/brand-checker.md`, `.claude/agents/brand-profiler.md` |
| 2 | Update builder and strategist with brand awareness | 8281060 | `.claude/agents/presentation-builder.md`, `.claude/agents/presentation-strategist.md` |

## What Was Built

### brand-checker.md

- **Model:** sonnet | **Tools:** Read, Write, Glob, Grep
- Pre-debate gate: runs once after researcher, before planning debate
- Reads `brands/{name}/brand.yaml` + `rules.md` + project `brief.md` + `.pipeline/research.md`
- Detects 4 conflict types: component avoidance violations, tone mismatches, impossible audience constraints, restriction violations
- Writes `projects/{name}/.pipeline/brand-context.md` with 7 header fields + Conflicts Detected section
- All findings are advisory — NEVER blocks the pipeline
- 4 deviation rules: missing brand.yaml (use default), missing rules.md (skip prose checks), missing brief.md (STOP — required), impossible constraints (flag but continue)

### brand-profiler.md

- **Model:** opus | **Tools:** Read, Write, Bash, Glob, Grep
- One-time onboarding agent: generates brand.yaml + rules.md from corporate assets
- PPTX processing via `tools/extract-theme.js` (Bash call)
- PDF processing via Claude native document understanding (Read tool — no library per D-02)
- Matches brand to closest archetype (default/startup/enterprise) for component_preferences defaults
- Generates `color_semantics` by inspecting theme.css token naming patterns
- Produces rules.md with minimum 3 section headings covering mandatory slides, chart conventions, prohibited patterns, compliance, visual style
- 4 deviation rules: no PPTX (skip extraction, use PDF colors), no PDF (PPTX + conversation), no assets (conversational input only), uncertain archetype (add YAML comment)

### presentation-builder.md (updated)

- Added item 6 to required_reading: `brands/{name}/brand.yaml`
- brand.yaml fields read for rendering only: `theme_css`, `logo`, `master_layer`, `color_semantics`
- Step 7 (master layer config) now explicitly maps `master_layer.company_name`, `.confidentiality`, `.date_format`, `.logo_position` to `presentationConfig` fields
- `color_semantics` guides state modifier class selection (positive/negative/neutral/highlight)

### presentation-strategist.md (updated)

- Added item 5 to required_reading: `projects/{name}/.pipeline/brand-context.md`
- Step 3 (audience preset) now also reads brand-context.md **Preferred components** and **Avoid** lists — brand constraints take priority over audience preset component bias
- Tone step respects brand formality and restrictions from brand-context.md
- Brand conflicts surface in deck-plan.md Validation Warnings under "Brand Conflicts" sub-section

## Decisions Made

1. **Builder reads brand.yaml for rendering fields only** — component_preferences and tone belong to brand-checker and strategist. Builder's concern is theme_css, logo, master_layer, color_semantics. This keeps concerns separated and prevents the builder from making planning decisions.

2. **Strategist reads brand-context.md, not brand.yaml directly** — brand-checker pre-digests brand.yaml + rules.md into a cheat sheet, already resolving conflicts and applying audience overrides. Strategist consumes the output, not the raw profile. This is marked as temporary — strategist will be replaced by the 3-agent debate triad in Phase 5.

3. **brand-checker is purely advisory** — never blocks the pipeline. Conflicts are flagged for the planner to consider. This prevents brand constraints from silently killing presentations that have legitimate reasons to deviate.

4. **Claude native PDF reading in brand-profiler** — no parsing libraries. Read tool directly handles PDFs per D-02. This avoids library installation and aligns with the framework's no-build-step-required constraint.

## Deviations from Plan

None — plan executed exactly as written.

## Known Stubs

None — all agent definitions are complete. No hardcoded empty values or placeholders that prevent functionality.

## Self-Check: PASSED

- `.claude/agents/brand-checker.md` — FOUND
- `.claude/agents/brand-profiler.md` — FOUND
- `.claude/agents/presentation-builder.md` — FOUND (modified)
- `.claude/agents/presentation-strategist.md` — FOUND (modified)
- Commit e3b33b0 — FOUND (Task 1)
- Commit 8281060 — FOUND (Task 2)
- 6 agent files total in `.claude/agents/` — CONFIRMED
