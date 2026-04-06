# Brand System Reference

AI reference for the presentation builder's brand architecture. Use this to understand the `brands/` directory structure, the `brand.yaml` schema, and how agents interact with brand files.

## Overview

The `brands/` directory is the home for all corporate brand packages. Each brand is a self-contained package:

```
brands/{name}/
  brand.yaml              # Machine-readable profile (9 fields)
  rules.md                # Prose guidance for AI agents
  theme.css               # CSS custom property overrides (@layer theme)
  logo.svg                # Brand logo (optional)
  test-presentation.html  # Visual proof across all 21 components (generated during onboarding)
  input/                  # Source assets used during onboarding (optional, preserved)
```

All 21 components adopt the brand automatically via `var()` references to tokens in `tokens/base.css`. No component CSS changes are needed when switching brands.

---

## Bundled Brands

Three brands ship with the framework as reference examples:

| Brand | Personality | Formality | Title Style | Key Traits |
|-------|-------------|-----------|-------------|------------|
| default | Balanced, neutral | medium | action-verb | No restrictions, permissive, starting point for custom brands |
| startup | Casual, visual-heavy | casual | question | Emoji allowed, image-forward, Space Grotesk display font |
| enterprise | Formal, data-driven | high | statement | No emoji, data-heavy, restricted component set |

Bundled brands have hand-written `brand.yaml` and `rules.md` — they are not profiler-generated. Study them as templates when creating custom brands.

---

## brand.yaml Schema

All 9 fields are required. Fields with no applicable value use empty strings `""` or empty collections `{}` / `[]`.

### name (string)

Brand display name shown in brand-context.md headers and UI.

```yaml
name: "Acme Corp"
```

### locale (string)

Default language code for content generation. Follows BCP 47 conventions.

```yaml
locale: "de"   # German (default per German-first convention)
locale: "en"   # English
```

### theme_css (string)

Project-root-relative path to the brand's CSS file. The path MUST be relative to the project root — not `./brands/...` and not an absolute path.

```yaml
theme_css: "brands/acme-corp/theme.css"
```

The file must use `@layer theme` with `:root` CSS custom property overrides. See `theme-system.md` for the full token catalog.

### logo (string)

Project-root-relative path to the brand logo file, or empty string if no logo.

```yaml
logo: "brands/acme-corp/logo.svg"   # with logo
logo: ""                             # no logo
```

Accepted formats: SVG (preferred), PNG. The master layer in `_skeleton.html` reads this path via `presentationConfig.logo`.

### master_layer (object)

Controls the persistent master layer rendered on all content slides (logo, footer bar, slide numbers). These fields map directly to `presentationConfig` in the generated HTML.

| Field | Type | Values | Default | Maps to |
|-------|------|--------|---------|---------|
| company | string | Company name for footer | `""` | `presentationConfig.company` |
| confidentiality | string | Footer text (e.g., "Strictly Confidential", "Internal Use Only") | `""` | `presentationConfig.confidentiality` |
| date_format | string | Date display format string | `"DD.MM.YYYY"` | footer date rendering |
| logo_position | string | `"top-left"`, `"top-right"`, `"bottom-left"` | `"top-left"` | master layer CSS layout |

```yaml
master_layer:
  company: "Acme Corp GmbH"
  confidentiality: "Streng vertraulich"
  date_format: "DD.MM.YYYY"
  logo_position: "top-left"
```

The master layer is automatically hidden on slides with `data-master="hide"` (title, section-break, image-full-bleed slides).

### component_preferences (object)

Guides component selection during deck planning. The strategist agent reads these preferences when selecting layouts for slides.

| Field | Type | Description |
|-------|------|-------------|
| prefer | list | Components this brand favors — strategist will lean toward these |
| avoid | list | Components this brand discourages — strategist will deprioritize these |
| title_style | string | Title writing convention: `"statement"`, `"question"`, or `"action-verb"` |

Valid component names (all 21):
`title`, `section-break`, `text-heavy`, `two-column`, `metrics`, `image-full-bleed`, `agenda`, `summary`, `contact`, `comparison`, `timeline`, `quote`, `card-grid`, `framework`, `data-table`, `harvey-balls`, `chart`, `mermaid-diagram`, `waterfall`, `code-block`, `team`

```yaml
component_preferences:
  prefer: [framework, metrics, comparison, data-table]
  avoid: [card-grid, image-full-bleed, quote]
  title_style: "statement"
```

### audience_overrides (object)

Overrides global audience presets from `references/audience-presets.md` for this brand specifically. Useful when a brand's conventions differ from the generic audience defaults (e.g., a brand that always requires shorter decks).

Valid audience keys: `c-suite`, `stakeholder`, `technical`, `sales`, `workshop`, `internal`

Overridable fields (any field from audience-presets.md):
- `max_slides` — hard upper bound on slide count
- `min_slides` — lower bound
- `font_size_floor` — minimum font size override

```yaml
audience_overrides:
  c-suite:
    max_slides: 10
    font_size_floor: "1.25rem"
  technical:
    max_slides: 25
```

Use `{}` (empty object) for no overrides — global presets apply as-is.

```yaml
audience_overrides: {}
```

### tone (object)

Controls language style and content generation behavior.

| Field | Type | Values | Description |
|-------|------|--------|-------------|
| formality | string | `"high"`, `"medium"`, `"casual"` | Language register for generated content |
| action_titles | string | Any string description | Describes how slide titles should be written (e.g., "verb-first", "noun phrase") |
| bullet_style | string | `"concise"`, `"narrative"`, `"data-driven"` | Bullet point writing style |
| restrictions | list | Machine-checkable strings | Hard rules validated by brand-checker agent |

The `restrictions` list contains machine-checkable rules. Keep them short, unambiguous, and verifiable:

```yaml
tone:
  formality: "high"
  action_titles: "verb-first"
  bullet_style: "data-driven"
  restrictions:
    - "No emoji"
    - "No exclamation marks"
    - "Numbers must use period as thousands separator (1.000 not 1,000)"
    - "Currency always EUR, never $"
```

Softer guidance (nuanced tone advice, chart conventions, color usage notes) belongs in `rules.md`, not `restrictions`.

### color_semantics (object)

Maps abstract color meanings to CSS custom property names from `tokens/base.css`. The slide-stylist agent and builder agent use this mapping when choosing colors for data visualization elements.

| Key | Meaning | Common Mappings |
|-----|---------|-----------------|
| positive | Good outcomes, growth, success, on-track | `--color-success`, `--color-accent` |
| negative | Bad outcomes, decline, risk, off-track | `--color-danger` |
| neutral | Baseline, unchanged, reference | `--color-surface` |
| highlight | Emphasis, focus, key callout | `--color-primary`, `--color-accent` |

**IMPORTANT:** Values MUST reference token names that actually exist in `tokens/base.css`. Verify with:

```bash
grep "^  --color-" tokens/base.css
```

Only use `--color-surface` for neutral (not `--color-surface-alt` — that token does not exist).

```yaml
color_semantics:
  positive: "--color-success"
  negative: "--color-danger"
  neutral: "--color-surface"
  highlight: "--color-accent"
```

---

## Who Reads What

| Agent | Reads | Fields Used |
|-------|-------|-------------|
| brand-checker | brand.yaml + rules.md | ALL — validates brief against brand before debate |
| brand-profiler | (creates brand.yaml) | ALL — generates all 9 fields from corporate assets |
| builder | brand.yaml | `theme_css`, `logo`, `master_layer`, `color_semantics` |
| strategist | .pipeline/brand-context.md (pre-digested) | `component_preferences`, `tone`, `audience_overrides` |
| slide-stylist | brand.yaml | `color_semantics` — token awareness for per-slide overrides |

The strategist receives a pre-digested `brand-context.md` (generated by brand-checker) rather than reading `brand.yaml` directly. This keeps the strategist's context lean.

---

## Selecting a Brand for a Presentation

Set `brand: {name}` in `brief.md` frontmatter. The build-new-deck workflow reads this field and applies the brand throughout the pipeline.

```yaml
---
brand: acme-corp
audience: c-suite
language: de
---
```

**Auto-selection rules** (when no brand is specified in brief.md):

| Custom brands found | Behavior |
|--------------------|---------|
| 0 | `default` brand is used automatically |
| 1 | Auto-selected with user confirmation |
| 2+ | User is prompted to choose |

---

## Creating a Custom Brand

Use the onboard-brand workflow for guided brand creation from corporate assets (PPTX, PDF, logos, or conversational description):

See: `.claude/skills/build-presentation/workflows/onboard-brand.md`

The workflow handles:
1. Asset intake into `brands/{name}/input/`
2. Theme extraction from PPTX via `tools/extract-theme.js`
3. brand.yaml + rules.md generation via brand-profiler subagent
4. Contrast validation via `tools/check-contrast.js`
5. 21-slide test presentation generation
6. Conversational review and approval

---

## Token Source of Truth

All color token names in `color_semantics` and `theme.css` MUST reference tokens defined in `tokens/base.css`. This file is the authoritative source. Before writing or editing `color_semantics`:

```bash
grep "^  --color-" tokens/base.css
```

Never invent token names. If a needed semantic color does not have a matching token, use the closest existing token or propose a new token addition to `tokens/base.css`.
