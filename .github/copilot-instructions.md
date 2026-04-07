<!-- Last synced with CLAUDE.md: 2026-03-30 -->
<!-- This file mirrors CLAUDE.md framework teaching for GitHub Copilot CLI users. -->
<!-- Update when framework changes. See CLAUDE.md for authoritative source. -->

<!-- Copilot CLI integration files:
  .github/copilot-instructions.md   -- this file (framework docs, always loaded)
  .github/agents/*.agent.md         -- presentation pipeline agents (orchestrator, researcher, strategist, builder)
  .github/hooks/presentation.json   -- template/token protection hooks
  .claude/skills/build-presentation/ -- shared skill (read by both Claude Code and Copilot CLI)
  AGENTS.md                          -- repo conventions for all AI tools
-->

# Presentation Builder Framework

A code-based slide deck framework for consulting-grade presentations. AI assistants generate single-file HTML presentations using reveal.js, CSS design tokens, and 20+ component templates.

## How It Works

This framework produces self-contained HTML presentations powered by reveal.js 5.2.1 (CDN). Design tokens live in `tokens/base.css` as CSS custom properties (colors, typography, spacing, shadows). The sole default font is Inter via Google Fonts CDN.

**There is no build step.** You generate `presentation.html` directly -- a single HTML file that works offline (except CDN fonts and reveal.js). Copy component `<section>` blocks and their `<style>` into the skeleton template (`templates/_skeleton.html`), fill content slots, and the presentation is ready.

## Component Library (20+ layouts)

| Component | Use When | Key Slots |
|-----------|----------|-----------|
| title | Opening slide, first impression | h1 hero text, subtitle |
| section-break | Dividing major sections, chapter markers | h2 heading, counter |
| text-heavy | Explaining concepts, key arguments | h2 headline, body content |
| two-column | Side-by-side content, text + image | Left column, right column |
| metrics | Highlighting 1-6 key numbers, KPIs | Metric cards (number + label) |
| image-full-bleed | Visual impact, mood, product shots | Background image |
| agenda | Presentation roadmap, meeting structure | Agenda items list |
| summary | Closing slide, key takeaways, recap | Key points list |
| contact | Speaker info, call to action | Name, role, contact details |
| comparison | Before/after, A vs B, pros/cons (IST/SOLL) | Left card, right card |
| timeline | Roadmap, process flow, milestones | 3-6 steps with markers |
| quote | Customer quote, expert endorsement | Quote text, author name |
| card-grid | Service offerings, feature overview (2-4 cards) | Cards with titles and text |
| framework | BCG matrix, 2x2 analysis, quadrant mapping | 4 quadrant contents |
| data-table | Structured data, financials, feature comparison | Rows and columns with headers |
| harvey-balls | Maturity/capability ratings in tables | 0/25/50/75/100% indicators |
| sparkline | KPI micro-charts inside metrics cards | Trend bars, progress indicators |
| team | Team members with photo, name, role | 2-6 person cards |
| chart | Bar, line, pie, doughnut, radar charts | Chart.js canvas + config |
| mermaid | Flowcharts, sequence, Gantt, org charts | Pre-rendered SVG |
| waterfall | Revenue walks, cost bridges | Floating bar segments |
| code-block | Code snippets with syntax highlighting | pre/code with language class |

Full component details: `references/component-catalog.md` (in the build-presentation skill directory)

## Theme System

Three bundled themes override CSS custom properties in `tokens/base.css`:

- **default** -- Clean, professional, neutral palette
- **startup** -- Bold, modern, vibrant gradients
- **enterprise** -- Conservative, corporate, muted tones

Apply a theme by including its CSS file after `base.css`. Dark/light slide variants use `data-background-color="dark"` on individual `<section>` elements.

Import corporate themes from PowerPoint via `tools/extract-theme.js` (extracts 12 color slots, 2 font families, logos).

## Audience Presets

Six audience types with quantified design rules. Set via `presentationConfig.audience` or CSS modifier class (e.g., `audience-c-suite`).

| Audience | Slide Count | Max Words/Slide | Font (Title/Body) | Animation |
|----------|-------------|-----------------|-------------------|-----------|
| C-Suite/Board | 8-12 | 15-30 | 44pt / 28pt | Minimal |
| Stakeholder | 12-20 | 30-50 | 36pt / 22pt | None/Subtle |
| Technical | 15-30+ | 50-100 | 36pt / 18pt | None |
| Sales/Pitch | 8-15 | 10-20 | 48pt / 28pt | Cinematic |
| Workshop | 20-40 | 40-80 | 36pt / 20pt | Step reveals |
| Internal | 5-10 | 30-60 | 32pt / 18pt | None |

Full audience details: `references/audience-presets.md` (in the build-presentation skill directory)

## Project Structure

```
projects/{name}/
  brief.md            # User requirements
  research.md         # Optional research data
  deck-plan.md        # Slide-by-slide plan (review before building)
  presentation.html   # Final output
  notes.yaml          # Optional speaker notes
```

## Critical Layout Rules

These rules are **mandatory** for correct slide rendering. Violating them causes accent bar misalignment, broken centering, and asymmetric padding.

### reveal.js Config

```javascript
center: false,  // NEVER change to true — eliminates JS-injected top offsets
```

### Section Attributes

| Slide Type | Required Attributes |
|------------|-------------------|
| title | `data-master="hide" class="center"` |
| section-break | `data-master="hide" class="center"` |
| image-full-bleed | `data-master="hide"` |
| All other content slides | (none required) |

`class="center"` is **required** on title and section-break slides for vertical centering. Without it, content sticks to the top.

### Section CSS

Every presentation must include these rules on `.reveal .slides section`:

```css
height: 100%;
box-sizing: border-box;
overflow: visible;
```

### Accent Bar

The accent bar `::before` pseudo-element must use `top: 0` with **no `margin-top` hack**:

```css
.reveal .slides section:not([data-master="hide"])::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: var(--theme-accent-bar-height, 3px);
  background: linear-gradient(90deg, var(--theme-gradient-start, var(--color-primary)), var(--theme-gradient-end, var(--color-accent)));
  z-index: 10;
  /* NO margin-top — center:false means top:0 is the slide edge */
}
```

### Theme Token Defaults

Always define these tokens (brands override them):

```css
--theme-accent-bar-height: 3px;
--theme-gradient-start: var(--color-primary);
--theme-gradient-end: var(--color-accent);
--theme-heading-border: 2px solid var(--color-accent);
```

### h2 Display

```css
.reveal .slides section h2 {
  display: block;  /* NEVER inline-block — breaks flex layouts */
  border-bottom: var(--theme-heading-border, none);
}
```

## Key Conventions

- **German-first:** All templates handle 130-300% text expansion (`overflow-wrap: break-word`, `hyphens: auto`)
- **BEM-lite CSS:** `comp-{name}` wrapper class, `comp-{name}__{element}` children (e.g., `comp-metrics`, `comp-metrics__card`)
- **Single HTML output:** Self-contained, works offline
- **No build step:** Generate `presentation.html` directly from templates
- **Master layer:** Logo, footer bar, slide number -- configurable via `presentationConfig` object, hidden on title/section-break/image-full-bleed slides via `data-master="hide"`
- **8px spacing grid:** CSS custom properties (`--spacing-xs` 4px through `--spacing-3xl` 64px)
- **HTML entities for umlauts:** Use `&uuml;` for u-umlaut, `&auml;` for a-umlaut, `&ouml;` for o-umlaut, `&szlig;` for eszett in templates

## Consulting Methodology

Apply these frameworks when generating presentations from briefs. They produce better-structured, more persuasive decks.

### SCQA Framework

Structure every consulting presentation using the SCQA narrative arc:

1. **Situation** -- The agreed-upon context. What the audience already knows. (Opening slides)
2. **Complication** -- What changed, the tension or problem that demands attention. (Problem/challenge slides)
3. **Question** -- The central question this presentation answers. (Often implicit -- the transition from problem to solution)
4. **Answer** -- The recommendation, conclusion, or proposed path forward. (Solution, evidence, and closing slides)

When building a presentation from a brief:
- Identify the four SCQA elements before choosing slides
- Map each slide to its SCQA phase (situation, complication, question, answer)
- Opening slides establish the Situation, problem slides show the Complication, solution slides present the Answer
- For Internal and Workshop audiences, SCQA is optional -- these formats may not need narrative scaffolding

### Pyramid Principle

Structure arguments top-down: lead with the conclusion, then present supporting evidence.

- **Start with the answer:** The title slide or first content slide states the key recommendation
- **Group supporting points:** Each section should support the main message with distinct, non-overlapping arguments
- **MECE groupings:** Mutually Exclusive, Collectively Exhaustive -- slide groups should cover all aspects without overlap
- **One idea per slide:** Each slide makes exactly one point, stated in the title

### Action Titles

Every content slide title must be a complete sentence stating the slide's key insight. Not topic labels.

**Good examples:**
- "Umsatz stieg um 15% durch APAC-Expansion"
- "Drei Risiken erfordern sofortige Massnahmen"
- "Migration wird bis Q2 2027 abgeschlossen"

**Bad examples (topic labels):**
- "Umsatzuebersicht"
- "Naechste Schritte"
- "Zeitplan"

**Exceptions** (structural slides that use labels, not action titles):
- **title:** Hero statement or core message (action title variant)
- **section-break:** Short topic label (2-4 words)
- **agenda:** "Agenda" or equivalent structural label
- **contact:** Name or "Kontakt" structural label

## Building a Presentation

Follow this workflow to generate a consulting-grade presentation:

1. **Create project folder:** `projects/{name}/`

2. **Write brief.md** with:
   - Topic and objective
   - Target audience (one of the 6 presets)
   - Tone and brand requirements
   - Key messages and data points

3. **Plan the deck** (mentally or in deck-plan.md):
   a. Identify SCQA elements from the brief
   b. Select audience preset and note its rules (slide count, word limits, font sizes)
   c. Choose components for each slide from the catalog above
   d. Write action titles for every content slide
   e. Verify slide count falls within the audience preset range
   f. Check that slide groups are MECE (no overlapping topics)

4. **Generate presentation.html:**
   a. Start from `templates/_skeleton.html`
   b. Set `presentationConfig` (title, subtitle, author, date, audience, theme)
   c. Copy component `<section>` blocks from `templates/` for each slide
   d. Fill content slots with German-ready text (use HTML entities for umlauts)
   e. Apply theme tokens and animation classes (`fadeUp`, `blurIn`, `slideL`, `slideR`, `scalePop`)
   f. Set `data-master="hide"` on title, section-break, and image-full-bleed slides
   g. Set `class="center"` on title and section-break slides
   h. Ensure `center: false` in `Reveal.initialize()` config

5. **Review in browser:** Open via local server (`npx serve`) for full functionality including speaker notes (`S` key) and navigation.

### Slide Count Guidance

If your deck exceeds the audience preset range, consider:
- Consolidating slides with overlapping content
- Moving detailed backup into an appendix section
- Splitting into a main deck and a leave-behind document

| Audience | Recommended Range | Warning Threshold |
|----------|-------------------|-------------------|
| C-Suite | 8-12 | > 15 slides |
| Stakeholder | 12-20 | > 25 slides |
| Technical | 15-30+ | > 40 slides |
| Sales | 8-15 | > 20 slides |
| Workshop | 20-40 | > 50 slides |
| Internal | 5-10 | > 15 slides |
