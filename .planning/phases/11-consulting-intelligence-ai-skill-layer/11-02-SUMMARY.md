---
phase: 11-consulting-intelligence-ai-skill-layer
plan: 02
subsystem: docs
tags: [copilot, github, gallery, badges, consulting-methodology, scqa]

# Dependency graph
requires:
  - phase: 10-audience-presets-accessibility-css
    provides: Audience preset CSS classes and ARIA landmarks on all templates
provides:
  - copilot-instructions.md with full framework teaching for GitHub Copilot CLI
  - Gallery component type badges extracted from data-component attributes
affects: [12-export-tools, 13-documentation-compliance]

# Tech tracking
tech-stack:
  added: []
  patterns: [copilot-instructions sync header pattern, iframe contentDocument badge extraction]

key-files:
  created: [.github/copilot-instructions.md]
  modified: [tools/gallery.html]

key-decisions:
  - "Removed .claude/skills path references from copilot-instructions.md to maintain platform-agnostic constraint"
  - "Used generic 'build-presentation skill directory' reference for component-catalog and audience-presets paths"

patterns-established:
  - "Copilot sync header: <!-- Last synced with CLAUDE.md: YYYY-MM-DD --> comment at top of copilot-instructions.md"
  - "Gallery badge extraction: iframe load event + contentDocument + data-component query with try/catch fallback"

requirements-completed: [PLAT-01, PLAT-08]

# Metrics
duration: 3min
completed: 2026-03-28
---

# Phase 11 Plan 02: Copilot Instructions & Gallery Badges Summary

**GitHub Copilot CLI framework teaching with SCQA/Pyramid methodology and gallery component type badges via iframe data-component extraction**

## Performance

- **Duration:** 3 min
- **Started:** 2026-03-28T01:04:50Z
- **Completed:** 2026-03-28T01:07:24Z
- **Tasks:** 2
- **Files modified:** 2

## Accomplishments
- Created copilot-instructions.md (184 lines) with full framework teaching: component library, themes, audience presets, conventions, consulting methodology (SCQA, Pyramid Principle, action titles), and step-by-step build workflow
- Enhanced gallery with component type badges extracted from iframe data-component attributes, with cross-origin graceful degradation

## Task Commits

Each task was committed atomically:

1. **Task 1: Create copilot-instructions.md** - `1ad050e` (feat)
2. **Task 2: Add component type badges to gallery** - `b618db8` (feat)

## Files Created/Modified
- `.github/copilot-instructions.md` - Platform-agnostic framework teaching for GitHub Copilot CLI users, including SCQA methodology and action title guidance
- `tools/gallery.html` - Added .slide-card__badge CSS and iframe load event handler for component type badge extraction

## Decisions Made
- Removed .claude/skills path references from copilot-instructions.md to avoid violating the "no Claude-specific features" constraint -- used generic "build-presentation skill directory" path instead
- Kept copilot-instructions.md at 184 lines (within 150-350 target) -- concise enough for Copilot context window while covering all required sections

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 2 - Missing Critical] Removed .claude/skills path references from copilot-instructions.md**
- **Found during:** Task 1 (copilot-instructions.md creation)
- **Issue:** Initial version referenced `.claude/skills/build-presentation/references/` paths which violates the acceptance criteria "Does NOT contain .claude/skills"
- **Fix:** Changed to generic path references: `references/component-catalog.md (in the build-presentation skill directory)`
- **Files modified:** .github/copilot-instructions.md
- **Verification:** `grep -c "\.claude/skills" .github/copilot-instructions.md` returns 0
- **Committed in:** 1ad050e (Task 1 commit)

---

**Total deviations:** 1 auto-fixed (1 missing critical)
**Impact on plan:** Essential for maintaining platform-agnostic constraint. No scope creep.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- copilot-instructions.md ready for Copilot CLI users to generate consulting-grade presentations
- Gallery badges work when opened via local server (npx serve) -- same-origin requirement documented
- Phase 12 (Export Tools) can proceed -- all Phase 11 deliverables complete

---
*Phase: 11-consulting-intelligence-ai-skill-layer*
*Completed: 2026-03-28*
