# Requirements: Presentation Builder v1.1 — Polish & Fixes

**Defined:** 2026-03-27
**Core Value:** Anyone can clone the repo, import their corporate PowerPoint theme, and build a professional presentation by prompting an AI assistant.

## v1.1 Requirements

Critical bugs and technical debt from v1.0 that affect quality claims.

### Bug Fixes

- [ ] **FIX-01**: All template files use proper Unicode umlauts (no ASCII substitutions like "fuer", "ueber", "Veraenderung")
- [ ] **FIX-02**: RevealNotes plugin loaded in skeleton template so speaker view (`S` key) displays notes
- [ ] **FIX-03**: `presentationConfig` fields (company, logo, date) wired to JS — skeleton reads config and populates master layer elements
- [ ] **FIX-04**: Typography scale uses `rem`/`em` instead of `clamp()` with `vw` units (which break inside reveal.js scaled canvas)
- [ ] **FIX-05**: Two-column template uses its own `comp-two-col` wrapper class instead of `comp-text-heavy`

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| FIX-01 | Phase 1: Polish | Pending |
| FIX-02 | Phase 1: Polish | Pending |
| FIX-03 | Phase 1: Polish | Pending |
| FIX-04 | Phase 1: Polish | Pending |
| FIX-05 | Phase 1: Polish | Pending |

**Coverage:**
- v1.1 requirements: 5 total
- Mapped to phases: 5
- Unmapped: 0

---
*Requirements defined: 2026-03-27*
