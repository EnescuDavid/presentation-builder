# Roadmap: Presentation Builder

## Milestones

- ✅ **v1.0 MVP** — Phases 1-6 (shipped 2026-03-27) — [archive](milestones/v1.0-ROADMAP.md)
- 🚧 **v1.1 Polish** — Phase 1 (in progress)

## Phases

<details>
<summary>✅ v1.0 MVP (Phases 1-6) — SHIPPED 2026-03-27</summary>

- [x] Phase 1: Foundation (2/2 plans) — completed 2026-03-23
- [x] Phase 2: Essential Components (3/3 plans) — completed 2026-03-23
- [x] Phase 3: Extended Components (3/3 plans) — completed 2026-03-24
- [x] Phase 4: Theming & Branding (3/3 plans) — completed 2026-03-24
- [x] Phase 5: Localization & Speaker Notes (3/3 plans) — completed 2026-03-25
- [x] Phase 6: AI Integration & Tooling (4/4 plans) — completed 2026-03-27

</details>

### 🚧 v1.1 Polish

- [ ] **Phase 1: Bug Fixes** - Fix umlaut errors, RevealNotes plugin, presentationConfig JS, clamp/vw units, two-column class

## Phase Details

### Phase 1: Bug Fixes
**Goal**: Fix 5 critical bugs from v1.0 that affect German quality, speaker notes, and CSS correctness
**Depends on**: Nothing
**Requirements**: FIX-01, FIX-02, FIX-03, FIX-04, FIX-05
**Success Criteria** (what must be TRUE):
  1. Zero ASCII umlaut substitutions remain in any template file
  2. Pressing `S` opens reveal.js speaker view with notes content displayed
  3. Changing `presentationConfig.company` updates the footer text dynamically
  4. Font sizes render consistently regardless of browser window size (no vw dependency)
  5. Two-column component has its own `comp-two-col` root class, not `comp-text-heavy`
**Plans**: TBD

Plans:
- [ ] 01-01: TBD

## Progress

**Execution Order:**
Phase 1

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Bug Fixes | 0/0 | Not started | - |
