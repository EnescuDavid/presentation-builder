# Workflow: Refine Deck

Iterate on an existing presentation -- update content, change layouts, swap themes, or restructure slides.

<required_reading>
**Read these reference files NOW before proceeding:**

1. `references/component-catalog.md` -- 14 components with semantic descriptions and HTML patterns
2. `references/design-principles.md` -- Consulting-grade design rules and typography hierarchy
</required_reading>

<process>

## Step 1: Identify Target

Locate the existing presentation:

1. Find `projects/{name}/presentation.html` -- the current deck
2. Find `projects/{name}/deck-plan.md` -- the original slide plan
3. If neither exists, ask the user for the file path
4. Read both files to understand current state

## Step 2: Understand Changes

Ask the user what they want to change:

- **Content changes:** Update text, numbers, quotes on specific slides
- **Layout changes:** Swap a component (e.g., replace two-column with comparison)
- **Theme changes:** Switch from default to enterprise, or apply a custom theme
- **Structural changes:** Add, remove, or reorder slides
- **Style changes:** Adjust fonts, colors, spacing, animations
- **Specific slide edits:** "Change slide 3 to use bigger numbers" or "Add a timeline after the metrics slide"

## Step 3: Update Plan (if structural)

For changes that affect the slide structure or component selection:

1. Update `projects/{name}/deck-plan.md` with the new slide breakdown
2. Present the updated plan to the user for approval
3. Wait for confirmation before proceeding

Skip this step for content-only or style-only changes.

## Step 4: Apply Changes

**For content-only changes:**
- Edit `projects/{name}/presentation.html` directly
- Update text, numbers, labels within existing component markup
- Preserve all CSS, theme links, and master layer configuration

**For structural changes:**
- Spawn the `presentation-builder` subagent with the updated `deck-plan.md`
- The builder regenerates affected slides while preserving unchanged ones
- Output: updated `projects/{name}/presentation.html`

**For theme changes:**
- Swap the `<link>` tag to the new theme CSS file
- Verify all components render correctly with the new theme
- Check color contrast and readability

## Step 5: Verify

After applying changes:

1. Open `projects/{name}/presentation.html` in the browser
2. Navigate through all slides, focusing on changed slides
3. Check: layout integrity, text overflow, theme consistency, animation behavior
4. Run the verification loop from SKILL.md
5. Report changes made and any issues found

If the user wants further refinements, loop back to Step 2.

</process>
