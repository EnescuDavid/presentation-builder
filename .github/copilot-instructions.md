# Presentation Builder — Copilot Instructions

## Agent Routing

For **any** presentation-related task, use the `@presentation-orchestrator` agent. It handles routing internally:

| User Intent | Route |
|-------------|-------|
| Build new presentation | `@presentation-orchestrator` → researcher → strategist → builder |
| Refine existing deck | `@presentation-orchestrator` → identifies changes → builder |
| Import corporate theme | `@presentation-orchestrator` → extract-theme workflow |

The orchestrator coordinates three specialized agents:
- `@presentation-researcher` — gathers and structures content into `research.md`
- `@presentation-strategist` — designs the slide-by-slide `deck-plan.md`
- `@presentation-builder` — generates final `presentation.html`

Do not call the sub-agents directly unless the user explicitly asks for a specific step.

## Critical Layout Rules

These rules are **mandatory** in every generated presentation. Violating them breaks the accent bar, centering, and padding.

```javascript
// reveal.js config — NEVER change to true
center: false,
```

```html
<!-- Title and section-break slides MUST have class="center" -->
<section data-component="title" data-master="hide" class="center">
<section data-component="section-break" data-master="hide" class="center">

<!-- All other content slides: no class="center" -->
<section data-component="metrics">
```

```css
/* Section height — required on .reveal .slides section */
height: 100%;
box-sizing: border-box;
overflow: visible;

/* Accent bar — NO margin-top hack, top:0 is the slide edge */
.reveal .slides section:not([data-master="hide"])::before {
  top: 0; /* correct */
  margin-top: calc(-1 * ...); /* WRONG — never add this */
}

/* h2 — block, never inline-block */
.reveal .slides section h2 { display: block; }

/* Theme token defaults — always define */
--theme-accent-bar-height: 3px;
--theme-gradient-start: var(--color-primary);
--theme-gradient-end: var(--color-accent);
--theme-heading-border: 2px solid var(--color-accent);
```

## Reference Files

- `templates/index.md` — component catalog (source of truth for HTML patterns and class names)
- `templates/_skeleton.html` — structural base for all presentations
- `tokens/base.css` — design tokens
- `tokens/components.css` + `tokens/visuals.css` — component CSS (copy verbatim)
- `AGENTS.md` — repo conventions for all AI tools
