# EAA Compliance Mapping -- Presentation Builder Framework

Reference document mapping the framework's accessibility features to European Accessibility Act (EAA) requirements via the harmonised standard EN 301 549 v3.2.1, which incorporates WCAG 2.1 Level A and AA success criteria by reference.

The EAA has been enforceable since **June 28, 2025**. Products and services placed on the EU market must meet the accessibility requirements defined in EN 301 549. An updated version (EN 301 549 v4.1.1) is expected in 2026 and may reference WCAG 2.2.

## Scope

This document covers:

- **EN 301 549 Section 9** -- Web content (presentations viewed in a browser)
- **EN 301 549 Section 10** -- Non-web documents (presentations distributed as HTML files)

**Out of scope:** Sections 5--8 (hardware, voice communication, video telephony, ICT with video capabilities), Section 11 (software-specific requirements), Sections 12--13 (documentation and support services). These sections address hardware, telecom, and native software requirements not applicable to an HTML presentation framework.

## Executive Summary

| Principle | Total Criteria | AUTOMATED | PARTIAL | N/A |
|-----------|---------------|-----------|---------|-----|
| Perceivable | 20 | 3 | 10 | 7 |
| Operable | 17 | 12 | 4 | 1 |
| Understandable | 10 | 4 | 1 | 5 |
| Robust | 3 | 1 | 2 | 0 |
| **Total** | **50** | **20** | **17** | **13** |

**Status definitions:**

- **AUTOMATED** -- Framework handles this without author action
- **PARTIAL** -- Framework provides infrastructure; author must use it correctly
- **N/A** -- Not applicable to HTML presentation framework

---

## 1. Perceivable

Information and user interface components must be presentable to users in ways they can perceive.

### 1.1 Text Alternatives

#### 1.1.1 Non-text Content (Level A)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.1.1.1 (Web) / 10.1.1.1 (Non-web) |
| Status | PARTIAL |
| Framework feature | Alt text slots on all visual components (`alt` on images, `aria-label` on canvas/chart/diagram containers) |
| Files | `templates/chart.html`, `templates/image-full-bleed.html`, `templates/mermaid-diagram.html`, `templates/harvey-balls.html`, `templates/framework.html`, `templates/team.html` |
| Author responsibility | Write meaningful alt text describing content and key takeaway -- not filename or generic label |
| Automated check | Grep for empty `alt=""` on non-decorative images: `grep -n 'alt=""' presentation.html` |
| Verified | Phase 10 -- A11Y-03 |

### 1.2 Time-based Media

#### 1.2.1 Audio-only and Video-only (Prerecorded) (Level A)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.1.2.1 (Web) / 10.1.2.1 (Non-web) |
| Status | N/A |
| Framework feature | Not applicable -- framework does not include audio or video content |
| Files | N/A |
| Author responsibility | None |
| Automated check | N/A |
| Verified | N/A |

#### 1.2.2 Captions (Prerecorded) (Level A)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.1.2.2 (Web) / 10.1.2.2 (Non-web) |
| Status | N/A |
| Framework feature | Not applicable -- no audio/video in framework |
| Files | N/A |
| Author responsibility | None |
| Automated check | N/A |
| Verified | N/A |

#### 1.2.3 Audio Description or Media Alternative (Prerecorded) (Level A)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.1.2.3 (Web) / 10.1.2.3 (Non-web) |
| Status | N/A |
| Framework feature | Not applicable -- no audio/video in framework |
| Files | N/A |
| Author responsibility | None |
| Automated check | N/A |
| Verified | N/A |

#### 1.2.4 Captions (Live) (Level AA)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.1.2.4 (Web) / 10.1.2.4 (Non-web) |
| Status | N/A |
| Framework feature | Not applicable -- no live audio/video |
| Files | N/A |
| Author responsibility | None |
| Automated check | N/A |
| Verified | N/A |

#### 1.2.5 Audio Description (Prerecorded) (Level AA)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.1.2.5 (Web) / 10.1.2.5 (Non-web) |
| Status | N/A |
| Framework feature | Not applicable -- no audio/video in framework |
| Files | N/A |
| Author responsibility | None |
| Automated check | N/A |
| Verified | N/A |

### 1.3 Adaptable

#### 1.3.1 Info and Relationships (Level A)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.1.3.1 (Web) / 10.1.3.1 (Non-web) |
| Status | AUTOMATED |
| Framework feature | Heading hierarchy (h1 on title slide only, h2 on content slides), ARIA roles (`role="group"`), semantic HTML structure across all 21 templates |
| Files | All `templates/*.html` |
| Author responsibility | None -- structure is enforced by templates |
| Automated check | N/A |
| Verified | Phase 10 -- A11Y-02 |

#### 1.3.2 Meaningful Sequence (Level A)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.1.3.2 (Web) / 10.1.3.2 (Non-web) |
| Status | AUTOMATED |
| Framework feature | DOM order matches visual reading order in all templates. Content flows top-to-bottom, left-to-right within each slide. |
| Files | All `templates/*.html` |
| Author responsibility | None -- template structure enforces reading order |
| Automated check | N/A |
| Verified | Phase 10 |

#### 1.3.3 Sensory Characteristics (Level A)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.1.3.3 (Web) / 10.1.3.3 (Non-web) |
| Status | PARTIAL |
| Framework feature | Framework does not use shape/color-only instructions in its templates or navigation |
| Files | All `templates/*.html` |
| Author responsibility | Ensure author-written content does not rely solely on sensory characteristics (e.g., "click the green button" or "see the chart on the left") |
| Automated check | N/A |
| Verified | Phase 10 |

#### 1.3.4 Orientation (Level AA)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.1.3.4 (Web) / 10.1.3.4 (Non-web) |
| Status | PARTIAL |
| Framework feature | reveal.js scales slides to viewport; presentations render in both landscape and portrait orientations |
| Files | `templates/_skeleton.html` |
| Author responsibility | None for standard use. Presentations are designed for landscape (16:9) but do not force a specific orientation. |
| Automated check | N/A |
| Verified | Phase 10 |

#### 1.3.5 Identify Input Purpose (Level AA)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.1.3.5 (Web) / 10.1.3.5 (Non-web) |
| Status | N/A |
| Framework feature | Not applicable -- no form inputs in presentation framework |
| Files | N/A |
| Author responsibility | None |
| Automated check | N/A |
| Verified | N/A |

### 1.4 Distinguishable

#### 1.4.1 Use of Color (Level A)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.1.4.1 (Web) / 10.1.4.1 (Non-web) |
| Status | PARTIAL |
| Framework feature | Harvey balls use fill level (not just color) to convey values. Framework components use shape, text, and position alongside color. |
| Files | `templates/harvey-balls.html`, `templates/chart.html` |
| Author responsibility | Ensure charts and data visualizations do not convey information by color alone -- add labels, patterns, or shapes |
| Automated check | N/A |
| Verified | Phase 10 |

#### 1.4.2 Audio Control (Level A)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.1.4.2 (Web) / 10.1.4.2 (Non-web) |
| Status | N/A |
| Framework feature | Not applicable -- no audio in framework |
| Files | N/A |
| Author responsibility | None |
| Automated check | N/A |
| Verified | N/A |

#### 1.4.3 Contrast (Minimum) (Level AA)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.1.4.3 (Web) / 10.1.4.3 (Non-web) |
| Status | AUTOMATED |
| Framework feature | WCAG contrast validation tool checks all theme color combinations against 4.5:1 (normal text) and 3:1 (large text) ratios |
| Files | `tools/check-contrast.js`, `tokens/base.css` |
| Author responsibility | None for theme colors. If custom colors are added beyond theme tokens, author should verify contrast. |
| Automated check | `node tools/check-contrast.js --theme {theme-name}` |
| Verified | Phase 12 -- A11Y-01 |

#### 1.4.4 Resize Text (Level AA)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.1.4.4 (Web) / 10.1.4.4 (Non-web) |
| Status | PARTIAL |
| Framework feature | reveal.js viewport scaling provides zoom-like behavior. Accessible HTML export (`tools/export-accessible.js`) supports native browser zoom. |
| Files | `templates/_skeleton.html`, `tools/export-accessible.js` |
| Author responsibility | None for standard use. For users who require 200% text zoom, provide the accessible HTML export. |
| Automated check | N/A |
| Verified | Phase 10, Phase 12 |

#### 1.4.5 Images of Text (Level AA)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.1.4.5 (Web) / 10.1.4.5 (Non-web) |
| Status | PARTIAL |
| Framework feature | All templates use real HTML text, not text rendered as images. Typography is controlled via CSS tokens. |
| Files | All `templates/*.html`, `tokens/base.css` |
| Author responsibility | Do not embed text in images. Use real HTML text for all readable content. |
| Automated check | N/A |
| Verified | Phase 10 |

#### 1.4.10 Reflow (Level AA)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.1.4.10 (Web) / 10.1.4.10 (Non-web) |
| Status | PARTIAL |
| Framework feature | Fixed-layout presentation software has inherent limitations -- reveal.js scales the entire slide rather than reflowing content. The accessible HTML export (`tools/export-accessible.js`) produces a linear document that supports native browser reflow. |
| Files | `tools/export-accessible.js` |
| Author responsibility | For users requiring reflow, provide the accessible HTML export alongside the presentation |
| Automated check | `node tools/export-accessible.js {presentation.html}` |
| Verified | Phase 12 -- A11Y-04 |

#### 1.4.11 Non-text Contrast (Level AA)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.1.4.11 (Web) / 10.1.4.11 (Non-web) |
| Status | PARTIAL |
| Framework feature | Framework UI elements (keyboard focus indicators at 3px accent outline) meet 3:1 contrast ratio against adjacent colors |
| Files | `themes/_base.css` (lines 409--422) |
| Author responsibility | Ensure custom graphical elements (icons, data visualization marks) meet 3:1 contrast ratio |
| Automated check | N/A |
| Verified | Phase 10 -- A11Y-06 |

#### 1.4.12 Text Spacing (Level AA)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.1.4.12 (Web) / 10.1.4.12 (Non-web) |
| Status | PARTIAL |
| Framework feature | CSS uses relative units (`rem`, `em`) and `overflow-wrap: break-word` with `hyphens: auto`. Content tolerates increased spacing in most cases. |
| Files | `tokens/base.css` |
| Author responsibility | Fixed slide dimensions may clip content with extremely increased text spacing. Provide accessible HTML export for users who need custom text spacing. |
| Automated check | N/A |
| Verified | Phase 1 (text handling CSS) |

#### 1.4.13 Content on Hover or Focus (Level AA)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.1.4.13 (Web) / 10.1.4.13 (Non-web) |
| Status | PARTIAL |
| Framework feature | Framework has no tooltips or popovers by default |
| Files | N/A |
| Author responsibility | If adding interactive hover/focus content, ensure it is dismissible (Escape key), hoverable (pointer can move to it), and persistent (stays visible until dismissed) |
| Automated check | N/A |
| Verified | N/A (no default interactive content) |

---

## 2. Operable

User interface components and navigation must be operable.

### 2.1 Keyboard Accessible

#### 2.1.1 Keyboard (Level A)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.2.1.1 (Web) / 10.2.1.1 (Non-web) |
| Status | AUTOMATED |
| Framework feature | reveal.js provides full keyboard navigation: arrow keys (slide navigation), Space (advance), Escape (overview mode), F (fullscreen), S (speaker view) |
| Files | `templates/_skeleton.html` |
| Author responsibility | None |
| Automated check | N/A |
| Verified | Phase 10 -- A11Y-06 |

#### 2.1.2 No Keyboard Trap (Level A)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.2.1.2 (Web) / 10.2.1.2 (Non-web) |
| Status | AUTOMATED |
| Framework feature | No keyboard traps in framework components. All slides and fragments are navigable with keyboard. Tab moves forward, Shift+Tab moves backward. |
| Files | `templates/_skeleton.html` |
| Author responsibility | None |
| Automated check | N/A |
| Verified | Phase 10 |

#### 2.1.4 Character Key Shortcuts (Level A)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.2.1.4 (Web) / 10.2.1.4 (Non-web) |
| Status | PARTIAL |
| Framework feature | reveal.js uses single-character shortcuts (arrow keys, Space, O, F, S). These are standard presentation shortcuts and cannot be remapped via framework configuration. |
| Files | `templates/_skeleton.html` |
| Author responsibility | None -- shortcuts are standard and expected for presentation software |
| Automated check | N/A |
| Verified | Phase 10 |

### 2.2 Enough Time

#### 2.2.1 Timing Adjustable (Level A)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.2.2.1 (Web) / 10.2.2.1 (Non-web) |
| Status | PARTIAL |
| Framework feature | Auto-advance (`autoSlide` in reveal.js config) is optional and not enabled by default. When enabled, users can pause with the reveal.js progress bar. |
| Files | `templates/_skeleton.html` |
| Author responsibility | If enabling auto-advance, ensure timing is adjustable or can be paused |
| Automated check | `grep "autoSlide" presentation.html` |
| Verified | Phase 10 |

#### 2.2.2 Pause, Stop, Hide (Level A)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.2.2.2 (Web) / 10.2.2.2 (Non-web) |
| Status | PARTIAL |
| Framework feature | CSS animations support `prefers-reduced-motion` media query via `tokens/animations.css`. Animations are decorative and do not auto-play continuously. |
| Files | `tokens/animations.css` |
| Author responsibility | Respect `prefers-reduced-motion` for any custom animations. Do not add continuously moving content. |
| Automated check | N/A |
| Verified | Phase 10 |

### 2.3 Seizures and Physical Reactions

#### 2.3.1 Three Flashes or Below Threshold (Level A)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.2.3.1 (Web) / 10.2.3.1 (Non-web) |
| Status | AUTOMATED |
| Framework feature | All framework animations (fadeUp, blurIn, slideL, slideR, scalePop, lineGrow) are smooth transitions well under 3 flashes per second |
| Files | `tokens/animations.css` |
| Author responsibility | None |
| Automated check | N/A |
| Verified | Phase 1 |

### 2.4 Navigable

#### 2.4.1 Bypass Blocks (Level A)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.2.4.1 (Web) / 10.2.4.1 (Non-web) |
| Status | AUTOMATED |
| Framework feature | reveal.js slide navigation (keyboard arrows, overview mode via O key) provides mechanism to bypass repeated content blocks (master layer) |
| Files | `templates/_skeleton.html` |
| Author responsibility | None |
| Automated check | N/A |
| Verified | Phase 10 |

#### 2.4.2 Page Titled (Level A)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.2.4.2 (Web) / 10.2.4.2 (Non-web) |
| Status | AUTOMATED |
| Framework feature | Skeleton template includes `<title>` element populated from `presentationConfig.title` |
| Files | `templates/_skeleton.html` |
| Author responsibility | None -- title is set via configuration |
| Automated check | `grep "<title>" presentation.html` |
| Verified | Phase 1 |

#### 2.4.3 Focus Order (Level A)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.2.4.3 (Web) / 10.2.4.3 (Non-web) |
| Status | AUTOMATED |
| Framework feature | Tab order follows DOM order within slides. Templates are structured so DOM order matches visual reading order. |
| Files | All `templates/*.html` |
| Author responsibility | None |
| Automated check | N/A |
| Verified | Phase 10 -- A11Y-06 |

#### 2.4.4 Link Purpose (In Context) (Level A)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.2.4.4 (Web) / 10.2.4.4 (Non-web) |
| Status | PARTIAL |
| Framework feature | Framework templates do not include links by default. Contact template has placeholder link slots. |
| Files | `templates/contact.html` |
| Author responsibility | Write descriptive link text. Avoid "click here" or bare URLs. |
| Automated check | N/A |
| Verified | Phase 10 |

#### 2.4.5 Multiple Ways (Level AA)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.2.4.5 (Web) / 10.2.4.5 (Non-web) |
| Status | AUTOMATED |
| Framework feature | Slide overview (O key), keyboard navigation (arrows), URL hash fragments (#/slide-number), and progress bar provide multiple ways to navigate |
| Files | `templates/_skeleton.html` |
| Author responsibility | None |
| Automated check | N/A |
| Verified | Phase 10 |

#### 2.4.6 Headings and Labels (Level AA)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.2.4.6 (Web) / 10.2.4.6 (Non-web) |
| Status | AUTOMATED |
| Framework feature | All templates enforce heading hierarchy: h1 only on title slide, h2 on content slides. No heading levels are skipped. |
| Files | All `templates/*.html` |
| Author responsibility | None |
| Automated check | N/A |
| Verified | Phase 10 |

#### 2.4.7 Focus Visible (Level AA)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.2.4.7 (Web) / 10.2.4.7 (Non-web) |
| Status | AUTOMATED |
| Framework feature | `:focus-visible` with 3px accent color outline on all interactive elements. Uses `:focus-visible` (not `:focus`) for keyboard-only indicators. |
| Files | `themes/_base.css` (lines 409--422) |
| Author responsibility | None |
| Automated check | N/A |
| Verified | Phase 10 -- A11Y-06 |

### 2.5 Input Modalities

#### 2.5.1 Pointer Gestures (Level A)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.2.5.1 (Web) / 10.2.5.1 (Non-web) |
| Status | AUTOMATED |
| Framework feature | reveal.js touch/swipe navigation provides simple single-pointer alternatives. No multipoint gestures required. |
| Files | `templates/_skeleton.html` |
| Author responsibility | None |
| Automated check | N/A |
| Verified | Phase 10 |

#### 2.5.2 Pointer Cancellation (Level A)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.2.5.2 (Web) / 10.2.5.2 (Non-web) |
| Status | AUTOMATED |
| Framework feature | reveal.js uses standard click behavior (up-event activation). No actions fire on pointer down. |
| Files | `templates/_skeleton.html` |
| Author responsibility | None |
| Automated check | N/A |
| Verified | Phase 10 |

#### 2.5.3 Label in Name (Level A)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.2.5.3 (Web) / 10.2.5.3 (Non-web) |
| Status | AUTOMATED |
| Framework feature | ARIA labels on all components match or contain the visible text content. German `aria-label` values correspond to visible German headings. |
| Files | All `templates/*.html` |
| Author responsibility | None |
| Automated check | N/A |
| Verified | Phase 10 -- A11Y-02 |

#### 2.5.4 Motion Actuation (Level A)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.2.5.4 (Web) / 10.2.5.4 (Non-web) |
| Status | N/A |
| Framework feature | Not applicable -- no motion-based interaction (shake, tilt) in framework |
| Files | N/A |
| Author responsibility | None |
| Automated check | N/A |
| Verified | N/A |

---

## 3. Understandable

Information and the operation of user interface must be understandable.

### 3.1 Readable

#### 3.1.1 Language of Page (Level A)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.3.1.1 (Web) / 10.3.1.1 (Non-web) |
| Status | AUTOMATED |
| Framework feature | Skeleton template sets `lang="de"` on the `<html>` element by default (German-first convention) |
| Files | `templates/_skeleton.html` |
| Author responsibility | None -- language is set in skeleton template. Change `lang` attribute if presenting in another language. |
| Automated check | `grep 'lang=' presentation.html \| head -1` |
| Verified | Phase 1 |

#### 3.1.2 Language of Parts (Level AA)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.3.1.2 (Web) / 10.3.1.2 (Non-web) |
| Status | PARTIAL |
| Framework feature | Framework supports `lang` attributes on any element but does not add them automatically for mixed-language content |
| Files | All `templates/*.html` |
| Author responsibility | Add `lang` attributes on foreign-language sections (e.g., `<span lang="en">stakeholder</span>` in German text) |
| Automated check | N/A |
| Verified | N/A |

### 3.2 Predictable

#### 3.2.1 On Focus (Level A)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.3.2.1 (Web) / 10.3.2.1 (Non-web) |
| Status | AUTOMATED |
| Framework feature | No context changes occur when elements receive focus. Focus indicators appear but no navigation or content changes are triggered. |
| Files | All `templates/*.html` |
| Author responsibility | None |
| Automated check | N/A |
| Verified | Phase 10 |

#### 3.2.2 On Input (Level A)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.3.2.2 (Web) / 10.3.2.2 (Non-web) |
| Status | N/A |
| Framework feature | Not applicable -- no form inputs in presentation framework |
| Files | N/A |
| Author responsibility | None |
| Automated check | N/A |
| Verified | N/A |

#### 3.2.3 Consistent Navigation (Level AA)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.3.2.3 (Web) / 10.3.2.3 (Non-web) |
| Status | AUTOMATED |
| Framework feature | Master layer provides consistent navigation across all slides: logo, footer bar, slide number, and reveal.js controls appear in the same position |
| Files | `templates/_skeleton.html` |
| Author responsibility | None |
| Automated check | N/A |
| Verified | Phase 1, Phase 10 |

#### 3.2.4 Consistent Identification (Level AA)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.3.2.4 (Web) / 10.3.2.4 (Non-web) |
| Status | AUTOMATED |
| Framework feature | Components use consistent BEM-lite naming (`comp-{name}`, `comp-{name}__{element}`) and identical behavior patterns across all uses |
| Files | All `templates/*.html` |
| Author responsibility | None |
| Automated check | N/A |
| Verified | Phase 1 |

### 3.3 Input Assistance

#### 3.3.1 Error Identification (Level A)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.3.3.1 (Web) / 10.3.3.1 (Non-web) |
| Status | N/A |
| Framework feature | Not applicable -- no form submissions in presentation framework |
| Files | N/A |
| Author responsibility | None |
| Automated check | N/A |
| Verified | N/A |

#### 3.3.2 Labels or Instructions (Level A)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.3.3.2 (Web) / 10.3.3.2 (Non-web) |
| Status | N/A |
| Framework feature | Not applicable -- no form inputs |
| Files | N/A |
| Author responsibility | None |
| Automated check | N/A |
| Verified | N/A |

#### 3.3.3 Error Suggestion (Level AA)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.3.3.3 (Web) / 10.3.3.3 (Non-web) |
| Status | N/A |
| Framework feature | Not applicable -- no form inputs |
| Files | N/A |
| Author responsibility | None |
| Automated check | N/A |
| Verified | N/A |

#### 3.3.4 Error Prevention (Legal, Financial, Data) (Level AA)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.3.3.4 (Web) / 10.3.3.4 (Non-web) |
| Status | N/A |
| Framework feature | Not applicable -- no legal/financial data submission |
| Files | N/A |
| Author responsibility | None |
| Automated check | N/A |
| Verified | N/A |

---

## 4. Robust

Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.

### 4.1 Compatible

#### 4.1.1 Parsing (Level A)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.4.1.1 (Web) / 10.4.1.1 (Non-web) |
| Status | PARTIAL |
| Framework feature | All templates use valid, well-formed HTML5. BEM-lite naming ensures unique IDs and consistent structure. |
| Files | All `templates/*.html` |
| Author responsibility | Validate AI-generated HTML output. Note: This criterion is deprecated in WCAG 2.2 but remains in WCAG 2.1. |
| Automated check | HTML validator or `npx html-validate presentation.html` |
| Verified | Phase 1 |

#### 4.1.2 Name, Role, Value (Level A)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.4.1.2 (Web) / 10.4.1.2 (Non-web) |
| Status | AUTOMATED |
| Framework feature | ARIA roles (`role="group"`) and labels (`aria-label`) on all 21 component templates. Accessible names match visible content. |
| Files | All `templates/*.html` |
| Author responsibility | None |
| Automated check | N/A |
| Verified | Phase 10 -- A11Y-02 |

#### 4.1.3 Status Messages (Level AA)

| Property | Value |
|----------|-------|
| EN 301 549 | 9.4.1.3 (Web) / 10.4.1.3 (Non-web) |
| Status | PARTIAL |
| Framework feature | reveal.js slide transitions do not announce via ARIA live regions. Slide progress is conveyed via visual progress bar and URL hash. The accessible HTML export provides a linear reading alternative without slide transitions. |
| Files | `templates/_skeleton.html`, `tools/export-accessible.js` |
| Author responsibility | For screen reader users, consider providing the accessible HTML export |
| Automated check | N/A |
| Verified | Phase 12 |

---

## Limitations and Honest Assessment

This document maps the framework's **infrastructure** for accessibility, not a guarantee of compliance. The framework supports EAA compliance but does not ensure it.

**What the framework provides:**
- Semantic HTML templates with ARIA landmarks and heading hierarchy
- Alt text slots on all visual components (charts, images, diagrams, Harvey balls)
- WCAG contrast validation tool for theme color combinations
- Accessible HTML export for screen readers and reflow-dependent users
- Keyboard navigation via reveal.js
- German ARIA labels matching German-first convention
- Print CSS for clean printed/PDF output

**What depends on content authors:**
- Writing meaningful alt text (not filenames or generic labels)
- Ensuring data is not conveyed by color alone in custom charts
- Adding `lang` attributes on mixed-language content
- Verifying auto-advance timing is adjustable when used
- Maintaining heading hierarchy when customizing templates
- Avoiding text-as-image for readable content

**Inherent limitations of fixed-layout presentation software:**
- Reflow (1.4.10) is limited by the fixed slide viewport -- the accessible HTML export addresses this
- Text spacing (1.4.12) tolerance has limits within fixed slide dimensions
- Status messages (4.1.3) during slide transitions lack ARIA live region announcements

For a per-presentation verification template, see [docs/presentation-checklist.md](presentation-checklist.md).

**Standards evolution:** EN 301 549 v4.1.1 is expected in 2026 and may incorporate WCAG 2.2, which adds criteria for focus appearance, dragging movements, and target size. This document will need updating when the new harmonised standard is published.
