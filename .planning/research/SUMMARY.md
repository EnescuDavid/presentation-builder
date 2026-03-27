# Research Summary: Presentation Builder v2.0

**Domain:** Data visualization, consulting intelligence, accessibility, and platform expansion for HTML presentation framework
**Researched:** 2026-03-27
**Overall confidence:** MEDIUM-HIGH

## Executive Summary

The v2.0 feature set integrates cleanly with the existing v1.0 architecture because the framework was designed with extensibility in mind: CSS custom properties for theming, a component template pattern with BEM-lite classes, and an AI skill layer that reads reference files. New features fall into four categories: new component templates (7 new), new CSS infrastructure (audience presets, print styles, theme dedup), new developer tools (PPTX export, WCAG validator, accessible export), and AI skill layer updates (SCQA, Pyramid Principle).

The highest-risk integration is Mermaid.js due to its 2MB payload and ESM-only CDN distribution, which complicates the offline/self-contained constraint. Chart.js integration is straightforward -- its canvas rendering works inside reveal.js's scaled viewport, and consulting-grade defaults (no gridlines, token-based colors) can be applied via a shared config object. Pure CSS components (data tables, Harvey balls, sparklines) carry zero risk and follow the established pattern perfectly.

PPTX export via PptxGenJS is the most development-intensive feature. Each of the 21 component types needs a dedicated mapping function from HTML structure to PptxGenJS API calls. This is feasible but represents significant engineering effort. The alternative (dom-to-pptx for pixel-accurate rendering) produces less editable output, which defeats the purpose for consulting teams who need to hand off editable PPTX files to clients.

Consulting intelligence features (SCQA, Pyramid Principle, action title enforcement) are purely AI skill layer changes -- they modify agent prompts and add reference documentation, with no framework code changes needed.

## Key Findings

**Stack:** Chart.js 4.5.x + Mermaid 11.x via CDN (conditional loading), PptxGenJS for PPTX export, pure CSS for tables/Harvey balls/sparklines.
**Architecture:** Additive layers on existing component template pattern. 7 new templates, 3 new CSS files, 4 new tools, 2 new AI reference files. Skeleton gets CDN links + init hooks.
**Critical pitfall:** Mermaid.js 2MB payload makes offline mode impractical for diagram-heavy decks. Must be conditionally loaded and pre-rendered to SVG for offline distribution.

## Implications for Roadmap

Based on research, suggested phase structure:

1. **Foundation Fixes + Token Expansion** - Fix bugs from v1, dedup theme CSS, add new tokens
   - Addresses: FIX-01 through FIX-10, A11Y-05
   - Avoids: Building on broken foundation

2. **Pure CSS Components** - Data tables, Harvey balls, sparklines, team/people, nested bullets
   - Addresses: VIZ-03, VIZ-05, VIZ-06, PLAT-03, FIX-06
   - Avoids: CDN dependency complexity before it is needed

3. **CDN-Dependent Components** - Chart.js, waterfall, Mermaid, code blocks + skeleton modifications
   - Addresses: VIZ-01, VIZ-02, VIZ-04, PLAT-04
   - Avoids: Skeleton churn (all CDN additions in one phase)

4. **Audience Presets + Accessibility CSS** - Audience modifier classes, print CSS, dark variant fix, ARIA landmarks
   - Addresses: CONSULT-05, FIX-08, FIX-09, A11Y-02, A11Y-06
   - Avoids: N/A (independent of component work)

5. **AI Skill Layer + Consulting Intelligence** - SCQA, Pyramid, component catalog update, data viz guide, copilot-instructions.md
   - Addresses: CONSULT-01 through CONSULT-04, CONSULT-06, PLAT-01
   - Avoids: Writing AI references before all components exist

6. **Export Tools** - PPTX export, accessible HTML export, WCAG validator, read-the-titles
   - Addresses: PLAT-02, A11Y-01, A11Y-04, CONSULT-03
   - Avoids: Writing exporters before the framework is feature-complete

7. **Documentation + Compliance** - EAA checklist, export docs, accessibility guide
   - Addresses: A11Y-07, documentation needs
   - Avoids: Documenting a moving target

**Phase ordering rationale:**
- Layer 0 (fixes) must precede everything because FIX-07 (theme dedup) restructures CSS that all subsequent work depends on
- Pure CSS components before CDN components because they are simpler, prove the pattern, and have zero risk
- CDN components in one phase to batch all skeleton modifications
- AI skill layer after all components because reference files must document what exists
- Export tools last because they need to map every component type

**Research flags for phases:**
- Phase 3 (CDN components): Needs deeper research on Mermaid fragment animation and offline mode SVG pre-rendering
- Phase 6 (PPTX export): Needs per-component spike testing with PptxGenJS to validate mapping feasibility
- Phase 4 (accessibility): Standard patterns, unlikely to need additional research

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack (Chart.js, Mermaid) | HIGH | Well-documented CDN libraries with confirmed reveal.js integration |
| Features (component list) | HIGH | Requirements are detailed and specific |
| Architecture (integration) | HIGH | Additive pattern, no architectural rewrites needed |
| PPTX Export | MEDIUM | PptxGenJS API is solid but per-component mapping is untested |
| Mermaid Fragment Animation | MEDIUM | Pattern exists but needs custom adaptation for reveal.js |
| Mermaid Offline Mode | LOW | 2MB payload is problematic; SVG pre-rendering not yet validated |

## Gaps to Address

- Mermaid offline strategy needs a spike: can we pre-render Mermaid to SVG during build and embed the SVG directly?
- PptxGenJS per-component mapping needs proof-of-concept with 2-3 component types before committing to full implementation
- Chart.js animation timing inside reveal.js fragment system needs testing
- dom-to-pptx vs PptxGenJS decision could be revisited if editable output is not a hard requirement
