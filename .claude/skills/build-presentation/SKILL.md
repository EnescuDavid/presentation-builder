---
name: build-presentation
description: Build consulting-grade HTML presentations from natural language prompts using reveal.js, CSS design tokens, and 21 component templates.
---

<essential_principles>
## How the Presentation Builder Works

This framework generates single-file HTML presentations using reveal.js. All visual properties are CSS custom properties (tokens) in `tokens/base.css`. Brands in `brands/` override these tokens via theme.css, with brand.yaml profiles for agent awareness. Components in `templates/` reference tokens via `var()` and adapt automatically to any brand.

**Key facts:**
- 21 component templates in `templates/` (title, section-break, text-heavy, two-column, metrics, image-full-bleed, agenda, summary, contact, comparison, timeline, quote, card-grid, framework, data-table, harvey-balls, chart, mermaid-diagram, waterfall, code-block, team)
- CSS design tokens in `tokens/base.css` (colors, typography, spacing, shadows) + `tokens/animations.css`
- Three bundled brands in `brands/`: default, startup, enterprise (each with brand.yaml + rules.md + theme.css)
- Generated presentations live in `projects/{name}/`
- German-first: all templates handle 130-300% text expansion with overflow-wrap and hyphens
- No build step: AI writes final HTML directly from template references
- Master layer (logo, footer bar, slide number) configurable via `presentationConfig` object
</essential_principles>

<intake>
What would you like to do?

1. **Build a new presentation** from scratch
2. **Refine an existing deck** (iterate on content, design, or structure)
3. **Onboard a corporate brand** (from PPTX, PDF, logos, or conversation)

**Describe your need and I will route to the right workflow.**
</intake>

<routing>
| Response | Workflow |
|----------|----------|
| 1, "new", "create", "build", "presentation", "deck" | workflows/build-new-deck.md |
| 2, "refine", "improve", "update", "change", "fix", "iterate" | workflows/refine-deck.md |
| 3, "theme", "import", "pptx", "brand", "corporate", "extract" | workflows/onboard-brand.md |

**After reading the workflow, follow it exactly.**
</routing>

<verification_loop>
## After Every Generation

Run these checks to ensure the presentation is healthy:

1. **HTML file exists** at `projects/{name}/presentation.html`
2. **Opens in browser** without errors (check dev console)
3. **All slides render** -- navigate through every slide
4. **Theme applied** -- colors, fonts, and spacing match the selected theme
5. **Master layer visible** on content slides (logo, footer, slide number)
6. **Master layer hidden** on title, section-break, and image-full-bleed slides
7. **German text** -- no overflow, hyphens working, umlauts render correctly
8. **Animations** -- entrance animations play on first visit, not on revisit

**Report to user:** Slide count, theme applied, any layout issues found.
</verification_loop>

<reference_index>
## Domain Knowledge

All in `references/`:

- **component-catalog.md** -- 21 slide components with semantic descriptions, required/optional slots, HTML patterns, audience fit
- **audience-presets.md** -- 6 audience types (C-Suite, Stakeholder, Technical, Sales, Workshop, Internal) with quantified design rules
- **design-principles.md** -- Consulting-grade design rules: typography hierarchy, color usage, spacing, visual hierarchy, content density
- **theme-system.md** -- Full CSS token catalog, theme file structure, PPTX extraction, footer configuration
- **brand-system.md** -- brand.yaml schema (9 fields), bundled brands comparison, agent-to-field mapping, brand selection logic
- **animation-guide.md** -- 6 animation classes (fadeUp, blurIn, slideL, slideR, scalePop, lineGrow), density rules per audience
</reference_index>
