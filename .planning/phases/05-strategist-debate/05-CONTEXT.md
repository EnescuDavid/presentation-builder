# Phase 5: Strategist Debate - Context

**Gathered:** 2026-04-06
**Status:** Ready for planning

<domain>
## Phase Boundary

Replace the single `presentation-strategist.md` with a 3-agent consensus debate triad (narrative-planner, presentation-architect, presentation-critic). Create the slide-editor agent for surgical HTML edits. Rewrite `audience-presets.md` with hard/soft rules. Define the rich `deck-plan.md` format with Narrative Flow Map. The debate protocol orchestration is already implemented in `build-new-deck.md` (Phase 4) — this phase creates the agents that fulfill it.

</domain>

<decisions>
## Implementation Decisions

### Debate Triad Agents
- **D-01:** Three independent agents with separate contexts — real disagreement, not self-anchoring bias from a single agent role-playing 3 personas. Per OMX consensus planning pattern.
- **D-02:** Narrative-planner (opus): SCQA, Pyramid Principle, action titles, visual treatment, content archetype, component selection. Outputs draft deck-plan.md.
- **D-03:** Presentation-architect (opus): 9 structural checks (pacing, density curve, component variety, section balance, visual rhythm, transition quality, opening/closing strength, audience compliance, brief compliance). Plus brand compliance from brand-context.md.
- **D-04:** Presentation-critic (opus): 6 adversarial checks (action title enforcement, Pyramid compliance, evidence gaps, transition logic, summary-content consistency, "So What" test). Outputs BLOCKING or ADVISORY per check.
- **D-05:** All agents use pure XML body structure, strong modal constraints (MUST/NEVER/ALWAYS), mandatory pre-read blocks, numbered workflow, structured output format, success criteria, deviation rules. Per agent-architecture-spec.md standard.

### Debate Protocol
- **D-06:** Verdict-driven auto-gate: zero BLOCKINGs from both architect + critic = debate ends. Any BLOCKING = planner revises. Hard ceiling: 3 rounds, remaining BLOCKINGs escalate to user with Consensus Notes. Already orchestrated in build-new-deck.md (Phase 4).
- **D-07:** Round 1: planner sequential (first), then architect + critic parallel. Round 2+: planner gets merged critiques, then architect + critic re-evaluate in parallel.
- **D-08:** Debate artifacts stored in `.pipeline/debate/round-N-{agent}.md`. Surfaced in conversation, never "see .pipeline/".

### Rich deck-plan.md Format
- **D-09:** Documented markdown convention, NOT parseable YAML schema. Opus planner needs creative freedom; sonnet builder needs unambiguous instructions.
- **D-10:** Narrative Flow Map table at top (slide #, title, component, SCQA phase, rhythm, archetype). User reviews this first — never dump 600 lines.
- **D-11:** Per-slide specs with Content/Design/Narrative groups. Required fields: Headline, Component type, Content archetype, Visual treatment, Elements, Animation, Master layer. Optional: Design overrides, Narrative rationale, Transition notes, Speaker notes outline.
- **D-12:** Validation Warnings section + Consensus Notes section at bottom of final plan documenting all debate disagreements and resolutions.

### Audience Presets Rewrite
- **D-13:** Hard rules (BLOCKING if violated, architect enforces): max slide count, min font size floor, animation bans, component bans per audience type.
- **D-14:** Soft rules (defaults, deviations noted with justification): font size ranges, content density guidelines, component bias as prefer/avoid, max 2 unique font-size-body values per deck.
- **D-15:** Hybrid audiences: pick primary + secondary. Primary's hard rules apply, soft rules blend.
- **D-16:** Enhancement options: `stakes: high` for tighter checks, lightweight mode for <5 slides, advisory-only for Internal/Workshop.

### Slide-Editor Agent
- **D-17:** Separate agent from builder and stylist. Handles surgical HTML edits: content changes, component swaps, element add/remove. Most-used agent in refine-deck.
- **D-18:** Does NOT regenerate full presentation. Reads existing HTML, makes targeted edits. No CSS changes (that's stylist). No full generation (that's builder).
- **D-19:** Refine-deck routing (Phase 4) already dispatches to slide-editor for Tiers 1, 3, 4.

### Cleanup
- **D-20:** `presentation-strategist.md` deleted — replaced by the debate triad.

### Claude's Discretion
- Agent internal workflow step numbering and section formatting
- Exact wording of structural check descriptions in architect agent
- How planner handles SCQA skip for Internal/Workshop audiences internally
- Slide-editor's HTML parsing strategy and edit granularity
- Whether to include stakes:high and lightweight mode in this phase or defer

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Strategist Debate Design
- `new_insights/plans/03-strategist-overhaul.md` — Complete plan: 3 debate agents, protocol, deck-plan format, audience rules, slide-editor, refine routing
- `new_insights/agent-architecture-spec.md` — Agent definition standard (pure XML, GSD patterns, 10 requirements), full per-agent specs, orchestration pattern
- `new_insights/TODO.md` — All 17 resolved design decisions constraining implementation

### Phase 4 Outputs (orchestration already implemented)
- `.claude/skills/build-presentation/workflows/build-new-deck.md` — Debate loop orchestration (Steps 4.1-4.4), agent spawn contracts, file I/O paths
- `.claude/skills/build-presentation/workflows/refine-deck.md` — 6-tier change-scope routing dispatching to slide-editor, stylist, planner

### Reference Docs (agents must read these)
- `references/component-catalog.md` — 21 components with semantic descriptions, `--comp-*` reference
- `references/visual-vocabulary.md` — 15 content archetypes, bullet-list smell test, curated icons
- `references/audience-presets.md` — Current 6 audience types (rewrite target for hard/soft rules)
- `references/design-principles.md` — Typography, spacing, visual hierarchy rules
- `references/css-property-map.md` — CSS property map for stylist integration

### Existing Agent Definitions (patterns to follow)
- `.claude/agents/presentation-builder.md` — Builder agent (Phase 1 rewrite — reference for agent structure)
- `.claude/agents/slide-stylist.md` — Stylist agent (Phase 2 — reference for CSS-only scope)
- `.claude/agents/brand-checker.md` — Brand-checker (Phase 3 — reference for advisory verdict format)
- `.claude/agents/presentation-researcher.md` — Researcher agent (reference for file I/O patterns)

### Agent to Delete
- `.claude/agents/presentation-strategist.md` — Replaced by narrative-planner + architect + critic

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `presentation-builder.md`: Builder agent shows the established XML structure, pre-read blocks, constraints, and output format pattern
- `brand-checker.md`: Shows the advisory verdict format (BLOCKING/ADVISORY) that architect and critic will use
- `slide-stylist.md`: Shows CSS-only scope restriction pattern — slide-editor will use analogous HTML-only scope
- `build-new-deck.md`: Already has complete debate orchestration with agent spawn contracts and file paths

### Established Patterns
- Pure XML agent body: `<role>`, `<constraints>`, `<workflow>`, `<output_format>`, `<success_criteria>`
- Mandatory `<files_to_read>` blocks with exact paths
- MUST/NEVER/ALWAYS modal verbs in constraints
- Structured return format for orchestrator parsing
- `@layer overrides` with `#slide-N` selectors (builder + stylist contract)
- `.pipeline/` for hidden intermediates, surfaced in conversation

### Integration Points
- `build-new-deck.md` Steps 4.1-4.4: spawn narrative-planner, architect, critic with exact file I/O contracts
- `refine-deck.md` Tiers 1, 3, 4: dispatch to slide-editor agent
- `references/audience-presets.md`: read by architect for hard rule enforcement + planner for soft rule guidance
- `deck-plan.md`: written by planner, read by architect + critic + builder

</code_context>

<specifics>
## Specific Ideas

- Agents should follow the exact XML structure pattern from agent-architecture-spec.md §3 (Agent Definition Standard)
- The architect's 9 checks and critic's 6 checks are fully enumerated in 03-strategist-overhaul.md — implement as specified
- Two-pass user review (Narrative Flow Map first, then details) is a planner output convention, not an agent behavior — it's documented in deck-plan.md format spec

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 05-strategist-debate*
*Context gathered: 2026-04-06*
