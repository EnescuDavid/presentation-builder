# Component Catalog

AI reference for the 14 slide components in the Presentation Builder framework. Use this file to select the right component for each slide, understand required/optional slots, and match components to audience types.

Each component is an HTML template in `templates/`. Copy the `<section>` block and its `<style>` into your presentation. All components use CSS custom properties from `tokens/base.css` and adapt automatically to any theme.

## Quick Reference

| Component | Use When | Key Slots | Audience Fit |
|-----------|----------|-----------|--------------|
| title | Opening slide, first impression | h1 hero text, subtitle | All |
| section-break | Dividing major sections | h2 heading, counter | All |
| text-heavy | Explaining concepts, arguments | h2 headline, body content | Technical, Workshop, Internal |
| two-column | Side-by-side content, text+image | Left column, right column | All |
| metrics | Highlighting 1-6 key numbers | Metric cards (number+label) | C-Suite, Stakeholder, Sales |
| image-full-bleed | Visual impact, mood | Background image | Sales, C-Suite |
| agenda | Presentation roadmap | Agenda items list | All |
| summary | Closing, key takeaways, recap | Key points list | All |
| contact | Closing, speaker info, CTA | Name, role | Sales, Stakeholder |
| comparison | Before/after, A vs B, pros/cons | Left card, right card | All |
| timeline | Roadmap, process flow, milestones | 3-6 steps with markers | Stakeholder, Technical |
| quote | Customer quote, expert endorsement | Quote text, author name | Sales, C-Suite |
| card-grid | Service offerings, feature overview | 2-4 cards with titles | Sales, Workshop |
| framework | BCG matrix, 2x2 analysis | 4 quadrant contents | C-Suite, Technical |

## Title

- **Use when:** Opening slide of any presentation. Sets tone and context. First impression for the audience.
- **Required slots:** Hero text (h1, keep under 8 words), Subtitle (p, context line)
- **Optional slots:** Background image (data-background-image), secondary subtitle, divider line
- **Variants:** Light/dark background, background image with overlay, gradient, split layout
- **Master layer:** Hidden (data-master="hide")
- **Animation:** h1 blurIn, divider lineGrow, subtitle fadeUp
- **Audience fit:** All audiences. C-Suite and Sales prefer dramatic/minimal. Internal can be simpler.
- **German:** Hero text may need font-size reduction for long compound words. Use hyphenated breaks.
- **HTML pattern:**
  ```html
  <section data-master="hide" data-component="title">
    <div class="comp-title">
      <h1>...</h1>
      <div class="comp-title__divider"></div>
      <p class="comp-title__subtitle">...</p>
    </div>
  </section>
  ```

## Section Break

- **Use when:** Dividing major sections. Chapter marker with visual breathing room. Signals topic change.
- **Required slots:** Heading (h2, section title)
- **Optional slots:** Counter (span, e.g. "01", "02")
- **Variants:** Dark/light background, accent color, with background image
- **Master layer:** Hidden (data-master="hide")
- **Animation:** Counter fadeUp, divider lineGrow, heading blurIn
- **Audience fit:** All audiences. Use short punchy titles (2-4 words).
- **German:** Keep section titles concise. Avoid full sentences here.
- **HTML pattern:**
  ```html
  <section data-master="hide" data-component="section-break">
    <div class="comp-section-break">
      <span class="comp-section-break__counter">01</span>
      <div class="comp-section-break__divider"></div>
      <h2>...</h2>
    </div>
  </section>
  ```

## Text-Heavy

- **Use when:** Explaining a concept. Key arguments. Bullet-heavy content. Detailed analysis.
- **Required slots:** Headline (h2, action title), Body content (paragraphs, bullets, or mixed)
- **Optional slots:** Subheading (h3), Lead paragraph (intro text before bullets)
- **Variants:** Dense (reduced gap), with lead paragraph, subheaded sections
- **Master layer:** Visible
- **Animation:** fadeUp on body elements
- **Audience fit:** Technical (primary), Workshop, Internal. Avoid for C-Suite and Sales.
- **German:** overflow-wrap and hyphens enabled. Handles 2-8 bullets. Use action title pattern.
- **HTML pattern:**
  ```html
  <section data-component="text-heavy">
    <div class="comp-text-heavy">
      <h2>...</h2>
      <ul><li>...</li></ul>
    </div>
  </section>
  ```

## Two-Column

- **Use when:** Comparing two things. Text + image side-by-side. Before/after (flat, no cards).
- **Required slots:** Left column content, Right column content
- **Optional slots:** Headline (h2, above columns), Column sub-headers (h3)
- **Variants:** 50/50 (default), 60/40 (flex:3/flex:2), 70/30 (flex:7/flex:3). Any content in any column.
- **Master layer:** Visible
- **Animation:** Left column slideL, right column slideR
- **Audience fit:** All audiences. Flexible layout for any content pairing.
- **German:** overflow-wrap and hyphens enabled. Allow wider left column for text-heavy German content.
- **HTML pattern:**
  ```html
  <section data-component="two-column">
    <div class="comp-slide-header"><h2>...</h2></div>
    <div class="comp-two-col">
      <div class="comp-two-col__left">...</div>
      <div class="comp-two-col__right">...</div>
    </div>
  </section>
  ```

## Metrics

- **Use when:** Highlighting 1-6 key numbers. KPIs. Revenue, growth, users. Performance data.
- **Required slots:** At least 1 metric card (number + label)
- **Optional slots:** Slide title (h2), up to 6 cards. Use --compact modifier for 4-6 metrics.
- **Variants:** Standard (1-3, large flexbox), Compact (4-6, CSS grid 3-col with smaller numbers)
- **Master layer:** Visible
- **Animation:** scalePop on each card with stagger (data-delay)
- **Audience fit:** C-Suite (1-3 big numbers), Stakeholder (3-5 with context), Sales (1-2 hero metrics)
- **German:** Use German number formatting: comma decimal (23,5%), Mio./Mrd. abbreviations, tabular-nums.
- **HTML pattern:**
  ```html
  <section data-component="metrics">
    <div class="comp-metrics">
      <h2 class="comp-metrics__title">...</h2>
      <div class="comp-metrics__grid">
        <div class="comp-metrics__card">
          <span class="comp-metrics__number">+23%</span>
          <span class="comp-metrics__label">Umsatzwachstum</span>
        </div>
      </div>
    </div>
  </section>
  ```

## Image Full-Bleed

- **Use when:** Visual impact. Product shots. Team photos. Mood/atmosphere setting.
- **Required slots:** Background image (data-background-image on section)
- **Optional slots:** Headline overlay (h2), supporting text overlay (p)
- **Variants:** Dark overlay (white text on dark gradient), light overlay (dark text), no overlay (image only)
- **Master layer:** Hidden (data-master="hide")
- **Animation:** fadeUp on overlay text
- **Audience fit:** Sales/Pitch (primary), C-Suite (aspirational imagery). Avoid for Technical.
- **German:** Overlay text should be brief. Gradient starts from bottom, fading to transparent at 70%.
- **HTML pattern:**
  ```html
  <section data-background-image="path/to/image.jpg"
           data-background-size="cover" data-master="hide"
           data-component="image-full-bleed">
    <div class="comp-image-fb__overlay comp-image-fb__overlay--dark">
      <h2>...</h2><p>...</p>
    </div>
  </section>
  ```

## Agenda

- **Use when:** Presentation roadmap. Meeting structure. Outlining what's coming. After title slide.
- **Required slots:** Agenda items (list of topics, 3-8 items)
- **Optional slots:** Slide title (h2), item descriptions (secondary text per item)
- **Variants:** Active item highlighted (accent border + bold), progressive reveal, numbered
- **Master layer:** Visible
- **Animation:** fadeUp on items
- **Audience fit:** All audiences. Essential for presentations with 4+ sections.
- **German:** Topic labels may be longer. Allow adequate horizontal space.
- **HTML pattern:**
  ```html
  <section data-component="agenda">
    <div class="comp-agenda">
      <h2 class="comp-agenda__title">Agenda</h2>
      <div class="comp-agenda__list">
        <div class="comp-agenda__item comp-agenda__item--active">...</div>
        <div class="comp-agenda__item">...</div>
      </div>
    </div>
  </section>
  ```

## Summary

- **Use when:** Closing slide. Key takeaways. Recap of main points. Call to action.
- **Required slots:** Key points (list of 2-5 takeaways)
- **Optional slots:** Slide title (h2), CTA zone (next steps, contact info, QR code)
- **Variants:** Clean summary (default), with CTA zone (border-top separator)
- **Master layer:** Visible
- **Animation:** fadeUp on points, scalePop on CTA
- **Audience fit:** All audiences. C-Suite wants 2-3 sharp takeaways. Workshop wants comprehensive recap.
- **German:** Use numbered points for clarity. Full sentence takeaways with action title pattern.
- **HTML pattern:**
  ```html
  <section data-component="summary">
    <div class="comp-summary">
      <h2>Zusammenfassung</h2>
      <div class="comp-summary__points">
        <div class="comp-summary__point">
          <span class="comp-summary__point-icon">1</span>
          <div class="comp-summary__point-text">...</div>
        </div>
      </div>
    </div>
  </section>
  ```

## Contact

- **Use when:** Closing slide. Contact details. Call to action. Speaker info.
- **Required slots:** Name, Role
- **Optional slots:** Photo (img 120x120 rounded), Email, Phone, Divider line
- **Variants:** With/without photo, horizontal contact row
- **Master layer:** Visible
- **Animation:** fadeUp on name/role, lineGrow on divider
- **Audience fit:** Sales/Pitch (always), Stakeholder (often). Less common for Internal/Technical.
- **German:** Use formal titles (Dr., Prof.) and formal address conventions.
- **HTML pattern:**
  ```html
  <section data-component="contact">
    <div class="comp-contact">
      <img class="comp-contact__photo" src="..." />
      <h2 class="comp-contact__name">...</h2>
      <p class="comp-contact__role">...</p>
      <div class="comp-contact__divider"></div>
      <div class="comp-contact__details">...</div>
    </div>
  </section>
  ```

## Comparison

- **Use when:** Before/after. A vs B. Pros/cons. Current vs target state (IST/SOLL).
- **Required slots:** Left card content, Right card content
- **Optional slots:** Slide title (h2), left/right labels (e.g. "IST-Zustand"/"SOLL-Zustand"), center divider
- **Variants:** With/without labels, with center arrow/VS divider, color-coded badges
- **Master layer:** Visible
- **Animation:** slideL on left card, slideR on right card
- **Audience fit:** All audiences. Especially effective for C-Suite transformation stories.
- **German:** Labels like "IST-Zustand", "SOLL-Zustand", "Vorher", "Nachher". Cards use shadow (unlike flat two-column).
- **HTML pattern:**
  ```html
  <section data-component="comparison">
    <div class="comp-comparison">
      <h2>...</h2>
      <div class="comp-comparison__cards">
        <div class="comp-comparison__card comp-comparison__card--left">
          <span class="comp-comparison__label">IST</span>
          ...
        </div>
        <div class="comp-comparison__divider">...</div>
        <div class="comp-comparison__card comp-comparison__card--right">
          <span class="comp-comparison__label">SOLL</span>
          ...
        </div>
      </div>
    </div>
  </section>
  ```

## Timeline

- **Use when:** Project roadmap. Process flow. Milestones. Sequential steps. Implementation phases.
- **Required slots:** 3-6 steps, each with marker label and content title
- **Optional slots:** Slide title (h2), step description text
- **Variants:** Horizontal (3-4 steps), vertical (5-6 steps, change flex-direction)
- **Master layer:** Visible
- **Animation:** fadeUp on steps with stagger
- **Audience fit:** Stakeholder (roadmaps), Technical (process flows). Good for any audience needing sequence.
- **German:** Step content uses compact font sizes. Connectors use ::after pseudo-elements (top: 18px).
- **HTML pattern:**
  ```html
  <section data-component="timeline">
    <div class="comp-timeline">
      <h2>...</h2>
      <div class="comp-timeline__track">
        <div class="comp-timeline__step">
          <div class="comp-timeline__marker">Q1</div>
          <h3 class="comp-timeline__title">...</h3>
          <p class="comp-timeline__desc">...</p>
        </div>
      </div>
    </div>
  </section>
  ```

## Quote

- **Use when:** Customer quote. Expert endorsement. Key statement emphasis. CEO vision statement.
- **Required slots:** Quote text, Author name
- **Optional slots:** Author role, Author photo (56x56 rounded)
- **Variants:** With/without photo, with role attribution
- **Master layer:** Visible
- **Animation:** blurIn on quote text, fadeUp on attribution
- **Audience fit:** Sales (testimonials), C-Suite (vision statements). Use sparingly.
- **German:** Decorative German quotation marks via ::before/::after. Max-width 800px. Use proper characters.
- **HTML pattern:**
  ```html
  <section data-component="quote">
    <div class="comp-quote">
      <blockquote class="comp-quote__text">...</blockquote>
      <div class="comp-quote__author">
        <span class="comp-quote__name">...</span>
        <span class="comp-quote__role">...</span>
      </div>
    </div>
  </section>
  ```

## Card Grid

- **Use when:** Service offerings. Feature overview. Team capabilities. 2-4 items with icon and description.
- **Required slots:** 2-4 cards, each with title
- **Optional slots:** Card icon (inline SVG, not emoji), card description, slide title (h2)
- **Variants:** 2-column, 3-column, 4-column (auto-fit handles layout). Cards have surface bg + shadow.
- **Master layer:** Visible
- **Animation:** scalePop on cards with stagger
- **Audience fit:** Sales (offerings), Workshop (capabilities), Internal (team areas).
- **German:** Grid uses auto-fit minmax(220px, 1fr). Use inline Lucide SVGs for professional icons.
- **HTML pattern:**
  ```html
  <section data-component="card-grid">
    <div class="comp-card-grid">
      <h2>...</h2>
      <div class="comp-card-grid__grid">
        <div class="comp-card-grid__card">
          <div class="comp-card-grid__icon"><!-- SVG --></div>
          <h3>...</h3>
          <p>...</p>
        </div>
      </div>
    </div>
  </section>
  ```

## Framework

- **Use when:** BCG matrix. Prioritization grid. 2x2 analysis. Quadrant mapping. Strategic framework.
- **Required slots:** 4 quadrant contents (title + description each)
- **Optional slots:** Slide title (h2), Y-axis label, X-axis label
- **Variants:** With/without axis labels, color-coded quadrants
- **Master layer:** Visible
- **Animation:** fadeUp on quadrants with stagger
- **Audience fit:** C-Suite (strategic frameworks), Technical (prioritization). Core consulting component.
- **German:** CRITICAL: Apply min-width: 0 on quadrant cells to prevent compound words from breaking grid. Use writing-mode vertical-lr + rotate(180deg) for Y-axis label.
- **HTML pattern:**
  ```html
  <section data-component="framework">
    <div class="comp-framework">
      <h2>...</h2>
      <div class="comp-framework__matrix">
        <div class="comp-framework__y-label">...</div>
        <div class="comp-framework__quadrant">...</div>
        <div class="comp-framework__quadrant">...</div>
        <div class="comp-framework__quadrant">...</div>
        <div class="comp-framework__quadrant">...</div>
        <div class="comp-framework__x-label">...</div>
      </div>
    </div>
  </section>
  ```
