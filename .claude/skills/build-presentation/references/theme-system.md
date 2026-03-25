# Theme System

AI reference for the presentation builder's CSS custom property theming system. Themes apply corporate branding on top of the component library. All 14 components adopt theme changes automatically via `var()` references.

## Token Architecture

All visual properties are CSS custom properties on `:root` defined in `tokens/base.css`. Themes override these values; components reference them via `var(--token)`.

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

## Theme File Structure

Each theme lives in `themes/{name}/theme.css`. A theme file overrides `:root` tokens and adds theme-specific styles.

**Example (default theme at `themes/default/theme.css`):**
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

**Three included themes:**
| Theme | Personality | Primary | Accent | Display Font |
|-------|------------|---------|--------|-------------|
| default | Professional consulting | #1E3A5F navy | #3182CE blue | Inter |
| startup | Bold, modern, energetic | #004E98 blue | #FF6B35 orange | Space Grotesk |
| enterprise | Conservative, corporate | #0D2137 dark navy | #2E6BA6 steel blue | Inter |

## Creating a New Theme

1. **Copy the default:** `cp -r themes/default/ themes/{name}/`
2. **Override color tokens:** Change `--color-primary`, `--color-accent`, etc. in `:root`
3. **Set display font (optional):** Override `--font-family-display` and add Google Fonts link
4. **Adjust accent bar:** Set `--theme-accent-bar-height` and `--theme-accent-bar-color`
5. **Set logo:** Place SVG at `themes/{name}/logo.svg`, set `--master-logo-height`
6. **Link in presentation:** Add `<link rel="stylesheet" href="themes/{name}/theme.css">` after base.css

All 14 components adopt the new theme automatically via `var()` references. No component CSS changes needed.

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

**Output:** Creates `themes/{name}/theme.css` with extracted tokens. After extraction:
1. Review and adjust extracted colors for web contrast ratios
2. Verify font availability (add Google Fonts link if needed)
3. Place company logo as SVG at `themes/{name}/logo.svg`
4. Test with a sample presentation

## Footer Configuration

Each presentation configures its footer via a JavaScript object in the HTML file:

```javascript
var presentationConfig = {
  company: 'Acme Corp.',
  confidentiality: 'Confidential',
  logo: 'themes/default/logo.svg'
};
```

The master layer in `_skeleton.html` reads this config to render:
- Company name (left-aligned)
- Confidentiality label
- Company logo
- Slide number

Footer uses left-aligned layout with dot separators to avoid overlap with the slide counter. Footer is hidden on slides with `data-master="hide"` (title, section-break, image-full-bleed).
