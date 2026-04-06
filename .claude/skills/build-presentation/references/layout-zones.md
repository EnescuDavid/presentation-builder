# CSS Grid Layout Zones

## Overview

The `slide-grid` system provides named layout zones inside each slide section. Components wrap their content in a `.slide-grid` container with zone children instead of relying on component-specific positioning CSS.

When a section contains `.slide-grid`, section padding is automatically removed — the grid wrapper handles all internal spacing via `--slide-padding-*` tokens.

## Base Grid (Default)

```
┌──────────────────────────┐
│        header             │  ← auto height (title, h2)
├──────────────────────────┤
│                          │
│        content            │  ← 1fr (fills remaining space)
│                          │
├──────────────────────────┤
│        footer             │  ← auto height (source, caption)
└──────────────────────────┘
```

```html
<section id="slide-N" data-component="text-heavy">
  <div class="slide-grid">
    <div class="slide-grid__header">
      <h2>Slide Title</h2>
    </div>
    <div class="slide-grid__content comp-text-heavy">
      <!-- component content -->
    </div>
    <div class="slide-grid__footer">
      <p class="text-muted">Source: ...</p>
    </div>
  </div>
</section>
```

## Grid Variants

### Two-Column Equal (`slide-grid--two-col`)

```
┌──────────────────────────┐
│        header             │
├────────────┬─────────────┤
│    left    │    right     │  ← 1fr 1fr
├────────────┴─────────────┤
│        footer             │
└──────────────────────────┘
```

```html
<div class="slide-grid slide-grid--two-col">
  <div class="slide-grid__header"><h2>Title</h2></div>
  <div class="slide-grid__left">Left content</div>
  <div class="slide-grid__right">Right content</div>
</div>
```

### Split 60/40 (`slide-grid--split-60-40`)

Same areas as two-col, but columns are `3fr 2fr`. Use for text + image or primary + supporting content.

### Split 40/60 (`slide-grid--split-40-60`)

Same areas as two-col, but columns are `2fr 3fr`. Use for image + text or sidebar + main content.

### Cards Layout (`slide-grid--cards`)

```
┌──────────────────────────┐
│        header             │
├──────────────────────────┤
│        cards              │  ← for card-grid, metrics
├──────────────────────────┤
│        footer             │
└──────────────────────────┘
```

```html
<div class="slide-grid slide-grid--cards">
  <div class="slide-grid__header"><h2>Title</h2></div>
  <div class="slide-grid__cards comp-metrics">
    <!-- metric cards -->
  </div>
</div>
```

### Full Bleed (`slide-grid--bleed`)

No padding, single `content` area filling the entire slide. For `image-full-bleed` component.

### Centered (`slide-grid--center`)

Adds `align-items: center; justify-items: center; text-align: center` to the grid. Combine with any variant for centered content.

## Zone Names

| Zone | Class | Use For |
|------|-------|---------|
| header | `slide-grid__header` | Slide title (h2), subtitle |
| content | `slide-grid__content` | Main component content |
| footer | `slide-grid__footer` | Source citations, captions |
| left | `slide-grid__left` | Left column in two-col variants |
| right | `slide-grid__right` | Right column in two-col variants |
| cards | `slide-grid__cards` | Card containers (metrics, card-grid) |

## Padding Customization

Override padding per-slide using `--slide-padding-*` tokens on the `<section>` element:

```html
<section id="slide-5" style="--slide-padding-top: 64px; --slide-padding-left: 64px; --slide-padding-right: 64px;">
```

Available tokens:
- `--slide-padding-top` (default: `var(--spacing-2xl)` = 48px)
- `--slide-padding-right` (default: `var(--spacing-2xl)` = 48px)
- `--slide-padding-bottom` (default: `var(--spacing-2xl)` = 48px)
- `--slide-padding-left` (default: `var(--spacing-2xl)` = 48px)

## Component Mapping

| Component | Grid Variant | Zones Used |
|-----------|-------------|------------|
| title | No grid (uses `class="center"` on section) | — |
| section-break | No grid (uses `class="center"` on section) | — |
| image-full-bleed | `slide-grid--bleed` | content |
| two-column | `slide-grid--two-col` or `--split-60-40` | header, left, right |
| metrics | `slide-grid--cards` | header, cards |
| card-grid | `slide-grid--cards` | header, cards |
| text-heavy | default | header, content |
| agenda | default | header, content |
| summary | default | header, content |
| contact | default | header, content |
| comparison | default | header, content |
| timeline | default | header, content |
| quote | default | header, content |
| framework | default | header, content |
| data-table | default | header, content, footer |
| harvey-balls | default | header, content, footer |
| chart | default | header, content, footer |
| waterfall | default | header, content, footer |
| mermaid-diagram | default | header, content, footer |
| code-block | default | header, content |
| team | default | header, content |

## Relationship to Component Wrappers

The `.slide-grid` and `.comp-*` wrappers serve different purposes:

- `.slide-grid` — structural positioning (where content goes on the slide)
- `.comp-*` — visual styling (how the component looks)

They nest: the comp wrapper goes inside a grid zone.

```html
<div class="slide-grid">
  <div class="slide-grid__header"><h2>Title</h2></div>
  <div class="slide-grid__content comp-metrics">
    <!-- comp-metrics handles card layout internally -->
  </div>
</div>
```
