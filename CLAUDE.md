## Presentation Builder Framework

A code-based slide deck framework for consulting-grade presentations. AI assistants generate single-file HTML presentations using reveal.js, CSS design tokens, and 14 component templates.

### Quick Start

To build a presentation, describe what you want to build, the audience, and key messages. The skill routes to the appropriate workflow automatically.

Skill location: `.claude/skills/build-presentation/SKILL.md`

### Component Library (14 layouts)

| Component | Use When |
|-----------|----------|
| title | Opening slide, first impression |
| section-break | Dividing major sections, chapter markers |
| text-heavy | Explaining concepts, key arguments, bullet-heavy content |
| two-column | Side-by-side content, text + image |
| metrics | Highlighting 1-6 key numbers, KPIs |
| image-full-bleed | Visual impact, mood, product shots |
| agenda | Presentation roadmap, meeting structure |
| summary | Closing slide, key takeaways, recap |
| contact | Speaker info, call to action |
| comparison | Before/after, A vs B, pros/cons (IST/SOLL) |
| timeline | Roadmap, process flow, milestones |
| quote | Customer quote, expert endorsement |
| card-grid | Service offerings, feature overview (2-4 cards) |
| framework | BCG matrix, 2x2 analysis, quadrant mapping |

Full details: `references/component-catalog.md`

### Theme System

Themes override CSS custom properties (tokens) in `tokens/base.css`. Three bundled themes: default, startup, enterprise. Import from PPTX via `tools/extract-theme.js`. See `references/theme-system.md`.

### Audience Presets

Six audience types with quantified design rules: C-Suite, Stakeholder, Technical, Sales, Workshop, Internal. Each preset specifies slide count, word limits, font sizes, component selection bias, and animation density. See `references/audience-presets.md`.

### Project Structure

```
projects/{name}/
  brief.md            # User requirements
  research.md         # Optional research data
  deck-plan.md        # Slide-by-slide plan (review before building)
  presentation.html   # Final output
  notes.yaml          # Optional speaker notes
```

### Key Conventions

- German-first: all templates handle 130-300% text expansion
- BEM-lite CSS: `comp-{name}`, `comp-{name}__{element}`
- Single HTML output: self-contained, works offline
- No build step: AI writes final HTML directly

<!-- GSD:project-start source:PROJECT.md -->
## Project

**Presentation Builder**

A shareable, code-based slide deck framework that turns structured content (YAML/Markdown) into polished, self-contained HTML presentations powered by reveal.js. Designed for strategic consultants who build decks constantly — pitch decks, board presentations, stakeholder updates, technical deep-dives — across different audiences and corporate brands. The framework provides a component library with semantic descriptions so any AI coding assistant (Claude Code, GitHub Copilot CLI) can automatically select the right layouts and assemble professional slides from natural language prompts.

**Core Value:** Anyone can clone the repo, import their corporate PowerPoint theme, and build a professional presentation by prompting an AI assistant — regardless of which AI tool they use.

### Constraints

- **No build step required**: The framework must work without Node.js/npm for end users — AI generates HTML directly from templates. Build tools (theme extractor, PDF export) are optional developer utilities.
- **Platform agnostic**: No Claude Code-specific features (no MCP servers, no hooks) in the core framework. AI integration is via documentation files only (CLAUDE.md, copilot-instructions.md).
- **Self-contained output**: Final presentations must be single HTML files that work offline (except CDN fonts/reveal.js, which can be bundled).
- **German-first**: All default templates, example content, and documentation must work with German text lengths and typography conventions. English is a secondary locale.
- **Consulting quality**: Output must match McKinsey/BCG deck quality — clean typography, proper hierarchy, restrained animation, professional color palettes.
<!-- GSD:project-end -->

<!-- GSD:stack-start source:STACK.md -->
## Technology Stack

- **reveal.js 5.2.1** (CDN) -- presentation engine, handles slides, fragments, navigation, speaker notes
- **Inter** (Google Fonts CDN) -- sole default body and display font
- **CSS Custom Properties** -- design token system in `tokens/base.css` (colors, typography, spacing, shadows)
- **DeckTape 3.15.0** (optional) -- PDF export via `tools/export-pdf.sh`
- **adm-zip + fast-xml-parser** (optional) -- PPTX theme extraction via `tools/extract-theme.js`
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

- **BEM-lite naming:** `comp-{name}` wrapper class, `comp-{name}__{element}` children (e.g., `comp-metrics`, `comp-metrics__card`)
- **Comment headers on all templates:** COMPONENT, USE WHEN, REQUIRED/OPTIONAL SLOTS, MASTER LAYER, LAYOUT NOTES
- **8px spacing grid** via CSS custom properties (`--spacing-xs` 4px through `--spacing-3xl` 64px)
- **German text handling:** `overflow-wrap: break-word`, `hyphens: auto` on all containers
- **Project folder convention:** `projects/{name}/` with brief.md, deck-plan.md, presentation.html
- **Master layer:** logo, footer bar, slide number -- configurable via `presentationConfig` object, hidden on title/section-break/image-full-bleed slides
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

```
templates/          # 14 component HTML templates + _skeleton.html + index.md
tokens/             # base.css (design tokens) + animations.css
themes/             # default/, startup/, enterprise/ theme CSS files
tools/              # extract-theme.js, export-pdf.sh, gallery.html
projects/           # Generated presentations ({name}/ folders)
docs/               # german-typography.md, speaker-notes.md
.claude/skills/     # build-presentation skill (SKILL.md + workflows/ + references/)
.claude/agents/     # presentation-researcher, strategist, builder subagents
```
<!-- GSD:architecture-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd:quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd:debug` for investigation and bug fixing
- `/gsd:execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->


<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd:profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
