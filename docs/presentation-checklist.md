# Presentation Accessibility Checklist

Copy this template for each presentation. Check each item before distributing. Items marked **[Auto]** can be verified with the listed tool command. Items marked **[Manual]** require human review.

---

**Presentation:** ___________________________

**Date:** ___________________________

**Checked by:** ___________________________

**Theme used:** ___________________________

---

## 1. Images & Visual Content

- [ ] **[Manual] Alt text quality:** Every `<img>` has descriptive `alt` text describing the image content (not the filename). Decorative images use `alt=""`.
  - *Pass:* All images have descriptive alt text or are explicitly marked decorative
  - *Fail:* Any image has `alt="image1.png"`, `alt="logo"`, or missing `alt` attribute

- [ ] **[Manual] Chart descriptions:** Every `<canvas>` chart element has an `aria-label` describing the data trend and key takeaway (e.g., `aria-label="Umsatzentwicklung 2023-2025: +23% Wachstum"`).
  - *Pass:* `aria-label` describes what the data shows and the key insight
  - *Fail:* `aria-label` is generic like "Balkendiagramm" or missing entirely

- [ ] **[Manual] Diagram descriptions:** Mermaid diagram containers have an `aria-label` describing the process or relationship shown.
  - *Pass:* `aria-label` conveys the diagram's purpose and key relationships
  - *Fail:* `aria-label` is missing or says only "Diagramm"

- [ ] **[Manual] Harvey ball text equivalents:** Harvey ball ratings include text equivalents in surrounding content (not relying on visual dot fill alone).
  - *Pass:* Rating values are stated in text alongside visual dots
  - *Fail:* Dot fill is the only way to determine the rating

- [ ] **[Manual] No text in images:** No essential text is embedded in images. All readable text uses real HTML text elements.
  - *Pass:* All readable content is in the DOM as text
  - *Fail:* Screenshots or images contain text that should be HTML

## 2. Color & Contrast

- [ ] **[Auto] Theme contrast check:** Run `node tools/check-contrast.js --theme {theme-name}` -- all color pairs pass 4.5:1 (normal text) and 3:1 (large text).
  - *Pass:* Tool reports all pairs passing
  - *Fail:* Any color pair fails the ratio threshold

- [ ] **[Manual] Color not sole indicator:** Information is not conveyed by color alone. Charts use labels, patterns, or shapes in addition to color.
  - *Pass:* Removing color still allows understanding the data (via labels, shape, position)
  - *Fail:* Turning the slide grayscale makes data indistinguishable

- [ ] **[Manual] Custom color contrast:** Custom colors added beyond theme tokens (if any) meet 4.5:1 contrast for normal text and 3:1 for large text.
  - *Pass:* All custom colors verified against background
  - *Fail:* Unverified custom color pairs in use

## 3. Text & Structure

- [ ] **[Auto] Page language:** Verify `lang` attribute on `<html>` matches presentation language.
  - Command: `grep 'lang=' presentation.html | head -1`
  - *Pass:* `lang="de"` for German presentations, `lang="en"` for English
  - *Fail:* Wrong language code or missing `lang` attribute

- [ ] **[Manual] Mixed-language sections:** Foreign-language phrases have appropriate `lang` attributes (e.g., `<span lang="en">stakeholder</span>` in German text).
  - *Pass:* All extended foreign-language passages have `lang` attributes
  - *Fail:* Paragraphs in a different language lack `lang` attribute

- [ ] **[Manual] Heading hierarchy:** Heading levels are correct: `h1` only on title slide, `h2` on content slides. No levels are skipped.
  - *Pass:* Title slide uses h1, all other slides use h2, sub-headings use h3
  - *Fail:* Multiple h1 elements, skipped levels (h1 to h3), or missing headings

- [ ] **[Manual] Reading order:** DOM order matches intended visual reading order on each slide.
  - *Pass:* Tabbing through the page follows the intended content sequence
  - *Fail:* Visual layout differs from DOM order (e.g., sidebar content appears before main content in DOM)

- [ ] **[Auto] HTML title:** The `<title>` element contains the presentation name.
  - Command: `grep '<title>' presentation.html`
  - *Pass:* Title is descriptive and matches presentation content
  - *Fail:* Title is empty, generic ("Presentation"), or missing

## 4. Navigation & Interaction

- [ ] **[Manual] Keyboard navigation:** All slides are reachable via keyboard (arrow keys to navigate, Space to advance).
  - *Pass:* Every slide can be reached without a mouse
  - *Fail:* Any slide is only reachable via click/touch

- [ ] **[Manual] No keyboard traps:** Pressing Tab or arrow keys always moves forward. No element traps keyboard focus.
  - *Pass:* Navigation always progresses; Escape returns to normal view from overview
  - *Fail:* Focus gets stuck on any element or slide

- [ ] **[Manual] Focus indicators visible:** Interactive elements (links, buttons) show a visible outline when focused via keyboard.
  - *Pass:* Tab-navigating shows a clear 3px accent outline on focused elements
  - *Fail:* No visible indicator when an element receives keyboard focus

- [ ] **[Manual] Auto-advance timing:** If `autoSlide` is enabled, verify it can be paused (reveal.js progress bar click).
  - *Pass:* Auto-advance pauses on user interaction or can be stopped
  - *Fail:* Slides advance automatically with no way to pause
  - *N/A:* `autoSlide` is not enabled (check: `grep "autoSlide" presentation.html`)

## 5. Animations & Motion

- [ ] **[Manual] No excessive flashing:** No element flashes more than 3 times per second.
  - *Pass:* All animations are smooth transitions (fade, slide, scale)
  - *Fail:* Any element blinks or flashes rapidly

- [ ] **[Manual] Animations are decorative:** Animations enhance but are not required to understand content. Content is comprehensible without animations.
  - *Pass:* Disabling animations does not remove any information
  - *Fail:* Content meaning depends on animation sequence

- [ ] **[Manual] Reduced motion support:** Presentation respects `prefers-reduced-motion`. Test by enabling "Reduce motion" in OS accessibility settings.
  - *Pass:* Animations are suppressed or simplified when reduced motion is active
  - *Fail:* Animations play regardless of OS setting

## 6. Accessible Export

- [ ] **[Auto] Generate accessible export:** Run `node tools/export-accessible.js {presentation.html}` -- produces a linear HTML document without reveal.js framework.
  - *Pass:* Tool generates an accessible HTML file with h1/h2/h3 heading hierarchy
  - *Fail:* Tool errors or output lacks heading structure

- [ ] **[Manual] Export heading structure:** Accessible export has meaningful heading structure (h1 for title, h2 for slides, h3 for sub-sections).
  - *Pass:* Document reads linearly with clear section hierarchy
  - *Fail:* Flat structure or missing headings in export

- [ ] **[Manual] Chart text descriptions:** Charts in accessible export have text descriptions replacing canvas elements.
  - *Pass:* Chart data is conveyed via text description (aria-label content or summary)
  - *Fail:* Charts are missing or appear as empty elements

## 7. Title Quality

- [ ] **[Auto] Action title check:** Run `node tools/extract-titles.js {presentation.html}` -- verify all slides have action titles (complete sentences with verbs, not topic labels).
  - *Pass:* Each title is a complete sentence stating the slide's key message
  - *Fail:* Titles are topic labels like "Marktanalyse" or "Ergebnisse"

- [ ] **[Manual] HTML title element:** The HTML `<title>` contains the presentation name, not a generic placeholder.
  - *Pass:* Browser tab shows the presentation's actual name
  - *Fail:* Browser tab shows "Untitled" or a template placeholder

---

## Results

| Section | Checked | Passed | Failed | N/A |
|---------|---------|--------|--------|-----|
| 1. Images & Visual Content | ___ / 5 | | | |
| 2. Color & Contrast | ___ / 3 | | | |
| 3. Text & Structure | ___ / 5 | | | |
| 4. Navigation & Interaction | ___ / 4 | | | |
| 5. Animations & Motion | ___ / 3 | | | |
| 6. Accessible Export | ___ / 3 | | | |
| 7. Title Quality | ___ / 2 | | | |
| **Total** | **___ / 25** | | | |

## Notes

_Record any findings, exceptions, or follow-up items here:_

---

This checklist covers the most common author-dependent accessibility items. For the complete framework compliance mapping including all 43 WCAG 2.1 A+AA criteria, see [docs/eaa-compliance.md](eaa-compliance.md).
