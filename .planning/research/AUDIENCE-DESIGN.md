# Designing for the Right Audience

> Research document for the Presentation Builder framework.
> Every design decision -- layout density, font size, visual weight, tone -- must be driven by who is in the room and what they need to walk away with.

---

## Table of Contents

1. [The "So What" Principle](#1-the-so-what-principle)
2. [Audience Types and Design Rules](#2-audience-types-and-design-rules)
3. [Audience-Specific Design Parameters](#3-audience-specific-design-parameters)
4. [Tone and Visual Language Shifts](#4-tone-and-visual-language-shifts)
5. [Consulting Frameworks for Audience Analysis](#5-consulting-frameworks-for-audience-analysis)
6. [Practical Implementation for the Framework](#6-practical-implementation-for-the-framework)

---

## 1. The "So What" Principle

The single most important rule across every audience type: **every slide must answer "Why should the audience care?"**

### How It Works

After stating each point in a presentation, ask: "So what?" If you do not have a compelling answer, the point should be removed. This is complemented by the **WIIFM test** ("What's In It For Me?") -- your job as a presenter is helping listeners continuously connect what you say to what it means for them.

### Application Process

1. Review each point/slide in the presentation
2. Ask "So what?" after stating the key message
3. Determine why the audience should care about this specific point
4. Either expand with an explanation that connects to audience goals, or remove the point entirely
5. Shorter, sharper presentations consistently outperform longer ones

### Framework Implication

The presentation builder should encourage (or enforce) an **action title** on every slide -- a complete sentence that states the takeaway, not a label. For example:

- Bad: "Q3 Revenue"
- Good: "Q3 revenue exceeded target by 12%, driven by APAC expansion"

This follows the McKinsey action title principle: slide headers are statements, not labels. They introduce the audience to the slide's message in a dynamic way.

---

## 2. Audience Types and Design Rules

### 2.1 C-Suite / Board Presentations

**Core principle:** Lead with decisions, not data. Executives make 35+ decisions daily. They want conclusions, not lengthy analysis.

**Design characteristics:**
- Minimal text -- large numbers, single key messages per slide
- Strategic narrative: connect everything to business outcomes (revenue, efficiency, market position)
- Executive summary slide up front with the recommendation
- Top-down structure: answer first, evidence second
- High-quality, polished visual design signals credibility
- Use executive dashboards and summary visuals for complex data

**Content rules:**
- Maximum 1 key message per slide
- No jargon or technical detail unless specifically requested
- Every metric must be translated to business impact
- Include clear "decision needed" or "action required" callouts
- Time budget: keep to 10-15 minutes max; they will interrupt with questions

**Slide structure:**
```
[Action Title: Full sentence stating the takeaway]
[Single large visual or key metric]
[2-3 bullet supporting points maximum]
[Source/footnote if needed]
```

### 2.2 Stakeholder Updates

**Core principle:** Progress, problems, and decisions needed. Stakeholders want to know: Are we on track? What changed? What do you need from me?

**Design characteristics:**
- Status-oriented: traffic lights (red/amber/green), progress bars, milestone trackers
- Metrics-driven but not overwhelming
- Clear distinction between "FYI" and "action needed" content
- Consistent format across updates (so stakeholders can quickly scan for changes)

**Content rules:**
- Open with an executive summary of status and key decisions
- Use a consistent template/structure that repeats across updates
- Highlight deviations from plan, not just raw data
- Budget vs. actual comparisons, timeline tracking
- End with clear next steps and owners

**Slide structure:**
```
[Status indicator: On Track / At Risk / Off Track]
[Action Title: What changed and why it matters]
[Progress metrics + visual]
[Decisions or approvals needed -- explicit and specific]
```

### 2.3 Technical Deep-Dives

**Core principle:** Depth and precision. Technical audiences want to evaluate methodology, understand architecture, and assess feasibility.

**Design characteristics:**
- Higher content density is acceptable (and expected)
- Architecture diagrams, system flows, code snippets
- Detailed data tables, not just charts
- Terminology appropriate to the audience's expertise level
- Appendix slides for supporting detail

**Content rules:**
- Include relevant technical terminology
- Show methodology and evidence, not just conclusions
- Data should be granular -- technical audiences will question aggregated numbers
- Include edge cases, limitations, and trade-offs
- Allow more time per slide (2-4 minutes vs. 1-2 for executives)

**Slide structure:**
```
[Descriptive title with technical precision]
[Diagram or detailed visual]
[Supporting data/evidence]
[Technical notes, assumptions, or caveats]
```

### 2.4 Sales / Pitch Decks

**Core principle:** Emotional connection through story. Messages delivered as stories are up to 22x more memorable than facts alone.

**Design characteristics:**
- Visually rich -- high-quality images, visual metaphors, brand colors
- Minimal text on slides (the presenter IS the content)
- Strong narrative arc: problem -> solution -> benefit
- Social proof: testimonials, logos, case studies
- Bold typography, dramatic contrast
- 10-20 slides maximum (the 10/20/30 rule: 10 slides, 20 minutes, 30pt font minimum)

**Content rules:**
- Position the audience as the hero, not yourself
- Use tension and conflict to build narrative momentum
- Balance emotional storytelling with credible data
- Replace text-heavy slides with visual metaphors (e.g., a seed becoming a tree instead of "We help businesses grow")
- Always end with a clear, specific, emotionally compelling call to action

**Slide structure:**
```
[Emotional/provocative title]
[Full-bleed image or powerful visual]
[Minimal supporting text -- 1 line max]
[Presenter carries the content verbally]
```

### 2.5 Workshop / Training Slides

**Core principle:** Interactive, reference-oriented, and structured for learning. Slides serve as workbook pages, not presentation aids.

**Design characteristics:**
- Higher content density is acceptable because slides double as reference material
- Exercise instructions, templates, and frameworks on slides
- Clear section breaks and progress indicators
- Consistent visual system for different content types (instruction, exercise, reference, discussion)
- Handout-friendly: slides should be legible when printed

**Content rules:**
- Include exercise instructions directly on slides
- Use numbered steps for activities
- Provide space/prompts for audience interaction
- Build in recap slides at section transitions
- Include "cheat sheet" or reference slides that participants keep
- Timing cues in speaker notes for facilitators

**Slide structure:**
```
[Section marker: "Exercise 3 of 7"]
[Clear title: What participants will do]
[Step-by-step instructions or framework]
[Timer indication or group size note]
```

### 2.6 Internal Team Updates

**Core principle:** Casual, efficient, action-oriented. The team already has context; do not re-establish it.

**Design characteristics:**
- Informal tone -- can use humor, shorthand, internal references
- Dense but scannable: bullet points, tables, checklists
- Minimal design polish needed (substance over style)
- Action items and owners prominently displayed
- Quick -- 5-10 minutes, possibly asynchronous (read-ahead)

**Content rules:**
- Skip the setup; jump straight to what matters
- Use team-specific terminology and abbreviations freely
- Focus on blockers, decisions, and next actions
- Include names and deadlines
- Can be more raw/draft-quality than external-facing decks

**Slide structure:**
```
[Direct title: What happened / What's next]
[Bullets or table with updates]
[Action items with owners and dates]
[Optional: link to detailed doc/ticket]
```

---

## 3. Audience-Specific Design Parameters

### Font Size Guidelines

| Context | Title | Body | Minimum | Notes |
|---------|-------|------|---------|-------|
| C-Suite / Board | 40-48pt | 24-30pt | 24pt | Large room, big screen, scannable |
| Stakeholder update | 36-44pt | 20-24pt | 20pt | Standard meeting room |
| Technical deep-dive | 32-40pt | 16-20pt | 14pt | Higher density acceptable |
| Sales / Pitch | 44-60pt | 24-36pt | 24pt | Dramatic, minimal text |
| Workshop / Training | 32-40pt | 18-22pt | 16pt | Needs to work as handout |
| Internal team | 32-36pt | 16-20pt | 14pt | Informal, dense is fine |

### Content Density

| Audience | Words per slide | Bullets max | Visual weight |
|----------|----------------|-------------|---------------|
| C-Suite | 15-30 | 3 | 70% visual, 30% text |
| Stakeholder | 30-50 | 5 | 50% visual, 50% text |
| Technical | 50-100 | 7+ | 40% visual, 60% text |
| Sales/Pitch | 10-20 | 2 | 80% visual, 20% text |
| Workshop | 40-80 | 6 | 50% visual, 50% text |
| Internal | 30-60 | 5-7 | 30% visual, 70% text |

### The Billboard Test

A slide should pass the **billboard test**: if someone glanced at it for 3 seconds at highway speed, could they grasp the main idea? This test applies most strictly to C-Suite and Sales presentations, and less strictly to Technical and Workshop slides.

Related rules of thumb:
- **7x7 rule**: Maximum 7 lines, maximum 7 words per line
- **5x5 rule**: Maximum 5 lines, maximum 5 words per line (stricter variant)
- **10/20/30 rule** (Guy Kawasaki): 10 slides, 20 minutes, 30pt minimum font

---

## 4. Tone and Visual Language Shifts

### Visual Language by Audience

| Audience | Color palette | Imagery | Charts | Animation |
|----------|--------------|---------|--------|-----------|
| C-Suite | Conservative, brand-aligned | Abstract, aspirational | Simple bar/pie, KPI cards | Minimal, purposeful |
| Stakeholder | Brand colors + status colors (RAG) | Process diagrams, timelines | Progress charts, comparisons | None or subtle |
| Technical | Neutral, high-contrast for readability | Architecture diagrams, screenshots | Detailed charts, tables | None |
| Sales/Pitch | Bold, emotional, brand-forward | Photography, lifestyle, metaphors | Simple, impactful numbers | Cinematic, narrative |
| Workshop | Structured, color-coded by activity type | Icons, frameworks, templates | Instructional diagrams | Step-by-step reveals |
| Internal | Minimal branding, practical | Screenshots, quick mockups | Whatever communicates fastest | None |

### Tone Spectrum

```
Formal <<<-------------------------------------------->>> Informal

C-Suite    Stakeholder    Sales    Technical    Workshop    Internal
  |            |           |          |            |           |
  Authoritative  Professional  Persuasive  Precise   Encouraging  Casual
  Concise       Structured    Emotional   Detailed   Interactive  Direct
  Strategic     Metric-driven Story-driven Evidence   Supportive   Shorthand
```

---

## 5. Consulting Frameworks for Audience Analysis

### 5.1 SCR -- Situation / Complication / Resolution

McKinsey's primary narrative framework for structuring presentation storylines. Unlike the Pyramid Principle (which structures arguments), SCR structures the overall narrative to create engagement and urgency.

- **Situation**: Establish the current state and why it matters. Create context and alignment with the audience.
- **Complication**: Introduce the problem, challenge, or opportunity that disrupts the situation. Create tension and urgency.
- **Resolution**: Present the recommended solution and how it addresses the complication. Provide relief and a path forward.

**When to use:** C-Suite presentations, board updates, strategy recommendations, any scenario requiring a decision.

**Example:**
- S: "Our DACH market share has been stable at 23% for 3 years."
- C: "Two new competitors entered in Q2, and our renewal rate dropped 8 points."
- R: "We recommend accelerating the product localization roadmap and investing EUR 2M in regional partnerships."

### 5.2 MECE -- Mutually Exclusive, Collectively Exhaustive

Developed by Barbara Minto at McKinsey in the 1960s. Ensures arguments are organized without overlaps (mutually exclusive) and without gaps (collectively exhaustive).

**Application to presentations:**
- Structure slide sections so each covers a distinct topic with no redundancy
- Ensure all sections together cover the full scope of the argument
- Use as a checklist: "Is every relevant point covered? Do any points overlap?"

**When to use:** Any structured argument, especially technical and stakeholder presentations where completeness matters.

### 5.3 The Pyramid Principle

Also from Barbara Minto. Top-down communication: state the conclusion first, then support it with grouped, logically ordered arguments.

**Hierarchy:**
1. Main conclusion/recommendation (the answer)
2. 3-5 key supporting arguments
3. Detailed evidence under each argument

**Application to slides:**
- The deck title or first slide states the overall conclusion
- Each section header states a supporting argument
- Individual slides provide the evidence
- A reader should be able to read ONLY the slide titles (action titles) and understand the full argument

**The "titles-only" test:** If you extract just the title from every slide and read them in sequence, they should form a coherent, persuasive narrative. McKinsey managing partners routinely flip through 80-page decks reading only the titles.

### 5.4 Audience Analysis Matrix

Before designing any presentation, map the audience:

| Dimension | Questions to Ask |
|-----------|-----------------|
| **Role** | What is their job? What decisions do they make? |
| **Knowledge** | How much do they already know about this topic? |
| **Attitude** | Are they supportive, neutral, or skeptical? |
| **Needs** | What do they need from this presentation? (Decision? Information? Motivation?) |
| **Constraints** | How much time do they have? What format do they prefer? |
| **Stakes** | What's at risk for them personally? |

### 5.5 The RACI of Presentation Audiences

Map your audience members to RACI roles to calibrate content:

- **Responsible**: Doing the work -- wants detail, specifics, how-to
- **Accountable**: Owns the outcome -- wants confidence, risk assessment, recommendation
- **Consulted**: Has expertise to contribute -- wants to validate, challenge, refine
- **Informed**: Needs to know -- wants summary, context, implications

---

## 6. Practical Implementation for the Framework

### Audience Presets

The presentation builder should offer audience presets that automatically configure design parameters:

```yaml
audience_preset:
  name: "c-suite"
  font_size_title: 44
  font_size_body: 28
  max_bullets: 3
  max_words_per_slide: 25
  visual_weight: 0.7       # 70% visual
  tone: "strategic"
  action_titles: required
  billboard_test: strict
  default_template: "executive-summary"
```

```yaml
audience_preset:
  name: "technical"
  font_size_title: 36
  font_size_body: 18
  max_bullets: 8
  max_words_per_slide: 80
  visual_weight: 0.4       # 40% visual
  tone: "precise"
  action_titles: recommended
  billboard_test: relaxed
  default_template: "technical-deep-dive"
```

```yaml
audience_preset:
  name: "sales-pitch"
  font_size_title: 48
  font_size_body: 28
  max_bullets: 2
  max_words_per_slide: 20
  visual_weight: 0.8       # 80% visual
  tone: "persuasive"
  action_titles: emotional
  billboard_test: strict
  default_template: "pitch-deck"
```

### Required Metadata per Slide

Every slide should carry:
- `audience_type`: Who is this for?
- `action_title`: What is the takeaway? (full sentence)
- `so_what`: Why should the audience care? (internal validation field)
- `decision_needed`: boolean -- does this slide require a decision?

### Validation Rules

The framework should validate:
1. Word count per slide does not exceed audience threshold
2. Font sizes meet audience minimums
3. Action titles are complete sentences (not labels)
4. Every slide has a "so what" that connects to audience goals
5. Billboard test passes for executive/sales audiences
6. Content density stays within audience-appropriate bounds

---

## Sources

- [Bridge Between: Tips for Effective Presentations to C-Suite](https://bridgebetween.com/tips-effective-presentations-stakeholders-c-suite-executives/)
- [INK PPT: Designing for C-Suite](https://www.inkppt.com/post/designing-for-c-suite-winning-brands-executive-presentations)
- [SlideModel: McKinsey Presentation Structure](https://slidemodel.com/mckinsey-presentation-structure/)
- [SlideUplift: McKinsey-Style Presentations Guide](https://slideuplift.com/blog/mckinsey-style-presentation/)
- [Management Consulted: McKinsey SCR Framework](https://managementconsulted.com/mckinsey-scr-framework/)
- [Case Interview: MECE Framework](https://caseinterview.com/mece)
- [Deckary: MBB Guide to Consulting Presentations](https://deckary.com/blog/pillar-consulting-presentations-guide)
- [think-cell: Pyramid Principle for PowerPoint](https://www.think-cell.com/en/resources/content-hub/using-the-pyramid-principle-to-build-better-powerpoint-presentations)
- [Benjamin Ball: The So What Test](https://benjaminball.com/blog/the-so-what-test/)
- [Beautiful.ai: Font Size Guide](https://www.beautiful.ai/blog/what-font-size-is-best-for-presentations)
- [BrightCarbon: Presentation Font Size](https://www.brightcarbon.com/blog/presentation-font-size/)
- [SlideModel: 10/20/30 Rule](https://slidemodel.com/the-10-20-30-rule-of-presentations/)
- [Storyfiner: 7x7 Rule](https://storyfiner.com/the-7x7-rule-a-guide-to-clear-and-effective-presentation-slides/)
- [Viktori: Emotional Storytelling in Pitch Decks](https://viktori.co/emotional-storytelling-for-pitch-decks/)
- [Qubit Capital: Pitch Deck Design Principles](https://qubit.capital/blog/pitch-deck-design-principles)
- [The Analyst Academy: Slide Structure from McKinsey, Bain, BCG](https://www.theanalystacademy.com/consulting-slide-structure/)
- [Slideworks: How McKinsey Consultants Make Presentations](https://slideworks.io/resources/how-mckinsey-consultants-make-presentations)
