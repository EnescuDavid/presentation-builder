# Workflow: Build New Deck

Build a complete presentation through the 9-agent pipeline: brief intake with brand selection, research, brand check, debate (narrative planner + architect/critic verdicts), user review, build, stylist pass, review, and delivery.

<required_reading>
**Read these reference files NOW before proceeding:**

1. `references/component-catalog.md` — 21 components with semantic descriptions, HTML patterns, --comp-* variables
2. `references/audience-presets.md` — 6 audience types with quantified design rules
3. `references/design-principles.md` — Consulting-grade design rules and typography hierarchy
4. `references/brand-system.md` — brand.yaml schema, bundled brands, agent-to-field mapping
5. `references/visual-vocabulary.md` — 15 content archetypes, bullet-list smell test
</required_reading>

<pipeline>

## Entry: Resumability Check

Before starting the pipeline, check for in-progress work:

1. Does `projects/{name}/.pipeline/` exist?
   - No → proceed to Step 1 (Brief Intake)
   - Yes → continue to scan

2. Scan `.pipeline/` and identify completed steps:
   - `.pipeline/research.md` present → research complete
   - `.pipeline/brand-context.md` present → brand check complete
   - `.pipeline/debate/round-N-plan.md` present → debate in progress (note highest N)
   - `projects/{name}/deck-plan.md` exists → plan approved, ready to build
   - `projects/{name}/presentation.html` exists → build complete, pending review

3. Tell the user what was found:
   "I found an in-progress build for '{name}':
   - [list completed steps with artifact names]
   Resume from [next step], or start fresh?"

4. If user says fresh: run `rm -rf projects/{name}/.pipeline/` and proceed to Step 1
5. If user says resume: skip completed steps, jump to the next incomplete step

## Step 1: Brief Intake + Brand Selection (main chat, not an agent)

### 1a: Gather Requirements

Ask the user about their presentation through conversation:
- **Topic:** What is the presentation about?
- **Audience type:** C-Suite, Stakeholder, Technical, Sales, Workshop, or Internal?
- **Key messages:** What are the 3-5 main points?
- **Slide count preference:** Or let the audience preset guide this
- **Language:** German (default) or English?
- **Special requests:** Specific components, constraints, tone, speaker notes needed?

Write `projects/{name}/brief.md` with all gathered requirements:

```markdown
# Brief: {Presentation Name}

## Context
- Topic: ...
- Audience: c-suite | stakeholder | technical | sales | workshop | internal
- Duration: ...
- Language: de | en

## Key Messages
1. ...
2. ...
3. ...

## Brand
- Brand: {brand-name}
- Special requests: ...

## Constraints
- Slide count: ...
- Must-include components: ...
- Tone: ...
- Input files: [list any files dropped in projects/{name}/input/]
```

### 1b: Brand Selection

Check the `brands/` directory to determine which brand to use:

- **Unprocessed input detected** (a subdirectory in `brands/` has an `input/` folder with files but no `brand.yaml`):
  "I see unprocessed brand assets in `brands/{name}/input/`. Want to extract the brand first?"
  - Yes → redirect to `onboard-brand.md` workflow, then return here
  - No → continue with the default brand

- **Multiple brands exist** (multiple subdirectories each containing a `brand.yaml`):
  "Which brand should I use? [list brand names from each brands/{name}/brand.yaml]"
  User selects one.

- **Exactly one brand exists** (exactly one subdirectory with a `brand.yaml`):
  Use it automatically. Confirm: "Using the '{brand}' brand."

- **No brands, no input files** (brands/ is empty or has no brand.yaml anywhere):
  "No custom brand is set up. Use the default template, or create a custom brand first?"
  - Default → use `brands/default/`
  - Custom → redirect to `onboard-brand.md` workflow, then return here

Record the selected brand in `brief.md` under `Brand: {name}`.

Create the pipeline directory:
```
mkdir -p projects/{name}/.pipeline/debate
```

## Step 2: Research (researcher agent)

Spawn the `presentation-researcher` subagent with:
- `projects/{name}/brief.md`
- Scan `projects/{name}/input/` for any user-provided files (notes, data, old decks)
- `references/visual-vocabulary.md`

Wait for completion. The agent writes `projects/{name}/.pipeline/research.md`.

**Surface findings:** Read `.pipeline/research.md` and summarize the key findings to the user in conversation. Quote specific data points, statistics, recommended content archetypes, and gap analysis. Always present findings inline — never direct the user to open a pipeline file.

If the user provided all content and no external research is needed, skip this step. Write a minimal `.pipeline/research.md` noting "User-provided content, no external research needed" with a summary of the provided materials.

## Step 3: Brand Check (brand-checker agent)

Spawn the `brand-checker` subagent with:
- `brands/{brand}/brand.yaml`
- `brands/{brand}/rules.md` (if it exists)
- `projects/{name}/brief.md`
- `projects/{name}/.pipeline/research.md`

Wait for completion. The agent writes `projects/{name}/.pipeline/brand-context.md`.

**Surface findings:** Summarize brand alignment notes, color semantics, and any advisory flags to the user in conversation. Brand-checker is advisory-only — it never blocks the pipeline.

## Step 4: Debate (max 3 rounds)

### Round N (start with N=1):

**4.1: Narrative Planner**

Spawn the `narrative-planner` subagent with:
- `projects/{name}/brief.md`
- `projects/{name}/.pipeline/research.md`
- `projects/{name}/.pipeline/brand-context.md`
- `references/audience-presets.md`
- `references/component-catalog.md`
- `references/visual-vocabulary.md`
- If N > 1: `projects/{name}/.pipeline/debate/round-{N-1}-architect.md` and `projects/{name}/.pipeline/debate/round-{N-1}-critic.md` (previous round critiques for the planner to address)

Wait for completion. The agent writes `projects/{name}/.pipeline/debate/round-{N}-plan.md`.

**4.2: Architect + Critic (parallel)**

Spawn `presentation-architect` AND `presentation-critic` with the SAME inputs. Both run in parallel on the same plan:
- `projects/{name}/brief.md`
- `projects/{name}/.pipeline/research.md`
- `projects/{name}/.pipeline/brand-context.md`
- `projects/{name}/.pipeline/debate/round-{N}-plan.md`
- `references/audience-presets.md`
- `references/design-principles.md`
- `references/component-catalog.md`

Wait for BOTH to complete:
- Architect writes: `projects/{name}/.pipeline/debate/round-{N}-architect.md`
- Critic writes: `projects/{name}/.pipeline/debate/round-{N}-critic.md`

**4.3: Evaluate Verdicts**

Read both verdict files. Count BLOCKING items (tagged `[BLOCKING-1]`, `[BLOCKING-2]`, etc.) across both:

- **Zero BLOCKINGs from both:** Debate ends. The `round-{N}-plan.md` is the approved plan. Proceed to Step 5.
- **BLOCKINGs exist and N < 3:** Surface the blocking items to the user in conversation (quote them, do not reference files). Increment N, return to 4.1. The planner will address the critiques in round N+1.
- **BLOCKINGs exist and N == 3 (ceiling reached):** Escalate to user. Surface all remaining BLOCKING items with Consensus Notes from both architect and critic. Ask the user how to proceed: override and accept the plan, or provide guidance for one more planner pass.

## Step 5: User Review (main chat)

Present the approved plan (the final `round-{N}-plan.md`) to the user:

1. Show the Narrative Flow Map (high-level table of slide sequence, components, and narrative role)
2. Walk through the narrative arc: situation → complication → resolution
3. Highlight strategic choices: "Using metrics for the KPI slide because your audience is C-Suite"
4. Show slide count, estimated duration, component mix

Ask: "Approve this plan, or what would you like to change?"

- **Approved:** Copy the final plan to `projects/{name}/deck-plan.md` (this is the user-facing artifact). Proceed to Step 6.
- **Minor changes requested:** Update the plan directly in the conversation, then copy to `projects/{name}/deck-plan.md`. Proceed to Step 6.
- **Structural changes requested:** Run one more debate round (N+1, up to ceiling) with the user's feedback included as additional input to the narrative-planner.

Do NOT proceed to building until the user explicitly approves.

## Step 6: Build (builder agent)

Spawn the `presentation-builder` subagent with:
- `projects/{name}/deck-plan.md`
- `brands/{brand}/brand.yaml` (builder reads: theme_css, logo, master_layer fields, color_semantics)
- `references/component-catalog.md`
- `references/animation-guide.md`
- `templates/_skeleton.html`
- `tokens/components.css`

Wait for completion. The agent writes `projects/{name}/presentation.html`.

## Step 7: Stylist Pass (slide-stylist agent, conditional)

If the builder flagged any visual concerns, or if the user's brand has strict visual rules in `rules.md`:

Spawn the `slide-stylist` subagent with:
- `projects/{name}/presentation.html`
- `brands/{brand}/brand.yaml`
- `brands/{brand}/rules.md` (if exists)
- `references/css-property-map.md`

Wait for completion. The agent edits `projects/{name}/presentation.html` in-place.

If no visual concerns and no strict brand rules: skip this step.

## Step 8: Review (reviewer agent)

Spawn the `presentation-reviewer` subagent with:
- `projects/{name}/deck-plan.md`
- `projects/{name}/presentation.html`
- `projects/{name}/.pipeline/research.md`
- `brands/{brand}/brand.yaml`

Wait for completion. The agent writes `projects/{name}/.pipeline/review-report.md`.

**Evaluate review:**
- Read `.pipeline/review-report.md`
- Surface the review scorecard to the user in conversation (quote scores and findings, do not reference the file)
- If no BLOCKERs: proceed to Step 9
- If BLOCKERs exist (max 2 auto-fix rounds):
  - Surface the blockers to the user in conversation
  - Spawn `presentation-builder` again with the review report as additional input
  - Re-run reviewer. If still blocking after 2 rounds: escalate to user

## Step 9: Delivery

Present the final deck to the user:
1. Confirm: "Your presentation is ready at `projects/{name}/presentation.html`"
2. Share the review scorecard summary (quoted from `.pipeline/review-report.md`, not a file reference)
3. Run the verification loop from SKILL.md
4. Ask if they want any refinements → route to `refine-deck.md` workflow

</pipeline>

## Project Folder Convention

All artifacts for a presentation live in `projects/{name}/`:

```
projects/{name}/
  input/                  # User drop-off zone (images, notes, old PPTXs, data)
  brief.md                # User-facing: requirements (Step 1)
  deck-plan.md            # User-facing: approved plan (Step 5)
  presentation.html       # User-facing: final output (Step 6)
  notes.yaml              # User-facing: optional speaker notes
  .pipeline/              # Hidden: agent artifacts (gitignored)
    research.md           # Researcher output (Step 2)
    brand-context.md      # Brand-checker output (Step 3)
    debate/               # Debate round artifacts (Step 4)
      round-1-plan.md
      round-1-architect.md
      round-1-critic.md
      round-2-plan.md     # If round 2 needed
      ...
    review-report.md      # Reviewer output (Step 8)
```

The `{name}` is a kebab-case identifier derived from the presentation topic (e.g., `q3-board-report`, `product-launch-pitch`).

`.pipeline/` is gitignored — add `projects/*/.pipeline/` to the root `.gitignore` if not already present.
