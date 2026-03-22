# Presentation Builder

## What This Is

A shareable, code-based slide deck framework that turns structured content (YAML/Markdown) into polished, self-contained HTML presentations powered by reveal.js. Designed for strategic consultants who build decks constantly — pitch decks, board presentations, stakeholder updates, technical deep-dives — across different audiences and corporate brands. The framework provides a component library with semantic descriptions so any AI coding assistant (Claude Code, GitHub Copilot CLI) can automatically select the right layouts and assemble professional slides from natural language prompts.

## Core Value

Anyone can clone the repo, import their corporate PowerPoint theme, and build a professional presentation by prompting an AI assistant — regardless of which AI tool they use.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Modular component library with 15+ slide layouts (title, section break, two-column, metrics, comparison, timeline, image-full, quote, agenda, summary, etc.)
- [ ] Reusable design token system (CSS custom properties for colors, fonts, spacing, shadows)
- [ ] Theme layer that applies corporate branding on top of the component library
- [ ] PPTX theme extraction tool — parse .pptx templates to generate CSS theme files (colors, fonts, logos)
- [ ] Two authoring modes: structure mode (fast wireframe iteration) and polish mode (final production deck)
- [ ] Self-contained HTML output — single file, zero runtime dependencies beyond CDN-hosted reveal.js
- [ ] PDF export via DeckTape
- [ ] Speaker notes support with AI-assisted generation patterns
- [ ] German-first multi-language support (handle text expansion, typography conventions, Sie/Du)
- [ ] Semantic component descriptions so AI agents can match content to the right layout automatically
- [ ] Platform-agnostic AI integration — works with Claude Code (CLAUDE.md) and GitHub Copilot CLI (copilot-instructions.md)
- [ ] Animation library — reusable entrance/transition animations (fadeUp, blurIn, slideL, scalePop, etc.)
- [ ] Audience presets — design rules per audience type (C-Suite, technical, sales, workshop, internal)
- [ ] Clone-and-use installation — git clone, drop in theme, start prompting

### Out of Scope

- Real-time collaboration (Pitch.com territory) — adds massive complexity, not needed for AI-assisted solo workflow
- PPTX export to editable PowerPoint — complex reverse mapping, defer to v2 if needed
- SaaS/hosted version — this is a local framework, not a web app
- Custom chart rendering engine — use Chart.js or Mermaid.js plugins, don't build our own
- Slide-by-slide WYSIWYG editor — the AI prompt IS the editor

## Context

- David built his first HTML slide deck (Sentinels pitch) using reveal.js 5.1.0 with extensive custom CSS — the quality exceeded PowerPoint but everything was in one monolithic file with no reuse
- Target users are strategic consultants who build presentations daily for varied audiences (C-Suite, stakeholders, technical teams, sales)
- Framework must work equally well from Claude Code (personal) and GitHub Copilot CLI (work) — platform-agnostic AI workflow is a hard requirement
- The vision includes a future AI "design skill/agent" that reads the component catalog and makes layout decisions automatically — the framework must support this by having rich semantic descriptions for each component
- German is the primary language (DACH business context), English secondary — layouts must handle 130-300% text expansion
- Research identified 44 potential slide components across 14 categories, with a 3-phase implementation priority (15 core → 13 extended → 16 advanced)
- Consulting design principles (Pyramid Principle, SCR framework, MECE) inform the component design
- Existing tools (Gamma, Beautiful.ai, Canva) show what works (smart templates, brand systems) and what to avoid (broken exports, generic AI output, over-constraining layouts)

## Constraints

- **No build step required**: The framework must work without Node.js/npm for end users — AI generates HTML directly from templates. Build tools (theme extractor, PDF export) are optional developer utilities.
- **Platform agnostic**: No Claude Code-specific features (no MCP servers, no hooks) in the core framework. AI integration is via documentation files only (CLAUDE.md, copilot-instructions.md).
- **Self-contained output**: Final presentations must be single HTML files that work offline (except CDN fonts/reveal.js, which can be bundled).
- **German-first**: All default templates, example content, and documentation must work with German text lengths and typography conventions. English is a secondary locale.
- **Consulting quality**: Output must match McKinsey/BCG deck quality — clean typography, proper hierarchy, restrained animation, professional color palettes.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| reveal.js as rendering engine | Mature (70K stars), best plugin ecosystem, supports speaker notes/PDF/fragments natively. User already has experience with it. | — Pending |
| YAML/Markdown as authoring format | Simplest format for AI generation. LLMs produce Markdown reliably. YAML frontmatter for metadata/layout selection. | — Pending |
| CSS custom properties for theming | No build step needed, works in any browser, easy for AI to override per-theme. SCSS available as optional developer tool. | — Pending |
| Component library with semantic descriptions | Enables future AI design agent to match content → layout automatically. Descriptions serve as both human docs and AI context. | — Pending |
| Clone-and-use distribution | Lower barrier than npm/npx. Strategic consultants aren't necessarily developers. Git clone + AI prompt = working deck. | — Pending |
| Two-mode authoring (structure → polish) | Matches real workflow: iterate fast on structure/narrative, then deep-build the final visual deck. | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd:transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd:complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-03-22 after initialization*
