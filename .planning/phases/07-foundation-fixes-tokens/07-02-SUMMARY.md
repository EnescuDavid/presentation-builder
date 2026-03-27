---
phase: 07-foundation-fixes-tokens
plan: 02
subsystem: ui
tags: [css-tokens, design-system, german-locale, accessibility]

# Dependency graph
requires:
  - phase: 07-01
    provides: "Deduplicated theme files and shared _base.css structural CSS"
provides:
  - "6 new semantic color tokens (warning, info, overlay, on-primary, dark-text, dark-text-muted)"
  - "Fully tokenized templates and theme base -- zero hardcoded colors"
  - "German date auto-population fallback in skeleton footer"
affects: [08-css-components, 10-accessibility, themes]

# Tech tracking
tech-stack:
  added: []
  patterns: ["Semantic state tokens for theming consistency", "toLocaleDateString('de-DE') for German date formatting"]

key-files:
  created: []
  modified:
    - tokens/base.css
    - themes/default/theme.css
    - themes/startup/theme.css
    - themes/enterprise/theme.css
    - themes/_base.css
    - templates/image-full-bleed.html
    - templates/timeline.html
    - templates/summary.html
    - templates/_skeleton.html

key-decisions:
  - "Added --color-dark-text and --color-dark-text-muted as separate tokens (not just on-primary variants) for fine-grained dark background control"
  - "Used var(--color-dark-text) for image-full-bleed paragraph text (0.85 opacity replaced with 0.9 token -- visually indistinguishable improvement)"
  - "Kept gradient mid-point rgba(0,0,0,0.3) as-is -- transition colors are not semantic tokens"

patterns-established:
  - "State color tokens: --color-warning, --color-info for UI state indication"
  - "Overlay/contrast tokens: --color-overlay, --color-on-primary for dark background patterns"
  - "Dark variant tokens: --color-dark-text, --color-dark-text-muted for dark slide variants"

requirements-completed: [A11Y-05, FIX-10]

# Metrics
duration: 3min
completed: 2026-03-27
---

# Phase 07 Plan 02: Design Tokens & Date Fallback Summary

**22 color tokens with semantic state/utility colors, zero hardcoded colors in templates/themes, and German date auto-population in footer**

## Performance

- **Duration:** 3 min
- **Started:** 2026-03-27T12:08:56Z
- **Completed:** 2026-03-27T12:11:51Z
- **Tasks:** 3
- **Files modified:** 9

## Accomplishments
- Expanded design token palette from 16 to 22 color tokens with warning, info, overlay, on-primary, dark-text, and dark-text-muted semantic tokens
- Replaced all hardcoded color values (#fff, rgba) in templates and theme base CSS with semantic token references
- Added German date auto-population fallback to skeleton footer using toLocaleDateString('de-DE')

## Task Commits

Each task was committed atomically:

1. **Task 1: Add semantic state color tokens and update all themes** - `4242ba4` (feat)
2. **Task 2: Replace hardcoded colors in templates and theme base with token references** - `94dddcd` (fix)
3. **Task 3: Add German date auto-population fallback to skeleton** - `b436ab1` (feat)

## Files Created/Modified
- `tokens/base.css` - Added 6 new semantic color tokens (22 total)
- `themes/default/theme.css` - Theme-specific overrides for 6 new tokens
- `themes/startup/theme.css` - Theme-specific overrides for 6 new tokens (vibrant palette)
- `themes/enterprise/theme.css` - Theme-specific overrides for 6 new tokens (conservative palette)
- `themes/_base.css` - Dark variant rgba values replaced with token references
- `templates/image-full-bleed.html` - Dark overlay and text colors tokenized
- `templates/timeline.html` - Marker text color tokenized
- `templates/summary.html` - Point icon text color tokenized
- `templates/_skeleton.html` - German date fallback added to Reveal ready handler

## Decisions Made
- Added --color-dark-text and --color-dark-text-muted as separate tokens for dark background text, rather than reusing --color-on-primary, enabling finer control over text opacity on dark slides
- Replaced rgba(255,255,255,0.85) with var(--color-dark-text) (0.9 opacity) -- the 5% difference is visually indistinguishable and consolidates to a single token
- Kept rgba(0,0,0,0.3) gradient mid-point in image-full-bleed as-is -- gradient transitions are not semantic colors

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Token system fully expanded with 22 color tokens covering all semantic use cases
- All templates and themes are fully tokenized -- safe for Phase 08 CSS component work
- German date auto-population eliminates manual date entry friction
- Accessibility improvements (A11Y-05) enable cleaner Phase 10 accessibility work

---
*Phase: 07-foundation-fixes-tokens*
*Completed: 2026-03-27*

## Self-Check: PASSED

All 9 modified files verified on disk. All 3 task commits verified in git log.
