# Design Principles

AI reference for consulting-grade presentation design. Apply these rules when generating slides to ensure McKinsey/BCG-level quality. These are non-negotiable defaults -- deviate only when the user explicitly requests it.

## Typography Hierarchy

The framework uses a 5-level type scale defined in `tokens/base.css`. Never invent font sizes -- use these tokens:

| Level | Token | Size Range | Use For |
|-------|-------|-----------|---------|
| Display | `--font-size-display` | 40-60px | Hero/title slides, big metric numbers |
| Heading | `--font-size-heading` | 28-36px | Slide titles, section headers |
| Subheading | `--font-size-subheading` | 20-24px | Subtitles, card titles, labels |
| Body | `--font-size-body` | 16-18px | Body text, bullet points |
| Caption | `--font-size-caption` | 12-14px | Chart labels, footnotes, metadata |

**Font weights:** `--font-weight-light` (300), `--font-weight-regular` (400), `--font-weight-medium` (500), `--font-weight-semibold` (600), `--font-weight-bold` (700)

**Line heights:** `--line-height-tight` (1.1) for display, `--line-height-snug` (1.2) for headings, `--line-height-normal` (1.5) for body, `--line-height-relaxed` (1.7) for long reading

**Font family:** Inter for both display and body (`--font-family-body`, `--font-family-display`). Themes may override display font (e.g. Space Grotesk for Startup theme).

## Color Usage

16 color tokens organized by purpose. Reference via `var(--color-*)`:

| Category | Tokens | When to Use |
|----------|--------|-------------|
| Primary | `--color-primary`, `--color-secondary` | Headings, strong emphasis, brand identity |
| Accent | `--color-accent` | Interactive elements, highlights, accent bars, links |
| Neutral | `--color-background`, `--color-surface`, `--color-text`, `--color-text-muted`, `--color-border` | Page backgrounds, cards, body text, subtle UI |
| Semantic | `--color-success`, `--color-danger` | RAG status, positive/negative indicators |
| Callout | `--color-highlight`, `--color-callout` | Background tints for highlighted or warning content |
| Charts | `--color-chart-1` through `--color-chart-5` | Data visualization series colors |

**Rules:**
- Maximum 3 colors on any slide (primary + accent + one semantic/chart)
- Use `--color-text-muted` for secondary information, never full opacity text
- Dark variant: add `data-background-color="dark"` to section for automatic text inversion
- Never hardcode hex values -- always use token variables

## Spacing System

8px grid defined in `tokens/base.css`. All spacing uses these tokens:

| Token | Value | Use For |
|-------|-------|---------|
| `--spacing-xs` | 4px | Tight gaps (label padding) |
| `--spacing-sm` | 8px | Between related items (list item margin) |
| `--spacing-md` | 16px | Standard gap (paragraph margin, component padding) |
| `--spacing-lg` | 24px | Section gaps (heading to content) |
| `--spacing-xl` | 32px | Major separations |
| `--spacing-2xl` | 48px | Slide padding, column gaps |
| `--spacing-3xl` | 64px | Hero/title slide padding |
| `--spacing-section` | 80px | Between major slide sections |

**Rule:** Every margin, padding, and gap must be an 8px multiple using these tokens. Never use arbitrary pixel values.

## Visual Hierarchy

Guide the eye using these techniques in order of importance:

1. **Size contrast:** Display text (40-60px) vs body text (16-18px) creates immediate hierarchy
2. **Weight contrast:** Bold headings vs regular body text
3. **Color contrast:** Primary color for headings, muted for secondary content
4. **Spatial grouping:** Related items close together, unrelated items separated by whitespace
5. **Position:** Top-left gets read first (Western reading pattern). Place the key message there.

**The slide anatomy (MBB standard):**
```
+------------------------------------------------------------------+
|  ACTION TITLE (complete sentence stating the insight)             |
+------------------------------------------------------------------+
|                                                                    |
|                    SLIDE BODY                                      |
|     (charts, data, text that PROVES the action title)             |
|                                                                    |
+------------------------------------------------------------------+
|  SOURCE / FOOTNOTE                                                 |
+------------------------------------------------------------------+
```

## Content Density

Consulting presentations follow "less is more." Apply these hard limits:

- **One insight per slide** -- if you need a second insight, make a second slide
- **Action titles required** -- full sentence headings, not topic labels ("Revenue grew 15% driven by APAC" not "Revenue Overview")
- **Titles-only test** -- reading just slide titles in sequence should tell the complete story
- **Bullet discipline:** Maximum count per audience type (see audience-presets.md). No sub-sub-bullets.
- **White space is content** -- generous margins prevent visual overload. Do not fill every pixel.

**Do:**
- Use action titles as complete sentences
- Let one visual dominate per slide
- Leave 30%+ of slide area as white space

**Don't:**
- Put two charts on one slide
- Use bullet points where a visual would work better
- Add decorative elements that do not communicate information

## German Typography

German is the primary language. Apply these rules automatically when generating content:

**Quotation marks:** Use German style: lower-opening upper-closing
- Correct: ...Digitalisierung...  (Use the actual characters in generated HTML)
- Primary: U+201E opening, U+201C closing
- Nested: U+201A opening, U+2018 closing

**Dashes:** En dash with spaces for parenthetical clauses (U+2013): "Unsere Strategie -- basierend auf Marktanalysen -- zeigt klare Vorteile."

**Numbers:** Comma as decimal separator (23,5%), space for thousands (1 250 000), EUR after number (2,5 Mio. EUR)

**Abbreviations:** Thin space between parts: z. B., d. h., u. a. Metric abbreviations: Mio., Mrd., Tsd.

**Compound words:** German creates long compounds. Prefer hyphenated breaks on slides: "Unternehmens-Digitalisierungsstrategie". CSS handles overflow via `overflow-wrap: break-word` and `hyphens: auto`.

**Dates:** DD.MM.YYYY (25.03.2026) or "25. Marz 2026". Time: 14:30 Uhr.

**Capitalization:** Sentence case for titles, all nouns capitalized per German grammar. Formal address: Sie/Ihr/Ihnen always capitalized.

See `docs/german-typography.md` for the complete reference.

## Professional Restraint

What NOT to do -- these anti-patterns destroy consulting credibility:

- **No gratuitous animation:** Every animation must serve a purpose (reveal sequence, draw attention). If in doubt, no animation.
- **No clip art or stock illustrations:** Use inline Lucide SVGs for icons, real photography for images
- **No rainbow colors:** Maximum 3 colors per slide from the theme palette
- **No decorative fonts:** Stick to the theme font family. Never use Comic Sans, Papyrus, or script fonts.
- **No centered body text:** Left-align all body content. Only hero titles and quotes are centered.
- **No orphan bullets:** If a list has one item, it is not a list -- use a sentence.
- **No slide transitions:** Content slides change instantly. Only section breaks may use a subtle transition.
- **No sound effects or video autoplay:** Professional presentations rely on speaker delivery.

**The test:** Would a McKinsey partner present this to a Fortune 500 CEO? If no, simplify.
