# Phase 2: Visual Vocabulary - Context

**Gathered:** 2026-04-05
**Status:** Ready for planning

<domain>
## Phase Boundary

Visual vocabulary reference with 15 content archetypes, bullet-list smell test, curated Lucide icon set, CSS property map for the slide-stylist agent, and the slide-stylist agent itself. The strategist hard-maps every slide to an archetype; the stylist runs as a post-builder pass applying per-slide CSS tweaks.

</domain>

<decisions>
## Implementation Decisions

### Archetype Scope & Classification
- **D-01:** All 15 content archetypes from the plan ship in this phase. The reference doc is the deliverable — no runtime cost to having more archetypes documented.
- **D-02:** Hard mapping — the strategist MUST classify every slide into an archetype. Archetype drives component selection + visual treatment. No slide defaults to bullet list without explicit justification.
- **D-03:** Detection uses content signals + fallback. Each archetype lists 3-5 content signals (e.g. "contains before/after" → comparison archetype) plus a fallback component if the primary doesn't fit. Machine-actionable rules, not examples.

### Slide-Stylist Agent
- **D-04:** Post-builder pass — builder generates the full presentation first, stylist runs as a second pass reading the HTML and tweaking overrides. Clean separation.
- **D-05:** Stylist scope is `--comp-*` variables + a whitelist of safe CSS properties (gap, padding, font-size, color, opacity, background). Cannot touch HTML structure, content, or component CSS. All changes target `#slide-N` selectors in `@layer overrides`.
- **D-06:** Stylist input is both deck-plan visual hints AND autonomous visual scan. Strategist writes visual treatment notes per slide in deck-plan.md (e.g. "emphasize the 42% metric, mute secondary cards"). Stylist reads these hints AND does its own scan of the built HTML. Hints take priority, autonomous fixes fill gaps.

### Claude's Discretion
- Icon curation: which 50 Lucide icons to include and how to map them to consulting domains (plan suggests 10 domains)
- CSS property map format: how to document the 91 `--comp-*` variables and safe CSS properties for the stylist
- Bullet-list smell test implementation: how the strategist flags and reroutes text-heavy slides
- Safe CSS property whitelist: exact list beyond the named ones (gap, padding, font-size, color, opacity, background)

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Visual Vocabulary Design
- `new_insights/plans/02-visual-vocabulary-stylist.md` — Complete plan: 15 archetypes, detection patterns, icon set, CSS property map, stylist agent spec
- `new_insights/plans/README.md` — Architecture overview, agent roster, dependency map
- `new_insights/agent-architecture-spec.md` — Full per-agent specs including slide-stylist

### Component Architecture (Phase 1 outputs)
- `tokens/components.css` — Monolithic component CSS with 91 `--comp-*` variables across 21 components
- `tokens/visuals.css` — 9 micro-pattern utilities (traffic lights, checkmarks, badges, callouts, etc.)
- `templates/index.md` — Canonical component catalog with HTML structure, `--comp-*` reference, state modifiers
- `templates/_skeleton.html` — Skeleton with `@layer` structure and `@layer overrides` SLIDE MAP pattern

### Agent Definitions
- `.claude/agents/presentation-builder.md` — Builder agent (copies locked CSS, `--comp-*` vars only)
- `.claude/agents/presentation-strategist.md` — Strategist agent (component selection, to be extended with archetype classification)

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `tokens/visuals.css`: 9 micro-patterns already production-ready — archetypes can reference these directly
- `tokens/components.css`: 91 `--comp-*` variables define the stylist's entire manipulation surface
- `templates/index.md`: Complete catalog with per-component variable reference — basis for CSS property map
- Lucide inline SVG pattern established in `projects/german-demo/presentation.html` (card-grid icons)

### Established Patterns
- `@layer overrides` with `#slide-N` selectors and SLIDE MAP comment — stylist writes into this layer
- Builder reads `templates/index.md` as sole source of class names — stylist must respect same contract
- `--comp-*` variables set on `<section>` elements, never inline styles

### Integration Points
- Strategist agent: needs archetype field added to deck-plan.md output format
- Builder agent: no changes needed — stylist runs after builder completes
- Deck-plan.md format: needs visual treatment hints field per slide for stylist input

</code_context>

<specifics>
## Specific Ideas

No specific requirements — open to standard approaches from the existing plan.

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 02-visual-vocabulary*
*Context gathered: 2026-04-05*
