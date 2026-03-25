# Speaker Notes Infrastructure

Speaker notes are an optional, separate artifact that can be added to any presentation at generation time. Templates stay clean -- notes are never permanent slots in template files (per decision D-07). Instead, notes live in a per-presentation YAML file and are injected into HTML as `<aside class="notes">` blocks when Claude (or any AI assistant) generates the final presentation.

reveal.js displays these notes in its built-in speaker view. The `showNotes: false` setting in `_skeleton.html` ensures notes are hidden from the audience by default and only visible in the speaker window.

## How It Works

1. **Author** creates a notes YAML file alongside the presentation (or asks the AI to generate one)
2. **AI assistant** reads the notes file during presentation generation
3. **AI assistant** injects `<aside class="notes">` into each matching `<section>` in the output HTML
4. **Presenter** presses `S` during the presentation to open speaker view with notes

Notes are entirely optional. Presentations work perfectly without them.

---

## Notes File Format

Notes use YAML format for structured, machine-readable data. One file per presentation, stored alongside the HTML output.

**Filename convention:** `[presentation-name]-notes.yaml`

```yaml
# Speaker Notes -- Digitale Transformation Q3
# Generated for: Vorstand (C-Suite)
# Language: de

slides:
  - id: "title"
    component: "title"
    notes: |
      Willkommen zur Vorstandssitzung.
      Kernbotschaft: Die digitale Transformation zeigt messbare Ergebnisse.
      Zeitrahmen: 2 Minuten.

  - id: "agenda"
    component: "agenda"
    notes: |
      Tagesordnung kurz vorstellen.
      Auf die drei Schwerpunkte hinweisen: Marktanalyse, Kennzahlen, Ausblick.
      Fragen am Ende jedes Abschnitts einplanen.

  - id: "marktanalyse"
    component: "text-heavy"
    notes: |
      Drei zentrale Erkenntnisse aus der Marktanalyse hervorheben.
      Auf Nachfragen zu Wettbewerbsdaten vorbereitet sein.
      Quelle: McKinsey Global Institute, September 2025.

  - id: "metrics-q3"
    component: "metrics"
    notes: |
      Jede Kennzahl einzeln erklären.
      +23% Umsatzwachstum ist der Headline-Wert -- hier Vergleich zum Vorjahr betonen.
      Konversionsrate auf Nachfrage: von 2,1% auf 3,4% gestiegen.

  - id: "timeline"
    component: "timeline"
    notes: |
      Meilensteine chronologisch durchgehen.
      Bei Phase 3 (Q1 2026) besonders auf Ressourcenbedarf eingehen.
      Pufferzeit für regulatorische Genehmigungen erwähnen.

  - id: "zusammenfassung"
    component: "summary"
    notes: |
      Die drei Kernbotschaften wiederholen.
      Handlungsempfehlung klar formulieren.
      Nächste Schritte und Verantwortlichkeiten benennen.
```

### Field Reference

| Field | Required | Description |
|-------|----------|-------------|
| `id` | Yes | Matches the slide's `id` attribute in HTML (`<section id="title">`). If no `id` attribute exists on the slide, entries are matched by order (first entry = first `<section>`) |
| `component` | No | Component type hint (for readability and validation). Not used for matching |
| `notes` | Yes | The speaker notes text. Use YAML block scalar (`\|`) for multi-line content |

### Notes Content Guidelines

- Write in the presentation's language (German by default)
- Keep notes concise: 3-5 bullet points per slide
- Include transition phrases between slides ("Kommen wir nun zu...")
- Note data sources and backup figures for Q&A preparation
- Mark timing suggestions where relevant ("Zeitrahmen: 2 Minuten")

---

## HTML Injection

At generation time, the AI assistant reads the notes YAML and injects an `<aside class="notes">` block inside each corresponding `<section>`. The `<aside>` element must be a **direct child** of `<section>`, placed **after** the component wrapper div.

### Injection Example

**Before** (clean template output, no notes):

```html
<section id="title" data-master="hide" data-component="title">
  <div class="comp-title">
    <h1 class="comp-title__heading">Digitale Transformation</h1>
    <p class="comp-title__subtitle">Quartalsbericht Q3 2025</p>
  </div>
</section>
```

**After** (with notes injected):

```html
<section id="title" data-master="hide" data-component="title">
  <div class="comp-title">
    <h1 class="comp-title__heading">Digitale Transformation</h1>
    <p class="comp-title__subtitle">Quartalsbericht Q3 2025</p>
  </div>
  <aside class="notes">
    Willkommen zur Vorstandssitzung.
    Kernbotschaft: Die digitale Transformation zeigt messbare Ergebnisse.
    Zeitrahmen: 2 Minuten.
  </aside>
</section>
```

### Injection Rules

1. `<aside class="notes">` is a **direct child** of `<section>`, not nested inside the component div
2. Place the `<aside>` **after** the component wrapper `<div class="comp-*">`
3. reveal.js automatically discovers these elements -- no additional JavaScript needed
4. If a slide has no matching notes entry, do not add an empty `<aside>`
5. Match slides by `id` attribute first; fall back to position order if no `id` exists

### Supported HTML in Notes

Notes support basic HTML formatting for structured talking points:

```html
<aside class="notes">
  <strong>Kernbotschaft:</strong> Umsatzwachstum übertrifft Erwartungen.<br>
  <ul>
    <li>+23% gegenüber Vorjahr</li>
    <li>Alle Geschäftsbereiche positiv</li>
    <li>Prognose für Q4 angehoben</li>
  </ul>
  <em>Überleitung: "Schauen wir uns die Details an..."</em>
</aside>
```

Supported tags: `<br>`, `<strong>`, `<em>`, `<ul>`, `<ol>`, `<li>`, `<p>`.

---

## Audience-Aware Notes

Speaker notes should adapt their tone, detail level, and emphasis based on the target audience (per decision D-10). When generating notes, specify the audience type in the YAML header comment.

| Audience | Note Style | Detail Level | Emphasis |
|----------|-----------|-------------|----------|
| Vorstand (C-Suite) | Formal, concise | High-level, strategic | Business impact, ROI |
| Fachbereich (Technical) | Precise, data-driven | Deep technical detail | Architecture, metrics |
| Vertrieb (Sales) | Energetic, benefit-focused | Customer-oriented | Value proposition, cases |
| Workshop | Interactive, question-prompting | Step-by-step guidance | Participation cues |
| Intern (Internal) | Casual, transparent | Balanced | Progress, next steps |

### Audience Examples

**Vorstand (C-Suite):**
```yaml
notes: |
  Kernaussage: ROI der Digitalisierung liegt bei 340%.
  Investitionsbedarf: 2,4 Mio. EUR für Phase 2.
  Entscheidungsbedarf: Freigabe bis Ende Q4.
```

**Fachbereich (Technical):**
```yaml
notes: |
  Architektur: Microservices auf Kubernetes, 12 Services.
  Latenz: P99 von 450ms auf 120ms reduziert.
  Technische Schulden: 23% der Codebase refaktoriert.
  Nächster Sprint: API-Gateway-Migration.
```

**Workshop:**
```yaml
notes: |
  Frage an die Gruppe: "Welche Erfahrungen haben Sie mit agilen Methoden?"
  3 Minuten Diskussion einplanen.
  Ergebnisse am Flipchart festhalten.
  Überleitung: Vom Ist-Zustand zum Soll-Konzept.
```

---

## Speaker View Usage

reveal.js includes a built-in speaker view that displays notes alongside the presentation.

### Opening Speaker View

1. Open the presentation in a browser
2. Press **`S`** on the keyboard to open the speaker view in a new window
3. The speaker view shows:
   - Current slide (large)
   - Next slide (preview)
   - Speaker notes for the current slide
   - Elapsed time and clock

### Configuration

The skeleton template (`_skeleton.html`) ships with `showNotes: false` in the reveal.js configuration. This means:

- **Default:** Notes are hidden from the main display, visible only in the speaker window
- **Rehearsal mode:** Set `showNotes: true` in the reveal.js init config to show notes on the main display (useful for practicing alone)
- **Print mode:** Set `showNotes: 'separate-page'` to print notes on separate pages after each slide

```javascript
// In reveal.js initialization (skeleton template)
Reveal.initialize({
  showNotes: false,      // Default: notes only in speaker view
  // showNotes: true,    // Rehearsal: show notes on main display
  // showNotes: 'separate-page', // Print: notes on separate pages
});
```

### Tips for Presenters

- Keep the speaker view on your laptop screen, project the main presentation
- Use the elapsed time display to stay on schedule
- Speaker view updates automatically as you navigate slides
- Notes are not visible to the audience -- only in the speaker window

---

## AI Prompt Patterns for Note Generation

> **Status:** Deferred to a future phase. This section will contain prompt templates
> for generating speaker notes that match slide tone, include transition phrases,
> and adapt vocabulary to the target audience.
>
> For now, generate notes manually or instruct your AI assistant with:
> "Generate speaker notes for this presentation targeting [audience]. Notes should
> be in German, include key talking points per slide, and suggest transition phrases."

---

## Timing Estimation

> **Status:** Deferred to a future phase. This section will contain words-per-minute
> calculations, per-slide duration estimates, and total presentation time guidance.
>
> Rule of thumb: ~130 words/minute for German presentations (slightly slower than
> English due to longer words). A 20-slide deck with moderate notes = ~25-30 minutes.

---

## Quick Reference

| Aspect | Detail |
|--------|--------|
| Notes file format | YAML (`.yaml`) |
| Notes location | Alongside presentation HTML |
| Injection element | `<aside class="notes">` inside `<section>` |
| Speaker view shortcut | Press `S` |
| Default visibility | Hidden (`showNotes: false`) |
| Template impact | None -- templates stay clean |
| Required | No -- fully optional |

---

*Part of the Presentation Builder framework. See `templates/index.md` for the component catalog.*
