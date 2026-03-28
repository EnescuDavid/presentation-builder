# Phase 13: Documentation & Compliance - Research

**Researched:** 2026-03-28
**Domain:** EAA / EN 301 549 / WCAG 2.1 compliance documentation for HTML presentations
**Confidence:** HIGH

## Summary

Phase 13 is a documentation-only phase. No code is written -- two Markdown files are created in `docs/` that map the framework's existing accessibility features to European Accessibility Act requirements. The EAA has been in force since June 28, 2025. It references EN 301 549 v3.2.1 as the harmonised standard, which in turn incorporates WCAG 2.1 Level A and AA success criteria by reference for web content (Section 9) and adapts them for non-web documents (Section 10).

The framework already implements substantial accessibility features across Phases 7, 10, and 12: semantic color tokens, ARIA landmarks on all 21 templates, alt text slots on visual components, keyboard focus indicators, WCAG contrast validation tool, and accessible HTML export. The compliance checklist maps these existing features to specific WCAG criteria and honestly documents gaps where compliance depends on content authors.

**Primary recommendation:** Organize `docs/eaa-compliance.md` by WCAG 2.1 principle (Perceivable, Operable, Understandable, Robust) with per-criterion rows mapping to specific framework features. Create `docs/presentation-checklist.md` as a copy-and-fill template grouped by content author tasks (Images, Charts, Text, Navigation, Colors).

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
No locked decisions -- all areas are at Claude's discretion.

### Claude's Discretion
- **D-01:** Organize by WCAG 2.1 criterion (1.1.1, 1.3.1, etc.) since these are the testable requirements EN 301 549 references. Each row maps: WCAG criterion -> framework feature that satisfies it -> status (automated/manual/partial/N-A). Markdown table format in `docs/eaa-compliance.md`.
- **D-02:** Group criteria by WCAG principle (Perceivable, Operable, Understandable, Robust) with sub-sections per guideline. Include an executive summary table at the top showing pass/fail counts per principle.
- **D-03:** Markdown checklist template at `docs/presentation-checklist.md`. Users copy it per deck and check items manually. Format: `- [ ] [Criterion]: [What to verify]` grouped by category (Images, Charts, Text, Navigation, Colors).
- **D-04:** Include both automated checks (reference tool commands like `node tools/check-contrast.js`) and manual checks (e.g., "verify alt text is meaningful, not just filename"). Each item has a clear pass/fail instruction.
- **D-05:** Focus on EN 301 549 Section 9 (Web) and Section 10 (Non-web documents) -- the digital content requirements. Organizational requirements (training, procurement) are noted as out-of-scope with a brief explanation.
- **D-06:** Honestly document gaps -- where the framework provides partial coverage or where compliance depends on the content author. No false "fully compliant" claims.

### Deferred Ideas (OUT OF SCOPE)
None.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| A11Y-07 | European Accessibility Act compliance checklist -- document mapping framework features to EAA requirements, per-presentation checklist | WCAG 2.1 A+AA criteria enumerated below; framework feature inventory from Phase 10 and 12 verifications; EN 301 549 Section 9/10 scope defined |
</phase_requirements>

## Standard Stack

This phase creates only Markdown documentation files. No libraries are needed.

### Core
| Tool | Purpose | Why Standard |
|------|---------|--------------|
| Markdown | Documentation format | Matches existing `docs/` directory pattern (german-typography.md, speaker-notes.md) |

### Supporting
None -- pure documentation phase.

## Architecture Patterns

### Document Structure

```
docs/
├── german-typography.md        # Existing
├── speaker-notes.md            # Existing
├── eaa-compliance.md           # NEW: Framework compliance mapping
└── presentation-checklist.md   # NEW: Per-deck verification template
```

### Pattern 1: EAA Compliance Document Structure

**What:** A structured Markdown document mapping EN 301 549 / WCAG 2.1 criteria to framework features.

**Structure:**
```markdown
# EAA Compliance Mapping

## Scope
- EN 301 549 v3.2.1, Sections 9 (Web) and 10 (Non-web documents)
- Maps to WCAG 2.1 Level A and AA success criteria
- Out of scope: Sections 5-8 (hardware, voice, video), 11 (software), 12-13 (docs/services)

## Executive Summary
| Principle | Applicable | Framework-Covered | Author-Dependent | N/A |
|-----------|-----------|-------------------|-------------------|-----|
| Perceivable | X | Y | Z | W |
| ... | | | | |

## 1. Perceivable
### 1.1 Text Alternatives
#### 1.1.1 Non-text Content (Level A)
- **EN 301 549 ref:** 9.1.1.1 / 10.1.1.1
- **Framework feature:** Alt text slots on all visual components (chart, mermaid, harvey-balls, framework, team, image-full-bleed)
- **Status:** PARTIAL -- framework provides slots; content author must fill meaningful descriptions
- **Verified by:** Phase 10 verification (A11Y-03)
```

### Pattern 2: Per-Presentation Checklist Structure

**What:** A copy-and-fill Markdown template with checkboxes grouped by content author task.

**Structure:**
```markdown
# Presentation Accessibility Checklist

**Presentation:** [name]
**Date:** [date]
**Checked by:** [name]

## Images & Visual Content
- [ ] All `<img>` elements have descriptive `alt` text (not filename)
- [ ] Chart canvas elements have meaningful `aria-label` describing the data trend
- [ ] Decorative images use `alt=""` or `role="presentation"`

## Color & Contrast
- [ ] Run `node tools/check-contrast.js --theme [name]` -- all pairs pass
- [ ] Information is not conveyed by color alone (use shape, text, pattern)

## Text & Structure
...
```

### Anti-Patterns to Avoid
- **Claiming "fully EAA compliant":** The framework provides infrastructure; compliance depends on how content authors use it. Always say "supports compliance" not "ensures compliance."
- **Listing irrelevant WCAG criteria without N/A marking:** Criteria like 1.2.x (audio/video) don't apply to static HTML slides. Mark them N/A with a brief reason rather than omitting them silently.
- **Copying WCAG text verbatim without framework-specific context:** Each criterion must reference the specific framework file, tool, or template that addresses it.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| WCAG criteria enumeration | Custom list from memory | Official WCAG 2.1 spec (w3.org/TR/WCAG21) | 50 A+AA criteria -- easy to miss one |
| EN 301 549 section mapping | Guessing section numbers | EN 301 549 v3.2.1 Section 9 = WCAG web, Section 10 = WCAG non-web documents | Numbering scheme differs from WCAG |

## Common Pitfalls

### Pitfall 1: Overstating Framework Coverage

**What goes wrong:** Document claims the framework "ensures" compliance when it only provides infrastructure (slots, tools, tokens). Content authors must still write good alt text, choose appropriate colors, etc.
**Why it happens:** Natural tendency to present the framework favorably.
**How to avoid:** Use three-tier status: AUTOMATED (framework handles it), PARTIAL (framework provides slot/tool, author must use correctly), N/A (not applicable to presentations).
**Warning signs:** Any row without a specific framework file reference is probably overstated.

### Pitfall 2: Ignoring Non-Web Document Scope

**What goes wrong:** Only mapping to Section 9 (Web) when HTML presentations distributed as files also fall under Section 10 (Non-web documents).
**Why it happens:** Developers think HTML = web only.
**How to avoid:** Include both Section 9 and Section 10 references. Note that the accessible HTML export (`tools/export-accessible.js`) specifically addresses Section 10 by producing a linear document without reveal.js framework overhead.
**Warning signs:** No Section 10 references in the document.

### Pitfall 3: Missing the Author-Dependent Items in Checklist

**What goes wrong:** Per-presentation checklist only covers automated checks, missing manual content quality checks.
**Why it happens:** Automated checks are easy to list; manual ones require understanding what content authors actually need to verify.
**How to avoid:** For every PARTIAL status item in the compliance doc, add a corresponding manual check item in the presentation checklist.
**Warning signs:** Checklist has fewer than 15 items (real presentations need 20-30 checks).

## WCAG 2.1 A+AA Criteria -- Complete Reference for Mapping

The following is the complete list of WCAG 2.1 Level A and AA success criteria that must be addressed in the compliance document. Each needs a status determination for the presentation framework context.

### 1. Perceivable

**1.1 Text Alternatives**
- 1.1.1 Non-text Content (A) -- RELEVANT: images, charts, diagrams, Harvey balls

**1.2 Time-based Media**
- 1.2.1 Audio-only and Video-only (A) -- N/A: no audio/video in framework
- 1.2.2 Captions (Prerecorded) (A) -- N/A
- 1.2.3 Audio Description or Media Alternative (A) -- N/A
- 1.2.4 Captions (Live) (AA) -- N/A
- 1.2.5 Audio Description (Prerecorded) (AA) -- N/A

**1.3 Adaptable**
- 1.3.1 Info and Relationships (A) -- RELEVANT: heading hierarchy, ARIA roles, semantic HTML
- 1.3.2 Meaningful Sequence (A) -- RELEVANT: DOM order matches visual order
- 1.3.3 Sensory Characteristics (A) -- RELEVANT: instructions not relying on shape/color alone
- 1.3.4 Orientation (AA) -- RELEVANT: presentations should work in landscape and portrait
- 1.3.5 Identify Input Purpose (AA) -- N/A: no form inputs in presentations

**1.4 Distinguishable**
- 1.4.1 Use of Color (A) -- RELEVANT: information not conveyed by color alone
- 1.4.2 Audio Control (A) -- N/A: no audio
- 1.4.3 Contrast (Minimum) (AA) -- RELEVANT: 4.5:1 ratio, checked by tools/check-contrast.js
- 1.4.4 Resize Text (AA) -- RELEVANT: text should remain readable at 200% zoom
- 1.4.5 Images of Text (AA) -- RELEVANT: use real text, not text-as-image
- 1.4.10 Reflow (AA) -- PARTIAL: presentations are fixed-layout by design (reveal.js)
- 1.4.11 Non-text Contrast (AA) -- RELEVANT: UI components and graphical objects at 3:1
- 1.4.12 Text Spacing (AA) -- RELEVANT: content should not break with increased text spacing
- 1.4.13 Content on Hover or Focus (AA) -- RELEVANT if tooltips/popovers are used

### 2. Operable

**2.1 Keyboard Accessible**
- 2.1.1 Keyboard (A) -- RELEVANT: reveal.js keyboard navigation
- 2.1.2 No Keyboard Trap (A) -- RELEVANT: no trapping in fragments/slides
- 2.1.4 Character Key Shortcuts (A) -- RELEVANT: reveal.js uses single-key shortcuts

**2.2 Enough Time**
- 2.2.1 Timing Adjustable (A) -- PARTIAL: auto-advance is optional in reveal.js
- 2.2.2 Pause, Stop, Hide (A) -- RELEVANT: CSS animations must be pausable

**2.3 Seizures and Physical Reactions**
- 2.3.1 Three Flashes (A) -- RELEVANT: animations must not flash more than 3 times/sec

**2.4 Navigable**
- 2.4.1 Bypass Blocks (A) -- RELEVANT: slide navigation provides bypass mechanism
- 2.4.2 Page Titled (A) -- RELEVANT: HTML title element
- 2.4.3 Focus Order (A) -- RELEVANT: tab order within slides
- 2.4.4 Link Purpose (A) -- RELEVANT: link text must be descriptive
- 2.4.5 Multiple Ways (AA) -- RELEVANT: slide overview, keyboard nav, URL hash
- 2.4.6 Headings and Labels (AA) -- RELEVANT: h1/h2 hierarchy verified in Phase 10
- 2.4.7 Focus Visible (AA) -- RELEVANT: focus indicators verified in Phase 10

**2.5 Input Modalities**
- 2.5.1 Pointer Gestures (A) -- RELEVANT: reveal.js touch/swipe
- 2.5.2 Pointer Cancellation (A) -- RELEVANT: click on up-event
- 2.5.3 Label in Name (A) -- RELEVANT: accessible names match visible labels
- 2.5.4 Motion Actuation (A) -- N/A: no motion-based interaction

### 3. Understandable

**3.1 Readable**
- 3.1.1 Language of Page (A) -- RELEVANT: `lang="de"` on html element (in skeleton)
- 3.1.2 Language of Parts (AA) -- RELEVANT: mixed-language content needs `lang` attributes

**3.2 Predictable**
- 3.2.1 On Focus (A) -- RELEVANT: no context change on focus
- 3.2.2 On Input (A) -- N/A: no form inputs
- 3.2.3 Consistent Navigation (AA) -- RELEVANT: master layer provides consistent navigation
- 3.2.4 Consistent Identification (AA) -- RELEVANT: same components behave consistently

**3.3 Input Assistance**
- 3.3.1 Error Identification (A) -- N/A: no form submissions
- 3.3.2 Labels or Instructions (A) -- N/A: no form inputs
- 3.3.3 Error Suggestion (AA) -- N/A: no form inputs
- 3.3.4 Error Prevention (AA) -- N/A: no legal/financial data submission

### 4. Robust

**4.1 Compatible**
- 4.1.1 Parsing (A) -- RELEVANT: valid HTML (deprecated in WCAG 2.2 but still in 2.1)
- 4.1.2 Name, Role, Value (A) -- RELEVANT: ARIA roles and labels on all components
- 4.1.3 Status Messages (AA) -- PARTIAL: no live regions but reveal.js slide changes

## Framework Feature Inventory (for criterion mapping)

Features already built and verified that the compliance document must reference:

| Feature | Location | Phase | Verification |
|---------|----------|-------|--------------|
| 28 semantic color tokens including state colors | `tokens/base.css` | 7 | A11Y-05 |
| ARIA landmarks (`role="group"`, `aria-label`) on all 21 templates | `templates/*.html` | 10 | A11Y-02 -- Phase 10 verification |
| Alt text slots on visual components (chart, mermaid, harvey-balls, framework, team, image-full-bleed) | `templates/*.html` | 10 | A11Y-03 -- Phase 10 verification |
| Keyboard focus indicators (`:focus-visible`, 3px accent outline) | `themes/_base.css:409-422` | 10 | A11Y-06 -- Phase 10 verification |
| Heading hierarchy (h1 only on title, h2 on others) | `templates/*.html` | 10 | Phase 10 verification truth #7 |
| `lang="de"` on html element | `templates/_skeleton.html` | 1 | Exists since v1.0 |
| German ARIA labels on all templates | `templates/*.html` | 10 | D-09 decision |
| `role="group"` (not `region`) to avoid landmark pollution | `templates/*.html` | 10 | D-10 decision |
| WCAG contrast validation tool (4.5:1 normal, 3:1 large) | `tools/check-contrast.js` | 12 | A11Y-01 -- Phase 12 verification |
| Accessible HTML export (linear, no reveal.js, chart descriptions) | `tools/export-accessible.js` | 12 | A11Y-04 -- Phase 12 verification |
| Print CSS (@media print) with forced backgrounds | `themes/_base.css:362-402` | 10 | FIX-08 -- Phase 10 verification |
| Audience presets with font size overrides | `themes/_base.css:285-354` | 10 | CONSULT-05 -- Phase 10 verification |
| `overflow-wrap: break-word` and `hyphens: auto` on containers | `tokens/base.css` | 1 | German text handling convention |
| BEM-lite CSS naming convention | `templates/*.html` | 1 | Consistent semantic class names |

## Code Examples

### Existing Documentation Format (from docs/german-typography.md)

```markdown
# German Typography Conventions

Reference for AI assistants generating German-language presentations.
Apply these rules automatically when `lang="de"` is set on the HTML document.

## Quotation Marks (Anf&uuml;hrungszeichen)

German uses lower-opening and upper-closing quotation marks:
- Primary: &bdquo;Zitat&ldquo; (U+201E opening, U+201C closing)
```

This establishes the pattern: title, brief intro explaining purpose and audience, then organized sections with code examples where applicable.

### Compliance Row Format (recommended)

```markdown
#### 1.1.1 Non-text Content (Level A)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.1.1.1 (Web) / 10.1.1.1 (Non-web) |
| Status | PARTIAL |
| Framework feature | Alt text slots on all visual components |
| Files | `templates/chart.html`, `templates/image-full-bleed.html`, etc. |
| Author responsibility | Write meaningful alt text describing content, not filename |
| Automated check | Grep for empty `alt=""` on non-decorative images |
| Verified | Phase 10 -- A11Y-03 |
```

### Checklist Item Format (recommended)

```markdown
## Images & Visual Content

- [ ] **Alt text quality:** Every `<img>` has `alt` text describing the image content (not the filename). Decorative images use `alt=""`.
  - *Pass:* All images have descriptive alt text or are marked decorative
  - *Fail:* Any image has `alt="image1.png"` or missing alt attribute

- [ ] **Chart descriptions:** Every `<canvas>` chart element has an `aria-label` describing the data trend and key takeaway.
  - *Pass:* `aria-label="Umsatzentwicklung 2023-2025: +23% Wachstum"`
  - *Fail:* `aria-label="Balkendiagramm"` (too generic)
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| EN 301 549 v3.1.1 | EN 301 549 v3.2.1 | 2021 | Added WCAG 2.1 criteria (orientation, text spacing, etc.) |
| EAA not yet enforceable | EAA in force since June 28, 2025 | June 2025 | Compliance now legally required for products/services in EU market |
| WCAG 2.0 AA as baseline | WCAG 2.1 AA as baseline | 2021 (EN 301 549 v3.2.1) | 17 additional success criteria vs. WCAG 2.0 |
| EN 301 549 v3.2.1 | EN 301 549 v4.1.1 expected | 2026 (pending) | Will officially support EAA; current v3.2.1 is the operative standard today |

**Note on WCAG 2.2:** While WCAG 2.2 was published in October 2023, EN 301 549 v3.2.1 references WCAG 2.1. The updated EN 301 549 v4.1.1 (expected 2026) may reference WCAG 2.2. For now, WCAG 2.1 AA is the correct baseline per the harmonised standard.

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | No automated test framework in project |
| Config file | None |
| Quick run command | Manual file inspection |
| Full suite command | N/A |

### Phase Requirements to Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| A11Y-07 (doc existence) | `docs/eaa-compliance.md` exists with WCAG criterion rows | smoke | `test -f docs/eaa-compliance.md && grep -c "1.1.1" docs/eaa-compliance.md` | No -- Wave 0 |
| A11Y-07 (checklist existence) | `docs/presentation-checklist.md` exists with checkbox items | smoke | `test -f docs/presentation-checklist.md && grep -c "\- \[ \]" docs/presentation-checklist.md` | No -- Wave 0 |
| A11Y-07 (executive summary) | Compliance doc has executive summary table | smoke | `grep -c "Perceivable\|Operable\|Understandable\|Robust" docs/eaa-compliance.md` | No -- Wave 0 |

### Sampling Rate
- **Per task commit:** Verify file exists and contains expected sections
- **Per wave merge:** Full content review for accuracy
- **Phase gate:** Both files present with complete WCAG mapping

### Wave 0 Gaps
- None -- this is a documentation phase. Files are created directly; no test framework needed. Verification is by content inspection.

## Open Questions

1. **EN 301 549 v4.1.1 timing**
   - What we know: Expected in 2026 to officially support EAA
   - What's unclear: Exact publication date and whether it will reference WCAG 2.2
   - Recommendation: Document against v3.2.1 (current harmonised standard) and add a note about the pending update. This keeps the document accurate today.

2. **reveal.js reflow behavior (1.4.10)**
   - What we know: Presentations are fixed-layout by design; reveal.js scales slides to viewport
   - What's unclear: Whether reveal.js scaling satisfies the "reflow" requirement or if it's fundamentally incompatible
   - Recommendation: Mark as PARTIAL with honest explanation that fixed-layout presentation software has inherent limitations here, and reference the accessible HTML export as the alternative for reflow-dependent users.

## Environment Availability

Step 2.6: SKIPPED (no external dependencies identified). This phase creates only Markdown documentation files.

## Project Constraints (from CLAUDE.md)

- **German-first:** Documentation can be in English (framework docs pattern) but should reference German-language examples and German ARIA labels
- **No build step:** Documentation files are pure Markdown, consistent with existing docs/ pattern
- **Self-contained output:** Checklist template should be usable without any tools installed (manual checks work standalone)
- **Consulting quality:** Professional, accurate documentation with honest gap assessment

## Sources

### Primary (HIGH confidence)
- [WCAG 2.1 Specification](https://www.w3.org/TR/WCAG21/) -- complete A+AA criteria list
- Phase 10 Verification Report -- confirmed ARIA landmarks, alt text slots, keyboard focus, heading hierarchy
- Phase 12 Verification Report -- confirmed contrast tool, accessible export, title extraction

### Secondary (MEDIUM confidence)
- [EN 301 549 v3.2.1 (ETSI)](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf) -- Section 9/10 scope
- [Deque EN 301 549 Guide](https://www.deque.com/en-301-549-compliance/) -- Section 9 = WCAG web, Section 10 = non-web docs
- [Canada Digital Accessibility Toolkit](https://a11y.canada.ca/en/technical-summary-of-the-en-301-549-v321-2021/) -- EN 301 549 technical summary

### Tertiary (LOW confidence)
- EN 301 549 v4.1.1 timeline -- multiple sources indicate 2026 but no official publication date confirmed

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- documentation-only phase, no library decisions
- Architecture: HIGH -- follows established docs/ directory pattern; WCAG criteria list verified against official spec
- Pitfalls: HIGH -- common compliance documentation mistakes are well-documented in the accessibility community

**Research date:** 2026-03-28
**Valid until:** 2026-06-28 (90 days -- stable domain, EN 301 549 v4.1.1 may change landscape)
