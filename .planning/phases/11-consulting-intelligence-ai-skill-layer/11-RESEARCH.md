# Phase 11: Consulting Intelligence & AI Skill Layer - Research

**Researched:** 2026-03-28
**Domain:** Consulting methodology (SCQA, Pyramid Principle), AI instruction files, gallery UX
**Confidence:** HIGH

## Summary

Phase 11 embeds consulting methodology into the strategist subagent and reference files. The work is entirely documentation and markdown-based -- no new CSS, JavaScript libraries, or build tools. The strategist subagent (`presentation-strategist.md`) is the primary modification target, gaining four new validation/scaffolding steps: SCQA extraction, Pyramid Principle validation, action title enforcement, and slide count warnings. The component catalog gains action title guidance per component. A new `copilot-instructions.md` file mirrors CLAUDE.md framework teaching for GitHub Copilot CLI users. The gallery gets component type badges using existing `data-component` attributes.

The existing codebase is well-prepared for this phase. Templates already carry `data-component` attributes (verified across all 20+ templates). Audience presets already define slide count ranges. The strategist already has a 5-step execution flow that can be extended. The design principles reference already mentions action titles. This phase is primarily additive markdown editing with one new file creation and one HTML/CSS enhancement.

**Primary recommendation:** Extend the strategist's execution flow with four new sub-steps (SCQA extraction after Step 1, Pyramid validation and action title check in Step 5, slide count warning in Step 5), add action title guidance to component catalog slots, create `.github/copilot-instructions.md` derived from CLAUDE.md, and add CSS badges to gallery cards reading `data-component` from iframes.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- **D-01:** Full SCQA scaffolding in strategist. Strategist identifies Situation-Complication-Question-Answer from the brief and writes them as explicit markers in deck-plan.md frontmatter. Slides are mapped to SCQA phases so the user can see and edit the narrative logic before build.
- **D-02:** Advisory warnings, not blocking. Strategist checks slide sequences for top-down logic, flags titles without verbs, validates MECE groupings, and outputs warnings in deck-plan.md (e.g., "Warning: slides 4-7 are not MECE -- overlapping topics"). User decides whether to fix.
- **D-03:** Strategist + catalog enforcement. Strategist validates titles in deck-plan.md (flags topic labels like "Overview", suggests verb-based alternatives like "Cloud migration reduces costs by 30%"). Component catalog adds action title guidance to each component's required slots. Builder trusts the plan -- no redundant re-checking.
- **D-04:** Advisory warnings. Strategist warns in deck-plan.md when slide count exceeds audience-specific range (e.g., "Note: 18 slides exceeds C-Suite recommended 8-12"). User can proceed anyway. Ranges already defined in audience-presets.md.
- **D-05:** Full framework teaching content (~200-300 lines). Mirrors CLAUDE.md framework sections: component catalog summary, theme system, audience presets, project folder convention, key conventions. Copilot generates presentation.html directly (no subagent pipeline available).
- **D-06:** Include SCQA/Pyramid methodology. Copilot-instructions.md teaches SCQA structure and action title guidance so Copilot generates better-structured decks even without a strategist subagent.
- **D-07:** Claude's Discretion. Add component type badges and labels to gallery thumbnails. Implementation details (filter/search, layout) left to planner.

### Claude's Discretion
- deck-plan.md SCQA frontmatter format (YAML keys, structure)
- Pyramid validation warning format and placement in deck-plan.md
- Action title examples and anti-patterns in component-catalog.md
- copilot-instructions.md internal structure and organization
- Gallery badge styling and label content

### Deferred Ideas (OUT OF SCOPE)
- Gallery filter/search functionality -- could be a Phase 12+ enhancement if static badges prove insufficient
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| CONSULT-01 | SCQA narrative scaffolding -- strategist structures presentations using SCQA framework, deck-plan.md includes SCQA markers | SCQA methodology research + strategist execution flow extension pattern |
| CONSULT-02 | Pyramid Principle validation -- strategist checks top-down logic, flags titles without verbs, validates MECE groupings, outputs warnings | Pyramid/MECE methodology research + advisory warning pattern |
| CONSULT-04 | Action title enforcement -- component catalog, strategist prompts, and validation all require complete-sentence action titles | Existing design-principles.md action title section + catalog slot extension pattern |
| CONSULT-06 | Slide count guidance per audience -- strategist applies recommended ranges and warns if deck-plan exceeds | Audience-presets.md already has ranges; wire into strategist Step 5 |
| PLAT-01 | copilot-instructions.md -- GitHub Copilot CLI equivalent of CLAUDE.md framework teaching | Verified `.github/copilot-instructions.md` convention via GitHub docs |
| PLAT-08 | Gallery UX for component selection -- enhanced gallery with type badges and labels | All templates have `data-component` attributes; gallery uses vanilla HTML/CSS/JS |
</phase_requirements>

## Project Constraints (from CLAUDE.md)

- **No build step required:** AI generates HTML directly from templates -- copilot-instructions.md must teach this workflow
- **Platform agnostic:** No Claude Code-specific features in core framework -- copilot-instructions.md is the platform expansion
- **Self-contained output:** Single HTML files, offline-capable
- **German-first:** All default content and examples in German
- **Consulting quality:** McKinsey/BCG-level output standards
- **BEM-lite naming:** `comp-{name}`, `comp-{name}__{element}`
- **Subagent format:** YAML frontmatter (name, description, tools, model) + XML body (role, execution_flow, success_criteria)

## Architecture Patterns

### Files to Modify

```
.claude/agents/presentation-strategist.md    # Add SCQA/Pyramid/action-title/slide-count steps
.claude/skills/build-presentation/references/
  component-catalog.md                        # Add action title guidance per component
tools/gallery.html                            # Add component type badges + labels
```

### Files to Create

```
.github/
  copilot-instructions.md                     # New file -- GitHub Copilot CLI framework teaching
```

### Pattern 1: Strategist Execution Flow Extension

**What:** The strategist currently has 5 steps (Read Inputs, Apply Audience Preset, Design Narrative Arc, Write deck-plan.md, Validate Against Audience Rules). SCQA extraction fits after Step 1 (it needs the brief). Pyramid validation, action title checks, and slide count warnings extend Step 5 (validation).

**Recommended new flow:**
```yaml
Step 1: Read Inputs (existing)
Step 2: Extract SCQA Narrative (NEW -- CONSULT-01)
  - Identify Situation, Complication, Question, Answer from brief
  - Map each to presentation phases
Step 3: Apply Audience Preset (existing, renumbered)
Step 4: Design Narrative Arc (existing, renumbered)
  - Map slides to SCQA phases (NEW addition)
Step 5: Write deck-plan.md (existing, renumbered)
  - Add SCQA frontmatter block (NEW addition)
  - Add SCQA phase markers per slide (NEW addition)
Step 6: Validate (existing Step 5, extended)
  - Existing audience rule checks
  - NEW: Pyramid Principle top-down logic check (CONSULT-02)
  - NEW: MECE grouping validation (CONSULT-02)
  - NEW: Action title enforcement -- flag topic labels (CONSULT-04)
  - NEW: Slide count range warning (CONSULT-06)
```

### Pattern 2: SCQA Frontmatter Format (Claude's Discretion)

**Recommended YAML structure in deck-plan.md:**
```yaml
---
title: "Presentation Title"
audience: "c-suite"
theme: "default"
total_slides: 10
estimated_duration: "20 minutes"
scqa:
  situation: "Brief description of the current state/context"
  complication: "What changed, what's the tension or problem"
  question: "The central question this presentation answers"
  answer: "The key recommendation or conclusion"
---
```

**Per-slide SCQA phase markers:**
```markdown
## Slide 3: Revenue grew 15% driven by APAC expansion

- **Component:** metrics
- **SCQA phase:** situation
- **Content:** ...
```

**Why this format:** YAML frontmatter is already the established pattern in deck-plan.md. Adding a `scqa` key with four sub-keys is minimal, parseable, and editable. Per-slide `SCQA phase` field lets users see the narrative mapping at a glance.

### Pattern 3: Pyramid Validation Warning Format (Claude's Discretion)

**Recommended format -- warnings block after the slide list:**
```markdown
---

## Validation Warnings

> **Pyramid Principle:**
> - Warning: Slides 4-7 are not MECE -- "Marktanalyse" and "Wettbewerbsanalyse" overlap in scope
> - Warning: Slide 5 title "Overview" is a topic label, not an action title. Suggested: "Three competitors dominate the DACH market"

> **Slide Count:**
> - Note: 18 slides exceeds C-Suite recommended range of 8-12. Consider consolidating or moving detail to appendix.

> **Action Titles:**
> - Slide 2: "Agenda" -- acceptable (structural slide, not content slide)
> - Slide 8: "Next Steps" -- topic label. Suggested: "Three actions required before Q3 launch"
```

**Why this format:** Using a dedicated section at the end keeps the slide-by-slide plan clean while making warnings visible and actionable. Blockquote formatting visually distinguishes warnings from plan content. The user reads the plan first, then sees validation feedback.

### Pattern 4: Component Catalog Action Title Guidance

**What:** Add an "Action title" line to each component's section in component-catalog.md. This goes after the existing "Required slots" line.

**Example for metrics component:**
```markdown
- **Action title guidance:** State the insight the numbers prove. Good: "Revenue grew 15% driven by APAC expansion". Bad: "Key Metrics", "Revenue Overview".
```

**Per-component guidance varies:**
- **title:** Hero text IS the action title -- state the core message
- **section-break:** Exception -- use short topic labels (2-4 words), not action titles
- **agenda:** Exception -- use "Agenda" or equivalent structural label
- **contact:** Exception -- use name or "Kontakt" structural label
- **All other components:** Action title required -- complete sentence stating the slide's insight

### Pattern 5: copilot-instructions.md Structure (Claude's Discretion)

**Recommended structure (~250 lines):**
```markdown
# Presentation Builder Framework

## How It Works
[Framework overview -- single-file HTML, reveal.js, CSS tokens]

## Component Library
[Quick reference table of all components with use-when and key slots]

## Theme System
[Token override system, three bundled themes]

## Audience Presets
[Six audience types with slide count, density, font rules]

## Project Structure
[projects/{name}/ convention]

## Key Conventions
[German-first, BEM-lite, master layer, no build step]

## Consulting Methodology
[SCQA framework, Pyramid Principle, action titles]

## Building a Presentation
[Step-by-step: create project folder, write brief.md, generate presentation.html]
```

**Key difference from CLAUDE.md:** Copilot has no subagent pipeline. The instructions teach Copilot to generate `presentation.html` directly, combining strategist + builder logic in one pass. Include SCQA/Pyramid methodology inline so Copilot applies consulting structure without a separate strategist step.

### Pattern 6: Gallery Badge Implementation

**What:** Add component type badges to each slide card in gallery.html.

**Technical approach:**
- Gallery currently creates cards with iframes pointing to `PRESENTATION#/{slideIndex}`
- Iframes load the actual presentation slides which have `data-component` attributes
- Cross-origin iframe access works because gallery and presentation are same-origin (local server)
- After iframe loads, read `data-component` from the first `<section>` inside the iframe
- Display as a badge overlay on the card

**Recommended CSS badge styling:**
```css
.slide-card__badge {
  display: inline-block;
  padding: 2px 8px;
  font-size: 0.75rem;
  font-weight: 500;
  background: #e8f0fe;
  color: #1a73e8;
  border-radius: 4px;
  text-transform: lowercase;
}
```

**Badge placement:** Inside the `.slide-label` area, next to the slide number. Shows component type (e.g., "metrics", "timeline", "two-column").

**Fallback:** If iframe content cannot be read (cross-origin or loading delay), show "Slide N" without badge -- graceful degradation.

### Anti-Patterns to Avoid

- **Blocking validation:** D-02 explicitly states warnings are advisory, not blocking. The strategist must never refuse to generate a deck-plan because of Pyramid violations.
- **Redundant builder checks:** D-03 states the builder trusts the plan. Do not add action title validation to the builder subagent.
- **Copilot subagent patterns:** copilot-instructions.md must NOT reference Claude-specific features (subagents, MCP, skills). It teaches the framework directly.
- **Gallery filter complexity:** Deferred to Phase 12+. Only add badges and labels, not search/filter.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| SCQA extraction | Custom NLP parsing | Strategist prompt engineering in markdown | The LLM IS the parser -- SCQA extraction is a prompt instruction, not code |
| Pyramid validation | Code-based logic analyzer | Strategist instructions with example patterns | Validation is heuristic (does title have a verb?), not algorithmic |
| Action title detection | Regex-based title validator | Strategist prompt with good/bad examples | Topic label vs action title is semantic, not syntactic |
| Component type in gallery | Manual component registry | `data-component` attribute already on all templates | Every template already has this -- just read it from the iframe |

**Key insight:** This phase is almost entirely prompt engineering and documentation. The "intelligence" is in the strategist's instructions, not in code. The only code change is the gallery badge CSS/JS (~30 lines).

## Common Pitfalls

### Pitfall 1: Strategist Instruction Bloat
**What goes wrong:** Adding SCQA + Pyramid + action titles + slide count warnings makes the strategist file too long. The LLM truncates or ignores later instructions.
**Why it happens:** Each consulting methodology adds substantial instruction text.
**How to avoid:** Keep each new step concise (10-15 lines max). Use bullet lists, not paragraphs. Put detailed examples in reference files (design-principles.md, component-catalog.md), not in the strategist.
**Warning signs:** Strategist file exceeds 300 lines. Sub-steps have more than 5 bullet points.

### Pitfall 2: SCQA Forcing on Non-Consulting Decks
**What goes wrong:** Strategist forces SCQA structure on simple internal updates or workshop decks where narrative scaffolding is overkill.
**Why it happens:** SCQA is always applied regardless of audience type.
**How to avoid:** Make SCQA scaffolding conditional. For Internal and Workshop audiences, the strategist should note "SCQA: not applicable (internal/workshop format)" in frontmatter. Only C-Suite, Stakeholder, Sales, and Technical decks benefit from explicit SCQA.
**Warning signs:** Internal 5-slide update has forced Situation-Complication-Question-Answer phases.

### Pitfall 3: Action Title Exceptions Not Documented
**What goes wrong:** The strategist flags every slide title, including structural slides (title, section-break, agenda, contact) that legitimately use topic labels.
**Why it happens:** "All titles must be action titles" is applied without exceptions.
**How to avoid:** Document explicit exceptions: title slides use hero statements (action title variant), section-breaks use short labels, agenda uses "Agenda", contact uses name/structural label. Only content slides require full-sentence action titles.
**Warning signs:** Validation warnings on every structural slide.

### Pitfall 4: copilot-instructions.md Becomes Stale
**What goes wrong:** copilot-instructions.md is created but diverges from CLAUDE.md as the framework evolves.
**Why it happens:** Two files teaching the same framework with no sync mechanism.
**How to avoid:** Add a comment header in copilot-instructions.md noting it mirrors CLAUDE.md and must be updated when the framework changes. Include a "Last synced" date.
**Warning signs:** Component count mismatch, missing new features.

### Pitfall 5: Gallery iframe Cross-Origin Issues
**What goes wrong:** `iframe.contentDocument` returns null when gallery is opened via `file://` protocol.
**Why it happens:** Browser same-origin policy blocks file:// iframe access.
**How to avoid:** Gallery already warns "Open via local server (npx serve) -- file:// won't load iframes". Badge extraction should have a try/catch fallback. If reading fails, show slide number only.
**Warning signs:** Badges work on local server but not via file:// open.

## Code Examples

### SCQA Extraction Step (Strategist Instruction)

```markdown
## Step 2: Extract SCQA Narrative

From the brief, identify the four SCQA elements:

- **Situation:** What is the agreed-upon context? (Current state, shared knowledge)
- **Complication:** What changed or what is the tension? (Problem, opportunity, threat)
- **Question:** What is the central question this presentation answers?
- **Answer:** What is the key recommendation or conclusion?

Write these into the deck-plan.md frontmatter under a `scqa:` key. If the brief does not contain a clear complication (e.g., internal updates, workshops), write `scqa: not-applicable` and skip SCQA phase mapping.

For each content slide in Step 4, assign an `SCQA phase:` field:
- `situation` -- slides establishing context
- `complication` -- slides showing the problem/tension
- `question` -- slides framing the decision (often implicit, may be zero slides)
- `answer` -- slides presenting the recommendation and evidence
```

### Action Title Guidance (Component Catalog Addition)

```markdown
- **Action title guidance:** State what the metrics prove, not what they are.
  Good: "Umsatz stieg um 15% durch APAC-Expansion"
  Bad: "Kennzahlen", "Umsatzuebersicht"
```

### Gallery Badge JavaScript

```javascript
// After iframe loads, extract component type
iframe.addEventListener('load', () => {
  try {
    const doc = iframe.contentDocument;
    if (doc) {
      const section = doc.querySelector('section[data-component]');
      if (section) {
        const type = section.getAttribute('data-component');
        const badge = document.createElement('span');
        badge.className = 'slide-card__badge';
        badge.textContent = type;
        label.prepend(badge);
      }
    }
  } catch (e) {
    // Cross-origin or loading error -- degrade gracefully
  }
});
```

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Manual verification (no automated test framework in project) |
| Config file | none |
| Quick run command | Manual: open gallery in browser, generate test deck |
| Full suite command | Manual: verify all 6 requirements against success criteria |

### Phase Requirements to Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| CONSULT-01 | Strategist writes SCQA markers in deck-plan.md frontmatter | manual | Generate a test deck, inspect deck-plan.md for `scqa:` key | N/A |
| CONSULT-02 | Strategist outputs Pyramid/MECE validation warnings | manual | Generate a deck with intentional topic-label titles, check for warnings | N/A |
| CONSULT-04 | Component catalog has action title guidance, strategist flags topic labels | manual | Read component-catalog.md for "Action title guidance" per component | N/A |
| CONSULT-06 | Strategist warns when slide count exceeds audience range | manual | Generate C-Suite deck with 15+ slides, check for warning | N/A |
| PLAT-01 | copilot-instructions.md exists with framework teaching content | manual | `cat .github/copilot-instructions.md` -- verify sections present | N/A |
| PLAT-08 | Gallery shows component type badges on slide cards | manual | Open gallery.html via local server, verify badges visible | N/A |

### Sampling Rate
- **Per task commit:** Read modified files, verify structural correctness
- **Per wave merge:** Generate a test presentation using the updated strategist
- **Phase gate:** All 6 requirements verified via manual inspection

### Wave 0 Gaps
None -- this phase modifies markdown files and one HTML file. No test framework needed. Verification is structural (do the files contain the required sections?) and functional (does the strategist produce correct output when invoked?).

## Sources

### Primary (HIGH confidence)
- Project files: `presentation-strategist.md`, `component-catalog.md`, `audience-presets.md`, `design-principles.md`, `gallery.html` -- direct inspection of current codebase
- GitHub Docs: copilot-instructions.md convention at `.github/copilot-instructions.md` -- [GitHub Docs](https://docs.github.com/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot)

### Secondary (MEDIUM confidence)
- SCQA framework methodology: [Management Consulted](https://managementconsulted.com/scqa-framework/), [Analytic Storytelling](https://analytic-storytelling.com/scqa-what-is-it-how-does-it-work-and-how-can-it-help-me/)
- Pyramid Principle / MECE: [McKinsey Alumni](https://www.mckinsey.com/alumni/news-and-events/global-news/alumni-news/barbara-minto-mece-i-invented-it-so-i-get-to-say-how-to-pronounce-it), [StrategyU](https://strategyu.co/structure-your-ideas-pyramid-principle-part-1/)

### Tertiary (LOW confidence)
- None -- all findings verified against codebase or official sources

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - No new libraries; this phase is markdown and ~30 lines of vanilla JS/CSS
- Architecture: HIGH - All modification targets inspected, patterns verified in codebase
- Pitfalls: HIGH - Based on direct analysis of existing code structure and consulting methodology constraints

**Research date:** 2026-03-28
**Valid until:** 2026-04-28 (stable -- markdown/documentation phase, no dependency drift risk)
