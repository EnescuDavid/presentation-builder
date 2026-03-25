# Animation Guide

AI reference for the presentation builder's entrance animation system. Animations are defined in `tokens/animations.css` and applied via CSS classes. Fragments are OPTIONAL -- by default, all content appears immediately. Only add animations when the user requests progressive reveal or when it serves a clear communication purpose.

## Quick Reference

| Class | Effect | Best For |
|-------|--------|----------|
| `anim-fadeUp` | Fade in from below (30px) | Default for most content, bullets, paragraphs |
| `anim-blurIn` | Fade in with blur dissolve | Hero text, emphasis elements, title slides |
| `anim-slideL` | Slide in from left (40px) | Left-column content in two-column layouts |
| `anim-slideR` | Slide in from right (40px) | Right-column content in two-column layouts |
| `anim-scalePop` | Scale up from 85% with pop | Metrics, numbers, icons, cards |
| `anim-lineGrow` | Horizontal line grow from left | Dividers, underlines, separator lines |

## Available Animations

### fadeUp
Default entrance animation. Element fades in while moving up 30px. Duration: `--duration-normal` (0.7s). Use for body text, bullet points, paragraphs, and any generic content entrance.

### blurIn
Dramatic entrance with blur dissolve. Duration: `--duration-slow` (0.85s). Use for hero titles, emphasis moments, and key messages. Draws maximum attention -- use sparingly (1-2 per presentation).

### slideL / slideR
Directional slide from left/right. Duration: `--duration-normal` (0.7s). Always use as a pair in two-column layouts: slideL on left column, slideR on right column. Also used for comparison card entrances.

### scalePop
Scale up from 85% with a pop effect. Duration: `--duration-fast` (0.5s). Use for metric numbers, KPI cards, icons, and card-grid items. Works well with stagger timing.

### lineGrow
Horizontal line grows from left edge. Duration: 0.8s. Use exclusively for decorative dividers and underlines (comp-title__divider, comp-section-break__divider, comp-contact__divider).

## Usage Patterns

### Applying Animations
Add the `fragment` class (for reveal.js) and the animation class to any element:

```html
<p class="fragment anim-fadeUp">This fades up when revealed</p>
```

### Stagger Timing
Use `data-delay` attributes (1-5) for sequential entrances:

```html
<div class="fragment anim-scalePop">First (immediate)</div>
<div class="fragment anim-scalePop" data-delay="1">Second (+0.1s)</div>
<div class="fragment anim-scalePop" data-delay="2">Third (+0.2s)</div>
```

Delay values: `data-delay="1"` = 0.1s, `"2"` = 0.2s, `"3"` = 0.3s, `"4"` = 0.4s, `"5"` = 0.5s.

### Non-Fragment Animations
For entrance animations WITHOUT fragment behavior (animate on slide load, not on click), apply the animation class directly in CSS or use reveal.js `data-auto-animate`. Fragments require a click/keypress to trigger.

### Recommended Per-Component Animations

| Component | Recommended Animations |
|-----------|----------------------|
| title | h1: blurIn, divider: lineGrow, subtitle: fadeUp |
| section-break | counter: fadeUp, divider: lineGrow, heading: blurIn |
| text-heavy | body elements: fadeUp |
| two-column | left: slideL, right: slideR |
| metrics | cards: scalePop with stagger |
| image-full-bleed | overlay text: fadeUp |
| agenda | items: fadeUp |
| summary | points: fadeUp, CTA: scalePop |
| contact | name/role: fadeUp, divider: lineGrow |
| comparison | left card: slideL, right card: slideR |
| timeline | steps: fadeUp with stagger |
| quote | quote text: blurIn, attribution: fadeUp |
| card-grid | cards: scalePop with stagger |
| framework | quadrants: fadeUp with stagger |

## Density Rules by Audience

| Audience | Animation Level | Guidance |
|----------|----------------|----------|
| C-Suite/Board | Minimal | 0-2 animated slides max. No bullet reveals. Only entrance on key metrics or hero slides. |
| Stakeholder | None/Subtle | Avoid animations. Content should be scannable immediately. Consistency across updates. |
| Technical | None | All content visible on slide load. Technical audiences scan at their own pace. |
| Sales/Pitch | Cinematic | Use animations to build narrative. blurIn for hero moments, fadeUp for reveals, scalePop for metrics. |
| Workshop | Step reveals | Fragment animations useful for sequential instructions. fadeUp with stagger for numbered steps. |
| Internal | None | Speed matters. No animations. All content visible immediately. |

## Anti-Patterns

- **Don't animate every bullet.** If a list has 5 items, show them all at once. Only animate if the reveal sequence tells a story.
- **Don't animate logos or footers.** Master layer elements are static.
- **Don't use slide transitions.** Content slides change instantly. The presentation engine handles transitions.
- **Don't mix animation styles on one slide.** Pick one animation type per slide (e.g., all fadeUp OR all scalePop, not both).
- **Don't use animations as decoration.** Every animation must serve a communication purpose: reveal sequence, draw attention, or show relationship.
- **Don't over-stagger.** Maximum 5 stagger levels. If you need more, the slide has too much content.
