# CSS Property Map

Reference for the slide-stylist agent. Maps natural language styling requests to the correct CSS custom properties (`--comp-*` variables) for each component.

**How to use this file:**
1. Find the component type from the slide's `data-component` attribute (e.g., `data-component="metrics"`)
2. Look up the natural language request in that component's table
3. Write the override in `@layer overrides { #slide-{n} { --comp-{var}: {value}; } }`

---

## Safe CSS Properties (Non-Variable Overrides)

These standard CSS properties are safe to set on `#slide-{n}` selectors in addition to `--comp-*` variables:

| User Says | CSS Property | Example |
|-----------|-------------|---------|
| "change column layout" | `grid-template-columns` | `repeat(2, 1fr)` |
| "add gap between items" | `gap` | `32px` |
| "add padding" | `padding` | `48px 64px` |
| "reduce spacing" | `padding` | `24px 32px` |
| "smaller font" | `font-size` | `0.9rem` |
| "change background" | `background` | `var(--color-surface)` |
| "make transparent" | `opacity` | `0.7` |
| "change text color" | `color` | `var(--color-text-muted)` |
| "make flex row" | `flex-direction` | `row` |

---

## Component Maps

### comp-title

| User Says | CSS Variable | Example Value | Notes |
|-----------|-------------|---------------|-------|
| "bigger title" | `--comp-title-title-size` | `5rem` | Default: `var(--font-size-display)` |
| "smaller title" | `--comp-title-title-size` | `2.5rem` | |
| "change title color" | `--comp-title-title-color` | `var(--color-accent)` | |
| "bigger subtitle" | `--comp-title-subtitle-size` | `1.5rem` | Default: `var(--font-size-subheading)` |
| "more padding" | `--comp-title-padding` | `80px` | Default: `var(--spacing-3xl)` |
| "longer divider" | `--comp-title-divider-width` | `200px` | Default: `120px` |
| "change divider color" | `--comp-title-divider-color` | `var(--color-accent)` | |

---

### comp-section-break

| User Says | CSS Variable | Example Value | Notes |
|-----------|-------------|---------------|-------|
| "change background" | `--comp-section-break-bg` | `var(--color-accent)` | Default: `var(--color-primary)` |
| "change title color" | `--comp-section-break-title-color` | `white` | Default: `var(--color-on-primary)` |
| "change subtitle color" | `--comp-section-break-subtitle-color` | `rgba(255,255,255,0.8)` | |
| "more padding" | `--comp-section-break-padding` | `80px` | Default: `var(--spacing-3xl)` |
| "bigger title" | `--comp-section-break-title-size` | `4rem` | Default: `var(--font-size-display)` |

---

### comp-text-heavy

| User Says | CSS Variable | Example Value | Notes |
|-----------|-------------|---------------|-------|
| "less padding" | `--comp-text-heavy-padding` | `32px 48px` | Default: `var(--spacing-2xl) var(--spacing-3xl)` |
| "change title color" | `--comp-text-heavy-title-color` | `var(--color-accent)` | |
| "change body color" | `--comp-text-heavy-body-color` | `var(--color-text-muted)` | |
| "more space between bullets" | `--comp-text-heavy-list-gap` | `24px` | Default: `var(--spacing-md)` |
| "tighter list" | `--comp-text-heavy-list-gap` | `8px` | |

---

### comp-two-column

| User Says | CSS Variable | Example Value | Notes |
|-----------|-------------|---------------|-------|
| "more gap between columns" | `--comp-two-column-gap` | `64px` | Default: `var(--spacing-xl)` |
| "less padding" | `--comp-two-column-padding` | `32px 48px` | |
| "change title color" | `--comp-two-column-title-color` | `var(--color-accent)` | |
| "60/40 split" | `--comp-two-column-split` | `3fr 2fr` | Default: `1fr 1fr` |
| "70/30 split" | `--comp-two-column-split` | `7fr 3fr` | |
| "40/60 split (image left)" | `--comp-two-column-split` | `2fr 3fr` | |

---

### comp-metrics

| User Says | CSS Variable | Example Value | Notes |
|-----------|-------------|---------------|-------|
| "more space between cards" | `--comp-metrics-gap` | `80px` | Default: `var(--spacing-3xl)` |
| "less space between cards" | `--comp-metrics-gap` | `24px` | |
| "more card padding" | `--comp-metrics-card-padding` | `32px` | Default: `var(--spacing-lg)` |
| "bigger numbers" | `--comp-metrics-number-size` | `5rem` | Default: `var(--font-size-display)` |
| "smaller numbers" | `--comp-metrics-number-size` | `2.5rem` | |
| "smaller labels" | `--comp-metrics-label-size` | `0.65rem` | Default: `var(--font-size-caption)` |
| "card background" | `--comp-metrics-card-bg` | `var(--color-surface)` | Default: `transparent` |
| "change number color" | `--comp-metrics-number-color` | `var(--color-accent)` | Default: `var(--color-primary)` |

---

### comp-image-full-bleed

| User Says | CSS Variable | Example Value | Notes |
|-----------|-------------|---------------|-------|
| "darker overlay" | `--comp-image-full-bleed-overlay` | `rgba(0,0,0,0.7)` | Default: `var(--color-overlay)` |
| "lighter overlay" | `--comp-image-full-bleed-overlay` | `rgba(0,0,0,0.2)` | |
| "remove overlay" | `--comp-image-full-bleed-overlay` | `transparent` | |
| "change caption color" | `--comp-image-full-bleed-caption-color` | `white` | Default: `var(--color-on-primary)` |

---

### comp-agenda

| User Says | CSS Variable | Example Value | Notes |
|-----------|-------------|---------------|-------|
| "less padding" | `--comp-agenda-padding` | `32px 48px` | Default: `var(--spacing-2xl) var(--spacing-3xl)` |
| "more space between items" | `--comp-agenda-item-gap` | `24px` | Default: `var(--spacing-md)` |
| "change number color" | `--comp-agenda-number-color` | `var(--color-primary)` | Default: `var(--color-accent)` |
| "change title color" | `--comp-agenda-title-color` | `var(--color-accent)` | |

---

### comp-summary

| User Says | CSS Variable | Example Value | Notes |
|-----------|-------------|---------------|-------|
| "less padding" | `--comp-summary-padding` | `32px 48px` | Default: `var(--spacing-2xl) var(--spacing-3xl)` |
| "change title color" | `--comp-summary-title-color` | `var(--color-accent)` | |
| "more space between items" | `--comp-summary-item-gap` | `24px` | Default: `var(--spacing-md)` |
| "tighter list" | `--comp-summary-item-gap` | `8px` | |

---

### comp-contact

| User Says | CSS Variable | Example Value | Notes |
|-----------|-------------|---------------|-------|
| "less padding" | `--comp-contact-padding` | `32px 48px` | Default: `var(--spacing-2xl) var(--spacing-3xl)` |
| "bigger name" | `--comp-contact-name-size` | `2.5rem` | Default: `var(--font-size-heading)` |
| "change name color" | `--comp-contact-name-color` | `var(--color-accent)` | |
| "change role color" | `--comp-contact-role-color` | `var(--color-text)` | Default: `var(--color-text-muted)` |
| "bigger photo" | `--comp-contact-photo-size` | `160px` | Default: `120px` |
| "smaller photo" | `--comp-contact-photo-size` | `80px` | |

---

### comp-comparison

| User Says | CSS Variable | Example Value | Notes |
|-----------|-------------|---------------|-------|
| "less padding" | `--comp-comparison-padding` | `32px 48px` | Default: `var(--spacing-2xl) var(--spacing-3xl)` |
| "more gap between cards" | `--comp-comparison-gap` | `48px` | Default: `var(--spacing-xl)` |
| "change title color" | `--comp-comparison-title-color` | `var(--color-accent)` | |
| "card background" | `--comp-comparison-card-bg` | `white` | Default: `var(--color-surface)` |
| "less rounded cards" | `--comp-comparison-card-radius` | `var(--radius-sm)` | Default: `var(--radius-lg)` |

---

### comp-timeline

| User Says | CSS Variable | Example Value | Notes |
|-----------|-------------|---------------|-------|
| "less padding" | `--comp-timeline-padding` | `32px 48px` | Default: `var(--spacing-2xl) var(--spacing-3xl)` |
| "change title color" | `--comp-timeline-title-color` | `var(--color-accent)` | |
| "change connector line color" | `--comp-timeline-line-color` | `var(--color-accent)` | Default: `var(--color-border)` |
| "bigger markers" | `--comp-timeline-marker-size` | `28px` | Default: `20px` |
| "smaller markers" | `--comp-timeline-marker-size` | `14px` | |
| "more space between steps" | `--comp-timeline-step-gap` | `32px` | Default: `var(--spacing-lg)` |

---

### comp-quote

| User Says | CSS Variable | Example Value | Notes |
|-----------|-------------|---------------|-------|
| "more padding" | `--comp-quote-padding` | `96px` | Default: `var(--spacing-3xl)` |
| "bigger quote text" | `--comp-quote-text-size` | `2.5rem` | Default: `var(--font-size-heading)` |
| "smaller quote text" | `--comp-quote-text-size` | `1.25rem` | |
| "change text color" | `--comp-quote-text-color` | `var(--color-text)` | Default: `var(--color-primary)` |
| "change accent/quote mark color" | `--comp-quote-accent-color` | `var(--color-primary)` | Default: `var(--color-accent)` |

---

### comp-card-grid

| User Says | CSS Variable | Example Value | Notes |
|-----------|-------------|---------------|-------|
| "less padding" | `--comp-card-grid-padding` | `32px 48px` | Default: `var(--spacing-2xl) var(--spacing-3xl)` |
| "more gap between cards" | `--comp-card-grid-gap` | `32px` | Default: `var(--spacing-lg)` |
| "more card padding" | `--comp-card-grid-card-padding` | `32px` | Default: `var(--spacing-lg)` |
| "card background" | `--comp-card-grid-card-bg` | `white` | Default: `var(--color-surface)` |
| "change title color" | `--comp-card-grid-title-color` | `var(--color-accent)` | |
| "2 columns instead of 3" | `grid-template-columns` | `repeat(2, 1fr)` | Set on .comp-card-grid__grid in overrides |

---

### comp-framework

| User Says | CSS Variable | Example Value | Notes |
|-----------|-------------|---------------|-------|
| "less padding" | `--comp-framework-padding` | `32px 48px` | Default: `var(--spacing-2xl) var(--spacing-3xl)` |
| "more gap in grid" | `--comp-framework-gap` | `24px` | Default: `var(--spacing-md)` |
| "change title color" | `--comp-framework-title-color` | `var(--color-accent)` | |
| "cell background" | `--comp-framework-cell-bg` | `white` | Default: `var(--color-surface)` |
| "less rounded cells" | `--comp-framework-cell-radius` | `var(--radius-sm)` | Default: `var(--radius-md)` |

---

### comp-data-table

| User Says | CSS Variable | Example Value | Notes |
|-----------|-------------|---------------|-------|
| "less padding" | `--comp-data-table-padding` | `32px 48px` | Default: `var(--spacing-2xl) var(--spacing-3xl)` |
| "change title color" | `--comp-data-table-title-color` | `var(--color-accent)` | |
| "change header background" | `--comp-data-table-header-bg` | `var(--color-accent)` | Default: `var(--color-primary)` |
| "change header text color" | `--comp-data-table-header-color` | `white` | Default: `var(--color-on-primary)` |
| "remove row stripes" | `--comp-data-table-stripe-bg` | `transparent` | Default: `var(--color-surface)` |
| "change stripe color" | `--comp-data-table-stripe-bg` | `var(--color-highlight)` | |

---

### comp-harvey-balls

| User Says | CSS Variable | Example Value | Notes |
|-----------|-------------|---------------|-------|
| "less padding" | `--comp-harvey-balls-padding` | `32px 48px` | Default: `var(--spacing-2xl) var(--spacing-3xl)` |
| "change title color" | `--comp-harvey-balls-title-color` | `var(--color-accent)` | |
| "bigger balls" | `--comp-harvey-balls-ball-size` | `32px` | Default: `24px` |
| "smaller balls" | `--comp-harvey-balls-ball-size` | `18px` | |
| "change fill color" | `--comp-harvey-balls-fill-color` | `var(--color-accent)` | Default: `var(--color-primary)` |
| "change empty color" | `--comp-harvey-balls-empty-color` | `var(--color-surface)` | Default: `var(--color-border)` |

---

### comp-chart

| User Says | CSS Variable | Example Value | Notes |
|-----------|-------------|---------------|-------|
| "less padding" | `--comp-chart-padding` | `32px 48px` | Default: `var(--spacing-2xl) var(--spacing-3xl)` |
| "change title color" | `--comp-chart-title-color` | `var(--color-accent)` | |
| "taller chart" | `--comp-chart-canvas-height` | `500px` | Default: `400px` |
| "shorter chart" | `--comp-chart-canvas-height` | `280px` | |
| "make chart taller" | `--comp-chart-canvas-height` | `500px` | |

---

### comp-mermaid-diagram

| User Says | CSS Variable | Example Value | Notes |
|-----------|-------------|---------------|-------|
| "less padding" | `--comp-mermaid-diagram-padding` | `32px 48px` | Default: `var(--spacing-2xl) var(--spacing-3xl)` |
| "change title color" | `--comp-mermaid-diagram-title-color` | `var(--color-accent)` | |
| "change caption color" | `--comp-mermaid-diagram-caption-color` | `var(--color-text)` | Default: `var(--color-text-muted)` |

---

### comp-waterfall

| User Says | CSS Variable | Example Value | Notes |
|-----------|-------------|---------------|-------|
| "less padding" | `--comp-waterfall-padding` | `32px 48px` | Default: `var(--spacing-2xl) var(--spacing-3xl)` |
| "change title color" | `--comp-waterfall-title-color` | `var(--color-accent)` | |
| "taller chart" | `--comp-waterfall-canvas-height` | `500px` | Default: `400px` |
| "shorter chart" | `--comp-waterfall-canvas-height` | `280px` | |

---

### comp-code-block

| User Says | CSS Variable | Example Value | Notes |
|-----------|-------------|---------------|-------|
| "less padding" | `--comp-code-block-padding` | `32px 48px` | Default: `var(--spacing-2xl) var(--spacing-3xl)` |
| "change title color" | `--comp-code-block-title-color` | `var(--color-accent)` | |
| "change code background" | `--comp-code-block-bg` | `#0D1117` | Default: `#1E1E2E` |
| "change code text color" | `--comp-code-block-code-color` | `#E6EDF3` | Default: `#CDD6F4` |
| "less rounded" | `--comp-code-block-radius` | `var(--radius-sm)` | Default: `var(--radius-md)` |

---

### comp-team

| User Says | CSS Variable | Example Value | Notes |
|-----------|-------------|---------------|-------|
| "less padding" | `--comp-team-padding` | `32px 48px` | Default: `var(--spacing-2xl) var(--spacing-3xl)` |
| "more gap between members" | `--comp-team-gap` | `48px` | Default: `var(--spacing-xl)` |
| "less gap between members" | `--comp-team-gap` | `16px` | |
| "change title color" | `--comp-team-title-color` | `var(--color-accent)` | |
| "bigger photos" | `--comp-team-photo-size` | `128px` | Default: `96px` |
| "smaller photos" | `--comp-team-photo-size` | `64px` | |

---

## Override Pattern

All overrides follow this pattern — scoped to a single slide, never global:

```css
/* In @layer overrides, inside the SLIDE MAP section */

/* Slide 5: make metrics numbers bigger */
#slide-5 { --comp-metrics-number-size: 5rem; }

/* Slide 8: 60/40 split on two-column */
#slide-8 { --comp-two-column-split: 3fr 2fr; }

/* Slide 12: taller chart */
#slide-12 { --comp-chart-canvas-height: 480px; }
```

**NEVER** use `!important`. **NEVER** set variables on `:root`. **NEVER** modify `@layer components`.
