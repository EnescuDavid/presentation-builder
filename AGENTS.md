# AGENTS.md

You are working in a presentation builder framework that generates consulting-grade HTML slide decks from natural language prompts.

## Tech Stack

- **reveal.js 5.2.1** (CDN) -- presentation engine
- **Inter** (Google Fonts CDN) -- default body and display font
- **CSS Custom Properties** -- design token system in `tokens/base.css`
- **Chart.js 4.x** (CDN, conditional) -- data visualization
- **No build step** -- AI writes final `presentation.html` directly

## Project Structure

```
projects/{name}/          # Generated presentations
  brief.md                #   User requirements
  research.md             #   Structured content (optional)
  deck-plan.md            #   Slide-by-slide plan (review before building)
  presentation.html       #   Final output (single file, works offline)
templates/                # 21 component HTML templates + _skeleton.html
tokens/                   # base.css (design tokens) + animations.css
brands/                   # default/, startup/, enterprise/ brand packages (brand.yaml + rules.md + theme.css)
tools/                    # extract-theme.js, export-pdf.sh, check-contrast.js
docs/                     # german-typography.md, speaker-notes.md, eaa-compliance.md
```

## Commands

```bash
npx serve                                                    # Serve presentations locally
node tools/extract-theme.js <file.pptx> --name "<name>"      # Extract PPTX theme
node tools/check-contrast.js brands/<name>                   # Check color contrast (WCAG AA)
./tools/export-pdf.sh projects/<name>/presentation.html      # Export to PDF (requires DeckTape)
node tools/export-accessible.js projects/<name>/presentation.html  # Accessible HTML export
```

## Code Style

```css
/* BEM-lite naming */
.comp-metrics { }                    /* Component wrapper */
.comp-metrics__card { }              /* Component child */
.comp-metrics__number { }            /* Component grandchild */
```

- 8px spacing grid via CSS custom properties (`--spacing-xs` 4px through `--spacing-3xl` 64px)
- HTML entities for German umlauts: `&uuml;`, `&auml;`, `&ouml;`, `&szlig;`
- German-first: `overflow-wrap: break-word`, `hyphens: auto` on all containers
- Colors via tokens only: `var(--color-primary)`, never hardcoded hex
- `lang="de"` on `<html>` element

## Testing

After generating or modifying a presentation:

1. Open `presentation.html` in browser -- no console errors
2. Navigate all slides -- every slide renders correctly
3. Master layer visible on content slides, hidden on title/section-break/image-full-bleed
4. German text: no overflow, hyphens working, umlauts render
5. Theme colors and fonts match specification
6. Animations play on first visit only

## Git Workflow

- Presentation files go in `projects/{name}/`, never in repo root
- Never commit `node_modules/` or `.planning/`
- One commit per logical change

## Boundaries

**Always:**
- Use CSS custom properties from `tokens/base.css` -- never hardcode colors, fonts, or spacing
- Set `data-master="hide"` on title, section-break, and image-full-bleed slides
- Include German text handling CSS rules in every presentation
- Use action titles on content slides (verb-based sentences, not topic labels)

**Ask first:**
- Before modifying files in `templates/` -- they are reference patterns used by all presentations
- Before modifying `tokens/base.css` -- changes affect all themes and presentations
- Before deleting or restructuring existing brands in `brands/`

**Never:**
- Generate presentations outside `projects/{name}/` folders
- Remove existing component templates
- Use fonts other than the theme's specified font without user approval
- Fabricate statistics -- all numbers must come from the user's brief or verified sources
