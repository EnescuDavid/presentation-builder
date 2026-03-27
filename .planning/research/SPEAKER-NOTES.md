# Speaker Notes & Presentation Scripts

> Research document for the Presentation Builder framework.
> Speaker notes bridge the gap between what the audience sees and what the presenter says. Done well, they transform a slide deck from a visual aid into a complete communication system.

---

## Table of Contents

1. [Speaker Notes vs. Scripts: The Distinction](#1-speaker-notes-vs-scripts-the-distinction)
2. [Best Practices for Writing Speaker Notes](#2-best-practices-for-writing-speaker-notes)
3. [The Billboard Test: Slide Text vs. Notes](#3-the-billboard-test-slide-text-vs-notes)
4. [Script Writing for Presentations](#4-script-writing-for-presentations)
5. [AI-Assisted Speaker Notes Generation](#5-ai-assisted-speaker-notes-generation)
6. [Timing and Pacing](#6-timing-and-pacing)
7. [Speaker Notes in HTML Presentations (reveal.js)](#7-speaker-notes-in-html-presentations-revealjs)
8. [How Existing Tools Handle Speaker Notes](#8-how-existing-tools-handle-speaker-notes)
9. [Practical Implementation for the Framework](#9-practical-implementation-for-the-framework)

---

## 1. Speaker Notes vs. Scripts: The Distinction

There is an important difference between the two:

- **Speaker notes**: Short reminders -- keywords, data points, transition cues -- that the presenter sees on their screen or printed page. They are a safety net, not a teleprompter.
- **Presentation script**: The full text of every word you plan to say. Used for rehearsal, for high-stakes events where precision matters, or for generating a written transcript.

**When to use which:**

| Scenario | Recommended |
|----------|-------------|
| Experienced presenter, familiar topic | Notes only (bullets/keywords) |
| High-stakes keynote or board presentation | Full script for rehearsal, notes for delivery |
| Workshop facilitation | Detailed notes with timing cues |
| Recorded presentation / video | Full script |
| Internal team update | No notes needed (or minimal) |
| First-time presenter | Full script for practice, abbreviated notes for delivery |

---

## 2. Best Practices for Writing Speaker Notes

### Content Principles

1. **Write for the ear, not the eye.** Compose your talk as you would explain it to someone sitting in front of you. Aim for conversational rhythm, not memo formality.

2. **Keep text minimal.** Insert only reminder words and phrases -- pick the most encompassing words that will jog your memory on presentation day. Full sentences in notes tempt you to read them verbatim, which kills delivery.

3. **One idea per chunk.** Break your notes into small, manageable sections where each chunk covers one idea only. This reduces mental load during delivery.

4. **Include what is NOT on the slide.** The notes should carry the explanation, context, story, or data that the audience hears but does not see. If the note just repeats what is on the slide, it adds no value.

5. **Mark transitions explicitly.** Flag where you move from one topic to the next so you never lose your place.

6. **Add delivery cues.** Include reminders like [PAUSE], [SHOW DEMO], [ASK AUDIENCE], [CLICK TO NEXT ANIMATION] where relevant.

### Formatting Best Practices

```
SLIDE 5: "Q3 revenue exceeded target by 12%"

KEY POINT: The 12% overperformance was driven entirely by APAC.
- APAC grew 34% YoY (mention the Japan launch specifically)
- EMEA flat -- do NOT dwell on this unless asked
- [PAUSE] Let the number land before moving on

TRANSITION: "This growth raises the question of where we invest next..."
-> NEXT SLIDE: Investment priorities
```

### What to Avoid

- Walls of text (if your notes are longer than what you would say, they are too long)
- Repeating slide content word-for-word
- Complex sentences -- use fragments and keywords
- Relying on notes as a crutch instead of practicing

---

## 3. The Billboard Test: Slide Text vs. Notes

### The Principle

Think of each slide as a billboard: would someone racing by at 65 miles per hour get the point? The audience should absorb the main idea in 3 seconds maximum.

**Test procedure:** Show the slide for 3-5 seconds, then hide it. Ask: "What was the main idea?" If the viewer cannot answer, the slide has too much content.

### How This Divides Content Between Slides and Notes

| Goes ON the slide | Goes IN the notes |
|-------------------|-------------------|
| The single key message (action title) | Context and background |
| One supporting visual or data point | Detailed explanation |
| 2-3 bullet points maximum | Stories, anecdotes, examples |
| The "what" | The "why" and "how" |
| Numbers that matter | Methodology behind the numbers |
| Brand-quality visuals | Talking points about those visuals |

### Content Distribution Rules

**For executive/sales slides:**
- 20% of content on the slide, 80% in notes
- Slide = billboard, notes = the full message

**For technical/workshop slides:**
- 60% of content on the slide, 40% in notes
- Slide = reference material, notes = facilitation guidance

**For internal updates:**
- 70% on the slide, 30% in notes (or no notes)
- Slide IS the communication artifact

---

## 4. Script Writing for Presentations

### 4.1 Opening Hooks

The first 30-60 seconds determine whether the audience engages or checks out. Effective hooks:

**Ask an engaging question**
Rhetorical or direct, questions trigger curiosity and turn passive listeners into active participants.
> "What if I told you that 73% of the data your team collects is never used?"

**Use a surprising statistic**
A startling fact creates immediate attention.
> "Every day, your competitors make 200 more data-driven decisions than you do."

**Tell a story**
Personal stories humanize the speaker and build trust.
> "Last quarter, I sat in a meeting where we spent 45 minutes debating a decision that the data had already answered."

**Make a provocative claim**
Be bold, challenge common beliefs, then back it up.
> "Most digital transformations fail not because of technology, but because of PowerPoint."

**Use silence with a visual**
Show a compelling image, wait 5 seconds. Let silence be disruptive. It makes visuals speak louder.

**State the problem starkly**
Present the dilemma in stark terms that resonate.
> "We are losing EUR 2.3 million per quarter to a problem we already know how to solve."

**What to avoid:** Generic greetings ("Hi, my name is..."), apologies ("I didn't have much time to prepare..."), or reading the title slide aloud.

### 4.2 Transition Phrases Between Slides

Transitions are the bridges that connect one idea to the next. Without them, a presentation feels like a series of disconnected slides.

**Types of transitions:**

| Type | Example phrases |
|------|----------------|
| **Building** | "Building on that..." / "This leads us to..." / "Taking this further..." |
| **Contrasting** | "However..." / "On the other hand..." / "But here is the challenge..." |
| **Sequencing** | "First... Second... Finally..." / "Let us start with..." / "Now let us turn to..." |
| **Summarizing** | "So what does this mean?" / "The key takeaway here is..." / "To put it simply..." |
| **Questioning** | "So the question becomes..." / "What does this mean for us?" / "Why does this matter?" |
| **Storytelling** | "Let me give you an example..." / "Here is where it gets interesting..." / "Picture this..." |

**Best practice:** Memorize your transition sentences. They are the glue that maintains momentum and jumpstarts your thought process for each subsequent slide.

### 4.3 Storytelling Techniques

#### The Hero's Journey (Simplified for Presentations)

The audience is the hero, not the presenter. The presenter is the guide.

1. **The Ordinary World**: Establish the audience's current situation
2. **The Call to Adventure**: Present the opportunity or challenge
3. **The Road of Trials**: Show how the solution overcomes obstacles
4. **The Return with the Elixir**: Demonstrate the transformed outcome

#### Problem-Solution-Benefit (PSB)

The most versatile presentation narrative structure:

1. **Problem**: What is wrong? Make the audience feel the pain.
2. **Solution**: What do you propose? Make it concrete.
3. **Benefit**: What improves? Make it measurable and aspirational.

#### Situation-Complication-Resolution (SCR)

McKinsey's framework (see AUDIENCE-DESIGN.md for details). Particularly effective for persuasive business presentations.

#### The Rule of Three

Group ideas into threes for memorability and rhythm:
- "Faster. Cheaper. Better."
- "We need to invest in people, process, and technology."
- Three key takeaways, three supporting arguments, three data points.

### 4.4 Closing Techniques

The recency effect means people remember what they heard last. Presentations with strong closings are 30% more likely to elicit immediate action and 25% more likely to be remembered weeks later (Harvard Business Review).

**Call to Action (CTA)**
The most direct close. State exactly what you want the audience to do next. The more concrete and immediate, the more likely compliance.
> "I need your approval by Friday to proceed with Phase 2. The investment is EUR 450K. The projected return is 3.2x within 18 months."

**Summary with the Rule of Three**
Repeat the three main points to reinforce them.
> "Today we covered three things: why our current approach is costing us, what the alternative looks like, and how we get there in 90 days."

**Full-Circle Reference**
Return to your opening hook and close the loop. One of the most powerful techniques.
> Opening: "Last year, I asked this team a question nobody could answer."
> Closing: "Today, we can answer that question. And the answer is..."

**Memorable Quote**
A relevant, powerful quote leaves a lasting impression.

**Provocative Question**
Leave the audience with something to think about.
> "The real question is not whether we can afford to do this. It is whether we can afford not to."

---

## 5. AI-Assisted Speaker Notes Generation

### 5.1 How AI Can Generate Speaker Notes

AI tools can analyze slide content and generate contextual talking points. The process typically works:

1. AI reads the slide's title, body text, and visual descriptions
2. It infers the key message and supporting points
3. It generates conversational notes that expand on the slide content
4. Main themes become section headers; supporting points become slide content; details become speaker notes

### 5.2 Effective Prompt Patterns

The quality of AI-generated notes depends entirely on prompt specificity. Key elements to include:

**Context prompts:**
- Who the deck is for (audience type)
- Why it exists (purpose/goal)
- How long the presentation is (total time)
- Tone and style (formal, conversational, persuasive)

**Structure prompts:**
- Specify the narrative structure (agenda slide, problem, solution, proof, CTA)
- Lock in style choices (e.g., "short bullets on slides, detailed speaker notes")
- Request specific formatting (bullets vs. paragraphs, timing cues, transition phrases)

**Example prompt patterns:**

```
Pattern 1: Context-rich generation
"Generate speaker notes for a 20-minute board presentation about Q3 results.
Audience: C-Suite executives who care about strategic impact.
Tone: Authoritative and concise.
For each slide, provide:
- 3-5 bullet talking points (not full sentences)
- One transition phrase to the next slide
- Estimated speaking time"

Pattern 2: Tone matching
"Write speaker notes that match the tone of the slide content.
If the slide is data-heavy, notes should explain the 'so what.'
If the slide is visual/emotional, notes should tell a supporting story.
Keep each note under 80 words."

Pattern 3: Audience-aware
"Generate notes as if coaching a presenter who is speaking to
[skeptical technical leaders / enthusiastic sales team / cautious board members].
Anticipate likely questions and include suggested responses."
```

### 5.3 Matching Notes to Slide Tone

| Slide type | Note style |
|-----------|------------|
| Data/metrics slide | Explain the insight, not the numbers. "The key story here is..." |
| Vision/aspirational slide | Tell a supporting anecdote or paint a picture |
| Process/how-to slide | Walk through steps conversationally |
| Comparison slide | Highlight the decisive difference |
| Quote slide | Provide context about why this quote matters |
| Title/section divider | Transition language and preview of what comes next |

### 5.4 Quality Checklist for AI-Generated Notes

AI-generated notes should be reviewed against:

- [ ] Do notes add information beyond what is on the slide?
- [ ] Are notes conversational, not formal/written?
- [ ] Is each note concise enough to glance at (not read)?
- [ ] Do notes include transition cues between slides?
- [ ] Are timing estimates reasonable?
- [ ] Do notes match the audience type and tone?
- [ ] Are there no hallucinated facts or statistics?

---

## 6. Timing and Pacing

### Words Per Minute Reference

| Speaking context | WPM range | Typical |
|-----------------|-----------|---------|
| Conversational speech | 130-160 | 150 |
| Formal presentation | 100-130 | 120 |
| Complex/technical content | 90-110 | 100 |
| Energetic pitch/sales | 140-170 | 155 |
| Reading aloud (scripted) | 150-180 | 160 |

### Calculating Slide Duration from Notes

**Formula:**
```
slide_duration_seconds = (word_count_of_notes / wpm) * 60 + visual_processing_time
```

**Visual processing additions:**
- Slide transition: +2-3 seconds
- Chart or graph: +15-30 seconds (audience needs time to read)
- Complex diagram: +20-40 seconds
- Video embed: +video duration + 5 seconds
- Demo or live element: +estimated demo time

**Example calculation:**
- Speaker notes: 120 words
- Speaking rate: 120 WPM (formal presentation)
- One chart on the slide: +20 seconds
- Transition: +3 seconds
- Total: (120/120)*60 + 20 + 3 = **83 seconds (~1.5 minutes)**

### Time Budget by Presentation Length

| Total time | Slides | Avg per slide | Notes words/slide |
|-----------|--------|---------------|-------------------|
| 5 min | 5-7 | 45-60 sec | 60-80 words |
| 10 min | 8-12 | 50-75 sec | 70-100 words |
| 20 min | 15-20 | 60-80 sec | 80-120 words |
| 45 min | 25-35 | 75-110 sec | 100-150 words |
| 60 min | 30-40 | 90-120 sec | 120-160 words |

### Pacing Indicators for Presenters

The framework should provide real-time pacing feedback:
- **Green**: On pace (within 10% of target time)
- **Blue**: Speaking too slowly (behind schedule)
- **Red**: Speaking too fast (ahead of schedule, likely rushing)

---

## 7. Speaker Notes in HTML Presentations (reveal.js)

### Defining Notes in reveal.js

**Method 1: HTML aside element**
```html
<section>
  <h2>Slide Title</h2>
  <p>Visible content</p>
  <aside class="notes">
    These are speaker notes. Only visible in speaker view.
    Supports <strong>HTML formatting</strong>.
  </aside>
</section>
```

**Method 2: data-notes attribute**
```html
<section data-notes="Brief notes can go here as an attribute">
  <h2>Slide Title</h2>
</section>
```

**Method 3: Markdown separator**
When using the Markdown plugin, use a delimiter:
```markdown
## Slide Title

Visible content

Note:
These are the speaker notes for this slide.
They start after the "Note:" separator.
```
The separator is configured via `data-separator-notes="^Note:"`.

**Method 4: Markdown in aside**
```html
<aside class="notes" data-markdown>
  Speaker notes written in **Markdown**.
</aside>
```

### Speaker View Features

Press **S** to open the speaker notes window. It displays:
- Current slide with notes
- Preview of the next upcoming slide
- Elapsed time since presentation start
- Current wall clock time
- Optional pacing timer (color-coded: green = on track, red = speed up, blue = slow down)

### Configuration Options

```javascript
Reveal.initialize({
  plugins: [RevealNotes],

  // Show notes to all viewers (for accessibility or recording)
  showNotes: false,        // true = visible to everyone at bottom of slide
                           // 'separate-page' = notes on separate pages in PDF export

  // Pacing configuration
  defaultTiming: 120,      // seconds per slide (for pacing calculations)
  totalTime: 1200,         // total presentation time in seconds

  // Per-slide timing via HTML attribute:
  // <section data-timing="90"> = 90 seconds for this slide
});
```

### Framework Integration Points

For the presentation builder, the key integration considerations are:
1. Notes must be embedded in the `<aside class="notes">` element within each `<section>`
2. Markdown notes are cleanest for authoring; HTML notes allow rich formatting
3. The `data-timing` attribute per slide enables pacing calculations
4. `showNotes: 'separate-page'` is important for PDF export with notes
5. The speaker view automatically handles the two-window display

---

## 8. How Existing Tools Handle Speaker Notes

### Gamma

- AI auto-generates speaker notes from slide content
- Users click "add notes" and can manually type or use AI to generate talking points
- Notes are private -- visible only to the presenter in presenter view
- The AI generates notes based on the content of each individual card/slide
- Notes appear in a presenter view pane alongside the current card

### Beautiful.ai

- Offers AI-powered note generation tied to slide content
- Notes are integrated into the presentation editing interface
- Emphasis on keeping notes concise and aligned with visual content

### Microsoft Copilot in PowerPoint

- Users can prompt Copilot to "add speaker notes to this slide" or "add speaker notes to all slides"
- Notes appear in the standard PowerPoint Notes pane
- Can generate notes in a bulleted format for each slide
- Accepts context about audience and purpose to tailor notes

### Google Gemini in Slides

- Can generate speaker notes for individual slides or provide an executive summary
- Users specify audience context to tailor output
- Integrates with the existing Slides speaker notes view

### Common Patterns Across Tools

All major tools follow a similar pattern:
1. Analyze the visible slide content (title, body, visuals)
2. Generate conversational talking points that expand on the content
3. Keep notes separate from visible content
4. Allow manual editing after AI generation
5. Display notes in a dedicated presenter view

**Gap in existing tools:** None of the current tools deeply consider audience type when generating notes. They generate generic expansions of slide content rather than audience-tailored talking points. This is an opportunity for the presentation builder.

---

## 9. Practical Implementation for the Framework

### Notes Data Model

```yaml
slide:
  id: "slide-05"
  title: "Q3 revenue exceeded target by 12%"
  notes:
    talking_points:
      - "The 12% overperformance was driven entirely by APAC"
      - "Japan launch in July contributed EUR 3.2M"
      - "EMEA was flat -- avoid dwelling on this unless asked"
    transition: "This growth raises the question of where we invest next..."
    delivery_cues:
      - type: "pause"
        after: "talking_points[0]"
        note: "Let the number land"
      - type: "audience_check"
        after: "talking_points[2]"
        note: "Watch for reactions from CFO"
    timing:
      estimated_words: 95
      speaking_rate_wpm: 120
      visual_processing_seconds: 20
      total_seconds: 68
    audience_variant:
      c-suite: "Focus on the strategic implication of APAC growth"
      technical: "Be prepared to discuss the attribution model"
      internal: "Skip context, go straight to action items"
```

### Generation Pipeline

1. **Content analysis**: Parse slide title, body, and visual descriptions
2. **Audience mapping**: Apply audience-specific note style (from AUDIENCE-DESIGN.md presets)
3. **Note generation**: Create talking points, transitions, and delivery cues
4. **Timing calculation**: Estimate duration from word count + visual processing
5. **Tone matching**: Ensure notes match slide tone and audience expectations
6. **Validation**: Check against quality checklist
7. **Output**: Embed as `<aside class="notes">` in reveal.js HTML

### Notes Format for reveal.js Output

```html
<section data-timing="68">
  <h2>Q3 revenue exceeded target by 12%</h2>
  <!-- visible slide content -->
  <aside class="notes" data-markdown>
**Key point:** The 12% overperformance was driven entirely by APAC.
- Japan launch in July: EUR 3.2M contribution
- EMEA flat -- avoid dwelling unless asked

[PAUSE -- let the number land]

**Transition:** "This growth raises the question of where we invest next..."
  </aside>
</section>
```

### Audience-Aware Note Templates

```yaml
note_templates:
  c-suite:
    style: "brief, strategic, decision-oriented"
    format: "2-3 bullets max, one transition, one anticipated question"
    words_max: 60
    include: ["so_what", "decision_point", "transition"]

  technical:
    style: "precise, evidence-oriented, anticipating scrutiny"
    format: "3-5 bullets, methodology notes, caveats"
    words_max: 120
    include: ["methodology", "data_source", "caveats", "transition"]

  sales:
    style: "story-driven, emotional, building momentum"
    format: "story arc, emotional beat, data anchor, transition"
    words_max: 80
    include: ["story_element", "emotional_beat", "proof_point", "transition"]

  workshop:
    style: "instructional, timing-aware, facilitation-oriented"
    format: "activity instructions, timing, group management notes"
    words_max: 100
    include: ["timing_cue", "facilitation_note", "debrief_questions", "transition"]
```

---

## Sources

- [Sheridan College: Writing a Presentation Script](https://sheridancollege.libguides.com/presentationskills/creating-your-presentation/writing-a-presentation-script)
- [SlideModel: How to Write a Presentation Script](https://slidemodel.com/how-to-write-a-presentation-script/)
- [Ethos3: Difference Between Speaker Notes and Scripts](https://ethos3.com/the-difference-between-speakers-notes-and-scripts/)
- [Superchart: Best Practices for Speaker Notes](https://www.superchart.io/blog/speaker-notes)
- [Hype Presentations: How We Write Presentation Scripts](https://hypepresentations.com/blog/presentation-script/)
- [Genard Method: How to Give a Great Speech While Using Notes](https://www.genardmethod.com/blog/bid/171855/how-to-give-a-great-speech-while-using-notes-or-a-script)
- [VirtualSpeech: Speech Transitions Words and Phrases](https://virtualspeech.com/blog/speech-transitions-words-phrases)
- [Storytelling with Data: Thoughtful Transitions](https://www.storytellingwithdata.com/blog/thoughtful-transitions-for-smoother-delivery)
- [Talaera: 101 Transition Phrases for Presentations](https://www.talaera.com/talaera-talks-podcast/transition-phrases-presentations-online/)
- [American Express: 12 Ways to Hook an Audience in 30 Seconds](https://www.americanexpress.com/en-us/business/trends-and-insights/articles/hook-presentation-audience-30-seconds/)
- [Toastmasters: How to Hook Audiences from the Start](https://www.toastmasters.org/magazine/magazine-issues/2025/november/how-to-hook-audiences-from-the-start)
- [Beautiful.ai: How to End a Presentation Memorably](https://www.beautiful.ai/blog/how-to-make-your-point-and-be-memorable-with-the-closing-of-your-presentation)
- [Moxie Institute: 10 Powerful Closing Techniques](https://www.moxieinstitute.com/how-to-end-a-speech/)
- [Clear-Say: End Every Presentation with a Call to Action](https://www.clear-say.com/presentation-call-to-action/)
- [VirtualSpeech: Average Speaking Rate and Words Per Minute](https://virtualspeech.com/blog/average-speaking-rate-words-per-minute)
- [Plus AI: Finding Your Speaking Rate](https://plusai.com/blog/words-per-minute-for-speeches-and-presentations)
- [reveal.js: Speaker View Documentation](https://revealjs.com/speaker-view/)
- [reveal.js: Markdown Documentation](https://revealjs.com/markdown/)
- [Gamma: Speaker Notes Help](https://help.gamma.app/en/articles/11047307-can-i-use-speaker-notes-while-presenting-in-gamma)
- [Plus AI: How to Generate Speaker Notes](https://plusai.com/blog/how-to-generate-speaker-notes-for-presentations)
- [SlideSpeak: Add Speaker Notes with AI](https://slidespeak.co/blog/2024/04/18/add-speaker-notes-with-ai-to-presentations)
- [Visme: 105+ AI Presentation Prompts](https://visme.co/blog/ai-presentation-prompts/)
- [LinkedIn: Hero's Journey for Consulting Presentations](https://www.linkedin.com/advice/1/how-can-you-use-heros-journey-structure-create-compelling)
- [Ethos3: Storytelling Tips for Pitch Decks](https://ethos3.com/storytelling-tips-pitch-deck-presentations/)
- [DocSend: Storytelling in Sales Decks](https://www.docsend.com/blog/sales-pitch-deck-storytelling/)
