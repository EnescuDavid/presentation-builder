---
phase: 11
slug: consulting-intelligence-ai-skill-layer
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-28
---

# Phase 11 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Manual grep/file checks (no test runner — phase is documentation/markdown + minor HTML) |
| **Config file** | none |
| **Quick run command** | `grep -c "scqa:" .claude/agents/presentation-strategist.md` |
| **Full suite command** | `bash -c 'grep -q "scqa:" .claude/agents/presentation-strategist.md && grep -q "Pyramid" .claude/agents/presentation-strategist.md && grep -q "action title" .claude/skills/build-presentation/references/component-catalog.md && test -f .github/copilot-instructions.md && grep -q "data-component" tools/gallery.html && echo "ALL PASS" || echo "FAIL"'` |
| **Estimated runtime** | ~1 second |

---

## Sampling Rate

- **After every task commit:** Run quick grep check on modified file
- **After every plan wave:** Run full suite command
- **Before `/gsd:verify-work`:** Full suite must output "ALL PASS"
- **Max feedback latency:** 1 second

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 11-01-01 | 01 | 1 | CONSULT-01 | grep | `grep -c "scqa:" .claude/agents/presentation-strategist.md` | N/A | ⬜ pending |
| 11-01-02 | 01 | 1 | CONSULT-02 | grep | `grep -c "Pyramid\|MECE\|top-down" .claude/agents/presentation-strategist.md` | N/A | ⬜ pending |
| 11-01-03 | 01 | 1 | CONSULT-04 | grep | `grep -c "action title" .claude/skills/build-presentation/references/component-catalog.md` | N/A | ⬜ pending |
| 11-01-04 | 01 | 1 | CONSULT-06 | grep | `grep -c "slide.count\|slide_count\|recommended.*range" .claude/agents/presentation-strategist.md` | N/A | ⬜ pending |
| 11-02-01 | 02 | 2 | PLAT-01 | file | `test -f .github/copilot-instructions.md && echo EXISTS` | ❌ W0 | ⬜ pending |
| 11-02-02 | 02 | 2 | PLAT-08 | grep | `grep -c "badge\|comp-type" tools/gallery.html` | N/A | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- Existing infrastructure covers all phase requirements. No test framework needed — all verification is file-existence and grep-based.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| SCQA markers visible in deck-plan.md output | CONSULT-01 | Requires running strategist on a sample brief | Run build-presentation skill with a test brief, verify deck-plan.md contains `scqa:` frontmatter |
| Pyramid warnings appear for bad sequences | CONSULT-02 | Requires running strategist with intentionally poor structure | Run with brief that has non-MECE slides, verify warnings in deck-plan.md |
| Gallery badges render visually | PLAT-08 | Requires browser rendering | Open tools/gallery.html in browser, verify component type badges visible on thumbnails |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 1s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
