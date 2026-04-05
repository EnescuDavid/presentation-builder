# Visual Vocabulary

AI reference for the presentation builder's content archetype system. The strategist MUST classify every content slide into one of the 15 archetypes below. Archetype drives component selection, visual treatment, and icon choice. Defaulting to `text-heavy` without first running the bullet-list smell test is not acceptable.

Load this file alongside `component-catalog.md` during slide planning.

## The 15 Content Archetypes

| # | Archetype | Detection Signals | Primary Component | Fallback Component |
|---|-----------|------------------|------------------|--------------------|
| 1 | list-of-items | 3+ parallel items, no inherent order | card-grid with icons | badge row in text-heavy |
| 2 | sequential-process | ordered steps, "first/then/finally", numbered | timeline | chevron flow (mermaid) |
| 3 | comparison | "vs", "compared to", A vs B, before/after | comparison | data-table with indicators |
| 4 | hierarchy | org structure, "reports to", nesting levels | mermaid-diagram (org) | nested card-grid |
| 5 | quantity-metric | numbers, percentages, KPIs, revenue figures | metrics | big number in text-heavy |
| 6 | proportion | "X% of", "share of", parts of a whole | chart (doughnut/pie) | waterfall |
| 7 | trend | "grew", "declined", "over time", time series | chart (line/sparkline) | waterfall |
| 8 | status-readiness | "complete/in-progress/blocked", RAG status | harvey-balls | traffic light (vis-traffic-light) |
| 9 | categories | types, groups, classifications | card-grid | two-column with color coding |
| 10 | cause-effect | "leads to", "results in", chain of causation | mermaid-diagram (flow) | timeline |
| 11 | ranking | "highest/lowest", priority order, top-N | chart (horizontal bar) | data-table with sort indicator |
| 12 | matrix-positioning | 2 axes, quadrants, BCG/2x2 | framework | chart (bubble) |
| 13 | definition-concept | "means", "defined as", explanatory content | quote | two-column (visual + text) |
| 14 | evidence-proof | testimonial, case study, "X% achieved" | quote | metric + sparkline |
| 15 | recommendation | "we recommend", action items, next steps | summary | card-grid (action cards) |

## Archetype Reference

### List of Items (`list-of-items`)

- **Detection signals:** 3+ parallel nouns or short phrases with no ordering; items do not build on each other; items are peers (services, features, challenges, team capabilities)
- **Primary component:** `card-grid` — each item gets a card with an icon and label. Prefer icon+label layout (2-4 items) or compact grid (5-6 items).
- **Fallback component:** `text-heavy` with badge row from `vis-badge` if items need descriptive text
- **Visual treatment:** Each item gets a Lucide icon that maps to its domain. Cards use `--comp-card-grid-bg` for subtle differentiation.
- **`--comp-*` hints:** `--comp-card-grid-cols` (set to 2 or 3), `--comp-card-grid-gap`

### Sequential Process (`sequential-process`)

- **Detection signals:** Numbered steps; connective words "first", "then", "next", "finally"; verbs describing actions in order; process flow or workflow description
- **Primary component:** `timeline` — each step is a timeline item with marker and description
- **Fallback component:** Mermaid flowchart (`mermaid-diagram`) for complex branching processes
- **Visual treatment:** Step markers use `--comp-timeline-marker-bg` (accent color). Use step numbers as counter labels. Animate with `fadeUp` stagger.
- **`--comp-*` hints:** `--comp-timeline-connector-color`, `--comp-timeline-marker-size`

### Comparison (`comparison`)

- **Detection signals:** "vs", "compared to", "unlike", "in contrast", A vs B framing, before/after, IST/SOLL, pros/cons
- **Primary component:** `comparison` — two labeled cards side by side with color coding
- **Fallback component:** `data-table` with comparison rows and `vis-check` / `vis-cross` indicators
- **Visual treatment:** Left card gets label (e.g. "HEUTE") in `--comp-comparison-left-label-bg`, right in `--comp-comparison-right-label-bg`. Use `--color-danger` / `--color-success` tokens for negative/positive framing.
- **`--comp-*` hints:** `--comp-comparison-left-label-bg`, `--comp-comparison-right-label-bg`

### Hierarchy (`hierarchy`)

- **Detection signals:** "reports to", "managed by", org structure language, nested groupings, "part of", "contains", tree structures
- **Primary component:** `mermaid-diagram` (org chart subtype) — renders hierarchical tree
- **Fallback component:** `card-grid` with indented or nested visual treatment using `vis-numbered-step`
- **Visual treatment:** Use Mermaid's `graph TD` or `graph LR` direction. Apply `%%{init: {'theme':'base'}}%%` with token colors. Limit depth to 3 levels in one slide.
- **`--comp-*` hints:** `--comp-mermaid-diagram-height`

### Quantity/Metric (`quantity-metric`)

- **Detection signals:** Specific numbers with units (%, €, M, K); KPIs; growth figures; performance data; "increased by", "achieved", "reached"
- **Primary component:** `metrics` — hero number cards with label and optional trend indicator
- **Fallback component:** `text-heavy` with a lead paragraph featuring the key number in large type
- **Visual treatment:** 1-3 metrics: use standard size (`comp-metrics__card`). 4-6 metrics: use compact variant. Numbers use `font-variant-numeric: tabular-nums`. German formatting: comma decimal (23,5%), Mio./Mrd.
- **`--comp-*` hints:** `--comp-metrics-number-size`, `--comp-metrics-gap`

### Proportion (`proportion`)

- **Detection signals:** "X% of Y", "share", "market split", parts of a whole, percentage breakdown summing to 100
- **Primary component:** `chart` (doughnut or pie type) — visually encodes part-to-whole
- **Fallback component:** `waterfall` or `data-table` with percentage column
- **Visual treatment:** Use consulting color palette (chart-1 through chart-6 tokens). Show percentage labels inside segments. Legend below or right.
- **`--comp-*` hints:** `--comp-chart-canvas-height`, `--comp-chart-legend-position`

### Trend (`trend`)

- **Detection signals:** Time axis implied or explicit; "grew", "declined", "over time"; year/quarter/month data; direction language ("upward trajectory")
- **Primary component:** `chart` (line type) — time series visualization with token colors
- **Fallback component:** `waterfall` for period-over-period change; `metrics` with trend arrows for simple direction
- **Visual treatment:** Line chart: no gridlines, clean x-axis (years/quarters), single accent-color line for hero trend. Multiple series: use `--color-chart-1` through `--color-chart-4`.
- **`--comp-*` hints:** `--comp-chart-canvas-height`

### Status/Readiness (`status-readiness`)

- **Detection signals:** "complete", "in progress", "blocked", "not started"; RAG (Red/Amber/Green) status language; maturity levels; capability ratings; readiness assessments
- **Primary component:** `harvey-balls` — circular fill indicators (0/25/50/75/100%) in a table
- **Fallback component:** `data-table` with `vis-traffic-light` cells for RAG status
- **Visual treatment:** Harvey balls inside a `data-table` grid. Use `vis-traffic-light` for 3-state RAG. Use `vis-check` / `vis-cross` for binary. Color: `--color-success`, `--color-chart-3` (amber), `--color-danger`.
- **`--comp-*` hints:** `--comp-harvey-ball-size`, `--comp-data-table-row-alt-bg`

### Categories (`categories`)

- **Detection signals:** Types, groups, or classifications with no ordering; "types of", "categories", "segments"; items belong to distinct buckets
- **Primary component:** `card-grid` — color-coded cards per category
- **Fallback component:** `two-column` with visual divider; `data-table` with category column
- **Visual treatment:** Assign a distinct `--comp-card-grid-card-bg` override per category via `@layer overrides`. Use icons to reinforce category identity.
- **`--comp-*` hints:** `--comp-card-grid-cols`, `--comp-card-grid-card-bg`

### Cause → Effect (`cause-effect`)

- **Detection signals:** "leads to", "results in", "because of", "therefore", "drives", causal chain language; multi-step causation; cascading effects
- **Primary component:** `mermaid-diagram` (flowchart with directional arrows)
- **Fallback component:** `timeline` repurposed as a causal chain (each step is a cause → next is effect)
- **Visual treatment:** Mermaid `graph LR` with labeled edges showing causation ("leads to", "drives"). Use token colors for start (neutral), intermediate (accent), and outcome (success/danger) nodes.
- **`--comp-*` hints:** `--comp-mermaid-diagram-height`

### Ranking (`ranking`)

- **Detection signals:** "highest", "most important", "top N", priority lists, ordered by value, "ranked by"
- **Primary component:** `chart` (horizontal bar) — bars encode value, sorted descending
- **Fallback component:** `data-table` with sort indicator column; `text-heavy` with numbered list
- **Visual treatment:** Sort bars descending. Top item uses `--color-accent` highlight, others use `--color-chart-2`. Show value labels at bar ends.
- **`--comp-*` hints:** `--comp-chart-canvas-height`

### Matrix/Positioning (`matrix-positioning`)

- **Detection signals:** Two evaluation axes; "high/low X vs high/low Y"; quadrant language; positioning maps; BCG matrix / Ansoff / risk-impact
- **Primary component:** `framework` — 2x2 grid with axis labels and quadrant content
- **Fallback component:** `chart` (bubble chart type) for continuous positioning
- **Visual treatment:** Axis labels on all 4 sides. Quadrant titles in `--comp-framework-cell-bg`. Minimalist grid lines from border tokens.
- **`--comp-*` hints:** `--comp-framework-cell-bg`, `--comp-framework-gap`

### Definition/Concept (`definition-concept`)

- **Detection signals:** "means", "is defined as", explanatory content introducing a term or idea; abstract concept requiring contextualization; "what is X"
- **Primary component:** `quote` — large callout text with context line. Works for definitions and concept anchors.
- **Fallback component:** `two-column` (visual left, text explanation right)
- **Visual treatment:** Quote marks from `comp-quote__mark`. Definition text in large `--font-size-h2`. Context/source line in `--color-text-muted`.
- **`--comp-*` hints:** `--comp-quote-mark-color`, `--comp-quote-mark-size`

### Evidence/Proof (`evidence-proof`)

- **Detection signals:** Customer testimonial, analyst quote; "X% of clients reported"; case study result; specific named source; empirical validation
- **Primary component:** `quote` with attribution — name, role, and company below quote text
- **Fallback component:** `metrics` card showing the key metric + `text-heavy` block with evidence context
- **Visual treatment:** Attribution line is essential (name, role, company). Use `vis-badge` for source credibility badge. Optional: small logo image of source company.
- **`--comp-*` hints:** `--comp-quote-attribution-color`

### Recommendation (`recommendation`)

- **Detection signals:** "we recommend", "next steps", "action items", "our proposal"; closing content; numbered actions the audience should take
- **Primary component:** `summary` — numbered takeaways with optional CTA zone
- **Fallback component:** `card-grid` with action-oriented cards (each card = one recommendation)
- **Visual treatment:** Summary points use `comp-summary__point` with number badges. CTA zone uses accent color. Title is the overarching recommendation in action title form.
- **`--comp-*` hints:** `--comp-summary-point-gap`, `--comp-summary-cta-bg`

---

## Bullet-List Smell Test

Run this before assigning `text-heavy` to any slide with 3+ items. Ask each question top to bottom. Stop at the first YES.

1. **Are the items ordered or sequential?** YES → use `timeline` (archetype: sequential-process)
2. **Are the items numbers, percentages, or KPIs?** YES → use `metrics` (archetype: quantity-metric)
3. **Are the items types, categories, or named groups?** YES → use `card-grid` with icons (archetype: categories or list-of-items)
4. **Are the items comparing two things or showing pros/cons?** YES → use `comparison` or `data-table` (archetype: comparison)
5. **Are the items statuses (done/in-progress/blocked)?** YES → use `harvey-balls` or `data-table` with traffic lights (archetype: status-readiness)
6. **Are the items very short labels (2-4 words each)?** YES → use `card-grid` with icon+label layout (archetype: list-of-items)
7. **None of the above?** → `text-heavy` is acceptable. MUST add a lead visual (a chart, icon, or image) above the bullets. Do not use text-heavy with bullets-only layout.

**Validation warning format** (write in deck-plan.md under the Validation Warnings section):
```
> **Visual Treatment Audit:**
> - Slide 7 uses text-heavy with 4 sequential items → Consider: timeline (archetype: sequential-process)
> - Slide 9 has comparison content in bullets → Consider: comparison component (archetype: comparison)
```

---

## Lucide Icon Set (Consulting Curated)

Icons are inline SVG. Builder copies SVG source from lucide.dev/icons/{name} directly. No CDN dependency. Use `width="24" height="24"` as default. Scale via CSS `width`/`height` on parent.

| Domain | Icon Names |
|--------|-----------|
| Strategy | `target`, `compass`, `map`, `telescope`, `crosshair` |
| Growth | `trending-up`, `bar-chart-2`, `line-chart`, `arrow-up-right`, `activity` |
| People | `users`, `user-check`, `handshake`, `building-2`, `award` |
| Technology | `cpu`, `cloud`, `database`, `code-2`, `server` |
| Process | `workflow`, `git-branch`, `repeat`, `layers`, `list-checks` |
| Finance | `wallet`, `banknote`, `credit-card`, `receipt`, `piggy-bank` |
| Communication | `mail`, `phone`, `globe`, `megaphone`, `message-circle` |
| Status | `check-circle`, `alert-triangle`, `x-circle`, `clock`, `shield-check` |
| Innovation | `lightbulb`, `rocket`, `sparkles`, `zap`, `brain` |
| Navigation | `arrow-right`, `chevrons-right`, `move-right`, `corner-down-right`, `external-link` |

**Usage pattern:**
```html
<span class="comp-card-grid__icon" aria-hidden="true">
  <!-- Copy SVG from lucide.dev/icons/target -->
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
       fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
       stroke-linejoin="round">...</svg>
</span>
```

---

## Deck-Plan Integration

Every content slide in `deck-plan.md` MUST include these fields (add after component selection):

```markdown
## Slide 5: Drei Faktoren treiben das Wachstum

### Content
- **Component:** card-grid
- **Content archetype:** list-of-items
- **Visual treatment:** icon+label cards, 3 cards (Lucide: target, trending-up, users)
- **Stylist hints:** wider card spacing for C-Suite audience
```

The strategist writes archetype and visual treatment. The slide-stylist reads `stylist hints` during its post-builder pass and translates them to `@layer overrides` CSS.
