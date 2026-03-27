# Presentation Builder

## What This Is

A shareable, code-based slide deck framework that turns natural language prompts into polished, self-contained HTML presentations powered by reveal.js. Designed for strategic consultants who build decks constantly — pitch decks, board presentations, stakeholder updates, technical deep-dives — across different audiences and corporate brands. The framework provides a 14-component library with semantic descriptions and a Claude Code skill with specialized subagents (researcher, strategist, builder) that orchestrate the full presentation pipeline.

## Core Value

Anyone can clone the repo, import their corporate PowerPoint theme, and build a professional presentation by prompting an AI assistant — regardless of which AI tool they use.

## Current State (v1.0 shipped 2026-03-27)

- **14 component templates** with BEM-lite CSS, design token integration, German text handling
- **3 bundled themes** (default, startup, enterprise) + PPTX extraction tool
- **AI skill layer**: SKILL.md router, 3 workflows, 5 reference files, 3 subagents
- **German localization**: typography conventions, global text handling CSS, full German demo
- **Speaker notes**: YAML format with generation-time injection
- **Tooling**: DeckTape PDF export, gallery/thumbnail view
- **Codebase**: 2,508 lines core framework + 1,575 lines AI skill layer, 46 framework files

## Current Milestone: v2.0 Data Viz, Consulting Intelligence & Platform

**Goal:** Add data visualization components, consulting methodology intelligence, accessibility compliance, and platform expansion.

**Target features:**
- Data visualization: Chart.js, Mermaid, data tables, waterfall charts, Harvey balls, sparklines
- Consulting intelligence: SCQA scaffolding, Pyramid Principle validation, "read the titles" export, audience preset CSS
- Accessibility: WCAG 2.1 AA validation, ARIA landmarks, accessible HTML export, EAA compliance
- Platform expansion: copilot-instructions.md, PPTX export, team/people component, code blocks
- Polish: nested bullets, print CSS, theme dedup, dark variant fix, footer date auto-population

## Requirements

### Validated (v1.0)

- [x] Reusable design token system (CSS custom properties for colors, fonts, spacing, shadows) — v1.0
- [x] Animation library (fadeUp, blurIn, slideL, slideR, scalePop, lineGrow) — v1.0
- [x] Self-contained HTML output — single file, zero runtime dependencies beyond CDN — v1.0
- [x] 14 slide component templates (title, section-break, text-heavy, two-column, metrics, image-full-bleed, agenda, summary, contact, comparison, timeline, quote, card-grid, framework) — v1.0
- [x] Theme layer with CSS custom property overrides — v1.0
- [x] PPTX theme extraction tool (12 color slots, 2 font families, logos) — v1.0
- [x] PDF export via DeckTape — v1.0
- [x] Speaker notes infrastructure (YAML format, generation-time injection) — v1.0
- [x] German-first typography (text handling CSS, conventions reference) — v1.0
- [x] Semantic component descriptions in AI-readable catalog — v1.0
- [x] Claude Code skill with subagent pipeline (researcher, strategist, builder) — v1.0
- [x] Audience presets documented with design rules (6 types) — v1.0
- [x] Clone-and-use installation — v1.0

### Active

- [ ] Data visualization components (Chart.js, Mermaid, tables, waterfall, Harvey balls)
- [ ] Consulting intelligence (SCQA scaffolding, Pyramid Principle validation, "read the titles" export)
- [ ] WCAG 2.1 AA accessibility and EAA compliance
- [ ] copilot-instructions.md for GitHub Copilot CLI (AI-02, deferred from v1)
- [ ] PPTX export (PptxGenJS)
- [ ] Audience preset CSS implementation (font size/density adjustments per audience)

### Out of Scope

- Real-time collaboration — adds massive complexity, not needed for AI-assisted solo workflow
- SaaS/hosted version — this is a local framework, not a web app
- Slide-by-slide WYSIWYG editor — the AI prompt IS the editor
- React/Vue component wrappers — keep it plain HTML/CSS for maximum portability

## Context

- v1.0 shipped in 6 days (2026-03-22 → 2026-03-27), 6 phases, 18 plans, 50+ commits
- Framework successfully generates consulting-grade German presentations with all 14 components
- AI skill layer follows GSD pattern: researcher → strategist (deck-plan.md) → builder (presentation.html)
- Research identified 40 additional requirements across 5 categories for v2 (data viz, consulting intelligence, accessibility, platform expansion, polish)
- Known bugs: remaining umlaut errors in 4 templates, RevealNotes plugin not loaded, presentationConfig JS gap, clamp/vw units, two-column class bug

## Constraints

- **No build step required**: AI generates HTML directly from templates. Build tools are optional developer utilities.
- **Platform agnostic**: Core framework uses documentation files only. Claude Code skill layer is an enhancement, not a requirement.
- **Self-contained output**: Single HTML files that work offline (except CDN fonts/reveal.js).
- **German-first**: All templates handle German text lengths and typography conventions.
- **Consulting quality**: Output matches McKinsey/BCG deck quality.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| reveal.js as rendering engine | Mature (70K stars), best plugin ecosystem, speaker notes/PDF/fragments natively | ✓ Good — solid foundation |
| CSS custom properties for theming | No build step, works in any browser, easy for AI to override per-theme | ✓ Good — 3 themes prove the pattern |
| Component library with semantic descriptions | Enables AI design agent to match content → layout automatically | ✓ Good — 14 components with AI-readable catalog |
| Clone-and-use distribution | Lower barrier than npm/npx for strategic consultants | ✓ Good — git clone + AI prompt = working deck |
| Claude Code skill with subagents | Mirrors GSD pattern (researcher → planner → executor) for structured AI workflow | ✓ Good — 3 specialized agents |
| German-first design | DACH business context, layouts handle 130-300% text expansion | ✓ Good — typography conventions + global CSS |
| Speaker notes as separate YAML file | Templates stay clean, notes injected at generation time | ✓ Good — per D-07 decision |

## Evolution

This document evolves at phase transitions and milestone boundaries.

---
*Last updated: 2026-03-27 after v1.0 milestone*
