# Presentation Builder

A code-based slide deck framework for consulting-grade presentations. AI assistants generate single-file HTML presentations using reveal.js, CSS design tokens, and 21 component templates.

**Core idea:** Clone the repo, import your corporate PowerPoint theme, and build professional presentations by prompting an AI assistant -- regardless of which AI tool you use.

## Quick Start

### With Claude Code

```bash
git clone <repo-url> presentation-builder
cd presentation-builder
claude

# Then tell Claude what you want:
> Build a 10-slide pitch deck for our Series A fundraise targeting C-Suite investors
```

Claude Code reads `CLAUDE.md` and the skill files automatically. It runs a multi-agent pipeline: research, narrative planning, debate, build, and review.

### With GitHub Copilot CLI

```bash
git clone <repo-url> presentation-builder
cd presentation-builder
gh copilot

# Copilot reads .github/copilot-instructions.md and AGENTS.md automatically
```

### With any AI coding assistant

Point your AI tool at `AGENTS.md` in the repo root. It contains the framework conventions, project structure, and code style rules any AI needs to generate correct presentations.

## What You Get

A single self-contained HTML file that:
- Opens in any browser, works offline (except CDN fonts)
- Has keyboard navigation, speaker notes, and progress bar via reveal.js
- Uses consulting-grade typography, spacing, and color palettes
- Handles German text (130-300% expansion) out of the box

## Component Library (21 layouts)

| Component | Use When |
|-----------|----------|
| title | Opening slide, first impression |
| section-break | Dividing major sections |
| text-heavy | Key arguments, bullet-heavy content |
| two-column | Side-by-side content, text + image |
| metrics | Highlighting 1-6 KPIs |
| image-full-bleed | Visual impact, product shots |
| agenda | Presentation roadmap |
| summary | Key takeaways, recap |
| contact | Speaker info, call to action |
| comparison | Before/after, A vs B, pros/cons |
| timeline | Roadmap, process flow, milestones |
| quote | Customer or expert endorsement |
| card-grid | Service offerings, features (2-4 cards) |
| framework | 2x2 matrix, quadrant mapping |
| data-table | Structured data, financials |
| harvey-balls | Maturity/capability ratings |
| chart | Bar, line, pie, doughnut, radar (Chart.js) |
| mermaid-diagram | Flowcharts, sequence diagrams (pre-rendered SVG) |
| waterfall | Revenue walks, cost bridges |
| code-block | Code snippets with syntax highlighting |
| team | Team members with photo, name, role |

## Brand System

Three bundled brands: **default**, **startup**, **enterprise**. Each brand is a package of:

```
brands/{name}/
  brand.yaml    # Machine-readable brand profile (colors, fonts, tone)
  rules.md      # Human-readable brand guidelines for AI agents
  theme.css     # CSS custom property overrides
```

**Import your own brand** from a corporate PowerPoint template:

```bash
# With Claude Code:
> Onboard our corporate brand from this PPTX template

# Or manually:
node tools/extract-theme.js company-template.pptx --name "company"
```

## Project Structure

```
templates/          # 21 component HTML templates + _skeleton.html
tokens/             # Design tokens (base.css, animations.css, components.css)
brands/             # Brand packages (default, startup, enterprise)
examples/           # Example presentations
projects/           # Your generated presentations
tools/              # Theme extraction, PDF export, contrast checker, screenshots
docs/               # German typography, speaker notes, accessibility docs
```

## Optional Tools

These require Node.js (`npm install` in the repo root):

```bash
node tools/extract-theme.js <file.pptx>               # Extract PPTX theme
node tools/check-contrast.js                           # WCAG AA contrast check
./tools/export-pdf.sh projects/my-deck/presentation.html  # PDF export (DeckTape)
python3 tools/capture-slides.py projects/my-deck/presentation.html  # Screenshots
```

## Examples

Open any example directly in your browser:

- `examples/basic-example.html` -- Simple presentation with core components
- `examples/german-demo.html` -- German-language demo with all components
- `examples/themed-showcase.html` -- All 21 components with theming

## AI Integration

The framework is designed to be used through AI coding assistants. Integration files:

| File | Read by |
|------|---------|
| `CLAUDE.md` | Claude Code |
| `AGENTS.md` | All AI tools (Claude, Copilot, Cursor, Gemini CLI) |
| `.github/copilot-instructions.md` | GitHub Copilot CLI |
| `.claude/skills/build-presentation/` | Claude Code (skill + workflows + references) |
| `.claude/agents/` | Claude Code (10 specialized subagents) |
| `.github/agents/` | Copilot CLI agents |

## License

MIT
