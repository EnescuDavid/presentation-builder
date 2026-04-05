# Component Catalog -- v2.0

AI assistants (builder agents): Read this file as the single source of truth for all 21 components.
Use exact class names, exact `--comp-*` variable names, and exact HTML nesting from this catalog.
Do NOT read individual template HTML files as primary input — this catalog supersedes them.

---

## title

**Use when:** Opening slide, first impression, hero title with subtitle and divider.
**Layout pattern:** Centered
**Master layer:** Hidden (`data-master="hide"`)

### HTML Structure

```html
<section id="slide-1" data-component="title" data-master="hide">
  <div class="comp-title">
    <h1 class="comp-title__title">Handlungsempfehlung f&uuml;r Digitalisierung</h1>
    <div class="comp-title__divider"></div>
    <p class="comp-title__subtitle">Strategische Neuausrichtung 2026</p>
    <p class="comp-title__tagline">Unternehmen AG &middot; April 2026</p>
  </div>
</section>
```

### Customization Variables

| Variable | Default | Controls |
|----------|---------|----------|
| `--comp-title-padding` | `var(--spacing-3xl)` | Outer slide padding |
| `--comp-title-title-size` | `var(--font-size-display)` | Hero title font size |
| `--comp-title-title-color` | `var(--color-primary)` | Hero title color |
| `--comp-title-subtitle-size` | `var(--font-size-subheading)` | Subtitle font size |
| `--comp-title-divider-color` | `var(--color-accent)` | Divider line color |
| `--comp-title-divider-width` | `120px` | Divider line width |

### State Modifiers

| Class | Effect |
|-------|--------|
| (none) | Title is a static opening slide with no state variants |

### Content Archetypes

Structural component — not mapped to content archetypes. Used for deck structure, not content visualization.

- **Pitch deck opener**: Company name + tagline as title, investor round as subtitle
- **Report cover**: Report title + subtitle + date/quarter as tagline
- **Presentation start**: Topic + audience/event as subtitle

---

## section-break

**Use when:** Dividing major sections, chapter markers, transitional full-screen slide.
**Layout pattern:** Centered
**Master layer:** Hidden (`data-master="hide"`)

### HTML Structure

```html
<section id="slide-2" data-component="section-break" data-master="hide">
  <div class="comp-section-break">
    <h2 class="comp-section-break__title">01 &mdash; Ausgangslage</h2>
    <p class="comp-section-break__subtitle">Marktentwicklung und Wettbewerbsumfeld</p>
  </div>
</section>
```

### Customization Variables

| Variable | Default | Controls |
|----------|---------|----------|
| `--comp-section-break-bg` | `var(--color-primary)` | Full-slide background color |
| `--comp-section-break-title-color` | `var(--color-on-primary)` | Section number + title color |
| `--comp-section-break-subtitle-color` | `var(--color-dark-text-muted)` | Subtitle color on dark background |
| `--comp-section-break-padding` | `var(--spacing-3xl)` | Outer slide padding |
| `--comp-section-break-title-size` | `var(--font-size-display)` | Section title font size |

### State Modifiers

| Class | Effect |
|-------|--------|
| (none) | Section break is a structural divider with no state variants |

### Content Archetypes

Structural component — not mapped to content archetypes. Used for deck structure, not content visualization.

- **Chapter divider**: Section number + section title + brief descriptor
- **Agenda marker**: "Teil 1" + section name
- **Transition**: Context statement before a dense content section

---

## text-heavy

**Use when:** Explaining concepts, key arguments, bullet-heavy content, narrative slides.
**Layout pattern:** Vertical Stack
**Master layer:** Visible

### HTML Structure

```html
<section id="slide-3" data-component="text-heavy">
  <div class="comp-text-heavy">
    <h2 class="comp-text-heavy__title">Drei Kernhebel f&uuml;r Wachstum</h2>
    <p class="comp-text-heavy__body">Die Analyse zeigt folgende Handlungsfelder:</p>
    <ul class="comp-text-heavy__list">
      <li class="comp-text-heavy__item">Digitalisierung der Kernprozesse</li>
      <li class="comp-text-heavy__item comp-text-heavy__item--highlighted">Kundenorientierung als Wettbewerbsvorteil</li>
      <li class="comp-text-heavy__item comp-text-heavy__item--muted">Kostenoptimierung im Betrieb</li>
    </ul>
  </div>
</section>
```

### Customization Variables

| Variable | Default | Controls |
|----------|---------|----------|
| `--comp-text-heavy-padding` | `var(--spacing-2xl) var(--spacing-3xl)` | Outer slide padding |
| `--comp-text-heavy-title-color` | `var(--color-primary)` | Slide title color |
| `--comp-text-heavy-body-color` | `var(--color-text)` | Body text and bullet color |
| `--comp-text-heavy-list-gap` | `var(--spacing-md)` | Gap between bullet items |

### State Modifiers

| Class | Effect |
|-------|--------|
| `.comp-text-heavy__item--highlighted` | Accent background + left border — key point callout |
| `.comp-text-heavy__item--muted` | 45% opacity — secondary or de-emphasized information |

### Content Archetypes

Archetypes served by this component:
- **definition-concept** (fallback): When a concept requires extended explanation without a richer visual. Use quote as primary instead when a single clear statement can anchor the concept.
- **evidence-proof** (fallback): When evidence needs narrative context around a quoted result. Use quote+metrics as primary instead.
- **list-of-items** (last-resort fallback): Only when no richer visual fits. MUST apply the Bullet-List Smell Test before using text-heavy for list content.

> Note: `text-heavy` is the fallback of last resort — apply the Bullet-List Smell Test before using. If any of the 7 smell-test questions yields YES, use a richer component instead.

- **Key arguments**: 3-5 bullet points with optional highlighted lead insight
- **Problem statement**: Narrative body paragraph followed by supporting bullets
- **Analysis findings**: Ordered list of conclusions with one highlighted recommendation

---

## two-column

**Use when:** Side-by-side content, text + image, two equal arguments.
**Layout pattern:** Two-Column
**Master layer:** Visible

### HTML Structure

```html
<section id="slide-4" data-component="two-column">
  <div class="comp-two-column">
    <h2 class="comp-two-column__title">Vergleich: Vor und nach der Transformation</h2>
    <div class="comp-two-column__grid">
      <div class="comp-two-column__col">
        <p class="comp-two-column__body">Linke Spalte Inhalt...</p>
      </div>
      <div class="comp-two-column__col">
        <img class="comp-two-column__image" src="bild.jpg" alt="Beschreibung">
      </div>
    </div>
  </div>
</section>
```

### Customization Variables

| Variable | Default | Controls |
|----------|---------|----------|
| `--comp-two-column-gap` | `var(--spacing-xl)` | Gap between the two columns |
| `--comp-two-column-padding` | `var(--spacing-2xl) var(--spacing-3xl)` | Outer slide padding |
| `--comp-two-column-title-color` | `var(--color-primary)` | Slide title color |
| `--comp-two-column-split` | `1fr 1fr` | Column width ratio (e.g., `2fr 1fr` for 2:1) |

### State Modifiers

| Class | Effect |
|-------|--------|
| (none) | Layout component — apply states to children as needed |

### Content Archetypes

Archetypes served by this component:
- **definition-concept** (fallback): Visual left + text explanation right — when a concept needs a visual anchor alongside narrative
- **evidence-proof** (fallback): Evidence/metric on one side + analysis context on the other
- **comparison** (fallback): Side-by-side contrast without cards — for flat, non-card layouts

- **Text + image**: Left column body text, right column photograph or diagram
- **Two arguments**: Equal columns each with subheading + bullet list
- **Data + commentary**: Left column chart/table, right column narrative analysis

---

## metrics

**Use when:** Highlighting 1-6 key numbers, KPIs, performance data.
**Layout pattern:** Grid
**Master layer:** Visible

### HTML Structure

```html
<section id="slide-5" data-component="metrics">
  <div class="comp-metrics">
    <h2 class="comp-metrics__title">Gesch&auml;ftsergebnisse Q1 2026</h2>
    <div class="comp-metrics__grid">
      <div class="comp-metrics__card comp-metrics__card--highlighted">
        <span class="comp-metrics__number">+23%</span>
        <span class="comp-metrics__label">Umsatzwachstum</span>
        <span class="comp-metrics__trend comp-metrics__trend--up">
          <svg class="comp-metrics__trend-arrow" ...></svg>
          vs. Vorjahr
        </span>
      </div>
      <div class="comp-metrics__card comp-metrics__card--positive">
        <span class="comp-metrics__number">4,2 Mio.</span>
        <span class="comp-metrics__label">EBITDA (EUR)</span>
      </div>
      <div class="comp-metrics__card comp-metrics__card--negative">
        <span class="comp-metrics__number">-8%</span>
        <span class="comp-metrics__label">Kosten</span>
      </div>
    </div>
  </div>
</section>
```

For 4-6 metrics, use `comp-metrics__grid--compact` on the grid element for a 3-column layout.

Sparkline variants (add inside `comp-metrics__card`):
- Trend arrow: `<span class="comp-metrics__trend comp-metrics__trend--up/down/flat">`
- Mini bars: `<div class="comp-metrics__bars"><div class="comp-metrics__bar" style="height:60%"></div>...</div>`
- Progress: `<div class="comp-metrics__progress"><div class="comp-metrics__progress-fill" style="width:75%"></div></div>`

### Customization Variables

| Variable | Default | Controls |
|----------|---------|----------|
| `--comp-metrics-gap` | `var(--spacing-3xl)` | Gap between metric cards |
| `--comp-metrics-card-padding` | `var(--spacing-lg)` | Inner card padding |
| `--comp-metrics-number-size` | `var(--font-size-display)` | Large number font size |
| `--comp-metrics-label-size` | `var(--font-size-caption)` | KPI label font size |
| `--comp-metrics-card-bg` | `transparent` | Card background color |
| `--comp-metrics-number-color` | `var(--color-primary)` | Default number color |

### State Modifiers

| Class | Effect |
|-------|--------|
| `.comp-metrics__card--highlighted` | Accent border + highlight background — hero metric |
| `.comp-metrics__card--positive` | Success color on number — favorable metric |
| `.comp-metrics__card--negative` | Danger color on number — unfavorable metric |
| `.comp-metrics__card--muted` | 45% opacity — secondary or context metric |
| `.comp-metrics__card--risk` | Danger border + callout background — risk flag |

### Content Archetypes

Archetypes served by this component:
- **quantity-metric** (primary): Hero numbers, KPIs, percentages, revenue figures — the canonical component for numeric data
- **evidence-proof** (fallback): When the evidence IS the metric (e.g., "42% of clients reported...") and a sparkline supports it

- **Revenue dashboard**: 3-4 large numbers with trend arrows (up/down/flat)
- **KPI scorecard**: 4-6 compact metrics in `--compact` grid with progress bars
- **Single hero metric**: 1 very large number centered with supporting context

---

## image-full-bleed

**Use when:** Visual impact, product shots, team photos, full-screen atmospheric image.
**Layout pattern:** Full-Bleed
**Master layer:** Hidden (`data-master="hide"`)

### HTML Structure

```html
<section id="slide-6" data-component="image-full-bleed" data-master="hide">
  <div class="comp-image-full-bleed">
    <img class="comp-image-full-bleed__image" src="foto.jpg" alt="Fabrikhalle bei der Arbeit">
    <div class="comp-image-full-bleed__overlay"></div>
    <p class="comp-image-full-bleed__caption">Unsere Produktion — Standort Frankfurt</p>
  </div>
</section>
```

### Customization Variables

| Variable | Default | Controls |
|----------|---------|----------|
| `--comp-image-full-bleed-overlay` | `var(--color-overlay)` | Dark overlay opacity/color on image |
| `--comp-image-full-bleed-caption-color` | `var(--color-on-primary)` | Caption text color |

### State Modifiers

| Class | Effect |
|-------|--------|
| (none) | Structural full-screen slide with no state variants |

### Content Archetypes

Structural component — not mapped to content archetypes. Used for visual impact, not content visualization.

- **Mood opener**: Atmospheric photo with optional caption
- **Product showcase**: Product image with branding caption
- **Transition visual**: Evocative image between major sections

---

## agenda

**Use when:** Presentation roadmap, meeting structure, numbered topic overview.
**Layout pattern:** Vertical Stack
**Master layer:** Visible

### HTML Structure

```html
<section id="slide-7" data-component="agenda">
  <div class="comp-agenda">
    <h2 class="comp-agenda__title">Agenda</h2>
    <ol class="comp-agenda__list">
      <li class="comp-agenda__item comp-agenda__item--completed">
        <span class="comp-agenda__number">01</span>
        Ausgangslage und Zielsetzung
      </li>
      <li class="comp-agenda__item comp-agenda__item--active">
        <span class="comp-agenda__number">02</span>
        Analyseergebnisse
      </li>
      <li class="comp-agenda__item comp-agenda__item--muted">
        <span class="comp-agenda__number">03</span>
        Handlungsempfehlungen
      </li>
    </ol>
  </div>
</section>
```

### Customization Variables

| Variable | Default | Controls |
|----------|---------|----------|
| `--comp-agenda-padding` | `var(--spacing-2xl) var(--spacing-3xl)` | Outer slide padding |
| `--comp-agenda-item-gap` | `var(--spacing-md)` | Gap between agenda items |
| `--comp-agenda-number-color` | `var(--color-accent)` | Number/bullet color |
| `--comp-agenda-title-color` | `var(--color-primary)` | "Agenda" heading color |

### State Modifiers

| Class | Effect |
|-------|--------|
| `.comp-agenda__item--active` | Highlight background + left border — current item |
| `.comp-agenda__item--completed` | Success color — past/completed items |
| `.comp-agenda__item--muted` | 45% opacity — upcoming items |

### Content Archetypes

Structural component — not mapped to content archetypes. Used for deck structure, not content visualization.

- **Meeting agenda**: 3-5 numbered topics with current item highlighted
- **Progress tracker**: Show completed vs. remaining sections mid-presentation
- **Topic overview**: Simple list without state modifiers for pure roadmap view

---

## summary

**Use when:** Closing slide, key takeaways, call to action, recap.
**Layout pattern:** Vertical Stack
**Master layer:** Visible

### HTML Structure

```html
<section id="slide-8" data-component="summary">
  <div class="comp-summary">
    <h2 class="comp-summary__title">Unsere Kernbotschaften</h2>
    <ul class="comp-summary__list">
      <li class="comp-summary__item comp-summary__item--highlighted">
        Sofortma&szlig;nahmen beginnen Q2 2026
      </li>
      <li class="comp-summary__item comp-summary__item--positive">
        Kosteneinsparung von 15% ist realistisch
      </li>
      <li class="comp-summary__item">
        Stakeholder-Alignment bis Ende April
      </li>
    </ul>
  </div>
</section>
```

### Customization Variables

| Variable | Default | Controls |
|----------|---------|----------|
| `--comp-summary-padding` | `var(--spacing-2xl) var(--spacing-3xl)` | Outer slide padding |
| `--comp-summary-title-color` | `var(--color-primary)` | Slide title color |
| `--comp-summary-item-gap` | `var(--spacing-md)` | Gap between takeaway items |

### State Modifiers

| Class | Effect |
|-------|--------|
| `.comp-summary__item--highlighted` | Accent background + left border — primary takeaway |
| `.comp-summary__item--positive` | Success color — favorable outcome |
| `.comp-summary__item--negative` | Danger color — risk or concern |

### Content Archetypes

Archetypes served by this component:
- **recommendation** (primary): Numbered action items and next steps — the canonical closing component for "we recommend" content

- **Key takeaways**: 3-5 concise action statements
- **Next steps**: Numbered list of decisions and owners
- **Closing recap**: Summary of recommendation with highlighted headline

---

## contact

**Use when:** Closing slide, speaker contact details, call to action with contact info.
**Layout pattern:** Centered
**Master layer:** Visible

### HTML Structure

```html
<section id="slide-9" data-component="contact">
  <div class="comp-contact">
    <img class="comp-contact__photo" src="foto.jpg" alt="Maria M&uuml;ller">
    <h2 class="comp-contact__name">Maria M&uuml;ller</h2>
    <p class="comp-contact__role">Partner, Strategie &amp; Transformation</p>
    <div class="comp-contact__details">
      <div class="comp-contact__detail-item">
        <svg ...></svg>
        maria.mueller@firma.de
      </div>
      <div class="comp-contact__detail-item">
        <svg ...></svg>
        +49 89 1234 5678
      </div>
    </div>
  </div>
</section>
```

### Customization Variables

| Variable | Default | Controls |
|----------|---------|----------|
| `--comp-contact-padding` | `var(--spacing-2xl) var(--spacing-3xl)` | Outer slide padding |
| `--comp-contact-name-size` | `var(--font-size-heading)` | Name font size |
| `--comp-contact-name-color` | `var(--color-primary)` | Name color |
| `--comp-contact-role-color` | `var(--color-text-muted)` | Job title color |
| `--comp-contact-photo-size` | `120px` | Circular photo diameter |

### State Modifiers

| Class | Effect |
|-------|--------|
| (none) | Contact is a static closing slide with no state variants |

### Content Archetypes

Structural component — not mapped to content archetypes. Used for deck structure, not content visualization.

- **Speaker card**: Photo + name + role + email + phone
- **Team contact**: Multiple contact items in `comp-contact__details`
- **CTA closing**: Name + role + single action link

---

## comparison

**Use when:** Before/after, A vs B, pros/cons, IST/SOLL current vs target state.
**Layout pattern:** Two-Column
**Master layer:** Visible

### HTML Structure

```html
<section id="slide-10" data-component="comparison">
  <div class="comp-comparison">
    <h2 class="comp-comparison__title">IST vs. SOLL: Prozessreife</h2>
    <div class="comp-comparison__grid">
      <div class="comp-comparison__card comp-comparison__card--current">
        <div class="comp-comparison__header">IST-Zustand</div>
        <div class="comp-comparison__body">
          <ul class="comp-comparison__list">
            <li>Manuelle Datenerfassung</li>
            <li>Silostrukturen</li>
          </ul>
        </div>
      </div>
      <div class="comp-comparison__card comp-comparison__card--target">
        <div class="comp-comparison__header">SOLL-Zustand</div>
        <div class="comp-comparison__body">
          <ul class="comp-comparison__list">
            <li>Automatisierte Prozesse</li>
            <li>Integrierte Systeme</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Customization Variables

| Variable | Default | Controls |
|----------|---------|----------|
| `--comp-comparison-padding` | `var(--spacing-2xl) var(--spacing-3xl)` | Outer slide padding |
| `--comp-comparison-gap` | `var(--spacing-xl)` | Gap between comparison cards |
| `--comp-comparison-title-color` | `var(--color-primary)` | Slide title color |
| `--comp-comparison-card-bg` | `var(--color-surface)` | Card background color |
| `--comp-comparison-card-radius` | `var(--radius-lg)` | Card corner radius |

### State Modifiers

| Class | Effect |
|-------|--------|
| `.comp-comparison__card--current` | Warning border + header — IST state (what is now) |
| `.comp-comparison__card--target` | Success border + header — SOLL state (desired future) |
| `.comp-comparison__card--recommended` | Accent ring + highlight header — preferred option |
| `.comp-comparison__card--highlighted` | Accent background — featured side |
| `.comp-comparison__card--neutral` | Border only, 70% opacity — reference item |

### Content Archetypes

Archetypes served by this component:
- **comparison** (primary): The canonical component for A vs B, before/after, IST/SOLL, pros/cons — two labeled cards with color coding

- **IST/SOLL**: Current state (warning) vs target state (success)
- **Option A vs B**: Two options with `--recommended` on preferred choice
- **Pros/Cons**: Single item with split positive/negative content lists

---

## timeline

**Use when:** Project roadmap, process flow, milestones, sequential steps.
**Layout pattern:** Vertical Stack
**Master layer:** Visible

### HTML Structure

```html
<section id="slide-11" data-component="timeline">
  <div class="comp-timeline">
    <h2 class="comp-timeline__title">Implementierungsfahrplan 2026</h2>
    <div class="comp-timeline__track">
      <div class="comp-timeline__step comp-timeline__step--completed">
        <div class="comp-timeline__marker"></div>
        <div class="comp-timeline__content">
          <span class="comp-timeline__date">Q1 2026</span>
          <h3 class="comp-timeline__heading">Discovery &amp; Analyse</h3>
          <p class="comp-timeline__body">Bestandsaufnahme abgeschlossen</p>
        </div>
      </div>
      <div class="comp-timeline__step comp-timeline__step--current">
        <div class="comp-timeline__marker"></div>
        <div class="comp-timeline__content">
          <span class="comp-timeline__date">Q2 2026</span>
          <h3 class="comp-timeline__heading">Pilotprojekt</h3>
          <p class="comp-timeline__body">Laufend in zwei Regionen</p>
        </div>
      </div>
      <div class="comp-timeline__step comp-timeline__step--target">
        <div class="comp-timeline__marker"></div>
        <div class="comp-timeline__content">
          <span class="comp-timeline__date">Q4 2026</span>
          <h3 class="comp-timeline__heading">Roll-out</h3>
          <p class="comp-timeline__body">Deutschlandweite Einf&uuml;hrung</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Customization Variables

| Variable | Default | Controls |
|----------|---------|----------|
| `--comp-timeline-padding` | `var(--spacing-2xl) var(--spacing-3xl)` | Outer slide padding |
| `--comp-timeline-title-color` | `var(--color-primary)` | Slide title color |
| `--comp-timeline-line-color` | `var(--color-border)` | Vertical connector line color |
| `--comp-timeline-marker-size` | `20px` | Circular milestone marker diameter |
| `--comp-timeline-step-gap` | `var(--spacing-lg)` | Gap between timeline steps |

### State Modifiers

| Class | Effect |
|-------|--------|
| `.comp-timeline__step--active` | Accent marker + heading — currently active step |
| `.comp-timeline__step--completed` | Success marker + heading — finished milestone |
| `.comp-timeline__step--current` | Warning marker + heading — IST position |
| `.comp-timeline__step--target` | Success marker border — SOLL milestone |
| `.comp-timeline__step--muted` | 45% opacity — future steps not yet started |

### Content Archetypes

Archetypes served by this component:
- **sequential-process** (primary): Ordered steps, phases, milestones — the canonical component for "first/then/finally" content
- **cause-effect** (secondary): Linear causal chains where each step causes the next — repurpose steps as cause → effect nodes

- **Project roadmap**: Q1-Q4 milestones with completed/current/target states
- **Process flow**: Sequential steps with active step highlighted
- **Decision path**: 3-5 steps showing where we are and where we're going

---

## quote

**Use when:** Customer quote, expert endorsement, key statement emphasis.
**Layout pattern:** Centered
**Master layer:** Visible

### HTML Structure

```html
<section id="slide-12" data-component="quote">
  <div class="comp-quote">
    <p class="comp-quote__text comp-quote__text--highlighted">
      Die Digitalisierung ist kein Projekt &mdash; sie ist unsere Zukunft.
    </p>
    <p class="comp-quote__author">Dr. Klaus Weber</p>
    <p class="comp-quote__role">CEO, Industrie AG</p>
  </div>
</section>
```

### Customization Variables

| Variable | Default | Controls |
|----------|---------|----------|
| `--comp-quote-padding` | `var(--spacing-3xl)` | Outer slide padding |
| `--comp-quote-text-size` | `var(--font-size-heading)` | Quote text font size |
| `--comp-quote-text-color` | `var(--color-primary)` | Quote text color |
| `--comp-quote-accent-color` | `var(--color-accent)` | Opening quotation mark color |

### State Modifiers

| Class | Effect |
|-------|--------|
| `.comp-quote__text--highlighted` | Accent color on quote text — for emphasis |

### Content Archetypes

Archetypes served by this component:
- **evidence-proof** (primary): Customer testimonial, analyst quote, case study result with attribution — name, role, company required
- **definition-concept** (fallback): Large callout text anchoring a concept or principle — use when a single clear statement defines the idea

- **Customer testimonial**: Quote + customer name + company/role
- **Expert endorsement**: Research quote + author + institution
- **Guiding principle**: Internal leadership statement with exec attribution

---

## card-grid

**Use when:** Service offerings, feature overview, team capabilities (2-4 cards).
**Layout pattern:** Grid
**Master layer:** Visible

### HTML Structure

```html
<section id="slide-13" data-component="card-grid">
  <div class="comp-card-grid">
    <h2 class="comp-card-grid__title">Unsere drei Kernkompetenzen</h2>
    <div class="comp-card-grid__grid">
      <div class="comp-card-grid__card comp-card-grid__card--highlighted">
        <span class="comp-card-grid__icon">
          <svg ...></svg>
        </span>
        <h3 class="comp-card-grid__heading">Strategie</h3>
        <p class="comp-card-grid__body">Marktpositionierung und Wachstumspfade</p>
      </div>
      <div class="comp-card-grid__card">
        <span class="comp-card-grid__icon">
          <svg ...></svg>
        </span>
        <h3 class="comp-card-grid__heading">Technologie</h3>
        <p class="comp-card-grid__body">Digitale Transformation und Architektur</p>
      </div>
      <div class="comp-card-grid__card comp-card-grid__card--muted">
        <span class="comp-card-grid__icon">
          <svg ...></svg>
        </span>
        <h3 class="comp-card-grid__heading">Change Management</h3>
        <p class="comp-card-grid__body">F&uuml;hrung im Wandel</p>
      </div>
    </div>
  </div>
</section>
```

### Customization Variables

| Variable | Default | Controls |
|----------|---------|----------|
| `--comp-card-grid-padding` | `var(--spacing-2xl) var(--spacing-3xl)` | Outer slide padding |
| `--comp-card-grid-gap` | `var(--spacing-lg)` | Gap between cards |
| `--comp-card-grid-card-padding` | `var(--spacing-lg)` | Inner card padding |
| `--comp-card-grid-card-bg` | `var(--color-surface)` | Card background color |
| `--comp-card-grid-title-color` | `var(--color-primary)` | Slide title color |

### State Modifiers

| Class | Effect |
|-------|--------|
| `.comp-card-grid__card--highlighted` | Accent border + highlight background — featured card |
| `.comp-card-grid__card--muted` | 45% opacity — secondary or de-emphasized card |
| `.comp-card-grid__card--recommended` | Accent ring + shadow — preferred or recommended card |

### Content Archetypes

Archetypes served by this component:
- **list-of-items** (primary): 3+ parallel items with no inherent order — services, features, challenges, capabilities; each item gets a card with icon
- **categories** (primary): Types, groups, or classifications with no ordering — color-code cards per category
- **recommendation** (fallback): Action-oriented cards where each card = one recommendation or next step
- **cause-effect** (fallback): Causal chain displayed as cards when flow chart is too complex for the audience

- **Service catalog**: 2-4 service areas with icon + title + description
- **Feature overview**: Product capabilities in equal-sized cards
- **Team expertise**: Skill areas with brief descriptor

---

## framework

**Use when:** BCG matrix, prioritization quadrant, 2x2 analysis, quadrant mapping.
**Layout pattern:** Grid
**Master layer:** Visible

### HTML Structure

```html
<section id="slide-14" data-component="framework">
  <div class="comp-framework">
    <h2 class="comp-framework__title">Priorit&auml;tsmatrix: Auswirkung vs. Aufwand</h2>
    <div class="comp-framework__grid">
      <div class="comp-framework__cell comp-framework__cell--highlighted">
        <span class="comp-framework__label">Schnelle Erfolge</span>
        <p class="comp-framework__body">Hohe Wirkung, geringer Aufwand</p>
      </div>
      <div class="comp-framework__cell">
        <span class="comp-framework__label">Gro&szlig;e Vorhaben</span>
        <p class="comp-framework__body">Hohe Wirkung, hoher Aufwand</p>
      </div>
      <div class="comp-framework__cell comp-framework__cell--muted">
        <span class="comp-framework__label">Nebent&auml;tigkeiten</span>
        <p class="comp-framework__body">Geringe Wirkung, geringer Aufwand</p>
      </div>
      <div class="comp-framework__cell">
        <span class="comp-framework__label">Ressourcenfallen</span>
        <p class="comp-framework__body">Geringe Wirkung, hoher Aufwand</p>
      </div>
      <span class="comp-framework__axis-x">Aufwand &rarr;</span>
      <span class="comp-framework__axis-y">Wirkung &rarr;</span>
    </div>
  </div>
</section>
```

### Customization Variables

| Variable | Default | Controls |
|----------|---------|----------|
| `--comp-framework-padding` | `var(--spacing-2xl) var(--spacing-3xl)` | Outer slide padding |
| `--comp-framework-gap` | `var(--spacing-md)` | Gap between quadrant cells |
| `--comp-framework-title-color` | `var(--color-primary)` | Slide title color |
| `--comp-framework-cell-bg` | `var(--color-surface)` | Quadrant cell background |
| `--comp-framework-cell-radius` | `var(--radius-md)` | Cell corner radius |

### State Modifiers

| Class | Effect |
|-------|--------|
| `.comp-framework__cell--highlighted` | Accent background + border — featured quadrant |
| `.comp-framework__cell--active` | Accent border (2px) — currently focused quadrant |
| `.comp-framework__cell--muted` | 45% opacity — de-emphasized quadrant |

### Content Archetypes

Archetypes served by this component:
- **matrix-positioning** (primary): 2-axis quadrant mapping — BCG, Ansoff, risk-impact, priority grids; axis labels on all 4 sides

- **BCG matrix**: Stars/Cash Cows/Question Marks/Dogs quadrant layout
- **Priority matrix**: Impact vs Effort with quick wins highlighted
- **Eisenhower matrix**: Urgent/Important quadrant for decision-making

---

## data-table

**Use when:** Financial data, feature comparisons, status matrices, vendor evaluations (2-6 columns, 3-12 rows).
**Layout pattern:** Vertical Stack
**Master layer:** Visible

### HTML Structure

```html
<section id="slide-15" data-component="data-table">
  <div class="comp-data-table">
    <h2 class="comp-data-table__title">Kostenvergleich nach Ma&szlig;nahme</h2>
    <table class="comp-data-table__table">
      <thead class="comp-data-table__thead">
        <tr>
          <th>Ma&szlig;nahme</th>
          <th>Investition (T&euro;)</th>
          <th>Einsparung (T&euro;)</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody class="comp-data-table__tbody">
        <tr>
          <td class="comp-data-table__cell">Prozessautomatisierung</td>
          <td class="comp-data-table__cell">480</td>
          <td class="comp-data-table__cell comp-data-table__cell--positive">+1.200</td>
          <td class="comp-data-table__cell comp-data-table__cell--highlighted">Aktiv</td>
        </tr>
        <tr>
          <td class="comp-data-table__cell">Legacy-Ablösung</td>
          <td class="comp-data-table__cell">950</td>
          <td class="comp-data-table__cell comp-data-table__cell--negative">-200</td>
          <td class="comp-data-table__cell">Geplant</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
```

### Customization Variables

| Variable | Default | Controls |
|----------|---------|----------|
| `--comp-data-table-padding` | `var(--spacing-2xl) var(--spacing-3xl)` | Outer slide padding |
| `--comp-data-table-title-color` | `var(--color-primary)` | Slide title color |
| `--comp-data-table-header-bg` | `var(--color-primary)` | Table header background color |
| `--comp-data-table-header-color` | `var(--color-on-primary)` | Table header text color |
| `--comp-data-table-stripe-bg` | `var(--color-surface)` | Alternating row background color |

### State Modifiers

| Class | Effect |
|-------|--------|
| `.comp-data-table__cell--highlighted` | Accent background + semibold accent text — key data cell |
| `.comp-data-table__cell--positive` | Success color + semibold — favorable value |
| `.comp-data-table__cell--negative` | Danger color + semibold — unfavorable value |
| `.comp-data-table__cell--muted` | 45% opacity — de-emphasized cell |

### Content Archetypes

Archetypes served by this component:
- **comparison** (primary): Feature matrix or vendor evaluation with highlighted best-option cells — tabular A vs B
- **ranking** (primary): Sorted rows by value, priority, or score with sort indicator column
- **status-readiness** (fallback): RAG status grids with `vis-traffic-light` cells when Harvey balls are not needed

- **Financial table**: Revenues, costs, margins with positive/negative coloring
- **Feature matrix**: Products vs features with highlighted cells
- **Vendor comparison**: Criteria vs vendors with best option highlighted

---

## harvey-balls

**Use when:** Capability ratings, maturity assessments, inline ratings in tables (0-100% in 5 states).
**Layout pattern:** Vertical Stack
**Master layer:** Visible

### HTML Structure

```html
<section id="slide-16" data-component="harvey-balls">
  <div class="comp-harvey-balls">
    <h2 class="comp-harvey-balls__title">Digitale Reife nach Bereich</h2>
    <table class="comp-harvey-balls__table">
      <thead>
        <tr>
          <th>Bereich</th>
          <th>Strategie</th>
          <th>Prozesse</th>
          <th>Technologie</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="comp-harvey-balls__cell">Vertrieb</td>
          <td class="comp-harvey-balls__cell">
            <span class="comp-harvey-balls__ball" style="--hb-fill:75%"></span>
          </td>
          <td class="comp-harvey-balls__cell comp-harvey-balls__cell--risk">
            <span class="comp-harvey-balls__ball" style="--hb-fill:25%"></span>
          </td>
          <td class="comp-harvey-balls__cell">
            <span class="comp-harvey-balls__ball" style="--hb-fill:50%"></span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
```

Harvey ball fill values: `--hb-fill: 0%` (empty), `25%` (quarter), `50%` (half), `75%` (three-quarter), `100%` (full).
Set `--hb-fill` as an inline CSS variable on the `.comp-harvey-balls__ball` element.

### Customization Variables

| Variable | Default | Controls |
|----------|---------|----------|
| `--comp-harvey-balls-padding` | `var(--spacing-2xl) var(--spacing-3xl)` | Outer slide padding |
| `--comp-harvey-balls-title-color` | `var(--color-primary)` | Slide title color |
| `--comp-harvey-balls-ball-size` | `24px` | Harvey ball circle diameter |
| `--comp-harvey-balls-fill-color` | `var(--color-primary)` | Filled segment color |
| `--comp-harvey-balls-empty-color` | `var(--color-border)` | Empty segment color |

### State Modifiers

| Class | Effect |
|-------|--------|
| `.comp-harvey-balls__cell--highlighted` | Accent background + border — key cell |
| `.comp-harvey-balls__cell--risk` | Danger-colored ball fill — risk flag |

### Content Archetypes

Archetypes served by this component:
- **status-readiness** (primary): Maturity levels, capability ratings, readiness assessments — the canonical component for circular fill indicators (0/25/50/75/100%)

- **Maturity assessment**: Rows = business areas, cols = dimensions, balls = maturity level
- **Capability rating**: Provider/vendor x capability dimension grid
- **Status matrix**: Projects x criteria with partial completion shown

---

## chart

**Use when:** Data visualization with bar, line, pie, doughnut, or radar charts. Requires Chart.js CDN.
**Layout pattern:** Vertical Stack
**Master layer:** Visible

### HTML Structure

```html
<section id="slide-17" data-component="chart">
  <div class="comp-chart">
    <h2 class="comp-chart__title">Umsatzentwicklung 2022&ndash;2026</h2>
    <canvas id="chart-revenue" class="comp-chart__canvas"
      data-chart-config='{
        "type": "bar",
        "data": {
          "labels": ["2022","2023","2024","2025","2026e"],
          "datasets": [{"label": "Umsatz (Mio. EUR)", "data": [42,51,58,67,78]}]
        },
        "options": {"plugins": {"legend": {"display": false}}}
      }'
    ></canvas>
    <div class="comp-chart__legend">
      <span class="comp-chart__legend-item">
        <span class="comp-chart__legend-dot" style="background:var(--color-chart-1)"></span>
        Umsatz
      </span>
    </div>
  </div>
</section>
```

The skeleton's `initSlideCharts()` function reads `data-chart-config` and initializes Chart.js automatically on slide entry. Chart IDs must be unique per presentation (`id="chart-{unique}"`).

### Customization Variables

| Variable | Default | Controls |
|----------|---------|----------|
| `--comp-chart-padding` | `var(--spacing-2xl) var(--spacing-3xl)` | Outer slide padding |
| `--comp-chart-title-color` | `var(--color-primary)` | Slide title color |
| `--comp-chart-canvas-height` | `400px` | Maximum canvas height |

### State Modifiers

| Class | Effect |
|-------|--------|
| (none) | Chart visual state is controlled by Chart.js data and dataset colors |

### Content Archetypes

Archetypes served by this component:
- **proportion** (primary): Pie or doughnut chart type — parts of a whole, market share, budget allocation, segment mix
- **trend** (primary): Line chart type — time series, growth over quarters/years, performance trajectory
- **ranking** (primary): Horizontal bar chart type — sorted descending, top-N lists, priority comparisons
- **quantity-metric** (secondary): Vertical bar chart type — period-over-period KPI comparison

- **Bar chart**: Categorical comparison — revenues, costs, market shares by year or segment
- **Line chart**: Trend over time — growth, performance, market evolution
- **Pie/doughnut**: Composition — market share, budget allocation, segment mix
- **Radar**: Multi-dimensional scoring — capability profile, competitor positioning

---

## mermaid-diagram

**Use when:** Process flows, system architecture, org charts, project timelines (pre-rendered SVG).
**Layout pattern:** Vertical Stack
**Master layer:** Visible

### HTML Structure

```html
<section id="slide-18" data-component="mermaid-diagram">
  <div class="comp-mermaid-diagram">
    <h2 class="comp-mermaid-diagram__title">Gesch&auml;ftsprozess: Auftragsabwicklung</h2>
    <div class="comp-mermaid-diagram__diagram" aria-label="Flussdiagramm Auftragsabwicklung">
      <!-- Pre-rendered SVG from Mermaid (paste inline) -->
      <svg xmlns="http://www.w3.org/2000/svg" ...>
        <!-- SVG content here -->
      </svg>
    </div>
    <p class="comp-mermaid-diagram__caption">Quelle: Prozessaufnahme Q1 2026</p>
  </div>
</section>
```

Mermaid diagrams must be pre-rendered to SVG before embedding. Use the Mermaid Live Editor (mermaid.live) to generate SVG, then paste inline. This eliminates the 2MB runtime dependency.

### Customization Variables

| Variable | Default | Controls |
|----------|---------|----------|
| `--comp-mermaid-diagram-padding` | `var(--spacing-2xl) var(--spacing-3xl)` | Outer slide padding |
| `--comp-mermaid-diagram-title-color` | `var(--color-primary)` | Slide title color |
| `--comp-mermaid-diagram-caption-color` | `var(--color-text-muted)` | Caption text color |

### State Modifiers

| Class | Effect |
|-------|--------|
| (none) | Diagram is a static pre-rendered SVG with no state variants |

### Content Archetypes

Archetypes served by this component:
- **hierarchy** (primary): Org chart subtype — reporting structures, organizational trees, nested groupings
- **cause-effect** (primary): Flowchart subtype — directional arrows showing causation, "leads to" chains, cascading effects
- **sequential-process** (secondary): Flowchart with numbered/labeled steps — use when branching is present (otherwise prefer timeline)

- **Flowchart**: Decision trees, process paths, approval flows
- **Sequence diagram**: API interactions, communication flows, system handoffs
- **Gantt chart**: Project timeline with tasks and milestones
- **Org chart**: Organizational structure, reporting lines

---

## waterfall

**Use when:** Revenue walks, cost bridges, year-over-year change breakdown. Requires Chart.js CDN.
**Layout pattern:** Vertical Stack
**Master layer:** Visible

### HTML Structure

```html
<section id="slide-19" data-component="waterfall">
  <div class="comp-waterfall">
    <h2 class="comp-waterfall__title">EBITDA-Br&uuml;cke 2025 &rarr; 2026</h2>
    <canvas id="chart-waterfall" class="comp-waterfall__canvas"
      data-chart-config='{
        "type": "bar",
        "data": {
          "labels": ["2025","Wachstum","Effizienz","Kosten","2026e"],
          "datasets": [{
            "data": [[0,42],[42,58],[58,65],[65,61],[0,61]],
            "backgroundColor": ["#718096","#38A169","#38A169","#E53E3E","#718096"]
          }]
        },
        "options": {"plugins":{"legend":{"display":false}}}
      }'
    ></canvas>
    <div class="comp-waterfall__legend">
      <span class="comp-waterfall__legend-item">
        <span class="comp-waterfall__legend-dot" style="background:#718096"></span>
        Gesamt
      </span>
      <span class="comp-waterfall__legend-item">
        <span class="comp-waterfall__legend-dot" style="background:#38A169"></span>
        Positiv
      </span>
      <span class="comp-waterfall__legend-item">
        <span class="comp-waterfall__legend-dot" style="background:#E53E3E"></span>
        Negativ
      </span>
    </div>
  </div>
</section>
```

Waterfall uses Chart.js floating bars (`data: [[start, end]]`). Colors follow consulting convention: grey for totals, green for positive changes, red for negative. Colors are hardcoded per convention, not token-assigned.

### Customization Variables

| Variable | Default | Controls |
|----------|---------|----------|
| `--comp-waterfall-padding` | `var(--spacing-2xl) var(--spacing-3xl)` | Outer slide padding |
| `--comp-waterfall-title-color` | `var(--color-primary)` | Slide title color |
| `--comp-waterfall-canvas-height` | `400px` | Maximum canvas height |

### State Modifiers

| Class | Effect |
|-------|--------|
| (none) | Chart visual state is controlled by Chart.js data and explicit colors |

### Content Archetypes

Financial walk component — used for period-over-period change visualization. No direct content archetype mapping.

- **trend** (secondary): Period-over-period direction visible in the bridge shape
- **quantity-metric** (secondary): Absolute value walk from start to end total

- **Revenue walk**: Start revenue + growth drivers + headwinds = end revenue
- **Cost bridge**: Cost base + inflation + savings = net cost change
- **P&L bridge**: EBITDA bridge showing year-over-year change components

---

## code-block

**Use when:** Technical deep-dives, API documentation, code walkthroughs, syntax-highlighted snippets.
**Layout pattern:** Vertical Stack
**Master layer:** Visible

### HTML Structure

```html
<section id="slide-20" data-component="code-block">
  <div class="comp-code-block">
    <h2 class="comp-code-block__title">API-Integration: Authentifizierung</h2>
    <pre class="comp-code-block__code comp-code-block__code--highlighted"><code class="language-python">
import anthropic

client = anthropic.Anthropic(api_key="sk-ant-...")
message = client.messages.create(
    model="claude-opus-4-5",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Analysiere diesen Datensatz"}]
)
print(message.content)
    </code></pre>
    <p class="comp-code-block__caption">Python SDK v0.39 &mdash; Kurzversion</p>
  </div>
</section>
```

RevealHighlight plugin is loaded conditionally via `typeof RevealHighlight` check in the skeleton. No additional setup needed when the skeleton script is included.

### Customization Variables

| Variable | Default | Controls |
|----------|---------|----------|
| `--comp-code-block-padding` | `var(--spacing-2xl) var(--spacing-3xl)` | Outer slide padding |
| `--comp-code-block-title-color` | `var(--color-primary)` | Slide title color |
| `--comp-code-block-bg` | `#1E1E2E` | Code block background (dark) |
| `--comp-code-block-code-color` | `#CDD6F4` | Default code text color |
| `--comp-code-block-radius` | `var(--radius-md)` | Code block corner radius |

### State Modifiers

| Class | Effect |
|-------|--------|
| `.comp-code-block__code--highlighted` | Accent border around code block — key snippet callout |

### Content Archetypes

Technical content component — no content archetype mapping. Used for Technical audience only.

- **definition-concept** (secondary): Technical explanation via example — code as the definition of how something works

- **Code walkthrough**: Single function or class with step-through highlights
- **API reference**: Endpoint definition + request/response example
- **Configuration snippet**: YAML/JSON config with line annotations

---

## team

**Use when:** Team credentials, leadership page, project team introduction, advisory board (2-6 members).
**Layout pattern:** Grid
**Master layer:** Visible

### HTML Structure

```html
<section id="slide-21" data-component="team">
  <div class="comp-team">
    <h2 class="comp-team__title">Projektteam</h2>
    <div class="comp-team__grid">
      <div class="comp-team__member comp-team__member--highlighted">
        <img class="comp-team__photo" src="foto.jpg" alt="Anna Schmidt">
        <h3 class="comp-team__name">Anna Schmidt</h3>
        <p class="comp-team__role">Projektleiterin</p>
      </div>
      <div class="comp-team__member">
        <img class="comp-team__photo" src="foto2.jpg" alt="Thomas M&uuml;ller">
        <h3 class="comp-team__name">Thomas M&uuml;ller</h3>
        <p class="comp-team__role">Technischer Berater</p>
      </div>
      <div class="comp-team__member comp-team__member--muted">
        <img class="comp-team__photo" src="foto3.jpg" alt="Lisa Weber">
        <h3 class="comp-team__name">Lisa Weber</h3>
        <p class="comp-team__role">Change Management</p>
      </div>
    </div>
  </div>
</section>
```

### Customization Variables

| Variable | Default | Controls |
|----------|---------|----------|
| `--comp-team-padding` | `var(--spacing-2xl) var(--spacing-3xl)` | Outer slide padding |
| `--comp-team-gap` | `var(--spacing-xl)` | Gap between team member cards |
| `--comp-team-title-color` | `var(--color-primary)` | Slide title color |
| `--comp-team-photo-size` | `96px` | Circular photo diameter |

### State Modifiers

| Class | Effect |
|-------|--------|
| `.comp-team__member--highlighted` | Accent border + highlight background — featured member |
| `.comp-team__member--muted` | 45% opacity — supporting or de-emphasized member |

### Content Archetypes

Structural component — not mapped to content archetypes. Used for deck structure, not content visualization.

- **list-of-items** (secondary): Team members as parallel items when the emphasis is on the roster itself
- **categories** (secondary): Team organized by role or department when categorization is the message

- **Project team**: 3-6 members with role descriptions
- **Leadership page**: C-level or senior team with larger photos
- **Advisory board**: External advisors with credentials

---

## Visual Micro-Patterns

Available utility classes from `tokens/visuals.css`. Use inside any component template to add consulting-grade visual indicators.

| Pattern | Class | Use When |
|---------|-------|----------|
| Traffic lights | `.vis-traffic-light` | RAG status indicators (Red/Amber/Green) |
| Checkmarks | `.vis-checkmark` | Tick/cross inline icons for yes/no lists |
| Numbered circles | `.vis-numbered-circle` | Step numbers in circular badges |
| Icon + label pairs | `.vis-icon-label` | Inline SVG icon with descriptive text label |
| Badge pills | `.vis-badge` | Category labels, tags, status chips |
| Callout boxes | `.vis-callout` | Left-bordered insight and warning blocks |
| Chevron flow | `.vis-chevron-flow` | Consulting process flow with arrow steps |
| Proportional circles | `.vis-prop-circle` | Size comparison via circle diameter |
| Stacked bars | `.vis-stacked-bar` | Composition breakdown with color-coded segments |

### Traffic Light Example

```html
<div class="vis-traffic-light">
  <span class="vis-traffic-light__dot vis-traffic-light__dot--green"></span>
  <span class="vis-traffic-light__dot vis-traffic-light__dot--amber"></span>
  <span class="vis-traffic-light__dot vis-traffic-light__dot--red"></span>
  <span class="vis-traffic-light__label">Projektstatus</span>
</div>
```

### Badge Pill Example

```html
<span class="vis-badge vis-badge--accent">Empfohlen</span>
<span class="vis-badge vis-badge--success">Abgeschlossen</span>
<span class="vis-badge vis-badge--danger">Risiko</span>
```

### Callout Box Example

```html
<div class="vis-callout">
  Kernbotschaft: Sofortma&szlig;nahmen erzielen 80% der Einsparungen.
</div>
<div class="vis-callout vis-callout--warning">
  Achtung: Abh&auml;ngigkeit von Legacy-Systemen erfordert gesonderte Planung.
</div>
```

### Chevron Flow Example

```html
<div class="vis-chevron-flow">
  <div class="vis-chevron-flow__step vis-chevron-flow__step--active">Analyse</div>
  <div class="vis-chevron-flow__step">Design</div>
  <div class="vis-chevron-flow__step">Implement</div>
  <div class="vis-chevron-flow__step">Deploy</div>
</div>
```

---

## Builder Quick Reference

1. Copy `tokens/components.css` content into `@layer components { }` — verbatim, never modify
2. Copy `tokens/visuals.css` content into `@layer components { }` — after components.css, verbatim
3. Use exact class names from this catalog — never invent names or write custom CSS rules
4. Set `--comp-*` variables on `<section id="slide-N">` elements via `style=""` — never inside component elements
5. Add `id="slide-N"` and `data-component="{type}"` to every section element
6. Generate `@layer overrides { }` block with a SLIDE MAP comment listing all customized variables per slide
7. Do NOT use `style=""` for layout or positioning — only for `--comp-*` variable overrides

### SLIDE MAP Example

```css
@layer overrides {
  /*
    SLIDE MAP
    Slide 3 (text-heavy): --comp-text-heavy-list-gap
    Slide 5 (metrics): --comp-metrics-number-size, --comp-metrics-card-bg
    Slide 10 (comparison): --comp-comparison-gap
  */
  #slide-3 {
    --comp-text-heavy-list-gap: var(--spacing-lg);
  }
  #slide-5 {
    --comp-metrics-number-size: var(--font-size-heading);
    --comp-metrics-card-bg: var(--color-surface);
  }
}
```

### Master Layer Behavior

| Component | Master Layer |
|-----------|-------------|
| title | Hidden (`data-master="hide"`) |
| section-break | Hidden (`data-master="hide"`) |
| image-full-bleed | Hidden (`data-master="hide"`) |
| text-heavy | Visible |
| two-column | Visible |
| metrics | Visible |
| agenda | Visible |
| summary | Visible |
| contact | Visible |
| comparison | Visible |
| timeline | Visible |
| quote | Visible |
| card-grid | Visible |
| framework | Visible |
| data-table | Visible |
| harvey-balls | Visible |
| chart | Visible |
| mermaid-diagram | Visible |
| waterfall | Visible |
| code-block | Visible |
| team | Visible |

### Animation Classes

Apply `class="fragment anim-{name}"` to any element for entrance animations:

| Class | Effect |
|-------|--------|
| `anim-fadeUp` | Fade in from below (default for most content) |
| `anim-blurIn` | Fade in with blur dissolve (emphasis, hero elements) |
| `anim-slideL` | Slide in from left (left-column content) |
| `anim-slideR` | Slide in from right (right-column content) |
| `anim-scalePop` | Scale up with pop (metrics, numbers, icons) |
| `anim-lineGrow` | Horizontal line grow from left (dividers) |

Add `data-delay="1"` through `data-delay="5"` for stagger timing (0.1s increments).
Fragments are OPTIONAL — omit for immediate appearance. Add only when step-by-step reveal is needed.
