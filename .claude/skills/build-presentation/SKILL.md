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
Describe what you want to build, change, or set up. No menu -- just tell me what you need.

**Examples:**
- "Build a pitch deck for our Q3 board meeting"
- "Change the colors on slide 4 to match our brand"
- "Import our corporate PowerPoint theme"
</intake>

<workflows>
## Available Workflows

**build-new-deck** -- Create a new presentation from scratch.
- Use when: the user wants a new deck that does not exist yet
- Signals: "build", "create", "new deck", "presentation about...", "pitch deck for...", topic descriptions without an existing project
- Pipeline: 9-agent orchestration (brief intake, research, brand-check, debate with planner + architect + critic, user review, build, style, review) with pipeline resumability
- Input: User's description + optional files in `projects/{name}/input/`
- Output: `projects/{name}/presentation.html`
- File path: `workflows/build-new-deck.md`

**refine-deck** -- Modify, improve, or iterate on an existing presentation.
- Use when: the user has an existing deck and wants changes -- from typo fixes to full restructures
- Signals: "change", "fix", "update", "refine", "improve", "swap", "restructure", references to specific slides or existing project names
- Routing: model comprehension detects change scope (typo → slide-editor, visual → slide-stylist, structural → planner + builder) automatically -- no menu presented to user
- Input: Existing `projects/{name}/` with `presentation.html`
- Output: Updated `presentation.html`
- File path: `workflows/refine-deck.md`

**onboard-brand** -- Set up or import a corporate brand.
- Use when: the user wants to add their company's visual identity
- Signals: "brand", "import", "corporate", "PowerPoint theme", "our colors", company identity discussions
- Pipeline: brand profiler extracts from assets, generates brand.yaml + theme.css, produces test deck
- Input: Brand assets in `brands/{name}/input/`
- Output: `brands/{name}/brand.yaml` + `theme.css` + `test-presentation.html`
- File path: `workflows/onboard-brand.md`

Read the selected workflow file and follow it exactly.
</workflows>

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

- **component-catalog.md** -- 21 slide components with semantic descriptions, required/optional slots, HTML patterns, --comp-* variables, audience fit
- **audience-presets.md** -- 6 audience types (C-Suite, Stakeholder, Technical, Sales, Workshop, Internal) with quantified design rules
- **design-principles.md** -- Consulting-grade design rules: typography hierarchy, color usage, spacing, visual hierarchy, content density
- **brand-system.md** -- brand.yaml schema (9 fields), bundled brands comparison, agent-to-field mapping, brand selection logic
- **visual-vocabulary.md** -- 15 content archetypes, bullet-list smell test, curated Lucide icons
- **css-property-map.md** -- CSS property map for slide-stylist agent (91 --comp-* variables by component)
- **animation-guide.md** -- 6 animation classes (fadeUp, blurIn, slideL, slideR, scalePop, lineGrow), density rules per audience
</reference_index>
