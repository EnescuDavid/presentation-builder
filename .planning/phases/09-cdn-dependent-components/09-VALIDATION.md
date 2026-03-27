---
phase: 9
slug: cdn-dependent-components
status: draft
nyquist_compliant: true
wave_0_complete: false
created: 2026-03-27
---

# Phase 9 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Manual browser verification (no automated test framework in project) |
| **Config file** | none |
| **Quick run command** | Open presentation HTML in browser, navigate to chart/code slides |
| **Full suite command** | Open all 3 themed showcase presentations, verify all chart/code/waterfall slides |

---

## Sampling Rate

- **After every task commit:** Open modified HTML file in browser, verify visual output
- **Per wave merge:** Check all themed showcases render correctly
- **Phase gate:** All 4 requirement types verified visually in at least 1 theme

---

## Phase Requirements -> Test Map

| Req ID | Behavior | Test Type | Verification Method |
|--------|----------|-----------|-------------------|
| VIZ-01 | Chart.js renders bar/line/pie with token colors on slide navigation | manual | Open showcase, navigate to chart slide, verify colors match theme |
| VIZ-01 | Lazy init — chart on slide 3+ renders correctly (not zero-size) | manual | Open showcase with 3+ chart slides, navigate to last chart |
| VIZ-01 | Animate-once — revisiting chart slide does not re-animate | manual | Navigate to chart slide, go away, come back — chart shows final state |
| VIZ-02 | Mermaid SVG renders with theme colors, fragment animation works | manual | Open showcase with Mermaid slide, advance fragments |
| VIZ-04 | Waterfall shows floating bars with correct colors (grey/green/red) | manual | Open waterfall slide, verify consulting conventions |
| PLAT-04 | Code block has syntax highlighting with line numbers | manual | Open code block slide, verify Monokai colors and line numbers |
| PLAT-04 | Step-through code highlighting works with fragments | manual | Advance fragment on code slide, verify line highlight changes |

---

## Wave 0 Gaps

No automated test infrastructure exists in this project. All validation is manual browser verification, which is appropriate for a visual HTML presentation framework.

---

*Source: 09-RESEARCH.md Validation Architecture section*
