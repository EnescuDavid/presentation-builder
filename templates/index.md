# Component Library

AI assistants: Read this file first to discover available slide components.
Then open the specific template file to see the HTML structure, CSS, and slot descriptions.

## Essential Components (Phase 2)

| Component | File | Use When |
|-----------|------|----------|
| Title/Cover | `title.html` | Opening slide. First impression. Hero text with subtitle. |
| Section Break | `section-break.html` | Dividing major sections. Chapter marker with optional counter. |
| Text-Heavy | `text-heavy.html` | Explaining a concept. Key arguments. Bullet-heavy content. |
| Two-Column | `two-column.html` | Comparing two things. Text + image. Side-by-side arguments. |
| Metrics/KPI | `metrics.html` | Highlighting 1-6 key numbers. Performance data. Revenue, growth. |
| Image Full-Bleed | `image-full-bleed.html` | Visual impact. Product shots. Team photos. Full-screen image. |
| Agenda | `agenda.html` | Presentation roadmap. Meeting structure. Topic overview. |
| Summary/Takeaway | `summary.html` | Closing slide. Key takeaways. Call to action. Recap. |

## Extended Components (Phase 3)

| Component | File | Use When |
|-----------|------|----------|
| Contact/CTA | `contact.html` | Closing slide. Contact details. Call to action. Speaker info. |
| Comparison | `comparison.html` | Before/after. A vs B. Pros/cons. Current vs target state. |
| Timeline/Process | `timeline.html` | Project roadmap. Process flow. Milestones. Sequential steps. |
| Quote/Testimonial | `quote.html` | Customer quote. Expert endorsement. Key statement emphasis. |
| Card Grid | `card-grid.html` | Service offerings. Feature overview. Team capabilities. 2-4 items. |
| Framework/Matrix | `framework.html` | BCG matrix. Prioritization. 2x2 analysis. Quadrant mapping. |

## Data Visualization Components (Phase 8)

| Component | File | Use When |
|-----------|------|----------|
| Data Table | `data-table.html` | Financial data. Feature comparisons. Status matrices. Vendor evaluations. 2-6 columns, 3-12 rows. |
| Harvey Balls | `harvey-balls.html` | Capability ratings. Maturity assessments. Inline in tables and comparisons. 0-100% in 5 states. |
| Team/People | `team.html` | Team credentials. Leadership page. Project team. Advisory board. 2-6 members. |

## CDN-Dependent Components (Phase 9)

| Component | File | Use When |
|-----------|------|----------|
| Chart | `chart.html` | Data visualization. Bar, line, pie, doughnut, radar charts with consulting-grade defaults, annotation support, and token-based colors. Requires Chart.js CDN. |
| Waterfall | `waterfall.html` | Revenue walk. Cost bridge. Year-over-year change breakdown using floating bars. Consulting conventions: grey totals, green positive, red negative. Requires Chart.js CDN. |
| Code Block | `code-block.html` | Technical deep-dives. API documentation. Code walkthroughs. Syntax-highlighted with step-through line highlighting. |
| Mermaid Diagram | `mermaid-diagram.html` | Process flows. System architecture. Org charts. Project timelines. Pre-rendered SVG with fragment animation. |

## Component Variants (Phase 8)

| Base Component | Variant | Modifier Class | Use When |
|----------------|---------|----------------|----------|
| Metrics/KPI | Sparkline micro-charts | (add sparkline elements) | Trend indicators, mini bars, progress in metrics cards. |
| Timeline/Process | Vertical layout | `comp-timeline--vertical` | 5-6 steps where horizontal becomes cramped. |
| Card Grid | Compact layout | `comp-card-grid--compact` | 5-6 items needing smaller cards and tighter spacing. |

## How to Use

1. Read this file to find the right component for your slide
2. Open the component's HTML file in `templates/`
3. Read the comment header for slot descriptions and layout notes
4. Copy the `<section>` block into your presentation
5. Copy the component's `<style>` CSS into your presentation's style block
6. Replace placeholder content with your own
7. Adjust layout (column splits, density, overlay variant) as needed

## Master Layer Behavior

| Component | Master Layer |
|-----------|-------------|
| Title/Cover | Hidden (`data-master="hide"`) |
| Section Break | Hidden (`data-master="hide"`) |
| Image Full-Bleed | Hidden (`data-master="hide"`) |
| Text-Heavy | Visible |
| Two-Column | Visible |
| Metrics/KPI | Visible |
| Agenda | Visible |
| Summary/Takeaway | Visible |
| Contact/CTA | Visible |
| Comparison | Visible |
| Timeline/Process | Visible |
| Quote/Testimonial | Visible |
| Card Grid | Visible |
| Framework/Matrix | Visible |
| Data Table | Visible |
| Harvey Balls | (Utility -- used inside other components) |
| Team/People | Visible |

## Design Tokens

All components reference CSS custom properties from `tokens/base.css`.
Change a token value to update every component that uses it.
See `tokens/base.css` for the full token list.

## Animations

Components use entrance animation classes from `tokens/animations.css`:
- `anim-fadeUp` -- Default for most content
- `anim-blurIn` -- Hero text, emphasis elements
- `anim-slideL` / `anim-slideR` -- Left/right column content
- `anim-scalePop` -- Metrics, numbers, icons
- `anim-lineGrow` -- Dividers, underlines

**Fragments are OPTIONAL.** By default, all slide content appears immediately.
To enable progressive reveal, add `class="fragment anim-fadeUp"` to elements.
Use `data-delay="1"` through `data-delay="5"` for stagger timing.
Claude decides whether to add fragments based on the user's preference — only add them when the user wants step-by-step reveal for a specific slide.

## Icons

Use inline SVGs for icons (e.g., Lucide icons). Do NOT use emojis in professional slides.
See `card-grid.html` for an example of inline Lucide SVG icons.
