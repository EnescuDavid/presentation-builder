# Phase 13: Documentation & Compliance - Context

**Gathered:** 2026-03-28
**Status:** Ready for planning

<domain>
## Phase Boundary

Create an EAA compliance checklist that maps the framework's accessibility features to European Accessibility Act requirements (via EN 301 549 / WCAG 2.1 AA). Create a per-presentation checklist template users can fill out before distributing a deck.

Single requirement: A11Y-07.

</domain>

<decisions>
## Implementation Decisions

### Claude's Discretion (all areas)

#### Checklist Structure
- **D-01:** Organize by WCAG 2.1 criterion (1.1.1, 1.3.1, etc.) since these are the testable requirements EN 301 549 references. Each row maps: WCAG criterion -> framework feature that satisfies it -> status (automated/manual/partial/N-A). Markdown table format in `docs/eaa-compliance.md`.
- **D-02:** Group criteria by WCAG principle (Perceivable, Operable, Understandable, Robust) with sub-sections per guideline. Include an executive summary table at the top showing pass/fail counts per principle.

#### Per-Presentation Template
- **D-03:** Markdown checklist template at `docs/presentation-checklist.md`. Users copy it per deck and check items manually. Format: `- [ ] [Criterion]: [What to verify]` grouped by category (Images, Charts, Text, Navigation, Colors).
- **D-04:** Include both automated checks (reference tool commands like `node tools/check-contrast.js`) and manual checks (e.g., "verify alt text is meaningful, not just filename"). Each item has a clear pass/fail instruction.

#### Scope of EAA Mapping
- **D-05:** Focus on EN 301 549 Section 9 (Web) and Section 10 (Non-web documents) — the digital content requirements. Organizational requirements (training, procurement) are noted as out-of-scope with a brief explanation.
- **D-06:** Honestly document gaps — where the framework provides partial coverage or where compliance depends on the content author. No false "fully compliant" claims.

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Framework Accessibility Features (already built)
- `tokens/base.css` — 28 color tokens including semantic state colors (Phase 7)
- `templates/` — All 21 templates with ARIA landmarks, alt text slots (Phase 10)
- `tools/check-contrast.js` — WCAG contrast validator (Phase 12)
- `tools/export-accessible.js` — Accessible HTML export (Phase 12)

### Requirements
- `.planning/REQUIREMENTS.md` — A11Y-07 specification

### Prior Phase Verification
- `.planning/phases/10-audience-presets-accessibility-css/10-VERIFICATION.md` — Phase 10 accessibility verification results
- `.planning/phases/12-export-tools/12-VERIFICATION.md` — Phase 12 export tools verification results

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `docs/german-typography.md` — Existing docs/ directory pattern for framework documentation
- `docs/speaker-notes.md` — Established documentation format (Markdown with code examples)
- `tools/check-contrast.js` — Can be referenced in checklist as automated verification step

### Established Patterns
- Documentation in `docs/` directory as standalone Markdown files
- Framework teaching content in CLAUDE.md and copilot-instructions.md
- All templates follow BEM-lite naming with consistent ARIA patterns

### Integration Points
- Per-presentation checklist could be referenced in CLAUDE.md and copilot-instructions.md as a post-generation step
- Builder subagent could be taught to generate a filled checklist alongside the presentation

</code_context>

<specifics>
## Specific Ideas

No specific requirements — open to standard approaches.

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 13-documentation-compliance*
*Context gathered: 2026-03-28*
