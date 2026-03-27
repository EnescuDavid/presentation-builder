---
phase: 07-foundation-fixes-tokens
plan: 01
subsystem: ui
tags: [css, themes, deduplication, nested-lists, design-tokens]

# Dependency graph
requires:
  - phase: 04-themes
    provides: "Three theme CSS files with token overrides and structural rules"
provides:
  - "themes/_base.css shared structural CSS (190 lines)"
  - "Token-only theme files (36-59 lines each)"
  - "--theme-gradient-start/end custom properties for per-theme accent bar gradient"
  - "Nested bullet list styles (3 levels, mixed nesting)"
affects: [08-pure-css-components, themes, skeleton-template]

# Tech tracking
tech-stack:
  added: []
  patterns: ["CSS cascade: tokens -> _base.css -> theme.css", "Gradient tokens for per-theme accent bar direction"]

key-files:
  created: ["themes/_base.css"]
  modified: ["themes/default/theme.css", "themes/startup/theme.css", "themes/enterprise/theme.css", "templates/_skeleton.html"]

key-decisions:
  - "Used --theme-gradient-start/end tokens instead of duplicating accent bar rule per theme"
  - "Adapted skeleton to use inline style comment markers instead of link tags (skeleton uses inline CSS, not external links)"

patterns-established:
  - "Theme files contain ONLY :root token overrides -- no structural rules"
  - "All shared structural CSS lives in themes/_base.css"
  - "Skeleton load order: tokens -> _base.css -> theme.css (via comment markers in style block)"

requirements-completed: [FIX-07, FIX-06]

# Metrics
duration: 3min
completed: 2026-03-27
---

# Phase 7 Plan 1: CSS Dedup Summary

**Extracted 120+ duplicated structural CSS lines into shared themes/_base.css with gradient tokens and 3-level nested bullet styles**

## Performance

- **Duration:** 3 min
- **Started:** 2026-03-27T12:03:06Z
- **Completed:** 2026-03-27T12:06:44Z
- **Tasks:** 2
- **Files modified:** 5

## Accomplishments
- Created themes/_base.css with all shared structural rules (190 lines) -- slide styles, accent bar, bullets, card elevation, dark variant
- Slimmed three theme files from ~160-185 lines to 36-59 lines each (token overrides only)
- Added --theme-gradient-start/end custom properties so each theme controls accent bar gradient direction
- Added nested bullet list styles: filled dot (L1), open circle (L2), en-dash (L3), plus mixed nesting support

## Task Commits

Each task was committed atomically:

1. **Task 1: Extract shared structural CSS to themes/_base.css and slim theme files** - `7eccac2` (feat)
2. **Task 2: Add nested bullet list styles to themes/_base.css** - `082f62a` (feat)

## Files Created/Modified
- `themes/_base.css` - Shared structural CSS for all themes (190 lines)
- `themes/default/theme.css` - Token-only overrides (36 lines, down from 163)
- `themes/startup/theme.css` - Token-only overrides (59 lines, down from 186)
- `themes/enterprise/theme.css` - Token-only overrides (55 lines, down from 182)
- `templates/_skeleton.html` - Updated load order docs and added _base.css comment marker

## Decisions Made
- Used `--theme-gradient-start`/`--theme-gradient-end` tokens for per-theme accent bar gradient instead of keeping the accent bar rule in each theme file. Default: primary->accent, Startup: accent->primary, Enterprise: primary->secondary.
- Adapted skeleton template to use inline `<style>` comment markers (not `<link>` tags) since the skeleton uses inline CSS blocks. This is a deviation from the plan's literal instruction but matches the actual architecture.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Skeleton uses inline CSS, not link tags**
- **Found during:** Task 1 (updating skeleton)
- **Issue:** Plan specified adding a `<link>` tag for _base.css, but _skeleton.html uses inline `<style>` blocks with pasted CSS content, not external file links
- **Fix:** Added `/* <!-- BASE THEME CSS --> */` comment marker and updated documentation comment to reflect correct load order
- **Files modified:** templates/_skeleton.html
- **Verification:** Comment marker and docs present in skeleton
- **Committed in:** 7eccac2 (Task 1 commit)

---

**Total deviations:** 1 auto-fixed (1 blocking)
**Impact on plan:** Necessary adaptation to actual file structure. No scope creep.

## Issues Encountered
None

## Known Stubs
None -- all functionality is fully implemented.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Clean theme foundation ready for Phase 8 (pure CSS components)
- _base.css provides single location for shared structural additions
- Nested bullet styles available across all themes

---
*Phase: 07-foundation-fixes-tokens*
*Completed: 2026-03-27*

## Self-Check: PASSED
- All 4 key files exist
- Both task commits verified (7eccac2, 082f62a)
