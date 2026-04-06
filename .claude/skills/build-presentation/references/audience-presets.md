# Audience Presets

AI reference for audience-specific design rules. When building a presentation, identify the audience type first, then apply these quantified rules to guide component selection, content density, font sizes, and animation choices.

Every slide must pass the "So What" test: why should THIS audience care about THIS point? If you cannot answer, remove the slide.

## Quick Reference

| Audience | Slide Count | Max Words/Slide | Max Bullets | Font (Title/Body) | Animation | Hard Rules |
|----------|-------------|-----------------|-------------|-------------------|-----------|------------|
| C-Suite/Board | 8-12 | 15-30 | 3 | 44pt / 28pt | Minimal | Max 15 slides, min 24pt, ban text-heavy, no content animations |
| Stakeholder | 12-20 | 30-50 | 5 | 36pt / 22pt | None/Subtle | Max 25 slides, min 18pt, no content animations |
| Technical | 15-30+ | 50-100 | 7+ | 36pt / 18pt | None | Max 40 slides, min 14pt, no content animations |
| Sales/Pitch | 8-15 | 10-20 | 2 | 48pt / 28pt | Cinematic | Max 15 slides, min 24pt |
| Workshop | 20-40 | 40-80 | 6 | 36pt / 20pt | Step reveals | Advisory-only (no hard rules) |
| Internal | 5-10 | 30-60 | 5-7 | 32pt / 18pt | None | Advisory-only (no hard rules) |

---

## C-Suite / Board

- **Profile:** Executives, board members, C-level decision-makers. They make 35+ decisions daily and want conclusions, not analysis. Time is scarce -- they will interrupt with questions.

#### Hard Rules (BLOCKING)

Rules the architect agent checks. Violations are BLOCKING — planner must fix before proceeding.

- Max slides: 15 (exceed = BLOCKING)
- Min font size: 24pt anywhere (below = BLOCKING)
- Banned components: text-heavy (use = BLOCKING)
- Animation: no content animations (fragment reveals, entrance animations on content slides = BLOCKING)

#### Soft Rules (ADVISORY)

Defaults that can be overridden with explicit justification in the deck plan.

- Slide count range: 8-12 slides for a 20-minute slot (suggested, not enforced). Include appendix for backup detail.
- Font size ranges: Title 44-48pt, body 24-30pt (defaults, not floors — hard floor is 24pt)
- Content density: 15-30 words per slide, maximum 3 bullets, 70% visual / 30% text, one insight per slide
- Component bias: Prefer: title, metrics (1-3 big numbers), summary, framework, image-full-bleed. Avoid: text-heavy, card-grid. Use comparison for transformation stories.
- Animation density: Minimal — only purposeful entrance animations, no bullet-by-bullet reveals
- Tone: Formal, authoritative, strategic. Action titles required. Lead with the recommendation.
- Consistency guardrail: max 2 unique font-size-body values per deck

---

## Stakeholder Updates

- **Profile:** Project sponsors, department heads, cross-functional leads. They want to know: Are we on track? What changed? What do you need from me?

#### Hard Rules (BLOCKING)

- Max slides: 25 (exceed = BLOCKING)
- Min font size: 18pt anywhere (below = BLOCKING)
- Banned components: none
- Animation: no content animations (= BLOCKING)

#### Soft Rules (ADVISORY)

- Slide count range: 12-20 slides for a 30-minute meeting. Consistent format across recurring updates.
- Font size ranges: Title 36-44pt, body 20-24pt (minimum 20pt advisory — hard floor is 18pt)
- Content density: 30-50 words per slide, maximum 5 bullets, 50% visual / 50% text, status-oriented
- Component bias: Prefer: metrics (3-5 with context), timeline (roadmaps), comparison (plan vs actual), two-column, summary. Use agenda for recurring structure. Avoid: quote, image-full-bleed.
- Animation density: None or subtle transitions. Consistency across updates matters more than visual flair.
- Tone: Professional, structured, metric-driven. Highlight deviations from plan. End with clear next steps and owners.
- Consistency guardrail: max 2 unique font-size-body values per deck

---

## Technical Deep-Dives

- **Profile:** Engineers, architects, analysts, domain experts. They want depth, precision, and methodology. They will evaluate feasibility and challenge assumptions.

#### Hard Rules (BLOCKING)

- Max slides: 40 (exceed = BLOCKING)
- Min font size: 14pt anywhere (below = BLOCKING)
- Banned components: none
- Animation: no content animations (= BLOCKING)

#### Soft Rules (ADVISORY)

- Slide count range: 15-30+ slides acceptable. 2-4 minutes per slide is normal. Include appendix for deep detail.
- Font size ranges: Title 32-40pt, body 16-20pt (minimum 16pt advisory — hard floor is 14pt)
- Content density: 50-100 words per slide, 7+ bullets acceptable, 40% visual / 60% text, higher density expected
- Component bias: Prefer: text-heavy, two-column, framework (architecture), timeline (process), comparison. Use card-grid for feature breakdowns. Avoid: image-full-bleed, quote (unless expert endorsement).
- Animation density: None. All content visible immediately. Technical audiences prefer to scan at their own pace.
- Tone: Precise, evidence-based, detailed. Include edge cases, limitations, trade-offs. Show methodology.
- Consistency guardrail: max 2 unique font-size-body values per deck

---

## Sales / Pitch

- **Profile:** Prospects, investors, potential partners. Emotional connection drives decisions. Stories are 22x more memorable than facts alone. Position the audience as the hero.

#### Hard Rules (BLOCKING)

- Max slides: 15 (exceed = BLOCKING)
- Min font size: 24pt anywhere (below = BLOCKING)
- Banned components: none
- Animation: allowed (cinematic and purposeful)

#### Soft Rules (ADVISORY)

- Slide count range: 8-15 slides for a 20-minute pitch. Follow the 10/20/30 rule (Guy Kawasaki): 10 slides, 20 minutes, 30pt minimum.
- Font size ranges: Title 44-60pt, body 24-36pt (defaults — hard floor is 24pt). Dramatic, bold typography.
- Content density: 10-20 words per slide, maximum 2 bullets, 80% visual / 20% text, presenter carries content verbally
- Component bias: Prefer: title (dramatic), image-full-bleed, metrics (1-2 hero numbers), quote (testimonials), contact (CTA), card-grid (offerings). Avoid: text-heavy, framework.
- Animation density: Cinematic, narrative. Purposeful entrance animations enhance storytelling. Use blurIn for hero moments, fadeUp for reveals.
- Tone: Persuasive, emotional, story-driven. Problem-solution-benefit arc. End with compelling CTA.
- Consistency guardrail: max 2 unique font-size-body values per deck

---

## Workshop / Training

- **Profile:** Participants learning a skill or process. Slides double as reference material and workbook pages. Must work as handouts when printed.

#### Hard Rules (BLOCKING)

Advisory-only mode — no hard rules. All checks are ADVISORY for Workshop audiences. SCQA is optional. Titles may be topic labels rather than action titles.

#### Soft Rules (ADVISORY)

- Slide count range: 20-40 slides for a half-day workshop. Include exercise instructions, recap slides, cheat sheets.
- Font size ranges: Title 32-40pt, body 18-22pt, minimum 16pt. Must be legible as printed handouts.
- Content density: 40-80 words per slide, maximum 6 bullets, 50% visual / 50% text, reference-oriented
- Component bias: Prefer: text-heavy (instructions), card-grid (frameworks), two-column (exercise+reference), summary (recap), timeline (process steps), section-break (progress markers). Avoid: image-full-bleed, quote.
- Animation density: Step-by-step reveals for instructions. Progressive disclosure for exercises. Fragment animations useful here.
- Tone: Encouraging, interactive, supportive. Numbered steps for activities. Include timing cues in speaker notes.
- Consistency guardrail: max 2 unique font-size-body values per deck

---

## Internal / All-Hands

- **Profile:** Your own team. They already have context -- do not re-establish it. Action-oriented, efficient. Possibly asynchronous (read-ahead).

#### Hard Rules (BLOCKING)

Advisory-only mode — no hard rules. All checks are ADVISORY for Internal audiences. SCQA is optional. Action titles are recommended but not enforced.

#### Soft Rules (ADVISORY)

- Slide count range: 5-10 slides for a 10-minute update. Can be more raw/draft-quality than external decks.
- Font size ranges: Title 32-36pt, body 16-20pt, minimum 14pt. Informal, dense is acceptable.
- Content density: 30-60 words per slide, 5-7 bullets fine, 30% visual / 70% text, dense and scannable
- Component bias: Prefer: text-heavy (updates), metrics (team KPIs), two-column, summary (action items), comparison. Use agenda for meeting structure. Avoid: image-full-bleed, quote, contact.
- Animation density: None. All content visible immediately. Speed matters.
- Tone: Casual, direct, shorthand. Use team-specific terminology. Focus on blockers, decisions, next actions with owners and deadlines.
- Consistency guardrail: max 2 unique font-size-body values per deck

---

## Hybrid Audiences

Pick a **primary** audience type and a **secondary** audience type when the deck serves a mixed room.

**Primary's hard rules always apply.** There is no blending of hard rules — the stricter rule wins.

**Soft rules blend:**
- Slide count: average the two ranges (round down on max)
- Font size: take the larger minimum as the advisory default
- Component preferences: union of both prefer lists; intersection of avoid lists (only avoid what both audiences agree to avoid)
- Content density: average the word/bullet targets
- Tone: primary audience tone, with adjustments noted from secondary

**Example — C-Suite + Technical:**
- Hard rules: C-Suite applies (max 15 slides, min 24pt, ban text-heavy, no content animations)
- Soft rules: allow framework and architecture diagrams from Technical bias; keep visual weight and big-number metrics from C-Suite; content density target ~25-50 words/slide (blended)
- Component preference: add framework, comparison to preferred list; text-heavy remains banned (hard rule)

**Example — Stakeholder + Workshop:**
- Hard rules: Stakeholder applies (max 25 slides, min 18pt, no content animations)
- Soft rules: include exercise/activity slides from Workshop bias; use progressive disclosure fragments (advisory, not banned for Stakeholder); content density ~35-65 words/slide

---

## Enhancement Options

These are document hooks for pipeline configuration — not enforced unless explicitly set in brief.md or the workflow invocation.

- **`stakes: high`** — tighter checks: 3 debate cycles minimum (not capped at auto-converge after 2), critic runs stricter evidence validation, generates one alternative deck structure for user comparison before finalizing
- **`lightweight`** — for decks with fewer than 5 slides: planner + condensed critic only, skip architect; single round unless critic raises BLOCKING
- **`advisory-only`** — automatically applied for Internal and Workshop audiences: skip SCQA extraction, relax action title enforcement, architect checks pacing only (not audience compliance); can be explicitly set for other audiences when presenter requests a relaxed review
