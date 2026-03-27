# Multi-Language / German-First Support

> Research document for the Presentation Builder framework.
> German is the primary language for this framework. English is secondary. This document covers the challenges of multilingual presentations with a deep focus on German language, typography, business conventions, and the DACH region (Germany, Austria, Switzerland).

---

## Table of Contents

1. [German Text Length: The 30% Problem](#1-german-text-length-the-30-problem)
2. [German Typography Conventions](#2-german-typography-conventions)
3. [Formal vs. Informal German (Sie vs. Du)](#3-formal-vs-informal-german-sie-vs-du)
4. [German Business and Consulting Terminology](#4-german-business-and-consulting-terminology)
5. [German-Specific Design Conventions](#5-german-specific-design-conventions)
6. [i18n Framework Architecture](#6-i18n-framework-architecture)
7. [Handling Bilingual Decks](#7-handling-bilingual-decks)
8. [Practical Implementation for the Framework](#8-practical-implementation-for-the-framework)

---

## 1. German Text Length: The 30% Problem

### The Core Challenge

German text is significantly longer than English. This is not a minor variation -- it fundamentally affects layout, typography, and content density decisions.

### IBM's Text Expansion Guidelines (English to German)

| English source length | Average expansion |
|----------------------|-------------------|
| Up to 10 characters | 200-300% (2-3x longer) |
| 11-20 characters | 180-200% |
| 21-30 characters | 160-180% |
| 31-50 characters | 140-160% |
| 51-70 characters | 151-170% |
| Over 70 characters | 130% |

**Key insight:** The shorter the source text, the higher the proportional expansion. This is critical for presentations because slide content tends to be short -- headings, bullet points, labels, button text. These are exactly the elements that expand the most.

### Why German Text Expands

1. **Compound words (Komposita):** German builds new words by combining existing ones without spaces. "Input processing features" becomes "Eingabeverarbeitungsfunktionen" -- a single, unbreakable word.

2. **Longer grammatical structures:** German uses cases (nominative, accusative, dative, genitive) that require additional articles, adjective endings, and prepositions.

3. **No abbreviation equivalents:** Many English abbreviations have no German equivalent and must be spelled out. "ASAP" has no direct German counterpart; "FAQ" is sometimes used but "Haeufig gestellte Fragen" is the proper form.

4. **Formal register adds length:** The formal "Sie" constructions are longer than informal "Du" equivalents, and business German defaults to formal.

### Layout Implications

| Design element | English | German | Impact |
|---------------|---------|--------|--------|
| Slide title (action title) | "Revenue grew 12% in Q3" | "Der Umsatz stieg im dritten Quartal um 12%" | ~40% longer |
| Button/label | "Next Steps" | "Naechste Schritte" | ~50% longer |
| Bullet point | "Improve customer retention" | "Kundenbindung verbessern" | ~20% longer |
| Chart label | "Market Share" | "Marktanteil" | ~10% longer |
| Section header | "Key Findings" | "Wichtigste Erkenntnisse" | ~60% longer |
| Call to action | "Approve the budget" | "Genehmigen Sie das Budget" | ~50% longer |

### Design Solutions

1. **Build flexible layouts:** Avoid fixed-width containers and tight squeezes. Allow text to reflow.
2. **Design for German first:** If German is the primary language, design the layout for German text length, then let English fit comfortably within the same space.
3. **Use slightly smaller font sizes for German:** A 2-4pt reduction from English defaults may be necessary to maintain layout integrity.
4. **Allow line wrapping in titles:** German action titles may need to wrap to two lines where English fits on one.
5. **Test with real German text:** Never test layouts with Lorem Ipsum or short placeholder text. Use actual German business content.

---

## 2. German Typography Conventions

### Quotation Marks (Anfuehrungszeichen)

German uses a completely different quotation mark system from English:

| Language | Primary quotes | Nested quotes | Example |
|----------|---------------|---------------|---------|
| German (Germany/Austria) | „..." (low-high, 99-66) | ‚...' (single low-high) | „So werden Anfuehrungszeichen benutzt." |
| German (Switzerland) | <<...>> (Guillemets, pointing inward) | <...> | <<Guten Tag>> |
| English | "..." (high-high, 66-99) | '...' | "Hello" |

**The 99-66 rule for German:** Opening quotation marks sit on the bottom-left line and curve right (like a 99 rotated). Closing marks sit at the upper-right and curve left (like 66).

**Framework requirement:** The presentation builder must use the correct quotation marks based on language. This cannot be left to the content author -- it should be automatic.

### Dashes

| Mark | German usage | Example |
|------|-------------|---------|
| Hyphen (-) | Joins compound words | Deutsch-Englisch, Online-Kurs |
| En dash (--) | Parenthetical aside, range | Das war -- ohne Zweifel -- hilfreich |
| Em dash (---) | Rarely used in German | Avoid in German text |

**Important:** German uses the en dash (Halbgeviertstrich) where English uses the em dash. The en dash is set with spaces on both sides in German.

### Decimal and Thousands Separators

| Convention | Germany/Austria | Switzerland | English |
|-----------|----------------|-------------|---------|
| Decimal | Komma: 3,14 | Punkt: 3.14 | Period: 3.14 |
| Thousands | Punkt: 1.000.000 | Apostroph: 1'000'000 | Comma: 1,000,000 |
| Currency | 1.234,56 EUR | CHF 1'234.56 | $1,234.56 |

**Framework requirement:** Number formatting must be locale-aware. A chart showing "1,234.56" is confusing to a German audience (reads as "1 point 234 comma 56"). Swiss conventions differ from German/Austrian.

### Date Formats

| Region | Format | Example |
|--------|--------|---------|
| Germany/Austria | DD.MM.YYYY | 22.03.2026 |
| Switzerland | DD.MM.YYYY (same) | 22.03.2026 |
| English (US) | MM/DD/YYYY | 03/22/2026 |
| English (UK) | DD/MM/YYYY | 22/03/2026 |

### Capitalization

German capitalizes all nouns, not just proper nouns. This affects:
- Slide titles: "Wichtigste Erkenntnisse" (not "wichtigste erkenntnisse")
- Labels and bullets: nouns are always capitalized within sentences
- This is a grammatical rule, not a style choice

### Special Characters

The framework must fully support:
- **Umlauts:** Ae (Ae), Oe (Oe), Ue (Ue), ae (ae), oe (oe), ue (ue)
- **Eszett:** ss (ss) -- note: Switzerland does not use ss, using "ss" instead
- **Euro sign:** EUR -- commonly written after the number in German (1.234,56 EUR)
- All fonts used must include full German character support

---

## 3. Formal vs. Informal German (Sie vs. Du)

### The Rules

| Context | Use | Reasoning |
|---------|-----|-----------|
| First meeting, unknown audience | Sie | Default to formal; always safe |
| Banking, legal, government | Sie | Traditional industries expect formality |
| Board/C-Suite presentations | Sie | Respect and professional distance |
| Startup environments | Du | Flat hierarchies, informal culture |
| Tech companies (especially US-owned) | Du | Global informal culture |
| Internal team updates (informal team) | Du | Established team rapport |
| Sales pitch to unknown prospect | Sie | Until the prospect offers Du |
| Workshop/training (younger audience) | Du possible | Depends on context and industry |

### How This Affects Presentation Content

**Formal (Sie):**
> "Guten Tag, meine Damen und Herren. Ich moechte Ihnen heute unsere Ergebnisse vorstellen."
> (Good day, ladies and gentlemen. I would like to present our results to you.)

**Informal (Du):**
> "Hi zusammen. Ich zeig euch heute unsere Ergebnisse."
> (Hi everyone. I'll show you our results today.)

The difference is not just pronouns -- it changes verb conjugation, possessives, and overall tone. The entire presentation register shifts.

### Framework Implementation

The formality level should be a configuration parameter:

```yaml
language:
  primary: "de-DE"
  formality: "formal"  # "formal" (Sie) | "informal" (Du)
```

This affects:
- Generated speaker notes language
- Template text (headers, footers, section titles)
- Default greeting and closing phrases
- Pronoun usage in auto-generated content

### Cultural Note: The Du/Sie Transition

In German business, the shift from Sie to Du is a deliberate social act. It is typically offered by the more senior person or the person who was there first. In presentations, defaulting to Sie is always the safe choice unless the context is explicitly informal (startup, tech company with flat hierarchy, internal team that uses Du).

---

## 4. German Business and Consulting Terminology

### Corporate Structure Terms

| German | English | Context |
|--------|---------|---------|
| Geschaeftsfuehrer (GF) | Managing Director / CEO (GmbH) | Used for GmbH companies |
| Vorstand | Executive Board / Board of Management | AG companies |
| Aufsichtsrat | Supervisory Board | German two-tier board system |
| Gesellschafter | Shareholder / Partner | Ownership context |
| Prokurist | Authorized signatory | Legal authority to sign |
| Abteilungsleiter | Department Head | Middle management |
| Bereichsleiter | Division Head | Senior management |

**Note:** German has a two-tier board system (Vorstand + Aufsichtsrat) that has no direct English equivalent. No member of the Aufsichtsrat may simultaneously be a Vorstand member.

### Common Presentation Phrases

**Opening:**
- "Guten Tag, meine Damen und Herren" -- Good day, ladies and gentlemen
- "Vielen Dank fuer die Einladung" -- Thank you for the invitation
- "Zunaechst moechte ich Ihnen einen Ueberblick geben" -- First, I would like to give you an overview
- "Lassen Sie mich mit einer Frage beginnen" -- Let me begin with a question

**Transitions:**
- "Kommen wir nun zum naechsten Punkt" -- Let us now move to the next point
- "Wie Sie hier sehen koennen" -- As you can see here
- "Das bringt mich zu..." -- This brings me to...
- "Zusammenfassend laesst sich sagen" -- In summary, one can say

**Closing:**
- "Das bringt mich zum Ende meiner Praesentation" -- This brings me to the end of my presentation
- "Haben Sie noch Fragen?" -- Do you have any questions?
- "Ich freue mich auf Ihre Rueckmeldungen" -- I look forward to your feedback
- "Vielen Dank fuer Ihre Aufmerksamkeit" -- Thank you for your attention

### Consulting / Business Buzzwords (German)

| German | English | Usage |
|--------|---------|-------|
| Handlungsbedarf | Need for action | "Es besteht dringender Handlungsbedarf" |
| Umsetzung | Implementation | "Die Umsetzung erfolgt in Q2" |
| Massnahmen | Measures / Actions | "Folgende Massnahmen werden empfohlen" |
| Zielerreichung | Goal achievement | "Die Zielerreichung liegt bei 95%" |
| Wertschoepfung | Value creation | Strategy discussions |
| Nachhaltigkeit | Sustainability | ESG context |
| Digitalisierung | Digitalization | Transformation context |
| Fachkraeftemangel | Skills shortage | HR/workforce discussions |
| Kostensenkung | Cost reduction | Efficiency discussions |
| Skalierung | Scaling | Growth context |
| Kernkompetenz | Core competency | Strategy context |
| Stakeholder-Management | Stakeholder management | Often used as English loanword |
| Roadmap | Roadmap | Used as English loanword in German business |

### Titles and Forms of Address

Titles matter significantly in German business:
- **Dr.** is always used: "Herr Dr. Mueller" (not just "Herr Mueller" if they have a doctorate)
- **Prof. Dr.** is used together: "Frau Prof. Dr. Schmidt"
- In presentations: reference people by their full title on first mention
- On slides: use titles in attribution ("Dr. Anna Mueller, Geschaeftsfuehrerin")

---

## 5. German-Specific Design Conventions

### DACH Design Culture

German, Austrian, and Swiss design culture is characterized by:

1. **Structure and order (Ordnung):** Layouts tend to be more grid-based, structured, and systematic than American or British design. Visual chaos is culturally less accepted.

2. **Functionality over decoration:** Following the Bauhaus tradition, German design prioritizes function. Decorative elements without purpose are viewed skeptically.

3. **Conservative color use:** Corporate presentations in DACH tend to use more muted, professional color palettes. Bright, saturated colors are used sparingly and purposefully.

4. **Data density acceptance:** German business audiences are more comfortable with data-dense slides than American audiences. A slide with a detailed table is not automatically "too busy" in German business culture.

5. **Precision and thoroughness (Gruendlichkeit):** Presentations are expected to be thorough. Skipping details that an executive audience "doesn't need" is less accepted than in US business culture. German boards often want to see the supporting evidence.

### Preferred Fonts in German Business

| Font | Type | Usage | Notes |
|------|------|-------|-------|
| **Helvetica / Helvetica Neue** | Sans-serif | Corporate standard | Swiss origin; dominant in DACH corporate design |
| **DIN (FF DIN, Neue DIN)** | Sans-serif | Industrial, government, signage | Originally German industrial standard (DIN 1451); conveys precision and reliability |
| **Frutiger** | Sans-serif | Corporate, signage | Swiss origin; excellent legibility |
| **Univers** | Sans-serif | Corporate, editorial | Swiss typographic tradition |
| **Source Sans Pro / Inter** | Sans-serif | Digital/screen | Modern, open-source, full German character support |
| **Roboto** | Sans-serif | Google ecosystem | Good German support, widely available |

**Key difference from US trends:** While US presentations often use playful or trendy fonts (Poppins, Montserrat, etc.), German corporate presentations lean toward established, proven typefaces. DIN and Helvetica signal "we are serious and reliable."

**Font selection criteria for German:**
- Full umlaut and eszett support (mandatory)
- Good readability for compound words (longer words need good letter spacing)
- Professional, not trendy
- Available in multiple weights for hierarchy

### Color Preferences in German Corporate Design

| Sector | Primary colors | Accent colors | Notes |
|--------|---------------|---------------|-------|
| Finance/Banking | Dark blue, gray, white | Gold/amber sparingly | Conservative, trust-signaling |
| Automotive | Silver, black, brand red/blue | Brand-specific | Premium, engineered |
| Technology | Blue, white, gray | Green/teal for innovation | Clean, modern |
| Consulting | Dark blue, white, charcoal | Orange/teal for emphasis | Professional, structured |
| Government | Black, red, gold (flag colors) | Blue for EU context | Formal, institutional |
| Healthcare | Blue, green, white | Warm neutrals | Clean, trustworthy |

**General DACH preference:** Higher contrast ratios, less use of pastels, more restrained use of color. White space is valued. The German government's corporate design styleguide (styleguide.bundesregierung.de) is an excellent reference for institutional German design.

### Chart and Data Visualization Conventions

- **Axis labels:** Must use German number formatting (comma for decimal, period for thousands)
- **Currency:** EUR symbol placement after the number (1.234,56 EUR)
- **Percentages:** Space before % sign in formal German (23 %)
- **Date axes:** DD.MM.YYYY or MMM YYYY format
- **Legend labels:** In German, naturally longer -- allocate more space

---

## 6. i18n Framework Architecture

### Approach: Content Files Per Language

The recommended approach is **separate content files per language**, not inline translation. This is the industry standard for scalability and maintainability.

**Why files-per-language wins:**
- Adding or removing languages does not affect other locale files
- Translation management systems (TMS) integrate easily with file-based approaches
- Files can be lazy-loaded (only load the active language)
- Cleaner separation of concerns -- content authors work in their language
- Easier to send to professional translators

**Why inline translation loses:**
- Mixes concerns (content + translation in the same file)
- Harder to manage as languages scale
- More error-prone (easy to miss a string)
- Does not integrate with translation tooling

### Recommended File Structure

```
content/
  de/
    presentation-config.yaml     # German-specific config (formality, formatting)
    slides/
      01-intro.md
      02-problem.md
      03-solution.md
    speaker-notes/
      01-intro.md
      02-problem.md
      03-solution.md
    strings.yaml                 # UI strings, labels, common phrases
  en/
    presentation-config.yaml
    slides/
      01-intro.md
      02-problem.md
      03-solution.md
    speaker-notes/
      01-intro.md
      02-problem.md
      03-solution.md
    strings.yaml
  shared/
    images/                      # Language-neutral visuals
    data/                        # Charts, metrics (formatted per locale at render)
    templates/                   # Layout templates (handle text length flexibly)
```

### Layout Flexibility for Text Length

The framework must handle the 30%+ text expansion:

1. **Responsive text containers:** Use CSS that allows text to scale down slightly or wrap rather than overflow.
2. **German-first layout:** Design all templates for German text length. English will simply have more whitespace.
3. **Dynamic font sizing:** If text exceeds container bounds, reduce font size incrementally (with a minimum floor).
4. **Two-line title support:** Action titles in German frequently need two lines.
5. **Flexible bullet width:** Bullets in German may need narrower left margins to accommodate longer text.

### Font Considerations for German

**Required character support:**
- All German umlauts: Ae Oe Ue ae oe ue
- Eszett: ss (uppercase SS is also needed since 2017 reform)
- Euro sign: EUR
- German quotation marks: „ " ‚ ' and << >> for Swiss
- En dash: --
- Ligatures: fi, fl (important for readability in serif fonts)

**Testing checklist:**
- [ ] All umlauts render correctly at all font sizes
- [ ] Eszett (ss) displays properly (not as "ss" unless Swiss German)
- [ ] German quotation marks are typographically correct
- [ ] Compound words do not break awkwardly at line ends
- [ ] Numbers use correct locale formatting
- [ ] Currency symbols are placed correctly

---

## 7. Handling Bilingual Decks

### Use Cases for Bilingual Presentations

1. **German primary, English reference:** A German company presenting to a mixed audience
2. **English primary, German compliance:** International company with German regulatory requirements
3. **Side-by-side:** Academic or conference presentations where both languages are shown
4. **Language toggle:** Digital presentations where the viewer switches languages

### Architecture Options

**Option A: Separate decks per language**
- Simplest to implement
- Each language gets its own fully independent deck
- Downside: changes must be synchronized manually

**Option B: Single deck with language layer**
- One structural template, content swapped per language
- Layout adapts to text length of active language
- Best for digital/HTML presentations where toggle is possible

**Option C: Bilingual slides (side-by-side)**
- Both languages visible on the same slide
- Primary language in larger font, secondary in smaller
- Works for formal/compliance contexts
- Halves available space per language

### Recommended Approach for This Framework

**Option B (single deck with language layer)** is the strongest choice:

```yaml
presentation:
  default_language: "de-DE"
  available_languages: ["de-DE", "en-US"]
  fallback_language: "en-US"
  bilingual_mode: false          # true = show both languages
  bilingual_primary: "de-DE"     # primary gets larger font
  bilingual_secondary: "en-US"
```

### Bilingual Slide Layout (When Both Languages Shown)

```
+------------------------------------------+
| [DE] Umsatzwachstum uebertrifft          |
|      Erwartungen um 12%                   |  <- Primary: 36pt
| [EN] Revenue growth exceeds              |
|      expectations by 12%                  |  <- Secondary: 24pt, lighter color
+------------------------------------------+
|                                           |
|        [Shared visual / chart]            |  <- Language-neutral
|                                           |
+------------------------------------------+
| [DE] Bullets in German                    |
| [EN] Bullets in English (smaller)         |
+------------------------------------------+
```

### Translation Workflow

1. **Author in primary language (German)**
2. **Generate structure in secondary language** (AI-assisted translation)
3. **Professional review** of translated content (machine translation alone is not sufficient for business presentations)
4. **Layout validation** -- ensure both language versions fit their templates
5. **Speaker notes in presenter's preferred language** (may differ from slide language)

---

## 8. Practical Implementation for the Framework

### Locale Configuration

```yaml
locale:
  language: "de-DE"                    # BCP 47 tag
  formality: "formal"                  # formal | informal
  typography:
    quotes: "german"                   # „..." for DE-DE, <<...>> for DE-CH
    dash: "en-dash-spaced"             # -- with spaces
    decimal_separator: ","
    thousands_separator: "."
    currency_placement: "after"        # 1.234,56 EUR
    date_format: "DD.MM.YYYY"
    percentage_spacing: true           # "23 %" not "23%"
  text_expansion:
    factor: 1.3                        # 30% longer than English baseline
    title_factor: 1.4                  # Titles expand more
    label_factor: 1.5                  # Short labels expand most
  fonts:
    preferred: ["Inter", "Source Sans Pro", "Helvetica Neue"]
    required_characters: ["ae", "oe", "ue", "Ae", "Oe", "Ue", "ss", "EUR"]
```

### Swiss German Variant

```yaml
locale:
  language: "de-CH"
  formality: "formal"
  typography:
    quotes: "guillemets"               # <<...>>
    dash: "en-dash-spaced"
    decimal_separator: "."             # Swiss uses period
    thousands_separator: "'"           # Swiss uses apostrophe
    currency_placement: "before"       # CHF 1'234.56
    date_format: "DD.MM.YYYY"
    eszett: false                      # Swiss German does not use ss
```

### Text Length Validation

The framework should validate that German content fits within templates:

```yaml
validation:
  title_max_chars:
    de: 80                             # Longer to accommodate German
    en: 60
  title_max_lines: 2                   # Allow two-line titles for German
  bullet_max_chars:
    de: 100
    en: 75
  label_max_chars:
    de: 25
    en: 15
  overflow_strategy: "scale-font"      # scale-font | wrap | truncate-with-tooltip
  font_scale_min: 0.8                  # Never scale below 80% of base size
```

### Common German Template Strings

```yaml
strings:
  de:
    agenda: "Agenda"
    executive_summary: "Zusammenfassung"
    key_findings: "Wichtigste Erkenntnisse"
    next_steps: "Naechste Schritte"
    recommendations: "Empfehlungen"
    appendix: "Anhang"
    questions: "Fragen?"
    thank_you: "Vielen Dank"
    table_of_contents: "Inhaltsverzeichnis"
    confidential: "Vertraulich"
    draft: "Entwurf"
    page_of: "Seite {current} von {total}"
    date_label: "Datum"
    author_label: "Erstellt von"
    status_on_track: "Im Plan"
    status_at_risk: "Gefaehrdet"
    status_off_track: "Nicht im Plan"
    decision_needed: "Entscheidung erforderlich"
    action_items: "Massnahmen"
    budget: "Budget"
    timeline: "Zeitplan"
    risk: "Risiko"
    opportunity: "Chance"
  en:
    agenda: "Agenda"
    executive_summary: "Executive Summary"
    key_findings: "Key Findings"
    next_steps: "Next Steps"
    recommendations: "Recommendations"
    appendix: "Appendix"
    questions: "Questions?"
    thank_you: "Thank You"
    table_of_contents: "Table of Contents"
    confidential: "Confidential"
    draft: "Draft"
    page_of: "Page {current} of {total}"
    date_label: "Date"
    author_label: "Prepared by"
    status_on_track: "On Track"
    status_at_risk: "At Risk"
    status_off_track: "Off Track"
    decision_needed: "Decision Needed"
    action_items: "Action Items"
    budget: "Budget"
    timeline: "Timeline"
    risk: "Risk"
    opportunity: "Opportunity"
```

### Number and Currency Formatting Functions

The framework needs locale-aware formatting:

```
formatNumber(1234567.89, "de-DE")  -> "1.234.567,89"
formatNumber(1234567.89, "de-CH")  -> "1'234'567.89"
formatNumber(1234567.89, "en-US")  -> "1,234,567.89"

formatCurrency(1234.56, "EUR", "de-DE")  -> "1.234,56 EUR"
formatCurrency(1234.56, "CHF", "de-CH")  -> "CHF 1'234.56"
formatCurrency(1234.56, "USD", "en-US")  -> "$1,234.56"

formatDate("2026-03-22", "de-DE")  -> "22.03.2026"
formatDate("2026-03-22", "en-US")  -> "03/22/2026"

formatPercentage(0.23, "de-DE")    -> "23 %"
formatPercentage(0.23, "en-US")    -> "23%"
```

---

## Sources

- [W3C: Text Size in Translation](https://www.w3.org/International/articles/article-text-size)
- [Kwintessential: Translation Text Expansion and Design](https://www.kwintessential.co.uk/blog/translation/translation-text-expansion-how-it-affects-design-2)
- [DeveloperUX: Typography Challenges in Multilingual Design](https://developerux.com/2025/03/07/typography-challenges-in-multilingual-design/)
- [on-IDLE: Working with Swiss Standard German Text](https://www.on-idle.com/blog/view/working-with-swiss-standard-german-text-as-a-british-designer)
- [Lingoda: German Quotation Marks](https://www.lingoda.com/blog/en/german-quotation-marks/)
- [Lingolia: Quotation Marks in German](https://deutsch.lingolia.com/en/writing/quotation-marks)
- [Lingoda: Guide to German Punctuation](https://www.lingoda.com/blog/en/punctuation-deutsch/)
- [Babbel: German Punctuation Marks](https://www.babbel.com/en/magazine/german-punctuation-review)
- [Babbel: Sie and Du -- Formal German](https://www.babbel.com/en/magazine/du-sie-formal-german)
- [Emma Loves German: Sie or Du](https://emmalovesgerman.com/sie-du-in-german/)
- [Chillistore: German Business Correspondence Du and Sie](https://www.chillistore.com/blog/german-business-correspondence-dont-mix-up-your-du-and-sie/)
- [Blangly: Business Presentations in German Vocabulary](https://blangly.com/blog/business-presentations-in-german-your-ultimate-vocabulary-list/)
- [Fluent in Deutsch: Essential Business German](https://fluentindeutsch.com/essential-business-german-100-words-and-phrases-for-the-workplace/)
- [LangBox: 100 Business German Words](https://langbox.co/german/business-german/)
- [Wikipedia: DIN 1451](https://en.wikipedia.org/wiki/DIN_1451)
- [Design Shack: 25+ Best German Fonts](https://designshack.net/articles/inspiration/german-fonts/)
- [Fontwerk: Neue DIN](https://fontwerk.com/en/fonts/neue-din)
- [German Design Council](https://www.german-design-council.de/en/about-us/german-design-council)
- [Styleguide der Bundesregierung](https://styleguide.bundesregierung.de/)
- [Slidev i18n Discussion](https://github.com/slidevjs/slidev/issues/1125)
- [empower Slides: Multilingual Presentations](https://www.empowersuite.com/en/blog/multilingual-presentations-with-empower)
- [Shopify Engineering: i18n Best Practices for Front-End](https://shopify.engineering/internationalization-i18n-best-practices-front-end-developers)
- [Lingoport: Resource Files Best Practices for i18n](https://lingoport.com/blog/resource-files-best-practices-for-i18n-localization/)
