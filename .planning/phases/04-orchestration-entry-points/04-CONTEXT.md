# Phase 4: Orchestration & Entry Points - Context

**Gathered:** 2026-04-06
**Status:** Ready for planning

<domain>
## Phase Boundary

SKILL.md full rewrite with model comprehension routing (replacing keyword dispatch). Three thin slash commands (`/build`, `/refine`, `/onboard`) as workspace initializers. `build-new-deck.md` workflow rewrite with complete 9-agent orchestration logic and pipeline resumability via `.pipeline/` state detection. `refine-deck.md` workflow rewrite with change-scope routing to appropriate agents. `extract-theme.md` workflow removed (replaced by `onboard-brand.md` in Phase 3).

</domain>

<decisions>
## Implementation Decisions

### SKILL.md Routing
- **D-01:** Model comprehension routing replaces keyword dispatch table. SKILL.md describes available workflows with enough context for the model to select the right one from natural language. No routing table, no keyword matching.
- **D-02:** Three workflows: `build-new-deck.md` (full pipeline), `refine-deck.md` (iterate on existing), `onboard-brand.md` (brand setup). Same as v1 count but completely rewritten internals.
- **D-03:** Natural language fallback — `/build-presentation` skill still works. Model picks workflow from context when user doesn't use a slash command.

### Slash Commands
- **D-04:** Thin workspace initializers (5-10 lines each). `/build {name}` creates `projects/{name}/input/`, `/refine {name}` opens existing `projects/{name}/`, `/onboard {name}` creates `brands/{name}/input/`. Each sets context and hands off to SKILL.md routing.
- **D-05:** Commands prompt user to drop files and describe their need. Pipeline starts when user says "go."

### Build Pipeline Orchestration
- **D-06:** Write the COMPLETE 9-agent orchestration in `build-new-deck.md` now, referencing Phase 5 agents (narrative-planner, presentation-architect, presentation-critic) even though they don't exist yet. The workflow is the full spec; Phase 5 creates the agents that fulfill it.
- **D-07:** Pipeline sequence: discuss → research → brand-check → debate (planner → architect + critic verdicts → revise loop, 3-round ceiling) → build → stylist → review. Orchestration logic, verdict evaluation, and debate loop mechanics all live in the workflow file.
- **D-08:** Intermediates surfaced in conversation, never "see .pipeline/research.md". Agent quotes/summarizes findings inline.

### Pipeline Resumability
- **D-09:** Workflow detects `.pipeline/` artifacts on entry. If prior work exists, asks user: "I found an in-progress build (research done, debate round 1 complete). Resume from [next step], or start fresh?" Fresh = wipe `.pipeline/` and restart. Resume = skip completed steps.
- **D-10:** Prevents wasting expensive opus debate rounds on context resets.

### Refine-Deck Change Routing
- **D-11:** Model comprehension routing (same pattern as SKILL.md) detects change scope from user's natural language description. No explicit menu.
- **D-12:** Change gradient: typo/content → slide-editor (no debate), visual tweak → slide-stylist (no debate), component swap → slide-editor (no debate), add/remove slides → slide-editor + planner check (lightweight), section restructure → planner + builder (condensed 1-round), full restructure → full debate pipeline.

### Folder Structure
- **D-13:** Flat project folder with hidden `.pipeline/` for agent artifacts:
  ```
  projects/{name}/
    input/            # User drop-off zone
    brief.md          # User-facing: requirements
    deck-plan.md      # User-facing: approved plan
    presentation.html # User-facing: final output
    notes.yaml        # User-facing: optional speaker notes
    .pipeline/        # Hidden: agent artifacts (gitignored)
  ```

### Brand Selection (build-new-deck Step 1)
- **D-14:** Brand selection flow checks `brands/` directory: unprocessed input → offer onboard redirect, multiple brands → ask which, one brand → use automatically, no brands → offer default or create. Decided in TODO.md.

### Cleanup
- **D-15:** `extract-theme.md` workflow removed — replaced by `onboard-brand.md` (shipped in Phase 3).

### Claude's Discretion
- SKILL.md prose structure and per-workflow description verbosity
- Exact `.pipeline/` artifact naming and what each agent writes
- build-new-deck step numbering and section formatting
- refine-deck internal routing heuristics beyond the specified gradient
- Whether `.pipeline/` gets a `.gitignore` entry at repo root or project level

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Orchestration Design
- `new_insights/TODO.md` — All 17 resolved design decisions: routing, workflows, slash commands, folder structure, pipeline mechanics, resumability, refine-deck gradient, brand logic
- `new_insights/agent-architecture-spec.md` — Full per-agent specs, inter-agent communication protocol, orchestration pattern, agent definition standard
- `new_insights/plans/README.md` — Architecture overview, agent roster, dependency map

### Current Implementation (rewrite targets)
- `.claude/skills/build-presentation/SKILL.md` — Current skill with keyword routing table (full rewrite)
- `.claude/skills/build-presentation/workflows/build-new-deck.md` — Current 6-step workflow (full rewrite to 9-agent pipeline)
- `.claude/skills/build-presentation/workflows/refine-deck.md` — Current basic workflow (full rewrite with change-scope routing)
- `.claude/skills/build-presentation/workflows/extract-theme.md` — To be removed (replaced by onboard-brand.md)

### Phase 1-3 Outputs (dependencies)
- `tokens/components.css` — Monolithic component CSS (builder copies verbatim)
- `templates/_skeleton.html` — Skeleton with `@layer` structure, references `brands/{name}/theme.css`
- `templates/index.md` — Enriched component catalog with `--comp-*` reference
- `references/visual-vocabulary.md` — 15 content archetypes, bullet-list smell test
- `references/css-property-map.md` — CSS property map for slide-stylist

### Agent Definitions (exist or will exist)
- `.claude/agents/presentation-researcher.md` — Researcher agent (exists, minor updates)
- `.claude/agents/presentation-builder.md` — Builder agent (rewritten in Phase 1)
- `.claude/agents/presentation-strategist.md` — Strategist agent (exists, replaced by debate triad in Phase 5)
- `.claude/agents/slide-stylist.md` — Slide-stylist agent (created in Phase 2)
- `.claude/agents/brand-checker.md` — Brand-checker agent (created in Phase 3)
- `.claude/agents/brand-profiler.md` — Brand-profiler agent (created in Phase 3)

### Reference Docs
- `references/component-catalog.md` — 21 components with semantic descriptions
- `references/audience-presets.md` — 6 audience types with design rules
- `references/brand-system.md` — brand.yaml schema, bundled brands, agent-to-field mapping

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- Current SKILL.md structure (intake → routing → verification) — pattern continues, routing mechanism changes
- Current build-new-deck.md 6-step flow (discuss → research → strategize → build → verify → iterate) — expands to 9-agent pipeline
- Current refine-deck.md step structure — completely rewritten but target/understand/apply pattern carries forward
- `onboard-brand.md` — shipped in Phase 3, no changes needed in Phase 4

### Established Patterns
- Subagent spawning via `Agent` tool with `subagent_type` parameter — all pipeline agents use this
- Project folder convention: `projects/{name}/` — continues with added `.pipeline/` and `input/`
- Brand folder convention: `brands/{name}/` with `input/` — established in Phase 3
- `presentationConfig` object in skeleton — brand selection maps to this

### Integration Points
- SKILL.md is the entry point for both slash commands and natural language requests
- build-new-deck.md must reference all 9 agents (some don't exist until Phase 5 — write full spec, agents catch up)
- refine-deck.md must reference slide-editor agent (Phase 5) — same forward-reference pattern
- `.pipeline/` directory is new infrastructure — needs gitignore entry

</code_context>

<specifics>
## Specific Ideas

- Write the complete 9-agent orchestration now even though Phase 5 agents don't exist yet — the workflow IS the spec that Phase 5 implements against
- SKILL.md should feel like the Superpowers/OMX pattern — natural language comprehension, not keyword dispatch

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 04-orchestration-entry-points*
*Context gathered: 2026-04-06*
