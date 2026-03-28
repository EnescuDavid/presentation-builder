# Phase 11: Consulting Intelligence & AI Skill Layer - Context

**Gathered:** 2026-03-27
**Status:** Ready for planning

<domain>
## Phase Boundary

Embed consulting methodology (SCQA narrative scaffolding, Pyramid Principle validation, action title enforcement) into the strategist subagent and reference files. Add audience-specific slide count warnings. Create copilot-instructions.md for GitHub Copilot CLI parity. Enhance gallery view with component type badges and labels.

</domain>

<decisions>
## Implementation Decisions

### SCQA Narrative Scaffolding (CONSULT-01)
- **D-01:** Full SCQA scaffolding in strategist. Strategist identifies Situation-Complication-Question-Answer from the brief and writes them as explicit markers in deck-plan.md frontmatter. Slides are mapped to SCQA phases so the user can see and edit the narrative logic before build.

### Pyramid Principle Validation (CONSULT-02)
- **D-02:** Advisory warnings, not blocking. Strategist checks slide sequences for top-down logic, flags titles without verbs, validates MECE groupings, and outputs warnings in deck-plan.md (e.g., "Warning: slides 4-7 are not MECE -- overlapping topics"). User decides whether to fix.

### Action Title Enforcement (CONSULT-04)
- **D-03:** Strategist + catalog enforcement. Strategist validates titles in deck-plan.md (flags topic labels like "Overview", suggests verb-based alternatives like "Cloud migration reduces costs by 30%"). Component catalog adds action title guidance to each component's required slots. Builder trusts the plan -- no redundant re-checking.

### Slide Count Guidance (CONSULT-06)
- **D-04:** Advisory warnings. Strategist warns in deck-plan.md when slide count exceeds audience-specific range (e.g., "Note: 18 slides exceeds C-Suite recommended 8-12"). User can proceed anyway. Ranges already defined in audience-presets.md.

### copilot-instructions.md (PLAT-01)
- **D-05:** Full framework teaching content (~200-300 lines). Mirrors CLAUDE.md framework sections: component catalog summary, theme system, audience presets, project folder convention, key conventions. Copilot generates presentation.html directly (no subagent pipeline available).
- **D-06:** Include SCQA/Pyramid methodology. Copilot-instructions.md teaches SCQA structure and action title guidance so Copilot generates better-structured decks even without a strategist subagent.

### Gallery UX (PLAT-08)
- **D-07:** Claude's Discretion. Add component type badges and labels to gallery thumbnails. Implementation details (filter/search, layout) left to planner.

### Claude's Discretion
- deck-plan.md SCQA frontmatter format (YAML keys, structure)
- Pyramid validation warning format and placement in deck-plan.md
- Action title examples and anti-patterns in component-catalog.md
- copilot-instructions.md internal structure and organization
- Gallery badge styling and label content

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Strategist subagent (primary modification target)
- `.claude/agents/presentation-strategist.md` -- Current strategist with narrative arc logic, needs SCQA/Pyramid/action-title upgrades

### Reference files (modification targets)
- `.claude/skills/build-presentation/references/component-catalog.md` -- Add action title guidance to component slots
- `.claude/skills/build-presentation/references/audience-presets.md` -- Slide count ranges already defined, strategist needs to wire validation
- `.claude/skills/build-presentation/references/design-principles.md` -- May need SCQA/Pyramid methodology section

### Framework teaching (creation target)
- `CLAUDE.md` -- Existing framework teaching content to mirror for copilot-instructions.md
- `.github/copilot-instructions.md` -- New file to create (PLAT-01)

### Gallery (modification target)
- `tools/gallery.html` -- Current gallery with basic slide labels, needs component type badges

### Requirements
- `.planning/REQUIREMENTS.md` -- CONSULT-01, CONSULT-02, CONSULT-04, CONSULT-06, PLAT-01, PLAT-08

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `presentation-strategist.md` -- Already has audience preset loading (Step 2), narrative arc (Step 3), and deck-plan.md output (Step 4). SCQA/Pyramid logic extends these existing steps.
- `audience-presets.md` -- Already has slide count ranges per audience type in Quick Reference table. Strategist just needs to check against these.
- `component-catalog.md` -- Already has "Use when" and audience fit per component. Action title guidance extends the existing slot descriptions.
- `CLAUDE.md` -- Framework teaching content already written. copilot-instructions.md can be derived from this.

### Established Patterns
- Strategist output format: YAML frontmatter + H2 per slide with component/content/theme fields
- Reference files: Markdown with Quick Reference table + detailed sections per item
- Gallery: vanilla HTML/CSS/JS, slide-card grid with iframe thumbnails
- Subagent format: YAML frontmatter (name, description, tools, model) + XML body (role, execution_flow, success_criteria)

### Integration Points
- `presentation-strategist.md` -- Add SCQA extraction step, Pyramid validation step, action title check step, slide count warning step
- `component-catalog.md` -- Add "Action title" guidance to each component's Required slots
- `.github/copilot-instructions.md` -- New file at repo root `.github/` directory
- `tools/gallery.html` -- Add component type data attributes and badge CSS

</code_context>

<specifics>
## Specific Ideas

- SCQA markers in deck-plan.md frontmatter give the user a visible narrative logic layer they can edit before build
- Pyramid warnings should be non-blocking to avoid slowing iteration for non-consulting use cases
- Action title examples: bad = "Overview", "Next Steps", "Timeline" / good = "Revenue grew 15% in Q3", "Three risks require immediate action", "Migration completes by Q2 2027"
- copilot-instructions.md lives in `.github/` per GitHub Copilot convention, not in `.claude/`
- Gallery badges should show component type (e.g., "metrics", "timeline") since that's the primary selection aid

</specifics>

<deferred>
## Deferred Ideas

- Gallery filter/search functionality -- could be a Phase 12+ enhancement if static badges prove insufficient

</deferred>

---

*Phase: 11-consulting-intelligence-ai-skill-layer*
*Context gathered: 2026-03-27*
