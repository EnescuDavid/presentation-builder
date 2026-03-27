# PowerPoint Design Best Practices & Libraries

> Research document for the Presentation Builder framework.
> Last updated: 2026-03-22

---

## Table of Contents

1. [Professional Slide Design Principles (Consulting-Grade)](#1-professional-slide-design-principles)
2. [The Pyramid Principle & Slide Structure](#2-the-pyramid-principle--slide-structure)
3. [Layout Patterns That Work](#3-layout-patterns-that-work)
4. [Color Theory for Presentations](#4-color-theory-for-presentations)
5. [Typography Best Practices](#5-typography-best-practices)
6. [Common PowerPoint Component Patterns](#6-common-powerpoint-component-patterns)
7. [Animation & Transition Best Practices](#7-animation--transition-best-practices)
8. [Image & Icon Libraries](#8-image--icon-libraries)

---

## 1. Professional Slide Design Principles

### The MBB Standard (McKinsey, BCG, Bain)

Top-tier consulting firms share a consistent philosophy for presentation design. Their decks are not creative showcases -- they are precision communication instruments engineered for executive decision-making.

#### Core Principles

| Principle | Description |
|-----------|-------------|
| **One Insight Per Slide** | Every slide communicates exactly one key message. No more, no less. |
| **Action Titles** | The slide title is a complete sentence stating the insight, not a topic label. "Revenue grew 15% YoY driven by APAC expansion" not "Revenue Overview." |
| **Horizontal Flow** | A reader should be able to understand the full story by reading only the slide titles in sequence (the "title storyline" or "ghost deck"). |
| **Vertical Logic** | Within each slide, the title states the insight, and the body provides the evidence (charts, data, text) that proves it. |
| **MECE Structure** | Content is organized to be Mutually Exclusive and Collectively Exhaustive -- no gaps, no overlaps. |
| **White Space** | Generous use of white space prevents visual overload, especially on data-heavy slides. |
| **Consistency** | Font sizes, colors, chart styles, text placement, and logos remain uniform across every slide. |

#### Firm-Specific Tendencies

- **McKinsey**: Tends toward cleaner, more text-oriented slides. Heavy reliance on structured text, bullet points, and frameworks. Emphasizes the action title above all.
- **BCG**: Generally more graphic-intensive. More charts, diagrams, and visual frameworks. Some BCG decks are almost exclusively visual with minimal body text.
- **Bain**: Blends both approaches. Known for practical, results-oriented decks with clear recommendations and supporting data.

### The Slide Anatomy

Every consulting-quality slide has a consistent anatomy:

```
+------------------------------------------------------------------+
|  ACTION TITLE (complete sentence, 1-2 lines, the key insight)    |
+------------------------------------------------------------------+
|  SUBTITLE / HEADLINE (optional, 10 words max, adds context)     |
+------------------------------------------------------------------+
|                                                                  |
|                        SLIDE BODY                                |
|     (charts, tables, text, frameworks, diagrams)                 |
|     This area PROVES the action title                            |
|                                                                  |
|                                                                  |
+------------------------------------------------------------------+
|  SOURCE / FOOTNOTE LINE                                          |
+------------------------------------------------------------------+
```

**Key rules:**
- The action title is the most important element. It should be 5-15 words, a complete sentence, and state an insight (not a topic).
- The body exists solely to support and prove the action title.
- Sources and footnotes provide credibility and transparency.
- Page numbers and logos appear in consistent positions.

---

## 2. The Pyramid Principle & Slide Structure

### Origin and Overview

The Pyramid Principle was created by Barbara Minto, a former McKinsey consultant. It is the foundational communication framework used across all major consulting firms and increasingly adopted in corporate environments.

**Core idea:** Start with the answer. Then provide supporting arguments. Then provide evidence for each argument.

### The Pyramid Structure

```
                    +-----------------------+
                    |     MAIN POINT        |
                    |    (Answer First)     |
                    +----------+------------+
                               |
              +----------------+----------------+
              |                |                |
        +-----+-----+   +-----+-----+   +-----+-----+
        | Argument 1|   | Argument 2|   | Argument 3|
        +-----+-----+   +-----+-----+   +-----+-----+
              |                |                |
         +----+----+     +----+----+     +----+----+
         |    |    |     |    |    |     |    |    |
        D1   D2   D3   D4   D5   D6   D7   D8   D9
        (Data / Evidence / Facts)
```

### Application to Presentations

**At the deck level:**
- The executive summary slide presents the main conclusion/recommendation first.
- Subsequent sections provide the 3-5 supporting arguments.
- Within each section, individual slides provide data and evidence.

**At the slide level:**
- The action title = the top of the pyramid (the insight).
- Sub-headers or groupings = supporting arguments.
- Charts, data, text = the evidence base.

### The SCR Framework (Situation-Complication-Resolution)

Used for executive summaries and opening narratives:

| Element | Purpose | Example |
|---------|---------|---------|
| **Situation** | Establish the uncontroversial starting context | "Company X has been the market leader in widgets for 10 years." |
| **Complication** | Introduce the change, problem, or challenge | "New entrants from Asia have eroded market share by 15% in 18 months." |
| **Resolution** | State the recommendation or key finding | "A three-pronged strategy focused on innovation, pricing, and distribution can recover share within 2 years." |

### SCQA Variant (Situation-Complication-Question-Answer)

An extension that adds an explicit question before the answer:

| Element | Purpose |
|---------|---------|
| **Situation** | Context the audience agrees with |
| **Complication** | What changed or went wrong |
| **Question** | The question this raises in the audience's mind |
| **Answer** | Your recommendation / the main point |

### MECE Principle

All groupings within the pyramid must be:
- **Mutually Exclusive**: No overlap between categories.
- **Collectively Exhaustive**: All relevant points are covered.

This ensures logical rigor and prevents gaps in reasoning.

---

## 3. Layout Patterns That Work

### Hero Metric Slides (Big Number / KPI Dashboard)

**Purpose:** Highlight 1-6 key performance indicators with maximum visual impact.

**Layout pattern:**
```
+------------------------------------------------------------------+
|  Action Title: "Q3 revenue exceeded target by 12%"               |
+------------------------------------------------------------------+
|                                                                  |
|  +----------+  +----------+  +----------+  +----------+         |
|  |  $5.2M   |  |   +12%   |  |   847    |  |   94%    |         |
|  | Revenue  |  | vs Plan  |  | New Cust |  | Retention|         |
|  |  ^ 15%   |  |  (green) |  |  ^ 23%   |  |  ^ 2pp   |         |
|  +----------+  +----------+  +----------+  +----------+         |
|                                                                  |
+------------------------------------------------------------------+
```

**Best practices:**
- 4-6 KPIs per slide maximum.
- The most important metric gets the largest visual weight (top-left or center).
- Always include comparison context (vs. plan, vs. prior year, trend direction).
- Use color coding: green (on track), amber (at risk), red (off track).
- Ample whitespace between metric cards.

### Comparison Slides

**Purpose:** Evaluate options, compare scenarios, benchmark against competitors.

**Variants:**
1. **Side-by-side columns** (2-4 options with criteria rows)
2. **Matrix/quadrant** (2x2 framework, e.g., BCG matrix)
3. **Harvey balls or RAG status** (multi-criteria evaluation)
4. **Before/After** (two-panel showing transformation)

**Layout pattern (side-by-side):**
```
+------------------------------------------------------------------+
|  Action Title: "Option B delivers highest ROI with moderate risk" |
+------------------------------------------------------------------+
|  Criteria      | Option A   | Option B   | Option C              |
|  --------------+------------+------------+-------------           |
|  Cost          |  $2.5M     |  $1.8M     |  $3.2M               |
|  Timeline      |  12 months |  9 months  |  6 months            |
|  ROI           |  2.1x      |  3.4x      |  1.8x               |
|  Risk          |  Low       |  Medium    |  High                |
+------------------------------------------------------------------+
```

### Timeline / Roadmap Slides

**Purpose:** Show chronological progression of events, milestones, or project phases.

**Variants:**
1. **Linear horizontal timeline** (left-to-right progression)
2. **Swimlane timeline** (multiple parallel workstreams)
3. **Gantt-style** (bars showing duration and overlap)
4. **Milestone markers** (key dates with descriptions)

**Layout pattern (horizontal):**
```
+------------------------------------------------------------------+
|  Action Title: "Three-phase transformation over 18 months"       |
+------------------------------------------------------------------+
|                                                                  |
|  Phase 1          Phase 2          Phase 3                       |
|  Foundation       Scale            Optimize                      |
|  ============     ============     ============                  |
|  Q1-Q2 2026      Q3-Q4 2026      Q1-Q2 2027                    |
|                                                                  |
|  - Pilot launch   - National roll  - AI integration             |
|  - Team hiring    - Partner deals  - Cost optimize              |
|  - Tech platform  - Marketing push - International              |
+------------------------------------------------------------------+
```

### Process Flow Slides

**Purpose:** Illustrate step-by-step processes, decision trees, or workflows.

**Variants:**
1. **Linear process** (numbered steps with arrows)
2. **Circular/cyclical** (continuous improvement loops)
3. **Decision tree / flowchart** (branching logic)
4. **Funnel** (narrowing stages, e.g., sales funnel)
5. **Value chain** (Porter's value chain or similar)
6. **Chevron process** (horizontal arrows showing stages)

### Data-Heavy Slides

**Purpose:** Present complex data with analytical depth.

**Key chart families (the McKinsey standard):**

| Chart Family | Use Case |
|-------------|----------|
| **Bar/Column** | Comparing values across categories |
| **Line** | Showing trends over time |
| **Waterfall** | Showing how an initial value changes through contributions (the consulting signature chart) |
| **Mekko/Marimekko** | Market sizing with two dimensions (share + size) |
| **Scatter plot** | Showing correlation between two variables |
| **Pie/Donut** | Part-to-whole relationships (use sparingly, max 5-6 segments) |
| **Stacked bar** | Part-to-whole comparison across categories |
| **Area chart** | Cumulative trends over time |
| **Bubble chart** | Three-variable comparison (x, y, size) |

**Best practices for data slides:**
- Every chart must have a clear action title stating the insight.
- Label axes clearly. Include units.
- Use consistent color coding across slides.
- Highlight the data point that drives the insight (bold, color, callout).
- Include source attribution.
- Avoid 3D effects -- they distort data perception.
- Round numbers for readability (e.g., "$5.2M" not "$5,237,841").
- Use annotations / callout boxes to draw attention to the key data point.

### Two-Column Content Slides

**Purpose:** Present related but distinct content side by side.

**Common uses:**
- Key findings + implications
- Current state + future state
- Problem + solution
- Internal view + external view
- Text on one side + visual on the other

### Grid-Based Multi-Element Slides

**Purpose:** Show multiple related items in a structured grid.

**Common configurations:**
- 2x2 grid (four quadrants, e.g., SWOT analysis)
- 3-column grid (three options or pillars)
- 2x3 grid (six related items, e.g., team members, capabilities)
- Icon + text rows (feature lists, benefits)

---

## 4. Color Theory for Presentations

### The 60-30-10 Rule

Borrowed from interior design, this rule creates visual harmony:

| Proportion | Role | Example |
|-----------|------|---------|
| **60%** | Dominant color (backgrounds, large areas) | White or light gray |
| **30%** | Secondary color (headers, shapes, frames) | Brand primary (e.g., dark blue) |
| **10%** | Accent color (highlights, CTAs, key data) | Brand accent (e.g., teal, orange) |

### Color Harmony Models

| Model | Description | Best For |
|-------|-------------|----------|
| **Monochromatic** | Single hue with varying lightness/saturation | Clean, professional, brand-focused |
| **Analogous** | Adjacent colors on the wheel | Harmonious, blended feel |
| **Complementary** | Opposite colors on the wheel | High contrast, emphasis |
| **Triadic** | Three equally spaced colors | Balanced, dynamic, vibrant |
| **Split-complementary** | One color + two adjacent to its complement | Contrast with less tension |

### Contrast & Accessibility

**WCAG Compliance for Presentations:**
- **Body text**: Minimum 4.5:1 contrast ratio against background.
- **Large text / titles**: Minimum 3:1 contrast ratio.
- **Never rely on color alone** to convey meaning (add icons, patterns, labels).
- Test for color blindness: avoid red/green as the only differentiator. Use red/blue or add patterns/shapes.

**Practical contrast guidelines:**
- Dark text on light backgrounds (primary approach for consulting decks).
- Light text on dark backgrounds (for dramatic/hero slides only).
- Avoid low-contrast combinations: light gray on white, yellow on white, light blue on white.

### Brand Harmony

- Define a presentation color palette derived from (but not limited to) brand guidelines.
- Typically: 1 primary color, 1-2 secondary colors, 1-2 accent colors, plus a neutral palette (grays, whites).
- Apply the palette consistently via a master theme -- never use arbitrary colors.
- Charts should use the brand palette, with a defined sequence for multi-series data.

### Color Psychology in Business Presentations

| Color | Association | Use In Presentations |
|-------|------------|---------------------|
| **Dark Blue / Navy** | Trust, authority, stability | Primary for consulting, finance, corporate |
| **Teal / Dark Cyan** | Innovation, clarity, modernity | Tech companies, innovation topics |
| **Forest Green** | Growth, sustainability, health | ESG topics, growth stories, healthcare |
| **Red / Dark Red** | Urgency, importance, alerting | Warnings, negative metrics, critical items |
| **Orange / Amber** | Energy, caution, warmth | Cautionary items, mid-status indicators |
| **Gold** | Premium, achievement, excellence | Awards, premium positioning, financial success |
| **Dark Gray / Charcoal** | Sophistication, neutrality | Background alternative to white, body text |
| **White** | Clarity, openness, space | Primary background for most consulting decks |

### Recommended Consulting Color Palettes

**Corporate Conservative (McKinsey-style):**
- Primary: Dark navy (#002B5C)
- Secondary: Medium blue (#0066B2)
- Accent: Teal or gold (#00838F or #C8A951)
- Neutrals: White (#FFFFFF), light gray (#F5F5F5), dark gray (#333333)

**Modern Professional (BCG-style):**
- Primary: Deep green (#00543C)
- Secondary: Light green (#76B82A)
- Accent: Orange or yellow (#E87722 or #FFD100)
- Neutrals: White, warm gray (#E8E0D5)

**Bold Strategic (Bain-style):**
- Primary: Red (#CC0000)
- Secondary: Dark gray (#2D2D2D)
- Accent: White highlights on dark backgrounds
- Neutrals: White, light gray (#F0F0F0)

**Tech / Modern:**
- Primary: Deep indigo (#1A1A2E)
- Secondary: Electric blue (#0F3460)
- Accent: Cyan (#16C79A) or coral (#E94560)
- Neutrals: White, slate gray (#94A3B8)

### Chart Color Sequences

For multi-series charts, define a consistent color sequence:
1. Primary brand color (most important series)
2. Secondary brand color
3. Accent color
4. Muted variant of primary
5. Muted variant of secondary
6. Gray (least important series)

Always use the same sequence throughout the entire deck.

---

## 5. Typography Best Practices

### Font Sizing Hierarchy

| Element | Size Range | Weight | Purpose |
|---------|-----------|--------|---------|
| **Slide title (action title)** | 28-36pt | Bold | The key insight statement |
| **Section header** | 36-44pt | Bold | Section divider slides |
| **Subtitle** | 20-24pt | Regular or Light | Supporting context under title |
| **Body text** | 18-24pt | Regular | Main content, bullet points |
| **Chart labels** | 14-18pt | Regular | Axis labels, data labels |
| **Footnotes/Source** | 10-12pt | Light or Regular | Citations, caveats |
| **Page number** | 8-10pt | Light | Navigation reference |
| **Hero metrics (big numbers)** | 48-72pt | Bold or Black | KPI dashboard hero values |

**Critical rule:** No text should be smaller than 14pt if it needs to be read in a presentation setting. For printed/emailed decks, 10pt minimum for footnotes only.

### Font Pairing

**The golden rule:** Use a maximum of 2-3 typefaces per presentation.

**Recommended pairings:**

| Heading Font | Body Font | Style | Notes |
|-------------|-----------|-------|-------|
| **Helvetica Neue** (Bold) | **Helvetica Neue** (Regular/Light) | Classic consulting | The gold standard |
| **Arial** (Bold) | **Arial** (Regular) | Universal safe | Available on every system |
| **Calibri** (Bold) | **Calibri** (Regular) | Modern Microsoft | Default since Office 2007 |
| **Montserrat** (Bold) | **Open Sans** (Regular) | Modern, clean | Free (Google Fonts) |
| **Playfair Display** (Bold) | **Source Sans Pro** (Regular) | Elegant + readable | Free (Google Fonts) |
| **Roboto** (Bold) | **Roboto** (Regular/Light) | Google ecosystem | Versatile weight range |
| **Inter** (Bold) | **Inter** (Regular) | Modern UI-native | Excellent screen readability |
| **DM Sans** (Bold) | **DM Sans** (Regular) | Contemporary | Clean geometric sans |

**Pairing principles:**
- Pair a **sans-serif heading** with a **sans-serif body** for corporate/consulting (most common).
- Pair a **serif heading** with a **sans-serif body** for a more editorial/premium feel.
- Never pair two decorative or display fonts.
- Use weight variation within a single font family as the simplest approach.
- Ensure the heading font has a distinctly different visual weight from the body font.

### Readability Guidelines

- **Line spacing:** 1.2x to 1.5x the font size for body text.
- **Line length:** 50-75 characters per line maximum (prevents eye strain).
- **Alignment:** Left-aligned text is easiest to read. Avoid justified text in slides. Center-align only for titles and short text blocks.
- **Case:** Use sentence case for titles ("Revenue grew in Q3") not ALL CAPS. Reserve all-caps for very short labels only (e.g., "Q3 2026").
- **Bullet points:** Maximum 5-7 bullets per slide. Each bullet should be 1-2 lines. Use sub-bullets sparingly (1 level max).
- **Paragraph text:** Avoid paragraphs on slides. If unavoidable, keep to 3-4 lines maximum.
- **Number formatting:** Use tabular (monospaced) figures for tables and data. Use proportional figures for body text.

### Font Embedding and Compatibility

- Stick to system fonts (Arial, Calibri, Times New Roman) for maximum cross-platform compatibility.
- If using custom fonts, embed them in the PPTX file.
- Always test on the target display system before presenting.
- Google Fonts (Roboto, Open Sans, Montserrat, Lato, Inter) are free and widely available.
- For programmatic generation: use fonts available on the rendering system, or bundle font files with the application.

---

## 6. Common PowerPoint Component Patterns

### What Consultants Use Daily

#### 1. Title / Cover Slide
- Company/project name, presentation title, date, presenter name(s).
- Often includes a subtle background image or brand graphic.
- Minimal text -- maximum impact.
- Variants: photo background with overlay, solid color with logo, gradient background.

#### 2. Agenda Slide
- Numbered list of 4-7 topics with optional time allocations.
- Often uses a "tracker" pattern where the current section is highlighted.
- May include page references for each section.
- Revisited as a "section divider" with the current topic highlighted.
- Variants: vertical list, horizontal tabs, visual icons per section.

#### 3. Executive Summary Slide
- Follows SCR (Situation-Complication-Resolution) structure.
- Typically 3-5 key bullets with supporting sub-points.
- Often includes a "key recommendations" box or sidebar.
- Should stand alone -- a reader seeing only this slide should understand the full story.
- This is the most important slide in any consulting deck.

#### 4. Section Divider Slides
- Full-bleed background (brand color or image).
- Section number and title, large and centered.
- Optional subtitle or brief description.
- Creates visual "breathing room" between content sections.
- May include a mini-agenda showing progress through the deck.

#### 5. Content / Body Slides
- One insight per slide with supporting evidence.
- Variants: text-only, chart + text, multi-chart, framework diagram.
- Always led by an action title.
- The workhorse of any presentation.

#### 6. Framework / Matrix Slides
- 2x2 matrices (BCG matrix, Eisenhower matrix, risk/impact).
- SWOT analysis grids.
- Porter's Five Forces diagrams.
- Value chain visualizations.
- Any structured analytical framework.
- Typically use color-coded quadrants or segments.

#### 7. Waterfall / Bridge Charts
- The "signature consulting chart."
- Shows how a starting value reaches an ending value through positive and negative contributions.
- Used for: revenue bridges, EBITDA walks, cost breakdowns, variance analysis.
- Positive contributions in one color (e.g., green or blue), negatives in another (e.g., red).

#### 8. Key Takeaways / Summary Slides
- 3-5 numbered key findings or recommendations.
- Each with a bold statement and 1-2 lines of supporting context.
- Often uses a visual device (numbered circles, icons, checkmarks).
- Placed at the end of each section and/or at the end of the deck.

#### 9. Next Steps / Action Items Slide
- Table format: Action, Owner, Timeline, Status.
- Or numbered list with clear assignments and deadlines.
- Closes the "so what" loop.
- Must be specific and actionable, not vague.

#### 10. Appendix Slides
- Supporting detail that would break the main narrative flow.
- Detailed data tables, methodology descriptions, additional charts.
- Numbered "A1, A2, A3..." for easy reference from main slides.
- Same design template but clearly marked as appendix.

#### 11. Source / Methodology Slide
- Data sources, assumptions, and analytical approach.
- Provides credibility and enables audit trail.
- Critical for data-driven presentations.

#### 12. Thank You / Contact Slide
- Presenter contact information.
- Key team members and roles.
- Relevant links or QR codes.
- Professional closing that invites follow-up.

---

## 7. Animation & Transition Best Practices

### What Helps

| Technique | When to Use | Effect |
|-----------|-------------|--------|
| **Fade** | Between any slides | Smooth, professional, unobtrusive |
| **Appear** (on click) | Sequential reveals of bullet points or chart elements | Guides audience attention through a narrative |
| **Morph** (PowerPoint) | Between slides with shared elements | Creates fluid, cinematic transitions |
| **Wipe** (subtle) | Between major sections | Signals a topic change |
| **Grow/Shrink** | Drawing attention to a specific element | Emphasizes without distraction |

### What Distracts

| Technique | Why It Hurts |
|-----------|-------------|
| **Spin, Bounce, Fly-In** | Feels amateurish, distracts from content |
| **Curtains, Ferris Wheel, Vortex** | Novelty effects with no professional use case |
| **Sound effects** | Almost never appropriate in business settings |
| **Multiple animations per slide** | Overwhelms the audience |
| **Inconsistent transitions** | Different transitions on different slides creates chaos |

### The Golden Rules

1. **Limit to 1-2 animation/transition styles** per entire presentation.
2. **Use the same transition throughout** (Fade is the safest universal choice).
3. **Animations should reveal, not decorate.** Use Appear to build a story, not to entertain.
4. **Match speed to context.** Faster for internal reviews, slower for keynotes.
5. **Preview in presentation mode** before delivering. Edit-mode timing is misleading.
6. **For consulting decks:** Minimal or zero animations is the norm. The content and structure do the work.
7. **If in doubt, leave it out.** No animation is always better than bad animation.

### Build Animations (Strategic Use)

The one animation technique consultants do use regularly is the "build" -- revealing content sequentially:

- Show a framework diagram, then populate it step by step.
- Show a chart, then add annotations or callouts on click.
- Show bullet points one at a time to control the narrative.
- Show a "before" state, then transition to the "after" state.

This is powerful when presenting live, but the deck should also work as a standalone document (with all content visible) for email distribution.

### Implications for Programmatic Generation

For a presentation builder framework:
- Default to no animations (static slides that work as standalone documents).
- Offer an optional "presentation mode" that adds tasteful Fade transitions and sequential Appear animations.
- Never auto-generate novelty animations.
- If Morph transitions are supported by the output format, offer them as a premium option for adjacent slides with shared elements.

---

## 8. Image & Icon Libraries

### Icon Libraries

| Library | Size | License | Best For | API Available |
|---------|------|---------|----------|---------------|
| **The Noun Project** | ~10M icons | Free with attribution, Pro $40/yr | Consulting decks, consistent style sets | Yes |
| **Flaticon** | 16M+ icons | Free with attribution, Premium subscription | Wide variety, multiple formats | Yes (Premium) |
| **Iconify** | 150K+ icons from 100+ sets | Open source | Developer-friendly, unified API | Yes (free, no auth) |
| **Font Awesome** | 26K+ icons | Free tier + Pro $99/yr | Web presentations, font-based | Yes |
| **Material Icons** | 2,500+ icons | Apache 2.0 (free) | Modern, clean, Google ecosystem | Via CDN |
| **Lucide** | 1,500+ icons | MIT (free) | Minimal, modern line icons | Via npm/CDN |
| **Heroicons** | 300+ icons | MIT (free) | Developer-focused, Tailwind ecosystem | Via npm/CDN |
| **Phosphor Icons** | 7,000+ icons | MIT (free) | Flexible weight system, 6 weights per icon | Via npm/CDN |
| **Tabler Icons** | 4,000+ icons | MIT (free) | Consistent line style, highly readable | Via npm/CDN |

### Stock Photo Libraries

| Library | Size | License | Best For | API Available |
|---------|------|---------|----------|---------------|
| **Unsplash** | 3M+ photos | Free for commercial use | Hero images, backgrounds | Yes (free, 50-5000 req/hr) |
| **Pexels** | 3M+ photos + videos | Free for commercial use | General purpose, diverse | Yes (free, 200 req/hr) |
| **Adobe Stock** | 300M+ assets | Paid subscription | Enterprise, premium quality | Yes (paid) |
| **Shutterstock** | 400M+ assets | Paid subscription | Corporate, specific searches | Yes (paid) |
| **Getty Images** | 477M+ assets | Paid per-image or subscription | High-profile, editorial | Yes (paid) |
| **Pixabay** | 2.6M+ assets | Free (Pixabay license) | Illustrations + photos | Yes (free) |

### Best Practices for Image Use in Presentations

1. **Use high-resolution images** (minimum 1920x1080 for full-bleed backgrounds).
2. **Apply overlays** (semi-transparent color overlay at 40-60% opacity) to maintain text readability over images.
3. **Maintain consistent image style** -- do not mix illustration styles, photo filters, or icon sets within a deck.
4. **Use images purposefully** -- every image should reinforce the slide's message, not just decorate.
5. **Respect aspect ratios** -- never stretch or distort images.
6. **Use icons consistently** -- pick one icon set/style and use it throughout the deck. Line icons or solid icons, not both mixed.
7. **Consider cultural sensitivity** -- diverse representation in people photos, avoid culturally specific gestures.
8. **SVG format preferred for icons** -- scales perfectly at any size without quality loss.
9. **Compress images** before embedding -- large images bloat file sizes. Target 150-300 DPI for print, 96 DPI for screen-only.
10. **Credit sources** when required by license.

### Integration Patterns for Programmatic Use

For a presentation builder framework, these libraries offer APIs:

- **Unsplash API**: Free, 50 requests/hour (demo), 5000/hour (production). Returns image URLs by keyword search. Best for automatic background image selection.
- **Pexels API**: Free, 200 requests/hour. Returns photos and videos by keyword. Good alternative/supplement to Unsplash.
- **The Noun Project API**: Returns SVG icons by keyword. Requires attribution on free tier. Best for semantic icon matching.
- **Iconify API**: Open, no auth required. Returns SVG data for 150K+ icons across 100+ icon sets. Most developer-friendly option.
- **Flaticon API**: Available for premium users. Returns icons in multiple formats.
- **Pixabay API**: Free, returns photos, illustrations, and vectors. Good for diverse asset types.

**Recommended approach for the framework:**
1. Use Iconify as the primary icon source (free, no auth, huge library, consistent API).
2. Use Unsplash as the primary photo source (free, high quality, good search).
3. Fall back to Pexels if Unsplash does not return good results.
4. Allow users to provide their own assets (logo, custom icons, brand photos) as overrides.

---

## Summary: Design Principles Checklist

For any presentation built by the framework, validate against:

- [ ] Every slide has an action title that states an insight (not a topic label)
- [ ] The title storyline (reading just titles) tells a coherent story
- [ ] Content follows the Pyramid Principle (answer first, then evidence)
- [ ] MECE structure throughout (no gaps, no overlaps)
- [ ] Maximum 2-3 fonts, consistent sizing hierarchy
- [ ] Color palette follows 60-30-10 rule
- [ ] Contrast ratios meet accessibility standards (4.5:1 body, 3:1 titles)
- [ ] Charts are labeled clearly with source attribution
- [ ] White space is generous -- slides are not overcrowded
- [ ] One key message per slide
- [ ] Consistent visual language (same icon set, chart style, layout grid)
- [ ] Animations are minimal and purposeful (or absent)
- [ ] Images are high-quality, relevant, and consistently styled
- [ ] The deck works as a standalone document (readable without a presenter)

---

## Sources

- [100+ Real McKinsey Presentations (Slideworks)](https://slideworks.io/resources/47-real-mckinsey-presentations)
- [3 Great Examples of Slide Structure from McKinsey, Bain, and BCG (Analyst Academy)](https://www.theanalystacademy.com/consulting-slide-structure/)
- [How McKinsey Consultants Make Presentations (Slideworks)](https://slideworks.io/resources/how-mckinsey-consultants-make-presentations)
- [How to Create McKinsey-Style Presentations 2026 Guide (SlideUpLift)](https://slideuplift.com/blog/mckinsey-style-presentation/)
- [How to Make Consulting Slides: The Complete MBB Guide (Deckary)](https://deckary.com/blog/consulting-quality-slides)
- [The Pyramid Principle - Consulting Toolbox (Slideworks)](https://slideworks.io/resources/the-pyramid-principle-mckinsey-toolbox-with-examples)
- [Using the Pyramid Principle for PowerPoint (think-cell)](https://www.think-cell.com/en/resources/content-hub/using-the-pyramid-principle-to-build-better-powerpoint-presentations)
- [How to Create Effective Consulting Slides Using Minto Principles (PPT Productivity)](https://pptproductivity.com/blog/how-to-create-effective-consulting-slides-using-minto-principles)
- [Minto Pyramid & SCQA (ModelThinkers)](https://modelthinkers.com/mental-model/minto-pyramid-scqa)
- [Color Theory for Presentations (SlideModel)](https://slidemodel.com/color-theory-for-presentations/)
- [Building a Powerful Color Palette (SlideRabbit)](https://sliderabbit.com/blog/slide-design-how-to-build-a-powerful-color-palette/)
- [Ultimate Guide to Accessible Presentation Design (Stinson Design)](https://www.stinsondesign.com/blog/ultimate-guide-accessible-presentation-design)
- [Best Fonts for PowerPoint Presentations (Slidor)](https://www.slidor.agency/blog/best-fonts-powerpoint-presentations-designers-guide)
- [Best Font for Presentation: Complete Guide (Whitepage Studio)](https://www.whitepage.studio/blog/the-ultimate-guide-for-using-fonts-in-decks-presentations)
- [Presentation Font Size: Dos and Don'ts (BrightCarbon)](https://www.brightcarbon.com/blog/presentation-font-size/)
- [Slides Every Consultant Needs (PowerTools)](https://pptpowertools.com/slides-every-consultant-needs-in-their-template-deck/)
- [Charts Done the McKinsey Way (Stratechi)](https://www.stratechi.com/business-charts/)
- [How to Craft Slides Like MBB Consultants (MConsultingPrep)](https://mconsultingprep.com/how-consultants-make-mbb-slides)
- [PowerPoint Animation Best Practices (Rekarda)](https://www.rekarda.com/blog/mastering-powerpoint-animation-best-practices-tips-and-common-pitfalls)
- [The Do's and Don'ts of PowerPoint Animation (Verdanabold)](https://www.verdanabold.com/post/the-do-s-and-dont-s-of-powerpoint-animation)
- [Timeline Slides with McKinsey, BCG and Bain Examples (Slideworks)](https://slideworks.io/resources/timeline-slides-mckinsey-bcg-bain-examples)
- [Consulting Presentation Structure (Master RV Designers)](https://www.masterrvdesigners.com/blog/consulting-presentation-structure-powerpoint/)
- [KPI Presentation Examples (ClearPoint Strategy)](https://www.clearpointstrategy.com/blog/kpi-presentation-examples)
