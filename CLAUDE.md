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

Technology stack not yet documented. Will populate after codebase mapping or first phase.
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

Conventions not yet established. Will populate as patterns emerge during development.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

Architecture not yet mapped. Follow existing patterns found in the codebase.
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
