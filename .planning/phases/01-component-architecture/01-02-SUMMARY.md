---
phase: 01-component-architecture
plan: 02
subsystem: templates
tags: [html, templates, BEM, components, consulting-slides, german]

# Dependency graph
requires:
  - "01-01: tokens/components.css (BEM class names, --comp-* variable contract)"
provides:
  - "templates/title.html: rewritten title component — data-master=hide, comp-title BEM"
  - "templates/section-break.html: rewritten section-break — data-master=hide, comp-section-break"
  - "templates/text-heavy.html: rewritten text-heavy — --highlighted/--muted state examples"
  - "templates/two-column.html: rewritten two-column — CSS Grid structural fix (D-02)"
  - "templates/metrics.html: rewritten metrics — --positive/--highlighted/--negative states"
  - "templates/image-full-bleed.html: rewritten image-full-bleed — data-master=hide, comp-image-full-bleed"
  - "templates/agenda.html: rewritten agenda — --completed/--active/--muted states"
  - "templates/summary.html: rewritten summary — --highlighted/--positive/--negative states"
  - "templates/contact.html: rewritten contact — centered flex layout (D-02 structural fix)"
  - "templates/comparison.html: rewritten comparison — --current (IST) / --target (SOLL) states"
  - "templates/timeline.html: rewritten timeline — --completed/--active/--current/--target/--muted"
affects:
  - 01-03-remaining-templates
  - 01-04-catalog-enrichment
  - 01-05-builder-rewrite

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "HTML-only template pattern: no <style> blocks, all CSS in tokens/components.css"
    - "Enriched comment header: COMPONENT, USE WHEN, SLOTS, CSS VARIABLES, STATE MODIFIERS, MASTER LAYER, LAYOUT NOTES"
    - "state modifier class examples in HTML: .comp-{name}__{element}--{state}"
    - "HTML entities for umlauts: &auml; &ouml; &uuml; &Auml; &Ouml; &Uuml; &szlig; &mdash; &ndash;"

key-files:
  created: []
  modified:
    - templates/title.html
    - templates/section-break.html
    - templates/text-heavy.html
    - templates/two-column.html
    - templates/metrics.html
    - templates/image-full-bleed.html
    - templates/agenda.html
    - templates/summary.html
    - templates/contact.html
    - templates/comparison.html
    - templates/timeline.html

key-decisions:
  - "HTML entity umlauts (not raw UTF-8 characters) for consistent rendering across tools"
  - "Every section has id=slide-N and data-component attribute for CSS targeting and JS hooks"
  - "contact and two-column use proper CSS Grid / centered flex (D-02 structural fix)"
  - "All 11 state modifiers documented in comment headers even for components supporting only a subset"

# Metrics
duration: 5min
completed: 2026-04-05
---

# Phase 01 Plan 02: HTML Template Rewrite (11 templates) Summary

**11 HTML templates rewritten as pure BEM reference patterns — no style blocks, enriched comment headers with --comp-* variables and state modifier contracts, German placeholder content, IST/SOLL consulting state examples on comparison and timeline**

## Performance

- **Duration:** 5 min
- **Started:** 2026-04-05T17:19:26Z
- **Completed:** 2026-04-05T17:24:26Z
- **Tasks:** 2
- **Files modified:** 11

## Accomplishments

**Task 1 (6 templates):** title, section-break, text-heavy, two-column, metrics, image-full-bleed

- All 6 templates rewritten from scratch as HTML-only reference patterns (no `<style>` blocks)
- Exact BEM class names from `tokens/components.css` (e.g. `comp-title__title`, `comp-metrics__card`)
- Enriched comment headers with COMPONENT, USE WHEN, SLOTS, CSS VARIABLES (listing all `--comp-*` vars), STATE MODIFIERS, MASTER LAYER, LAYOUT NOTES
- `data-master="hide"` on title, section-break, image-full-bleed
- `two-column` rebuilt with CSS Grid (`grid-template-columns: var(--comp-two-column-split)`) for D-02 structural fix
- State modifier examples: `comp-text-heavy__item--highlighted`, `comp-text-heavy__item--muted`, `comp-metrics__card--positive`, `comp-metrics__card--highlighted`, `comp-metrics__card--negative`

**Task 2 (5 templates):** agenda, summary, contact, comparison, timeline

- All 5 templates rewritten following identical format to Task 1
- `contact` rebuilt with centered flex column layout (D-02 structural fix), proper photo/name/role hierarchy
- `comparison` uses `comp-comparison__card--current` (IST) and `comp-comparison__card--target` (SOLL) — consulting state convention
- `timeline` demonstrates all 5 step states: `--completed`, `--active`, `--current`, `--target`, `--muted`
- `agenda` demonstrates `--completed`, `--active`, `--muted` item states
- `summary` demonstrates `--highlighted`, `--positive`, `--negative` item states
- German placeholder content throughout: Umsetzungsplan 2025-2026, Digitale Transformation, DACH-Raum references

## Task Commits

1. **Task 1: 6 templates** - `b86ea56` (feat)
2. **Task 2: 5 templates** - `fd3e022` (feat)

## Files Modified

| File | Key Change |
|------|-----------|
| templates/title.html | data-master=hide, comp-title BEM, tagline slot |
| templates/section-break.html | data-master=hide, comp-section-break BEM |
| templates/text-heavy.html | comp-text-heavy BEM, --highlighted/--muted examples |
| templates/two-column.html | comp-two-column CSS Grid (D-02), --comp-two-column-split var |
| templates/metrics.html | comp-metrics BEM, 3 card state examples, sparkline examples |
| templates/image-full-bleed.html | data-master=hide, comp-image-full-bleed, __image/__overlay/__caption |
| templates/agenda.html | comp-agenda BEM, --completed/--active/--muted examples |
| templates/summary.html | comp-summary BEM, --highlighted/--positive/--negative examples |
| templates/contact.html | comp-contact centered flex (D-02), __detail-item structure |
| templates/comparison.html | comp-comparison BEM, IST (--current) / SOLL (--target) examples |
| templates/timeline.html | comp-timeline BEM, all 5 step state modifier examples |

## Decisions Made

- **HTML entity umlauts:** Used `&auml;`, `&ouml;`, `&uuml;` etc. rather than raw UTF-8 characters for consistent cross-tool rendering (aligns with Phase 08 decision: "HTML entities for umlauts in new templates")
- **Every `<section>` has `id="slide-N"`:** Incremental IDs (slide-1 through slide-11) matching the template order — builder increments when assembling presentations
- **D-02 structural fix applied:** two-column uses CSS Grid; contact uses centered flex column — both improve on the flat-flex/table-like structure of legacy templates
- **11 state modifiers all documented in headers:** Even if a component supports only 2-3 applicable states, the comment header lists only the relevant subset (per components.css `/* Supported states: */` comment)

## Deviations from Plan

None — plan executed exactly as written. All 11 templates match acceptance criteria.

## Known Stubs

None — all templates contain real German placeholder content. Image `src` attributes use `path/to/bild.jpg` / `path/to/foto.jpg` as placeholder paths (conventional — builder replaces with actual paths).

## Self-Check

- [x] templates/title.html exists: FOUND
- [x] templates/section-break.html exists: FOUND
- [x] templates/text-heavy.html exists: FOUND
- [x] templates/two-column.html exists: FOUND
- [x] templates/metrics.html exists: FOUND
- [x] templates/image-full-bleed.html exists: FOUND
- [x] templates/agenda.html exists: FOUND
- [x] templates/summary.html exists: FOUND
- [x] templates/contact.html exists: FOUND
- [x] templates/comparison.html exists: FOUND
- [x] templates/timeline.html exists: FOUND
- [x] Commit b86ea56 exists: FOUND
- [x] Commit fd3e022 exists: FOUND

## Self-Check: PASSED

---
*Phase: 01-component-architecture*
*Completed: 2026-04-05*
