# Brand System

AI reference for the presentation builder's CSS custom property theming system and brand profiles. Brands apply corporate branding on top of the component library. All 21 components adopt brand changes automatically via `var()` references.

> **Migration note:** The `themes/` directory was replaced by `brands/` in Phase 3. Each brand is now a 3-file package: `brand.yaml` (machine-readable profile) + `rules.md` (prose guidance) + `theme.css` (CSS token overrides).

## Token Architecture

All visual properties are CSS custom properties on `:root` defined in `tokens/base.css`. Brand theme.css files override these values; components reference them via `var(--token)`.

### Color Tokens (16)

| Token | Default Value | Purpose |
|-------|--------------|---------|
| `--color-primary` | #1E3A5F | Headings, brand identity, primary actions |
| `--color-secondary` | #2C5282 | Secondary headings, subheadings |
| `--color-accent` | #3182CE | Accent bars, links, highlights, interactive elements |
| `--color-background` | #FFFFFF | Page background |
| `--color-surface` | #F7FAFC | Card backgrounds, elevated surfaces |
| `--color-text` | #1A202C | Body text |
| `--color-text-muted` | #718096 | Secondary text, labels, captions |
| `--color-border` | #E2E8F0 | Card borders, dividers |
| `--color-success` | #38A169 | Positive indicators, on-track status |
| `--color-danger` | #E53E3E | Negative indicators, off-track status |
| `--color-highlight` | #EBF8FF | Light background tint for highlights |
| `--color-callout` | #FFF5F5 | Light background tint for warnings/callouts |
| `--color-chart-1` through `--color-chart-5` | Blue/Green/Yellow/Red/Purple | Data visualization series |

### Typography Tokens

| Token | Default Value | Purpose |
|-------|--------------|---------|
| `--font-family-body` | 'Inter', system-ui, sans-serif | Body text font stack |
| `--font-family-display` | 'Inter', system-ui, sans-serif | Display/heading font stack (aliased as --font-heading in some docs) |
| `--font-size-display` | clamp(2.5rem, 5vw, 3.75rem) | Hero titles, big numbers |
| `--font-size-heading` | clamp(1.75rem, 3.5vw, 2.25rem) | Slide titles |
| `--font-size-subheading` | clamp(1.25rem, 2.5vw, 1.5rem) | Subtitles, card titles |
| `--font-size-body` | clamp(1rem, 2vw, 1.125rem) | Body text, bullets |
| `--font-size-caption` | clamp(0.75rem, 1.5vw, 0.875rem) | Footnotes, labels |
| `--font-weight-light` through `--font-weight-bold` | 300-700 | Weight scale |
| `--line-height-tight` through `--line-height-relaxed` | 1.1-1.7 | Line height scale |

### Spacing Tokens (8px grid)

| Token | Value | Purpose |
|-------|-------|---------|
| `--spacing-xs` | 4px | Tight gaps |
| `--spacing-sm` | 8px | Between related items |
| `--spacing-md` | 16px | Standard gap |
| `--spacing-lg` | 24px | Section gaps |
| `--spacing-xl` | 32px | Major separations |
| `--spacing-2xl` | 48px | Slide padding |
| `--spacing-3xl` | 64px | Hero slide padding |
| `--spacing-section` | 80px | Between major sections |

### Visual Tokens

| Token | Default | Purpose |
|-------|---------|---------|
| `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-card` | Subtle box shadows | Elevation levels |
| `--radius-sm` (4px), `--radius-md` (8px), `--radius-lg` (14px), `--radius-full` | Border radius scale | Corner rounding |
| `--ease-entrance` | cubic-bezier(.16,1,.3,1) | Animation easing |
| `--duration-fast` (0.5s), `--duration-normal` (0.7s), `--duration-slow` (0.85s) | Animation durations | Timing |

## Brand Directory Structure

Each brand lives in `brands/{name}/` with 3 files:

```
brands/
  default/
    brand.yaml       # Machine-readable profile (9 fields)
    rules.md         # Prose guidance -- consulting do's/don'ts
    theme.css        # CSS custom property overrides
  startup/
    brand.yaml
    rules.md
    theme.css
    logo.svg
  enterprise/
    brand.yaml
    rules.md
    theme.css
    logo.svg
  {custom}/          # Created by onboard-brand workflow
    brand.yaml
    rules.md
    theme.css
    logo.svg
    test-presentation.html
    input/           # Drop zone -- PPTX, PDFs, logos, fonts
```

## brand.yaml Schema (9 Fields)

All brand profiles follow this schema:

```yaml
name: "Brand Name"
locale: "de"
theme_css: "brands/{name}/theme.css"
logo: "brands/{name}/logo.svg"   # "" for no logo

master_layer:
  company: "Company Name"
  confidentiality: "Confidential"
  date_format: "DD.MM.YYYY"
  logo_position: "top-left"      # top-left | top-right | bottom-left

component_preferences:
  prefer: [framework, metrics, comparison]
  avoid: [card-grid, image-full-bleed]
  title_style: "statement"       # statement | question | action-verb

audience_overrides:
  c-suite:
    max_slides: 12

tone:
  formality: "high"              # high | medium | casual
  action_titles: "verb-first"
  bullet_style: "data-driven"    # concise | narrative | data-driven
  restrictions:
    - "No emoji"

color_semantics:
  positive: "--color-success"
  negative: "--color-danger"
  neutral: "--color-surface"
  highlight: "--color-accent"
```

**Color semantics token names must match actual tokens in `tokens/base.css`. Only use `--color-surface` (not `--color-surface-alt` -- that token does not exist).**

## Theme File Structure

Each brand's `theme.css` overrides `:root` tokens and adds brand-specific styles.

**Example (`brands/default/theme.css`):**
```css
:root {
  --slide-bg: var(--color-background);
  --content-max-width: 1100px;
  --master-logo-height: 32px;
  --master-footer-color: var(--color-text-muted);
  --theme-accent-bar-height: 3px;
  --theme-accent-bar-color: var(--color-accent);
  --theme-heading-border: 2px solid var(--color-accent);
}
```

Theme files also include:
- Slide-level typography rules (font-family, color, text-align on `.reveal .slides section`)
- Heading styles (h1, h2, h3 with sizes, weights, colors)
- Accent bar on content slides (via `::before` pseudo-element)
- Professional bullet styling (custom list markers)
- Card elevation refinement (border-radius, shadow, border)
- Dark background variant (`section[data-background-color="dark"]`)

**Three bundled brands:**
| Brand | Personality | Primary | Accent | Display Font |
|-------|------------|---------|--------|-------------|
| default | Professional consulting | #1E3A5F navy | #3182CE blue | Inter |
| startup | Bold, modern, energetic | #004E98 blue | #FF6B35 orange | Space Grotesk |
| enterprise | Conservative, corporate | #0D2137 dark navy | #2E6BA6 steel blue | Inter |

## Creating a New Brand

Use the onboard-brand workflow (`workflows/onboard-brand.md`) for guided brand creation from PPTX/PDF assets.

For manual creation:
1. **Copy the default:** `cp -r brands/default/ brands/{name}/`
2. **Override color tokens:** Change `--color-primary`, `--color-accent`, etc. in `:root`
3. **Set display font (optional):** Override `--font-family-display` and add Google Fonts link
4. **Adjust accent bar:** Set `--theme-accent-bar-height` and `--theme-accent-bar-color`
5. **Set logo:** Place SVG at `brands/{name}/logo.svg`, set `--master-logo-height`
6. **Write brand.yaml:** Fill all 9 fields; use project-root-relative paths (`brands/{name}/theme.css`)
7. **Write rules.md:** Prose guidance for tone, visual style, chart conventions, prohibited patterns
8. **Link in presentation:** Add `<link rel="stylesheet" href="brands/{name}/theme.css">` after base.css

All 21 components adopt the new brand automatically via `var()` references. No component CSS changes needed.

## Dark/Light Variants

Use `data-background-color="dark"` on any `<section>` to activate dark variant:
- Text color inverts to white/light
- Headings invert to white
- Muted text becomes semi-transparent white
- Labels and subtitles become translucent white

This works per-slide -- mix light and dark slides within a single presentation. Used primarily on title, section-break, and image-full-bleed components.

## PPTX Extraction

The `tools/extract-theme.js` script extracts colors, fonts, and metadata from a .pptx template file:

```bash
node tools/extract-theme.js path/to/template.pptx --name "client"
```

**Output:** Creates `brands/{name}/theme.css` with extracted tokens. After extraction:
1. Review and adjust extracted colors for web contrast ratios
2. Verify font availability (add Google Fonts link if needed)
3. Place company logo as SVG at `brands/{name}/logo.svg`
4. Write `brands/{name}/brand.yaml` with the 9-field schema
5. Write `brands/{name}/rules.md` with prose guidance
6. Run `node tools/check-contrast.js brands/{name}` to validate WCAG AA compliance

## Footer Configuration

Each presentation configures its footer via a JavaScript object in the HTML file:

```javascript
var presentationConfig = {
  company: 'Acme Corp.',
  confidentiality: 'Confidential',
  logo: 'brands/default/logo.svg'
};
```

The master layer in `_skeleton.html` reads this config to render:
- Company name (left-aligned)
- Confidentiality label
- Company logo
- Slide number

Footer uses left-aligned layout with dot separators to avoid overlap with the slide counter. Footer is hidden on slides with `data-master="hide"` (title, section-break, image-full-bleed).

The `master_layer` fields in `brand.yaml` map directly to this presentationConfig:
- `brand.yaml master_layer.company` → `presentationConfig.company`
- `brand.yaml master_layer.confidentiality` → `presentationConfig.confidentiality`
- `brand.yaml logo` → `presentationConfig.logo`
