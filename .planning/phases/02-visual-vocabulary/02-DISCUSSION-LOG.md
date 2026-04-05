# Phase 2: Visual Vocabulary - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-04-05
**Phase:** 02-visual-vocabulary
**Areas discussed:** Archetype scope & depth, Slide-stylist agent design

---

## Archetype Scope & Depth

### Q1: How should the strategist use archetypes?

| Option | Description | Selected |
|--------|-------------|----------|
| Hard mapping | Strategist MUST classify every slide into an archetype. Archetype drives component selection + visual treatment. | ✓ |
| Advisory hints | Archetype tags added as optional metadata. Builder can use them but isn't required to. | |
| Smell test only | Skip per-slide classification. Only implement bullet-list smell test. | |

**User's choice:** Hard mapping (Recommended)
**Notes:** None

### Q2: How many archetypes?

| Option | Description | Selected |
|--------|-------------|----------|
| All 15 | Ship the full set from the plan. Reference doc has no runtime cost. | ✓ |
| Core 8-10 first | Most common archetypes first, defer niche ones. | |
| You decide | Claude picks based on what 21 components can express. | |

**User's choice:** All 15 (Recommended)
**Notes:** None

### Q3: Detection pattern depth?

| Option | Description | Selected |
|--------|-------------|----------|
| Content signals + fallback | 3-5 content signals per archetype plus fallback component. Machine-actionable rules. | ✓ |
| Example-driven | 2-3 real slide examples per archetype. Less prescriptive. | |
| Both signals + examples | Rules for agents AND examples for humans. Most comprehensive. | |

**User's choice:** Content signals + fallback
**Notes:** User asked for clarification on the difference. Explained that content signals are machine-actionable decision rules for the strategist agent, while examples are better for human readers. Since the reference doc is consumed by agents, signals + fallback is the right fit.

---

## Slide-Stylist Agent Design

### Q1: When should the stylist run?

| Option | Description | Selected |
|--------|-------------|----------|
| Post-builder pass | Builder generates first, stylist runs second pass. Clean separation. | ✓ |
| Integrated in builder | Styling logic lives in builder prompt. Fewer stages but more complex builder. | |
| On-demand only | Stylist only runs via /refine. Not part of default pipeline. | |

**User's choice:** Post-builder pass (Recommended)
**Notes:** None

### Q2: What can the stylist change?

| Option | Description | Selected |
|--------|-------------|----------|
| --comp-* vars only | Only --comp-* custom properties on #slide-N selectors. Strictest. | |
| --comp-* vars + safe CSS | --comp-* vars AND whitelisted safe CSS properties (gap, padding, font-size, color, opacity, background). | ✓ |
| Full @layer overrides | Any CSS in @layer overrides targeting #slide-N. Maximum flexibility, risk of breaking layouts. | |

**User's choice:** --comp-* vars + safe CSS
**Notes:** None

### Q3: How does the stylist decide what to tweak?

| Option | Description | Selected |
|--------|-------------|----------|
| Deck-plan visual hints | Strategist writes visual treatment notes per slide. Stylist translates to CSS. | |
| Autonomous visual scan | Stylist reads built HTML, identifies visual issues, fixes independently. | |
| Both hints + scan | Reads strategist hints AND does own visual scan. Hints take priority. | ✓ |

**User's choice:** Both hints + scan
**Notes:** None

---

## Claude's Discretion

- Icon curation details (which 50 Lucide icons, domain mapping)
- CSS property map format
- Bullet-list smell test implementation
- Safe CSS property whitelist beyond the named ones

## Deferred Ideas

None — discussion stayed within phase scope.
