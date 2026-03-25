# German Typography Conventions

Reference for AI assistants generating German-language presentations.
Apply these rules automatically when `lang="de"` is set on the HTML document.

## Quotation Marks (Anführungszeichen)

German uses lower-opening and upper-closing quotation marks:
- Primary: „Zitat" (U+201E opening, U+201C closing)
- Nested: ‚Zitat' (U+201A opening, U+2018 closing)
- NEVER use English-style "straight quotes" or "curly quotes"

Example: „Die Digitalisierung ist kein Projekt, sondern eine ‚Reise'."

## Dashes (Gedankenstrich)

- Em dash (Geviertstrich): Not used in German typography
- En dash (Gedankenstrich, U+2013): Used with spaces for parenthetical clauses
  - Correct: „Unsere Strategie – basierend auf Marktanalysen – zeigt klare Vorteile."
- Hyphen: Used for compound words: „IT-Infrastruktur", „End-to-End-Lösung"
- Range dash (no spaces): „2024–2026", „S. 12–15"

## Numbers and Formatting

### Decimal Separator
- German uses comma: 3,7% (not 3.7%)
- On slides: „+23,5% Umsatzwachstum"

### Thousands Separator
- Use thin space (U+202F) or regular space: 1 000 000 (not 1.000.000 or 1,000,000)
- On metric slides: „4,2 Mio." or „1 250 000"

### Currency
- Euro after number with space: 2,5 Mio. EUR or 2,5 Mio. €
- Ranges: 1,2–1,5 Mio. EUR

### Percentages
- Space before %: 23,5 % (formal) or 23,5% (slides -- no space is acceptable for visual density)

## Abbreviations

- Thin space between parts: z. B. (zum Beispiel), d. h. (das heißt), u. a. (unter anderem)
- Common consulting abbreviations: Mio. (Millionen), Mrd. (Milliarden), ca. (circa), ggf. (gegebenenfalls)
- NEVER use "z.B." without space -- always "z. B."

## Eszett (ß) and Swiss German

- Standard German (de-DE): Use ß after long vowels and diphthongs
  - Correct: „Maßnahme", „Straße", „gemäß"
- Capitalization: SS (not SZ) -- „STRASSE" not „STRAßE" (note: capital ß exists but is rarely used in presentations)
- Swiss German (de-CH): Replace ß with ss -- „Massnahme", „Strasse" (out of scope for v1)

## Date and Time

- Long format: 25. März 2026 (day. month year)
- Short format: 25.03.2026 (DD.MM.YYYY)
- Quarter references: Q3 2026, 3. Quartal 2026
- Time: 14:30 Uhr (24-hour format with Uhr suffix)

## Capitalization

- All nouns capitalized: „Die Digitalisierung der Geschäftsprozesse"
- Formal address: „Sie", „Ihr", „Ihnen" (always capitalized)
- Slide titles: Sentence case, not Title Case -- „Strategische Neuausrichtung" not „Strategische neuausrichtung"

## Compound Words

- German creates long compounds: „Unternehmensdigitalisierungsstrategie"
- For slides, prefer hyphenated breaks at natural boundaries for readability:
  „Unternehmens-Digitalisierungsstrategie"
- CSS handles overflow via `overflow-wrap: break-word` and `hyphens: auto`

## Slide-Specific Conventions

### Action Titles (McKinsey-style)
- Full sentences as slide titles: „Die Marktanalyse zeigt drei zentrale Handlungsfelder"
- Not: „Marktanalyse" (too vague) or „Three Key Areas" (English pattern)

### Bullet Points
- End with period if full sentences
- No period if fragments/keywords
- Consistent within a slide -- do not mix

### Metric Labels
- Use German abbreviations: „Mio.", „Mrd.", „Tsd."
- Decimal comma: „+23,5%", „3,7x", „98,9%"
- Space in large numbers on KPI slides: „4 200" or „4,2 Mio."
