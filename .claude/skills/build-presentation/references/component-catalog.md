# Component Catalog

AI reference for all 21 slide components in the Presentation Builder framework. Use this file to select the right component for each slide, understand required/optional slots, and match components to audience types.

Each component is an HTML template in `templates/`. Copy the `<section>` block into your presentation. All components use CSS custom properties from `tokens/base.css` and adapt automatically to any theme. Each component lists **Archetypes** — cross-references to `visual-vocabulary.md` archetype slugs where this component is the primary or fallback choice.

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
| data-table | Financial data, feature comparisons, status matrices | Table header + rows | Technical, Stakeholder |
| harvey-balls | Capability ratings, maturity assessments | Rating table | C-Suite, Stakeholder |
| chart | Bar, line, pie, doughnut, radar (Chart.js) | Chart config | All |
| mermaid-diagram | Process flows, org charts, system diagrams | Pre-rendered SVG | Technical, Stakeholder |
| waterfall | Revenue walks, cost bridges (Chart.js) | Chart config | C-Suite, Stakeholder |
| code-block | Code snippets, API docs, technical walkthroughs | pre/code | Technical |
| team | Team credentials, leadership page (2-6 members) | Photo, name, role | Sales, Stakeholder |

## Title

- **Use when:** Opening slide of any presentation. Sets tone and context. First impression for the audience.
- **Required slots:** Hero text (h1, keep under 8 words), Subtitle (p, context line)
- **Optional slots:** Background image (data-background-image), secondary subtitle, divider line
- **Action title guidance:** Hero text IS the action title -- state the core message or thesis. Good: "Cloud-Migration senkt Kosten um 30%". Bad: "Einleitung", "Willkommen".
- **Variants:** Light/dark background, background image with overlay, gradient, split layout
- **Master layer:** Hidden (data-master="hide")
- **Animation:** h1 blurIn, divider lineGrow, subtitle fadeUp
- **Audience fit:** All audiences. C-Suite and Sales prefer dramatic/minimal. Internal can be simpler.
- **Archetypes:** recommendation, definition-concept
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
- **Action title guidance:** EXCEPTION -- use short topic labels (2-4 words), not action titles. This is a structural divider. Good: "Marktanalyse", "Naechste Schritte". Bad: full sentences.
- **Variants:** Dark/light background, accent color, with background image
- **Master layer:** Hidden (data-master="hide")
- **Animation:** Counter fadeUp, divider lineGrow, heading blurIn
- **Audience fit:** All audiences. Use short punchy titles (2-4 words).
- **Archetypes:** (none — structural divider slide, not a content archetype)
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
- **Action title guidance:** State the argument or conclusion the text supports. Good: "Drei Faktoren treiben das Wachstum". Bad: "Hintergrund", "Details".
- **Variants:** Dense (reduced gap), with lead paragraph, subheaded sections
- **Master layer:** Visible
- **Animation:** fadeUp on body elements
- **Audience fit:** Technical (primary), Workshop, Internal. Avoid for C-Suite and Sales.
- **Archetypes:** definition-concept, evidence-proof (last-resort fallback for list-of-items when no richer visual fits)
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
- **Action title guidance:** State the comparison insight or relationship. Good: "Kosten sinken, waehrend Qualitaet steigt". Bad: "Vergleich", "Uebersicht".
- **Variants:** 50/50 (default), 60/40 (flex:3/flex:2), 70/30 (flex:7/flex:3). Any content in any column.
- **Master layer:** Visible
- **Animation:** Left column slideL, right column slideR
- **Audience fit:** All audiences. Flexible layout for any content pairing.
- **Archetypes:** comparison, definition-concept, evidence-proof
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
- **Action title guidance:** State what the numbers prove, not what they are. Good: "Umsatz stieg um 15% durch APAC-Expansion". Bad: "Kennzahlen", "Umsatzuebersicht".
- **Variants:** Standard (1-3, large flexbox), Compact (4-6, CSS grid 3-col with smaller numbers)
- **Master layer:** Visible
- **Animation:** scalePop on each card with stagger (data-delay)
- **Audience fit:** C-Suite (1-3 big numbers), Stakeholder (3-5 with context), Sales (1-2 hero metrics)
- **Archetypes:** quantity-metric (primary), trend (fallback for single direction KPI)
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
- **Action title guidance:** State the emotional or aspirational message. Good: "Unsere Vision fuer 2030". Bad: "Bild", "Impression".
- **Variants:** Dark overlay (white text on dark gradient), light overlay (dark text), no overlay (image only)
- **Master layer:** Hidden (data-master="hide")
- **Animation:** fadeUp on overlay text
- **Audience fit:** Sales/Pitch (primary), C-Suite (aspirational imagery). Avoid for Technical.
- **Archetypes:** definition-concept (emotional/aspirational framing), recommendation (closing impact visual)
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
- **Action title guidance:** EXCEPTION -- use "Agenda" or "Tagesordnung". Structural slide, not content slide.
- **Variants:** Active item highlighted (accent border + bold), progressive reveal, numbered
- **Master layer:** Visible
- **Animation:** fadeUp on items
- **Audience fit:** All audiences. Essential for presentations with 4+ sections.
- **Archetypes:** sequential-process (structural agenda of phases), list-of-items (agenda topics as parallel items)
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
- **Action title guidance:** State the key takeaway. Good: "Drei Massnahmen sichern den Projekterfolg". Bad: "Zusammenfassung", "Fazit".
- **Variants:** Clean summary (default), with CTA zone (border-top separator)
- **Master layer:** Visible
- **Animation:** fadeUp on points, scalePop on CTA
- **Audience fit:** All audiences. C-Suite wants 2-3 sharp takeaways. Workshop wants comprehensive recap.
- **Archetypes:** recommendation (primary)
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
- **Action title guidance:** EXCEPTION -- use speaker name or "Kontakt". Structural slide.
- **Variants:** With/without photo, horizontal contact row
- **Master layer:** Visible
- **Animation:** fadeUp on name/role, lineGrow on divider
- **Audience fit:** Sales/Pitch (always), Stakeholder (often). Less common for Internal/Technical.
- **Archetypes:** recommendation (closing CTA slide)
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
- **Action title guidance:** State the verdict or recommendation. Good: "Loesung B uebertrifft A in allen Kriterien". Bad: "IST vs. SOLL", "Vergleich".
- **Variants:** With/without labels, with center arrow/VS divider, color-coded badges
- **Master layer:** Visible
- **Animation:** slideL on left card, slideR on right card
- **Audience fit:** All audiences. Especially effective for C-Suite transformation stories.
- **Archetypes:** comparison (primary)
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
- **Action title guidance:** State the outcome or milestone. Good: "Migration abgeschlossen bis Q2 2027". Bad: "Zeitplan", "Roadmap".
- **Variants:** Horizontal (3-4 steps), vertical (5-6 steps, change flex-direction)
- **Master layer:** Visible
- **Animation:** fadeUp on steps with stagger
- **Audience fit:** Stakeholder (roadmaps), Technical (process flows). Good for any audience needing sequence.
- **Archetypes:** sequential-process (primary), cause-effect (secondary — linear chains)
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
- **Action title guidance:** State why the quote matters or what it proves. Good: "Kundenzufriedenheit bestaetigt den Ansatz". Bad: "Zitat", "Kundenstimme".
- **Variants:** With/without photo, with role attribution
- **Master layer:** Visible
- **Animation:** blurIn on quote text, fadeUp on attribution
- **Audience fit:** Sales (testimonials), C-Suite (vision statements). Use sparingly.
- **Archetypes:** evidence-proof (primary), definition-concept (fallback for concept anchors)
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
- **Action title guidance:** State what the collection demonstrates. Good: "Vier Services decken die gesamte Wertschoepfungskette ab". Bad: "Services", "Angebot".
- **Variants:** 2-column, 3-column, 4-column (auto-fit handles layout). Cards have surface bg + shadow.
- **Master layer:** Visible
- **Animation:** scalePop on cards with stagger
- **Audience fit:** Sales (offerings), Workshop (capabilities), Internal (team areas).
- **Archetypes:** list-of-items (primary), categories (primary)
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
- **Action title guidance:** State the insight the matrix reveals. Good: "Produkt A dominiert im Wachstumssegment". Bad: "BCG-Matrix", "Framework".
- **Variants:** With/without axis labels, color-coded quadrants
- **Master layer:** Visible
- **Animation:** fadeUp on quadrants with stagger
- **Audience fit:** C-Suite (strategic frameworks), Technical (prioritization). Core consulting component.
- **Archetypes:** matrix-positioning (primary), categories (secondary — 4-quadrant classification)
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

## Data Table

- **Use when:** Financial data, feature comparison matrices, vendor evaluations, status grids. Use for 2-6 columns, 3-12 rows.
- **Required slots:** Table header row (th), at least one data row (td)
- **Optional slots:** Slide title (h2), cell modifiers (positive/negative/highlighted)
- **Action title guidance:** State the conclusion the data supports. Good: "Loesung A dominiert in allen Bewertungsdimensionen". Bad: "Vergleich", "Daten".
- **Variants:** Default (alternating row bg), with positive/negative cell coloring, with highlighted cells
- **Master layer:** Visible
- **Animation:** fadeUp on table
- **Audience fit:** Technical (primary), Stakeholder (financial tables). Avoid for C-Suite (too dense).
- **Archetypes:** comparison (primary), ranking (primary), status-readiness (fallback with traffic-light cells)
- **German:** Right-align numeric columns. Use German number format (comma decimal, period thousands). Apply `comp-data-table__cell--positive` / `--negative` for color coding.
- **HTML pattern:**
  ```html
  <section data-component="data-table">
    <div class="comp-data-table">
      <h2 class="comp-data-table__title">...</h2>
      <table class="comp-data-table__table">
        <thead class="comp-data-table__thead"><tr><th>...</th></tr></thead>
        <tbody class="comp-data-table__tbody">
          <tr><td class="comp-data-table__cell">...</td></tr>
        </tbody>
      </table>
    </div>
  </section>
  ```

## Harvey Balls

- **Use when:** Capability ratings, maturity assessments, feature coverage matrices. Inline circular fill indicators (0/25/50/75/100%).
- **Required slots:** Rating table (comp-harvey-balls__table) with at least one harvey ball cell
- **Optional slots:** Slide title (h2), legend row
- **Action title guidance:** State the maturity insight. Good: "Digitale Reife fehlt in Kernprozessen". Bad: "Maturity Assessment", "Bewertung".
- **Variants:** Stand-alone table, inline in data-table cells. Five states: empty (0%), quarter (25%), half (50%), three-quarter (75%), full (100%).
- **Master layer:** Visible
- **Animation:** fadeUp on table
- **Audience fit:** C-Suite (maturity at a glance), Stakeholder (capability gaps). Rarely for Technical.
- **Archetypes:** status-readiness (primary)
- **German:** Column headers may be long. Use `writing-mode: vertical-lr` or abbrevations. Apply `lang="de"` for hyphenation.
- **HTML pattern:**
  ```html
  <section data-component="harvey-balls">
    <div class="comp-harvey-balls">
      <h2 class="comp-harvey-balls__title">...</h2>
      <table class="comp-harvey-balls__table">
        <thead><tr><th>Bereich</th><th>Strategie</th></tr></thead>
        <tbody>
          <tr>
            <td>Einkauf</td>
            <td><div class="comp-harvey-ball comp-harvey-ball--half" aria-label="50%"></div></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
  ```

## Chart

- **Use when:** Bar, line, pie, doughnut, or radar data visualization. Requires Chart.js CDN (loaded conditionally via skeleton).
- **Required slots:** Canvas element (id="chart-N"), initialization script
- **Optional slots:** Slide title (h2), supporting text, chart type config
- **Action title guidance:** State what the data proves. Good: "APAC-Wachstum uebertrifft alle anderen Regionen". Bad: "Umsatzentwicklung", "Chart".
- **Variants:** bar, line (trend), pie/doughnut (proportion), radar (multi-axis comparison)
- **Master layer:** Visible
- **Animation:** Chart animates on slide entry (Chart.js built-in)
- **Audience fit:** All audiences. Use sparingly for C-Suite (1-2 key charts max). Technical can handle complex multi-series.
- **Archetypes:** proportion (pie/doughnut), trend (line), ranking (horizontal bar), quantity-metric (vertical bar for KPIs)
- **German:** Use German number formatting in dataset labels. Chart title via slide h2, not Chart.js title plugin.
- **HTML pattern:**
  ```html
  <section data-component="chart">
    <div class="comp-chart">
      <h2 class="comp-chart__title">...</h2>
      <div class="comp-chart__canvas-wrap">
        <canvas id="chart-1" class="comp-chart__canvas"></canvas>
      </div>
    </div>
  </section>
  <script>/* Chart.js init for chart-1 */</script>
  ```

## Mermaid Diagram

- **Use when:** Process flows, org charts, system architecture diagrams, sequence diagrams, Gantt charts. Pre-render to SVG (no CDN dependency at runtime).
- **Required slots:** Pre-rendered SVG (comp-mermaid__svg)
- **Optional slots:** Slide title (h2), supporting caption
- **Action title guidance:** State what the diagram reveals. Good: "Drei Systemgrenzen erfordern klare Schnittstellen". Bad: "Architektur", "Diagramm".
- **Variants:** flowchart (graph LR/TD), org chart (graph TD with org style), sequence, Gantt
- **Master layer:** Visible
- **Animation:** fadeUp on SVG container
- **Audience fit:** Technical (primary), Stakeholder (high-level process). Avoid for C-Suite (too complex).
- **Archetypes:** hierarchy (org charts), sequential-process (flowcharts), cause-effect (causal flows)
- **German:** SVG text uses German labels. Pre-render with `%%{init: {'theme':'base','themeVariables':{'primaryColor':'...'}}}%%`. Inline SVG avoids CDN.
- **HTML pattern:**
  ```html
  <section data-component="mermaid-diagram">
    <div class="comp-mermaid">
      <h2 class="comp-mermaid__title">...</h2>
      <div class="comp-mermaid__svg" aria-label="Prozessdiagramm">
        <!-- Pre-rendered SVG from mermaid.live -->
        <svg>...</svg>
      </div>
    </div>
  </section>
  ```

## Waterfall

- **Use when:** Revenue walks, cost bridges, period-over-period change breakdown. Shows how components contribute to a total. Requires Chart.js CDN.
- **Required slots:** Canvas element (id="waterfall-N"), initialization script with floating bar dataset
- **Optional slots:** Slide title (h2), supporting annotation text
- **Action title guidance:** State the net change message. Good: "Effizienzgewinne ueberwiegen Kostensteigerungen". Bad: "Kostenentwicklung", "Bridge".
- **Variants:** Vertical waterfall (default), horizontal bridge. Consulting colors: grey (totals), green (positive), red (negative).
- **Master layer:** Visible
- **Animation:** Chart animates on slide entry
- **Audience fit:** C-Suite (revenue/cost narrative), Stakeholder (budget bridges). Not for Technical.
- **Archetypes:** trend (period-over-period), quantity-metric (absolute value walk)
- **German:** Use German axis labels and number format. Totals in grey, not accent color.
- **HTML pattern:**
  ```html
  <section data-component="waterfall">
    <div class="comp-waterfall">
      <h2 class="comp-waterfall__title">...</h2>
      <div class="comp-waterfall__canvas-wrap">
        <canvas id="waterfall-1" class="comp-waterfall__canvas"></canvas>
      </div>
    </div>
  </section>
  <script>/* Chart.js floating bar init for waterfall-1 */</script>
  ```

## Code Block

- **Use when:** Technical deep-dives, API documentation, code walkthroughs, syntax-highlighted snippets. Uses RevealHighlight plugin (loaded conditionally).
- **Required slots:** pre + code elements with language class
- **Optional slots:** Slide title (h2), filename label, line highlight data-line-numbers
- **Action title guidance:** State the key insight from the code. Good: "Zwei Zeilen ersetzen 200 Zeilen Legacy-Code". Bad: "Code-Beispiel", "Implementation".
- **Variants:** With/without title, with line numbers, with highlighted lines
- **Master layer:** Visible
- **Animation:** fadeUp on code block
- **Audience fit:** Technical (primary only). Never use for C-Suite, Sales, or Workshop.
- **Archetypes:** definition-concept (technical explanation via example)
- **German:** Slide title and annotations in German. Code itself stays in English (code is language-agnostic).
- **HTML pattern:**
  ```html
  <section data-component="code-block">
    <div class="comp-code-block">
      <h2 class="comp-code-block__title">...</h2>
      <div class="comp-code-block__wrap">
        <pre class="comp-code-block__pre">
          <code class="language-typescript" data-line-numbers="1-3">
            // code here
          </code>
        </pre>
      </div>
    </div>
  </section>
  ```

## Team

- **Use when:** Team credentials, leadership page, project team introduction, advisory board. 2-6 members in a responsive photo grid.
- **Required slots:** At least 2 team member cards (photo, name, role)
- **Optional slots:** Slide title (h2), email, phone, social link per member
- **Action title guidance:** State why the team is qualified. Good: "Erfahrenes Team aus drei Kompetenzbereichen". Bad: "Team", "Unser Team".
- **Variants:** 2-column, 3-column, 4-column (auto-fit handles layout). Photo is round-cropped.
- **Master layer:** Visible
- **Animation:** fadeUp on cards with stagger
- **Audience fit:** Sales (team credentials), Stakeholder (project team). Less common for Technical/Internal.
- **Archetypes:** list-of-items (team members as parallel items), categories (by role or department)
- **German:** Formal academic titles (Dr., Prof.) precede name. Role names may be long compound words — allow hyphens.
- **HTML pattern:**
  ```html
  <section data-component="team">
    <div class="comp-team">
      <h2 class="comp-team__title">...</h2>
      <div class="comp-team__grid">
        <div class="comp-team__member">
          <img class="comp-team__photo" src="..." alt="Name" />
          <h3 class="comp-team__name">...</h3>
          <p class="comp-team__role">...</p>
        </div>
      </div>
    </div>
  </section>
  ```
