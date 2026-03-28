# Phase 11: Consulting Intelligence & AI Skill Layer - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md -- this log preserves the alternatives considered.

**Date:** 2026-03-27
**Phase:** 11-consulting-intelligence-ai-skill-layer
**Areas discussed:** SCQA & Pyramid depth, Action title enforcement, copilot-instructions.md scope

---

## SCQA & Pyramid Depth

### SCQA Scaffolding

| Option | Description | Selected |
|--------|-------------|----------|
| Full SCQA scaffolding | Strategist identifies S-C-Q-A from brief, writes as explicit markers in deck-plan.md frontmatter, maps slides to SCQA phases | ✓ |
| Lightweight SCQA hints | SCQA used internally, only 1-line "Narrative arc" summary in deck-plan.md | |
| SCQA as optional mode | SCQA only activates when user mentions consulting/McKinsey keywords in brief | |

**User's choice:** Full SCQA scaffolding
**Notes:** None -- recommended option selected

### Pyramid Principle Validation

| Option | Description | Selected |
|--------|-------------|----------|
| Advisory warnings | Checks top-down logic and MECE, outputs warnings in deck-plan.md. User decides whether to fix. | ✓ |
| Strict gating | Refuses to finalize deck-plan.md until Pyramid violations are resolved | |
| Silent best-effort | Applies Pyramid thinking internally, no validation output | |

**User's choice:** Advisory warnings
**Notes:** None -- recommended option selected

### Slide Count Guidance

| Option | Description | Selected |
|--------|-------------|----------|
| Advisory warning | Warns in deck-plan.md when slide count exceeds audience range. User can proceed. | ✓ |
| Hard cap with overflow to appendix | Enforces max by moving excess slides to Appendix section | |

**User's choice:** Advisory warning
**Notes:** None -- recommended option selected

---

## Action Title Enforcement

| Option | Description | Selected |
|--------|-------------|----------|
| Strategist + catalog | Strategist validates in deck-plan.md, catalog adds action title guidance to slots. Builder trusts the plan. | ✓ |
| Strategist only | Only strategist checks titles. Catalog and builder unchanged. | |
| Full pipeline | Strategist validates, catalog documents, AND builder re-checks during HTML generation. | |

**User's choice:** Strategist + catalog
**Notes:** None -- recommended option selected

---

## copilot-instructions.md Scope

### Content Scope

| Option | Description | Selected |
|--------|-------------|----------|
| Full framework teaching | Mirror CLAUDE.md framework content: catalog, themes, presets, conventions. ~200-300 lines. Copilot generates HTML directly. | ✓ |
| Lightweight pointer file | Brief overview + pointers to reference files | |
| Equivalent to CLAUDE.md | Near-identical content minus skill/subagent sections | |

**User's choice:** Full framework teaching
**Notes:** None -- recommended option selected

### Methodology Inclusion

| Option | Description | Selected |
|--------|-------------|----------|
| Yes, include methodology | Teach Copilot SCQA structure and action titles for better-structured decks | ✓ |
| No, components only | Framework mechanics only, consulting methodology stays Claude-only | |

**User's choice:** Yes, include methodology
**Notes:** None -- recommended option selected

---

## Claude's Discretion

- Gallery UX badge styling and implementation details (PLAT-08)
- deck-plan.md SCQA frontmatter format
- Pyramid validation warning format
- Action title examples in component-catalog.md
- copilot-instructions.md internal structure

## Deferred Ideas

- Gallery filter/search functionality -- could be Phase 12+ enhancement
