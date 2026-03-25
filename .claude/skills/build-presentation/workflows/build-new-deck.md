# Workflow: Build New Deck

Build a complete presentation from scratch through a guided pipeline: discuss, research, strategize, review, build, iterate.

<required_reading>
**Read these reference files NOW before proceeding:**

1. `references/component-catalog.md` -- 14 components with semantic descriptions and HTML patterns
2. `references/audience-presets.md` -- 6 audience types with quantified design rules
3. `references/design-principles.md` -- Consulting-grade design rules and typography hierarchy
</required_reading>

<process>

## Step 1: Discuss with User (inline)

Gather requirements through conversation. Ask about:

- **Topic:** What is the presentation about?
- **Audience type:** C-Suite, Stakeholder, Technical, Sales, Workshop, or Internal?
- **Key messages:** What are the 3-5 main points you want to communicate?
- **Slide count preference:** Or let the audience preset guide this
- **Theme preference:** default, startup, enterprise, or a custom theme?
- **Specific components:** Any particular layouts wanted (e.g., metrics dashboard, timeline, comparison)?
- **Language:** German (default) or English?

**Output:** Create `projects/{name}/brief.md` with all gathered requirements.

```markdown
# Brief: {Presentation Name}

## Context
- Topic: ...
- Audience: ...
- Duration: ...
- Language: ...

## Key Messages
1. ...
2. ...
3. ...

## Theme
- Theme: default | startup | enterprise | custom
- Special requests: ...

## Constraints
- Slide count: ...
- Must-include components: ...
- Tone: ...
```

## Step 2: Research (optional)

If the user wants real data, statistics, or industry benchmarks incorporated:

1. Spawn the `presentation-researcher` subagent with the brief
2. The researcher reads `projects/{name}/brief.md` and gathers relevant data
3. **Output:** `projects/{name}/research.md` with sourced facts, statistics, and quotes

Skip this step if the user provides all content or does not need external data.

## Step 3: Strategize

Create the slide-by-slide plan:

1. Spawn the `presentation-strategist` subagent with:
   - `projects/{name}/brief.md`
   - `projects/{name}/research.md` (if exists)
   - `references/component-catalog.md`
   - `references/audience-presets.md`
2. The strategist selects components, structures the narrative, and assigns content to slides
3. **Output:** `projects/{name}/deck-plan.md` with slide-by-slide breakdown

**deck-plan.md format:**
```markdown
---
title: "Presentation Title"
audience: c-suite
theme: default
total_slides: 12
estimated_duration: "20 minutes"
---

## Slide 1: Title
- **Component:** title
- **Content:** "Hero text" / "Subtitle text"
- **Master layer:** hidden
- **Animation:** blurIn on title, fadeUp on subtitle

## Slide 2: Agenda
- **Component:** agenda
- **Content:** 4 items, highlight first
- **Master layer:** visible
...
```

## Step 4: User Review

Present the deck-plan.md summary to the user:

1. Show the slide count, component mix, and narrative flow
2. Highlight any strategic choices (e.g., "Using metrics for the KPI slide because your audience is C-Suite")
3. **Ask for approval** or revision requests
4. If changes needed: loop back to Step 3 with updated requirements
5. Do NOT proceed to building until the user approves the plan

## Step 5: Build

Generate the presentation HTML:

1. Spawn the `presentation-builder` subagent with:
   - `projects/{name}/deck-plan.md`
   - `references/component-catalog.md` (for HTML patterns)
   - `references/theme-system.md` (for theme integration)
   - `references/animation-guide.md` (for animation choices)
2. The builder reads each template, composes slides, and assembles the final HTML
3. **Output:** `projects/{name}/presentation.html`

The builder uses `templates/_skeleton.html` as the base, embeds all component CSS inline, and links the selected theme.

## Step 6: Iterate

After the first build:

1. Open `projects/{name}/presentation.html` in the browser
2. Run the verification loop from SKILL.md
3. Ask the user for feedback
4. For further changes, route to the `refine-deck.md` workflow

</process>

## Project Folder Convention

All artifacts for a presentation live in `projects/{name}/`:

```
projects/{name}/
  brief.md            # User requirements (Step 1)
  research.md         # Optional research data (Step 2)
  deck-plan.md        # Slide-by-slide plan, reviewed by user (Step 3-4)
  presentation.html   # Final output (Step 5)
  notes.yaml          # Optional speaker notes
```

The `{name}` is a kebab-case identifier derived from the presentation topic (e.g., `q3-board-report`, `product-launch-pitch`).
