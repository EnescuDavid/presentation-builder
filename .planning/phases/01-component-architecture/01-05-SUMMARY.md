---
phase: 01-component-architecture
plan: "05"
subsystem: ai-skill-layer
tags: [builder-agent, css-contract, component-architecture, COMP-07]
dependency_graph:
  requires: [01-04]
  provides: [builder-agent-contract]
  affects: [presentation-builder, all-generated-presentations]
tech_stack:
  added: []
  patterns: [locked-css-verbatim, catalog-only-class-names, comp-star-variables, layer-overrides-slide-map]
key_files:
  modified:
    - .claude/agents/presentation-builder.md
decisions:
  - "Builder reads templates/index.md as sole source of class names — no individual template HTML files"
  - "Builder copies tokens/components.css verbatim — never writes component CSS"
  - "--comp-* variables on <section> wrappers only, never on .comp-* wrappers (per D-09)"
  - "@layer overrides SLIDE MAP comment pattern enforces visibility of all customizations (per D-10)"
  - "MUST/NEVER constraints replace old soft guidelines — behavioral enforcement not suggestions"
  - "Self-check protocol is pre-delivery gate — 8 mandatory checks before returning output"
metrics:
  duration_seconds: 268
  completed_date: "2026-04-05"
  tasks_completed: 1
  tasks_total: 1
  files_modified: 1
---

# Phase 01 Plan 05: Builder Agent Rewrite Summary

**One-liner:** Rewritten presentation-builder agent enforces locked CSS contract: verbatim components.css copy, exact catalog class names, --comp-* variables on section wrappers only, mandatory self-check protocol, MUST/NEVER constraints replacing improvisation-permissive language.

## What Was Built

The `presentation-builder` agent was completely rewritten to enforce the component architecture contract introduced in Phase 01 (Plans 01-04). The old agent encouraged improvisation ("templates are reference patterns — improvise from them when content requires layout adjustments"), which produced 40-50% adherence to the CSS contract. The new agent architecturally eliminates that problem.

### Key Changes

**1. Required reading locked to 5 files only**
- Old: `.claude/skills/build-presentation/references/component-catalog.md` (old 14-component skill reference)
- New: `templates/index.md` (enriched 21-component catalog), `tokens/components.css` (verbatim CSS), `tokens/visuals.css`, `templates/_skeleton.html`, `references/audience-presets.md`
- Individual template HTML files explicitly banned from required reading

**2. MUST DO rules (10 rules)**
- Verbatim CSS copy from `tokens/components.css` + `tokens/visuals.css` into `@layer components`
- Exact class names from catalog only
- `id="slide-N"` + `data-component="type"` on every section
- `--comp-*` variables on `<section>` wrappers, never on `.comp-*` elements
- State modifiers on child elements, never on component wrappers
- German umlauts enforcement

**3. MUST NOT rules (8 rules)**
- NEVER write CSS inside `@layer components`
- NEVER use `style=""` on elements inside slides
- NEVER invent class names not in catalog
- NEVER read individual template HTML files for building

**4. Self-Check Protocol (8 items)**
Pre-delivery gate: class names, locked CSS integrity, no inline styles, section IDs, variable placement, SLIDE MAP completeness, slide count, German typography.

**5. Build Process (10 steps)**
Fully enumerated workflow from deck-plan reading to self-check — no improvisation.

**6. Component Quick Reference**
All 21 components with layout pattern and key `--comp-*` variables as inline lookup table.

**7. Error Messages**
Specific error text for class name violations, inline style attempts, locked CSS violations, missing section IDs.

**8. Agent Description Updated**
Now functions as routing contract per agent-architecture-spec.md: explains pipeline position, input/output, and differentiation from `slide-editor` and `slide-stylist`.

## Deviations from Plan

None — plan executed exactly as written.

## Verification Results

```
grep -c "MUST NOT" .claude/agents/presentation-builder.md  → 1  (section header exists)
grep -c "MUST DO" .claude/agents/presentation-builder.md   → 1  (section header exists)
grep "templates/index.md" .claude/agents/presentation-builder.md → 9 matches
grep "tokens/components.css" .claude/agents/presentation-builder.md → 8 matches
grep -c "verbatim" .claude/agents/presentation-builder.md  → 12 matches
grep -c "NEVER invent" .claude/agents/presentation-builder.md → 1 match
grep -c "required_reading" .claude/agents/presentation-builder.md → 2 (open + close tags)
grep -c "Self-Check" .claude/agents/presentation-builder.md → 3 matches
```

Template file references in MUST NOT rule (2 matches for `templates/title.html|metrics.html`) are explicit prohibition statements — part of "NEVER read individual template HTML files" rule, not reading instructions.

## Known Stubs

None — this plan rewrites an agent definition file, not a UI component or data-rendering path. No stubs.

## Self-Check: PASSED

Files created:
- `.claude/agents/presentation-builder.md` — FOUND

Commits:
- `040041c` — FOUND
