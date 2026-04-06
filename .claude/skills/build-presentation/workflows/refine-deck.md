# Workflow: Refine Deck

Iterate on an existing presentation — from typo fixes to full restructures. Change scope is detected automatically from your description and routed to the right agent(s).

<required_reading>
**Read these reference files NOW before proceeding:**

1. `references/component-catalog.md` -- 21 components with semantic descriptions, HTML patterns, --comp-* variables
2. `references/design-principles.md` -- Consulting-grade design rules and typography hierarchy
3. `references/css-property-map.md` -- CSS property map for slide-stylist (91 --comp-* variables)
4. `references/brand-system.md` -- brand.yaml schema, agent-to-field mapping
5. `references/build-log-format.md` -- build-log.yaml schema, guard pattern, append pattern
</required_reading>

<process>

## Step 1: Load Existing Deck

1. Read `projects/{name}/presentation.html` — the current deck
2. Read `projects/{name}/deck-plan.md` — the original slide plan (if exists)
3. Read `brands/{brand}/brand.yaml` — the active brand (detect from presentation.html theme link)
4. If presentation.html doesn't exist, tell the user and suggest `/build {name}` instead

### Build Log Guard

Ensure build-log.yaml exists for traceability:

```bash
mkdir -p projects/{name}/.pipeline
[ -f projects/{name}/.pipeline/build-log.yaml ] || cat > projects/{name}/.pipeline/build-log.yaml << 'INIT'
meta:
  project: "{name}"
  started: "unknown"
  mode: "normal"

entries: []

summary:
  status: "in-progress"
  total_duration_s: 0
  pipeline_flow: "refine-invocation"
INIT
```

## Step 2: Determine Change Scope

Read the user's change description. Based on what they want, route to the appropriate tier below. Do NOT present a numbered menu. Do NOT ask the user to classify their change. Analyze their words and route.

Surface your routing choice in one sentence before acting: "This looks like a visual adjustment — I'll have the stylist handle the CSS."

### Tier 1: Typo / Content Edit
**Signals:** "fix typo", "change the number", "update the text", "replace [word]", specific text corrections, data updates, factual corrections
**Route:** Spawn `slide-editor` with:
- `projects/{name}/presentation.html`
- The specific change request (which slide, what text to change)

No debate. Surgical edit only.
Log the refinement: append to build-log.yaml with `agent: "orchestrator"`, `phase: "refine"`, `event: "decision"`, `message: "Refinement: content edit via slide-editor"`.
After edit: run verification loop, present change to user.

### Tier 2: Visual Adjustment
**Signals:** "change the colors", "make it bigger", "adjust spacing", "different font", "animation", "visual tweak", "looks too busy", color/size/style descriptions
**Route:** Spawn `slide-stylist` with:
- `projects/{name}/presentation.html`
- `brands/{brand}/brand.yaml`
- `references/css-property-map.md`
- The visual change request

No debate. CSS-only changes via @layer overrides.
Log the refinement: append to build-log.yaml with `agent: "orchestrator"`, `phase: "refine"`, `event: "decision"`, `message: "Refinement: visual adjustment via slide-stylist"`.
After edit: run verification loop, present change to user.

### Tier 3: Component Swap
**Signals:** "use a timeline instead", "swap to comparison layout", "change this to a card grid", component name mentions with "instead" or "swap" or "replace", same-slide layout change
**Route:** Spawn `slide-editor` with:
- `projects/{name}/presentation.html`
- `references/component-catalog.md`
- The swap request (which slide, which new component)

No debate. Editor replaces the component HTML while preserving content.
After edit: run verification loop, present change to user.

### Tier 4: Add / Remove Slides
**Signals:** "add a slide about...", "remove the last slide", "insert a metrics slide after...", "delete slide 5", adding or removing individual slides
**Route:**
1. Spawn `slide-editor` with the HTML change request
2. Spawn `narrative-planner` for a lightweight structural coherence check:
   - Pass: `projects/{name}/deck-plan.md` + the add/remove description
   - Planner checks that the narrative still flows. Advisory only — no full debate.
3. Update `deck-plan.md` to reflect the change

After edit: run verification loop, present change to user.

### Tier 5: Section Restructure
**Signals:** "reorganize the middle section", "move the comparison before the metrics", "restructure the flow", "reorder slides 4-8", multi-slide reorganization
**Route:**
1. Spawn `narrative-planner` to revise `deck-plan.md`:
   - Pass: current `deck-plan.md`, `projects/{name}/.pipeline/brand-context.md` (if exists), the restructure request
   - Run a condensed 1-round debate: planner produces revised plan, spawn `presentation-architect` only (no critic) for a structural check
   - If architect has BLOCKINGs: planner revises once. No further rounds.
2. Present revised plan to user for approval
3. Spawn `presentation-builder` to regenerate the affected section(s)

After rebuild: run verification loop, present changes to user.

### Tier 6: Full Restructure
**Signals:** "completely redo the narrative", "start over with the structure", "rewrite the whole flow", "new angle on the same content", fundamental narrative or messaging changes
**Route:** Return to `build-new-deck.md` pipeline from Step 4 (Debate).
- Skip Steps 1-3 (brief, research, brand-check) if the brief and research haven't changed
- The existing `projects/{name}/.pipeline/research.md` and `.pipeline/brand-context.md` are reused
- Full 3-round debate pipeline runs

## Quick Review (for changes affecting <=3 slides)

After the agent completes:
1. Count how many slides were affected by the change
2. If <= 3 slides changed:
   - Run only the checks relevant to the change type:
     - Content change (editor) → Story checks S1-S3, S7, S10 only
     - CSS change (stylist) → Visual checks V1-V3, V6, V9, V13 only
     - Full rebuild (builder) → Run full reviewer
   - Report findings inline in conversation (no review-report.md file needed)
   - No screenshots unless explicitly requested
3. If > 3 slides changed:
   - Run the full `presentation-reviewer` agent (same as build-new-deck Step 8)
   - Write `.pipeline/review-report.md`

## Step 3: Verify and Iterate

After any change (regardless of tier):

1. Run the verification loop from SKILL.md (HTML exists, opens without errors, slides render, theme applied, master layer, German text, animations)
2. Report what was changed and any issues found
3. Ask: "Anything else to refine?"
4. If yes: loop back to Step 2 with the new request
5. If no: done

</process>

## Anti-Patterns

- **DO NOT** present a numbered menu asking the user to pick a change type
- **DO NOT** ask "Is this a content change or a structural change?"
- **DO** read the user's natural language and route silently
- **DO** surface what you're doing: "This looks like a visual adjustment — I'll have the stylist handle the CSS."
