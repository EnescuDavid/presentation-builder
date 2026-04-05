---
phase: 02-visual-vocabulary
plan: "02"
subsystem: agent-layer
tags: [slide-stylist, presentation-strategist, component-catalog, archetype-integration, css-overrides]
dependency_graph:
  requires: [02-01]
  provides: [slide-stylist-agent, archetype-classification-pipeline]
  affects: [presentation-builder, presentation-strategist, templates/index.md]
tech_stack:
  added: []
  patterns:
    - "@layer overrides with #slide-{n} scoped CSS variables"
    - "Deck-plan visual hints consumed by stylist agent (D-06)"
    - "Content archetype classification integrated into strategist flow"
key_files:
  created:
    - .claude/agents/slide-stylist.md
  modified:
    - .claude/agents/presentation-strategist.md
    - templates/index.md
decisions:
  - "Slide-stylist reads deck-plan visual hints first (priority over autonomous scan), per D-06"
  - "Strategist Step 3b added between audience preset and narrative arc — archetype classification before component selection"
  - "text-heavy marked as last-resort fallback with Bullet-List Smell Test note in catalog"
  - "Structural components (title, section-break, agenda, contact, image-full-bleed, team) explicitly marked as not mapped to content archetypes"
metrics:
  duration: "4 minutes"
  completed_date: "2026-04-05"
  tasks_completed: 2
  files_changed: 3
---

# Phase 02 Plan 02: Agent Integration for Visual Vocabulary Summary

Slide-stylist agent definition created, strategist updated with archetype classification step, and component catalog updated with archetype cross-references for all 21 components.

## Objective

Connect the visual vocabulary system (Plan 01 outputs: visual-vocabulary.md, css-property-map.md) into the agent pipeline through three targeted changes:
1. Create the slide-stylist agent that consumes css-property-map.md and deck-plan visual hints
2. Update the strategist to classify slides into archetypes and write visual hints
3. Add archetype cross-references to the component catalog

## Tasks Completed

### Task 1: Create .claude/agents/slide-stylist.md

**Commit:** 070498d

Created the slide-stylist agent definition with:
- YAML frontmatter: `name: slide-stylist`, `model: sonnet`, `tools: Read, Edit, Grep, Bash, Glob`
- 7 required XML sections: role, required_reading, workflow, constraints, deviation_rules, output_format, success_criteria
- 6-step workflow: (1) read deck-plan hints, (2) parse request, (3) find slide, (4) lookup CSS vars, (5) write override, (6) verify
- 8 NEVER constraints and 5 MUST constraints
- required_reading lists css-property-map.md (lookup table) and deck-plan.md (visual hints, per pitfall 5)
- @layer overrides mentioned 9 times throughout the file
- Deviation rules including HTML modification routing to slide-editor (Rule 2) and unsafe property guard (Rule 4)
- Self-check success criteria checklist

### Task 2: Update strategist and component catalog

**Commit:** fb81169

**Presentation Strategist (.claude/agents/presentation-strategist.md):**
- Added `references/visual-vocabulary.md` as item 4 in required_reading block
- Added Step 3b: Classify Content Archetypes (between Step 3 and Step 4)
  - Bullet-List Smell Test integration
  - `**Content archetype:**` and `**Visual hints for stylist:**` fields written per slide
  - Visual Treatment Audit in Validation Warnings
- Added `Content archetype:` and `Visual hints for stylist:` fields to deck-plan per-slide format
- Updated success criteria to require archetype field per content slide
- Added Visual Treatment Audit sub-section to Validation Warnings template

**Component Catalog (templates/index.md):**
- Updated Content Archetypes section for all 21 components
- Components with archetype mappings: metrics, text-heavy, two-column, summary, comparison, timeline, quote, card-grid, framework, data-table, harvey-balls, chart, mermaid-diagram, waterfall, code-block, team (secondary)
- Structural components explicitly marked: title, section-break, image-full-bleed, agenda, contact
- text-heavy marked as fallback of last resort with Bullet-List Smell Test note
- All archetype entries follow `**{slug}** ({primary|fallback}): {description}` format

## Key Archetype Mappings

| Component | Primary Archetypes | Fallback Archetypes |
|-----------|-------------------|---------------------|
| metrics | quantity-metric | evidence-proof |
| comparison | comparison | — |
| timeline | sequential-process | cause-effect |
| quote | evidence-proof | definition-concept |
| card-grid | list-of-items, categories | recommendation, cause-effect |
| framework | matrix-positioning | — |
| data-table | comparison, ranking | status-readiness |
| harvey-balls | status-readiness | — |
| chart | proportion, trend, ranking | quantity-metric |
| mermaid-diagram | hierarchy, cause-effect | sequential-process |
| summary | recommendation | — |
| text-heavy | — | definition-concept, evidence-proof, list-of-items (last resort) |

## Deviations from Plan

None — plan executed exactly as written. All 3 targeted edits to strategist were made without rewriting the file. All 21 component archetypes updated.

## Known Stubs

None — all archetype mappings are fully specified. The slide-stylist agent references `references/css-property-map.md` which was created in Plan 01 and is confirmed to exist.

## Self-Check: PASSED

Files created/modified:
- [FOUND] .claude/agents/slide-stylist.md
- [FOUND] .claude/agents/presentation-strategist.md (modified)
- [FOUND] templates/index.md (modified)

Commits verified:
- 070498d (Task 1: slide-stylist agent)
- fb81169 (Task 2: strategist + catalog updates)

Acceptance criteria verified:
- slide-stylist: 7 sections, 8 NEVER rules, 5 MUST rules, 6 css-property-map refs, 5 deck-plan refs, 9 @layer overrides refs
- strategist: 5 visual-vocabulary.md refs, 8 archetype/content archetype occurrences, 3 visual hints refs
- catalog: 21 Content Archetypes sections, 3 list-of-items matches, 6 structural component markers
