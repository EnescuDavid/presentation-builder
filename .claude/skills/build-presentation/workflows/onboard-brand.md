# Workflow: Onboard Brand

**Trigger:** User wants to set up a new corporate brand — provides PPTX template, PDF guidelines, or describes brand in conversation.
**Runs in:** Main chat (needs user interaction for file paths and approval).
**Produces:** Complete brand package in `brands/{name}/` (brand.yaml + rules.md + theme.css + test-presentation.html)

> **Note:** This workflow replaces the old `extract-theme.md` workflow. The `tools/extract-theme.js` tool still exists and is called by Step 2 — only the workflow wrapper changed.

---

## Step 1: Intake

Gather brand identity and assets from the user.

**Ask the user for:**
- **Brand name** — used as the directory name; must be kebab-case (e.g., `acme-corp`, `siemens`, `my-client`)
- **Source assets** — any combination of:
  - PPTX template (corporate PowerPoint master)
  - PDF brand guidelines
  - Logo files (SVG, PNG)
  - Markdown or text files describing the brand
  - Direct conversational description ("our brand is...")

Per **D-03**: Accept ANY format. Users are not required to have a PPTX file. A conversation is a valid input.

**Actions:**
1. Create `brands/{name}/` directory
2. Create `brands/{name}/input/` subdirectory as an asset drop zone
3. Copy or link all user-provided assets into `brands/{name}/input/`
4. Per **D-04**: If user provides standalone logo files, place them in `brands/{name}/` directly (not just `input/`)

**Output:** `brands/{name}/input/` populated with source assets.

---

## Step 2: Theme Extraction (automated, conditional)

Extract colors and fonts from PPTX if one was provided.

**If a PPTX file exists in `brands/{name}/input/`:**

```bash
node tools/extract-theme.js brands/{name}/input/{file}.pptx brands/{name}/
```

This produces:
- `brands/{name}/theme.css` — CSS custom property overrides in `@layer theme`
- Logo files extracted from the PPTX master slide (SVG/PNG)

**If NO PPTX was provided:**

Skip this step. The brand-profiler subagent (Step 3) will generate `theme.css` based on other inputs, or use the closest bundled brand as a starting point.

**Output (conditional):** `brands/{name}/theme.css` and extracted logos.

---

## Step 3: Brand Profile Generation (subagent)

Generate the machine-readable brand profile and prose guidance.

**Launch the brand-profiler subagent** (`.claude/agents/brand-profiler.md`) with the following context:

- Extracted `brands/{name}/theme.css` (if Step 2 ran)
- All assets in `brands/{name}/input/`
- Per **D-02**: PDF files are read directly by Claude — no manual text extraction required from the user
- Brand name and any conversational description gathered in Step 1

**The subagent produces:**
- `brands/{name}/brand.yaml` — 9-field machine-readable profile
- `brands/{name}/rules.md` — Prose guidance for AI agents (do's/don'ts, tone, chart conventions)

Per **D-12**: The profiler detects the brand's style from the provided assets and matches it to the closest bundled archetype (default/startup/enterprise), or asks the user directly if the style is unclear.

If no assets were provided beyond a conversational description, the profiler generates brand.yaml and rules.md from the conversation alone, using the default brand as a structural template.

**Output:** `brands/{name}/brand.yaml` and `brands/{name}/rules.md`.

---

## Step 4: Contrast Validation (automated)

Validate color accessibility across all brand color pairs.

```bash
node tools/check-contrast.js brands/{name}/
```

This checks WCAG AA contrast ratios for all color combinations defined in theme.css.

**Result handling:**
- **All pass:** Note in Step 6 summary that contrast validation passed
- **Failures found:** Note the failing color pairs for user review in Step 6; suggest specific adjustments to theme.css
- **Do NOT block on failures** — contrast warnings are advisory, not blockers. The onboarding continues.

**Output:** Pass/fail report (to stdout, reviewed in Step 6).

---

## Step 5: Test Presentation (inline, no subagent)

Generate a quick 5-slide visual proof that covers the key brand surfaces. Do NOT use a subagent — build this inline to keep it fast.

**Build `brands/{name}/test-presentation.html` directly** with exactly 5 slides:

1. `title` — brand name, subtitle, checks primary color + font + master layer
2. `metrics` — 3-4 KPI cards, checks accent colors + card surfaces + number styling
3. `two-column` — text + image placeholder, checks body text + heading hierarchy + spacing
4. `chart` — bar or pie chart, checks chart color palette from brand.yaml
5. `summary` — 3 takeaways, checks surface background + bullet styling + footer

**How to build it:**
1. Read `templates/_skeleton.html` for the HTML structure
2. Read the 5 component templates from `templates/` (title.html, metrics.html, two-column.html, chart.html, summary.html)
3. Read `tokens/base.css` and `tokens/components.css` for base styles
4. Assemble a single HTML file:
   - Inline `base.css` into `@layer tokens`
   - Inline `tokens/animations.css` into `@layer animations`
   - Inline the `@layer base-theme` rules from the skeleton
   - Inline `brands/{name}/theme.css` into `@layer theme`
   - Copy `tokens/components.css` verbatim into `@layer components`
   - Add `@layer overrides` for any per-slide `--comp-*` variable tweaks
5. Use `brand.yaml` `master_layer` settings for footer configuration
6. Populate slides with sample German content appropriate to the brand's tone
7. Write the result to `brands/{name}/test-presentation.html`

**This is a brand smoke test, not a full component regression.** 5 slides is enough to verify colors, fonts, spacing, and chart palette. A full 21-component test can be run later via `/build` if needed.

**Output:** `brands/{name}/test-presentation.html`.

---

## Step 6: User Review

Present all generated artifacts for user approval. This is the **single review gate** after the full automated run — per **D-09** and **D-11**, there is no step-by-step review.

**Display in chat:**

1. The full contents of `brands/{name}/brand.yaml`
2. The full contents of `brands/{name}/rules.md`
3. Any contrast validation warnings from Step 4 (or "All WCAG AA checks passed")
4. Brief summary of theme extraction results (colors found, fonts detected, logos extracted)

**Ask the user to:**
- Open `brands/{name}/test-presentation.html` in their browser and review all 5 slides
- Approve the generated brand.yaml and rules.md, or request changes **conversationally** (per **D-11**)

**Handling feedback:**

If the user requests changes, apply them directly in chat:
- Edit `brand.yaml` and/or `rules.md` based on conversational feedback
- If visual changes were made (colors, fonts, spacing): regenerate `test-presentation.html` so the user can re-verify
- If only tone/rule changes: no need to regenerate the test presentation

Iterate until the user explicitly approves.

**This is ONE approval gate** — the user reviews everything at once after all automation completes.

---

## Step 7: Confirmation

Announce that the brand is ready for use and summarize the result.

**Display in chat:**
- Brand name and directory: `brands/{name}/`
- Theme CSS path: `brands/{name}/theme.css`
- Logo path (if present): `brands/{name}/logo.svg` or extracted path
- Key brand.yaml settings: formality, title_style, component preferences summary

**Inform the user:**
> "Your brand is ready. To use it in a presentation, add `brand: {name}` to your `brief.md` frontmatter. The build-new-deck workflow will automatically load your brand's theme, rules, and component preferences."

**About the `input/` directory:**

The `brands/{name}/input/` directory with source assets is preserved by default. The user may delete it manually at any time — it is not needed for presentation generation and is only kept for reference.

---

## Notes

- **For bundled brands** (default, startup, enterprise): `brand.yaml` and `rules.md` are hand-written reference files, not profiler-generated. They serve as templates for users creating custom brands.
- **Multiple onboardings:** Run this workflow once per corporate brand. Each brand gets its own `brands/{name}/` directory.
- **Updating an existing brand:** Re-run this workflow, or edit `brand.yaml`, `rules.md`, and `theme.css` directly. Re-run Step 5 after visual changes.
