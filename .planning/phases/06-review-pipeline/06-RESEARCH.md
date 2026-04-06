# Phase 6: Review Pipeline - Research

**Researched:** 2026-04-06
**Domain:** AI agent review pipeline, Playwright screenshot capture, YAML build logging, agent definition retrofit
**Confidence:** HIGH

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

- **D-01:** Ship ALL review checks from the spec — no MVP/Full/Advanced phasing. All 18+ story and visual checks in a single reviewer agent. Delivery Review (Stage 3, advisory-only) included.
- **D-02:** Reviewer follows the same agent definition standard as Phase 5 agents (pure XML body, MUST/NEVER/ALWAYS constraints, mandatory pre-read blocks, structured output format).
- **D-03:** Every agent definition gets a build-log append step. This is a careful, thorough pass over all 8+ agents — not a quick patch. Treat this as a quality pass that ensures all agents are well-crafted and consistent.
- **D-04:** Agents to modify: presentation-researcher, brand-checker, brand-profiler, narrative-planner, presentation-architect, presentation-critic, presentation-builder, slide-stylist, slide-editor. Plus the new presentation-reviewer.
- **D-05:** Build-log.yaml schema follows the spec in `new_insights/plans/04-review-pipeline.md` — YAML append-friendly, event types: phase_start, phase_end, phase_skip, decision, validation, error, user_action, artifact_written.
- **D-06:** Orchestrator (build-new-deck.md) also logs phase transitions and user decisions to build-log.yaml.
- **D-07:** Python + Playwright as specified. `tools/capture-slides.py` with per-slide PNG, manifest.json (metadata + overflow detection), contact-sheet.html (3-column thumbnail grid).
- **D-08:** Screenshots are optional in the review flow — reviewer can run story + visual checks without them. Visual spot-check mode uses screenshots when available.
- **D-09:** BLOCKER findings trigger builder re-run (max 2 rounds), then escalate to user. Already orchestrated in build-new-deck.md Step 8 — reviewer agent just needs to produce machine-parseable findings.
- **D-10:** Reviewer is catalog-driven — checks class names against `references/component-catalog.md` and CSS against `tokens/components.css`. No hardcoded template list. Adding future templates requires zero reviewer changes.

### Claude's Discretion

- Internal workflow step numbering and section formatting in reviewer agent
- Exact Python implementation details for capture-slides.py (http.server port selection, Playwright API usage)
- Build-log.yaml entry verbosity per agent (what constitutes a "decision" event vs. "artifact_written")
- Whether to create `references/build-log-format.md` as a separate reference doc or inline the schema in agent definitions
- Contact-sheet.html styling and layout details

### Deferred Ideas (OUT OF SCOPE)

None — discussion stayed within phase scope.
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| REVIEW-01 | Presentation-reviewer agent with story + visual + brand compliance checks | Agent spec fully documented in new_insights/agent-architecture-spec.md §5 Agent 8; 18+ checks mapped in new_insights/plans/04-review-pipeline.md Stages 1-3; agent structure pattern confirmed from existing agents |
| REVIEW-02 | Playwright screenshot capture tool (`tools/capture-slides.py`) | Playwright Python sync API confirmed available; http.server threading pattern tested and working; overflow detection via scrollWidth/clientWidth tested and working |
| REVIEW-03 | Build-log.yaml for pipeline traceability | YAML format schema defined in spec; two append strategies verified (raw string append vs parse-write); all 9 agent files inspected for retrofit points |
| REVIEW-04 | Review integration in build-new-deck workflow (BLOCKER -> builder auto-fix, max 2 rounds) | Auto-fix loop already written in build-new-deck.md Step 8; reviewer only needs machine-parseable output format to enable orchestrator routing |
</phase_requirements>

---

## Summary

Phase 6 is the final phase of v2.0 — it adds the automated quality gate (presentation-reviewer agent), visual verification infrastructure (Playwright screenshot capture), pipeline traceability (build-log.yaml), and retrofits build-log integration into all 9 existing agent definitions.

All four requirements are unblocked and the design specs in `new_insights/` are comprehensive and authoritative. The implementation is predominantly a writing task: one new agent file, one new Python tool, one new reference doc, and careful editing of 9 existing agent files plus the build-new-deck workflow. No new library dependencies are required — Playwright is already installed, Python 3.9.6 is available, and Chromium headless works.

One critical pre-existing issue discovered during research: `tools/check-contrast.js` hardcodes the path `themes/` but the project migrated to `brands/` in Phase 3. The reviewer calls this tool, so the tool path must be fixed as part of this phase. This is a small code change but must not be overlooked.

**Primary recommendation:** Implement in this order: (1) fix check-contrast.js path, (2) write presentation-reviewer agent, (3) write capture-slides.py, (4) create build-log-format.md, (5) retrofit all 9 agents with build-log steps, (6) update build-new-deck.md orchestrator logging. This ordering ensures the reviewer tool dependency is resolved before the agent that calls it is authored.

---

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Python (stdlib) | 3.9.6 (on machine) | capture-slides.py runtime | Already installed, no new deps |
| playwright (Python) | installed | Headless Chromium control | Already installed, sync_api confirmed working |
| Chromium (Playwright-managed) | Playwright-bundled | Screenshot rendering | Confirmed working headless on this machine |
| http.server (Python stdlib) | stdlib | Serve HTML locally for Playwright | No CDN needed, works fully offline |
| PyYAML | 6.0.3 (just installed) | YAML read/write in Python | Standard, installed during research |
| Node.js | v22.21.1 | check-contrast.js runtime | Already available |

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| threading (Python stdlib) | stdlib | Run http.server non-blocking | In capture-slides.py alongside Playwright |
| json (Python stdlib) | stdlib | Write manifest.json | Output format for overflow + metadata |
| glob / pathlib (Python stdlib) | stdlib | Find presentation files | Path resolution in capture script |
| js-yaml (Node.js) | 4.x (available) | YAML in orchestrator if needed | Only if orchestrator needs to parse build-log |

### No New Dependencies Required

All runtime libraries for this phase are already installed. The only new file is `tools/capture-slides.py` (Python + Playwright). YAML parsing/writing by agents is done via raw string append (no library needed in agent context — agents write YAML by appending formatted strings).

**Installation:** Nothing to install for the core phase. If PyYAML is needed in capture-slides.py:
```bash
pip3 install pyyaml
```

---

## Architecture Patterns

### Recommended Project Structure Additions

```
.claude/agents/
  presentation-reviewer.md   # NEW — quality gate agent
tools/
  capture-slides.py          # NEW — Playwright screenshot capture
references/
  build-log-format.md        # NEW (or inline schema) — YAML schema reference
projects/{name}/
  .pipeline/
    build-log.yaml            # NEW per project — pipeline trace
    review-report.md          # NEW per project — reviewer output
  screenshots/               # NEW per project — capture-slides.py output
    slide-01.png ... slide-NN.png
    manifest.json
    contact-sheet.html
```

### Pattern 1: Agent Build-Log Append

**What:** Each agent appends a YAML block to `projects/{name}/.pipeline/build-log.yaml` at phase_start and phase_end (plus key decision/validation events mid-workflow). Agents write raw YAML strings rather than parsing and re-serializing the file — this is safer and avoids any YAML library dependency in agent context.

**When to use:** Every agent workflow — final step before returning output.

**Append approach:** Agents use the Write tool to read the file, extend the entries list, and write back. Because agents use the Write tool (not Bash), they must read the file first, append entries to the entries list in memory, and write the full file. Alternatively, agents can use Bash to append raw YAML lines:

```bash
# Bash append pattern (avoids full file read/write cycle)
cat >> projects/{name}/.pipeline/build-log.yaml << 'ENTRY'
  - ts: "2026-04-06T14:30:00Z"
    agent: "presentation-builder"
    phase: "build"
    event: "phase_end"
    message: "Built 12 slides, all class names match catalog"
    verbose_only: false
ENTRY
```

**Build-log creation:** The orchestrator (build-new-deck.md) creates the file with the meta block before spawning the first agent. Each agent assumes the file exists and appends to entries.

**Full schema:**
```yaml
meta:
  project: "{project-name}"
  started: "{ISO-8601-timestamp}"
  mode: "normal"   # or "verbose"

entries:
  - ts: "{ISO-8601}"
    agent: "{agent-name}"
    phase: "{pipeline-step-label}"
    event: "phase_start|phase_end|phase_skip|decision|validation|error|user_action|artifact_written"
    message: "{human-readable description}"
    verbose_only: false   # true = only echoed to user in verbose mode; always written to file

summary:
  status: "success|failure|in-progress"
  total_duration_s: {number}
  pipeline_flow: "{brief → research(OK) → strategy → review → build}"
```

### Pattern 2: Presentation-Reviewer Agent (Three-Stage)

**What:** One agent, three ordered stages. Story Review first (intent compliance), Visual Review second (design compliance), Delivery Review third (advisory-only, checks pacing and speaker notes). This ordering from the Superpowers pattern ensures structural correctness before polish is checked.

**Machine-parseable output contract** (critical for D-09 auto-fix routing):

```markdown
# Review Report: {Presentation Name}
**Story:** PASS|FAIL ({N} blockers, {M} warnings)
**Visual:** PASS|FAIL ({N} blockers, {M} warnings)
**Delivery:** PASS (advisory only)
**Screenshots:** {N} captured, {M} overflows detected   ← omit if not captured

## Blockers
[BLOCKER-1] {stage}: {check name}: {description}
  - Slide: {N}
  - Fix: {required action}
[BLOCKER-2] ...

## Warnings
[WARN-1] {stage}: {check name}: {description}
...

## Pipeline
{brief(OK) → strategy(N slides) → review(story: pass, visual: 1 blocker) → ...}
```

The orchestrator reads `FAIL` in the Story or Visual line and the `## Blockers` section to trigger builder auto-fix. The `[BLOCKER-N]` tag format is parseable: orchestrator counts them, surfaces them to user, and spawns builder with review-report.md as additional input.

### Pattern 3: capture-slides.py Implementation

**What:** Python script using Playwright sync API + http.server to screenshot every slide of a reveal.js presentation.

**Key implementation decisions (Claude's Discretion, D-07):**

1. **Random port selection** — `random.randint(8100, 8999)` avoids collision with common dev ports. Retry 3 times if port in use.
2. **Reveal.js navigation** — Use `Reveal.slide(index)` via `page.evaluate()` to navigate; `Reveal.getTotalSlides()` to get count. Wait for `networkidle` after navigation.
3. **Fragment handling** — Call `Reveal.nextFragment()` in a loop until no more fragments, then screenshot. Or: add `?fragments=false` to disable all fragments.
4. **Overflow detection** — Per-element check: `el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight` on all `<section>` and `<div>` elements within the current slide.
5. **Output** — `slide-{N:02d}.png` zero-padded, `manifest.json` with slide count + overflow data, `contact-sheet.html` with 3-column grid of `<img>` tags.

```python
#!/usr/bin/env python3
"""
tools/capture-slides.py
Capture per-slide screenshots of a reveal.js presentation.

Usage: python3 tools/capture-slides.py projects/{name}/presentation.html
Output: projects/{name}/screenshots/
"""
import sys, os, json, random, threading, pathlib
import http.server
from playwright.sync_api import sync_playwright

def find_free_port(start=8100, end=8999):
    import socket
    for port in random.sample(range(start, end), end - start):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            if s.connect_ex(('localhost', port)) != 0:
                return port
    raise RuntimeError("No free port found")

def start_server(directory, port):
    os.chdir(directory)
    handler = http.server.SimpleHTTPRequestHandler
    handler.log_message = lambda *args: None  # silence
    httpd = http.server.HTTPServer(('localhost', port), handler)
    t = threading.Thread(target=httpd.serve_forever, daemon=True)
    t.start()
    return httpd

def capture(html_path):
    html_path = pathlib.Path(html_path).resolve()
    project_dir = html_path.parent
    out_dir = project_dir / 'screenshots'
    out_dir.mkdir(exist_ok=True)

    port = find_free_port()
    httpd = start_server(str(project_dir), port)
    url = f"http://localhost:{port}/{html_path.name}"

    slides_data = []
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': 1280, 'height': 720})
        page.goto(url, wait_until='networkidle')

        # Wait for Reveal.js to initialize
        page.wait_for_function('() => typeof Reveal !== "undefined" && Reveal.isReady()')

        total = page.evaluate('() => Reveal.getTotalSlides()')
        for i in range(total):
            page.evaluate(f'() => Reveal.slide({i})')
            page.wait_for_timeout(150)  # allow animations to settle

            # Detect overflow on current slide elements
            overflows = page.evaluate('''() => {
                const slide = document.querySelector(".present");
                if (!slide) return [];
                return Array.from(slide.querySelectorAll("*"))
                    .filter(el => el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight)
                    .map(el => el.tagName + "." + Array.from(el.classList).join("."));
            }''')

            fname = f"slide-{i+1:02d}.png"
            page.screenshot(path=str(out_dir / fname))
            slides_data.append({
                'index': i + 1,
                'file': fname,
                'overflows': overflows
            })

        browser.close()

    httpd.shutdown()

    # Write manifest.json
    manifest = {'total': total, 'slides': slides_data}
    (out_dir / 'manifest.json').write_text(json.dumps(manifest, indent=2))

    # Write contact-sheet.html
    imgs = ''.join(
        f'<figure><img src="{s["file"]}" alt="Slide {s["index"]}">'
        f'<figcaption>Slide {s["index"]}'
        + (' ⚠ overflow' if s['overflows'] else '') +
        f'</figcaption></figure>'
        for s in slides_data
    )
    html = f'''<!DOCTYPE html><html lang="de"><head><meta charset="utf-8">
<title>Contact Sheet</title>
<style>
  body {{ font-family: Inter, sans-serif; background: #f5f5f5; padding: 2rem; }}
  .grid {{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }}
  figure {{ margin: 0; background: white; border-radius: 6px; overflow: hidden; box-shadow: 0 2px 6px rgba(0,0,0,.1); }}
  img {{ width: 100%; display: block; }}
  figcaption {{ padding: .5rem .75rem; font-size: .8rem; color: #555; }}
</style></head><body>
<h1 style="margin-bottom:1.5rem">Contact Sheet — {html_path.name}</h1>
<div class="grid">{imgs}</div>
</body></html>'''
    (out_dir / 'contact-sheet.html').write_text(html)

    print(f"Captured {total} slides → {out_dir}")
    return out_dir

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: python3 tools/capture-slides.py projects/{name}/presentation.html")
        sys.exit(1)
    capture(sys.argv[1])
```

### Pattern 4: check-contrast.js Path Fix

**What:** `tools/check-contrast.js` hardcodes `const themesDir = path.join(rootDir, 'themes')` but Phase 3 migrated themes to `brands/`. The reviewer calls this tool, so it must be fixed.

**Fix:** Change the `themesDir` constant and the theme discovery loop to read from `brands/` subdirectories instead of `themes/`:

```javascript
// OLD:
const themesDir = path.join(rootDir, 'themes');

// NEW:
const themesDir = path.join(rootDir, 'brands');

// The theme discovery loop already handles subdirectories with theme.css — no other change needed.
```

After this fix, `node tools/check-contrast.js --theme default` will correctly find `brands/default/theme.css`.

### Pattern 5: Build-Log Retrofit in Existing Agents

**What:** Add a build-log append step to each of the 9 existing agents. This is added as a final numbered step in each agent's `<workflow>` section, with the specific event types and messages appropriate to each agent.

**Per-agent event taxonomy (researched from spec):**

| Agent | Events to Log |
|-------|---------------|
| presentation-researcher | phase_start, phase_end (mode selected, blocks written, gaps flagged), artifact_written |
| brand-checker | phase_start, phase_end (conflicts found: N), artifact_written |
| brand-profiler | phase_start, phase_end, artifact_written (brand.yaml + test-presentation.html) |
| narrative-planner | phase_start, decision (SCQA result, round N), phase_end, artifact_written |
| presentation-architect | phase_start, validation (per check: BLOCKING/ADVISORY/PASS), phase_end, artifact_written |
| presentation-critic | phase_start, validation (per check: BLOCKING/ADVISORY/PASS), phase_end, artifact_written |
| presentation-builder | phase_start, decision (per deviation from plan), artifact_written (per-slide progress — verbose_only: true), phase_end |
| slide-stylist | phase_start, artifact_written (edits applied), phase_end |
| slide-editor | phase_start, decision (change type classified), artifact_written, phase_end |
| presentation-reviewer | phase_start, validation (per check), phase_end, artifact_written |

**Build-log append step template (add as final workflow step in each agent):**

```yaml
## Step N: Append Build Log

Append entries to `projects/{name}/.pipeline/build-log.yaml`.

Write these entries (use Bash cat-append):
- phase_start entry (ts: when agent began, message summarizing inputs)
- key decision/validation entries mid-workflow (verbose_only: true for per-slide detail)
- artifact_written entry (ts: now, message: "{file} written — {summary stat}")
- phase_end entry (ts: now, message: "{outcome summary}")

Entry format:
  - ts: "{ISO-8601}"
    agent: "{this agent's name}"
    phase: "{pipeline step label}"
    event: "{event type}"
    message: "{human-readable}"
    verbose_only: false
```

**Note on timing:** The phase_start entry should be written first (before Step 1), not last. In practice, agents append both start and end entries in the final step — they write the start entry with the timestamp they recorded at the beginning of their work. This keeps the log write atomic (one Bash operation rather than two).

### Anti-Patterns to Avoid

- **Inventing new check IDs mid-agent:** All check IDs ([BLOCKER-N], [WARN-N]) must be consistently numbered in the final review-report.md. The reviewer assigns sequential IDs across both story and visual stages in the order findings are encountered.
- **Parsing the build-log in agents:** Agents NEVER read build-log.yaml — they only append. Only the orchestrator reads it for summary.
- **Blocking on screenshot failure:** capture-slides.py failure (Playwright not installed, port conflict) must not block the reviewer. Reviewer runs stages 1+2 regardless; screenshot stage is conditional on `screenshots/manifest.json` existing.
- **YAML indentation corruption:** Raw YAML append with `cat >>` must use consistent 2-space indentation. Malformed YAML breaks the orchestrator summary. Validate with a `python3 -c "import yaml; yaml.safe_load(open(...))"` check.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Headless browser screenshots | Custom CDP client | `playwright.sync_api` | Battle-tested, handles async page loads, fragment detection, viewport sizing |
| HTML contrast checking | Custom CSS parser | `tools/check-contrast.js` (existing) | Already handles CSS variable resolution, 11 color pairs, WCAG math — just fix the path |
| YAML schema validation | Custom validator | PyYAML `yaml.safe_load()` | Validates syntax on parse; sufficient for append correctness check |
| Contact sheet HTML | Reveal.js iframe gallery | Static `<img>` grid | Faster load, no CORS issues, works offline from screenshots/ |
| Port allocation | Sequential scan | `socket.connect_ex` probe | Race-condition-free, works even on busy dev machines |

**Key insight:** Every complex infrastructure concern for this phase (screenshot capture, contrast checking, YAML logging) has either an existing solution in the repo or a standard Python stdlib pattern. The phase is primarily an authoring task — writing agent definitions correctly — not an infrastructure build.

---

## Common Pitfalls

### Pitfall 1: check-contrast.js Still Points to `themes/`

**What goes wrong:** Reviewer spawns `node tools/check-contrast.js --theme {brand}` and gets `Error: Theme "default" not found at .../themes/default/theme.css`.
**Why it happens:** Phase 3 migrated to `brands/` but check-contrast.js was not updated. This was confirmed by testing during research.
**How to avoid:** Fix `const themesDir` in check-contrast.js to `brands/` as the first task in this phase.
**Warning signs:** Any test of `node tools/check-contrast.js` failing with ENOENT on `themes/`.

### Pitfall 2: Build-Log YAML Indentation Corruption

**What goes wrong:** Agent appends a build-log entry with wrong indentation, breaking YAML parsing for all subsequent readers.
**Why it happens:** `cat >>` heredoc indentation can shift if the agent uses tab characters or misaligns the 2-space convention.
**How to avoid:** The build-log format reference doc must show the exact indentation with explicit 2-space notation. Each agent's append step must use the exact template — no improvisation.
**Warning signs:** `yaml.safe_load()` throws `ScannerError` on `build-log.yaml`.

### Pitfall 3: Reviewer Runs Visual Before Story

**What goes wrong:** Reviewer catches visual issues but misses structural ones, producing misleading "PASS" on story.
**Why it happens:** Order of operations mistake — visual checks are tempting to run first because they're faster (grep-based).
**How to avoid:** D-02 enforces Superpowers ordering. The reviewer's `<constraints>` must include `MUST run Story Review (Stage 1) before Visual Review (Stage 2)`. The workflow steps must be numbered in order.
**Warning signs:** review-report.md shows `Visual: FAIL` but `Story: PASS` when the deck is clearly missing planned slides.

### Pitfall 4: Auto-Fix Loop Without Machine-Parseable Findings

**What goes wrong:** Orchestrator cannot route BLOCKER findings to builder because review-report.md uses prose format instead of tagged `[BLOCKER-N]` entries.
**Why it happens:** Agent writes a readable but unparseable narrative report.
**How to avoid:** The `<output_format>` section of the reviewer agent must show the exact `[BLOCKER-N]` tag format. The orchestrator reads `## Blockers` section and counts `[BLOCKER-N]` tags. Enforce this in `<constraints>`: `MUST use [BLOCKER-N] tag format in findings`.
**Warning signs:** build-new-deck.md Step 8 auto-fix loop never triggers even when the reviewer finds critical issues.

### Pitfall 5: Playwright Chromium Not Finding Presentation Elements

**What goes wrong:** `Reveal.slide(i)` navigation succeeds but screenshot captures blank or partially-rendered slide.
**Why it happens:** Animations haven't finished; fragments haven't been resolved; fonts haven't loaded.
**How to avoid:** After `page.evaluate('Reveal.slide(i)')`, use `page.wait_for_timeout(150)` for animation settle, and add `wait_until='networkidle'` on initial `page.goto()`. For fragment-heavy slides, set `?fragments=false` in the URL or call `Reveal.configure({fragments: false})` via evaluate.
**Warning signs:** Screenshots show empty white areas where content should be, or partial text rendering.

### Pitfall 6: Build-Log Retrofit Breaks Agent Workflows

**What goes wrong:** Adding a build-log step to an existing agent changes behavior in ways not anticipated — e.g., agent tries to write build-log before the file exists (orchestrator hasn't created it yet).
**Why it happens:** Agents are updated without checking the orchestrator's initialization sequence.
**How to avoid:** Retrofit step should gracefully handle missing build-log: `touch projects/{name}/.pipeline/build-log.yaml` or check with `[ -f ... ] ||` before appending. Orchestrator creates the file in Step 1 (`mkdir -p` + write meta block), so agents in Steps 2+ should normally find it. But the file may not exist in refine-deck flows or direct agent invocations.
**Warning signs:** Agents crash with "append to non-existent file" errors in refine-deck workflow.

---

## Code Examples

### Review Report Format (machine-parseable)

Source: `new_insights/plans/04-review-pipeline.md` and CONTEXT.md D-09

```markdown
# Review Report: {Presentation Name}
**Story:** PASS (0 blockers, 2 warnings)
**Visual:** PASS (0 blockers, 1 warning)
**Delivery:** PASS (advisory, 3 notes)
**Screenshots:** 12 captured, 0 overflows detected

## Blockers

(none)

## Warnings

[WARN-1] Story: density: Slide 7 — 45 words (C-Suite max 30) — move detail to notes
[WARN-2] Story: summary-drift: Summary mentions "Q4 outlook" not covered in body
[WARN-3] Visual: spacing-token: Slide 3 uses hardcoded 16px — use --spacing-sm token

## Pipeline

brief(OK) → research(6 blocks) → strategy(12 slides, SCQA, round 1) → review(story: pass, visual: pass)
```

When BLOCKERs exist:

```markdown
**Story:** FAIL (1 blocker, 1 warning)
**Visual:** FAIL (2 blockers, 0 warnings)

## Blockers

[BLOCKER-1] Story: slide-count-mismatch: deck-plan has 12 slides, presentation has 10
  - Slide: missing slides 8 and 9
  - Fix: Add Q3 results slide (planned as metrics) and risk matrix slide (planned as comparison)

[BLOCKER-2] Visual: components-css-modified: @layer components differs from tokens/components.css
  - Slide: all slides (global CSS change)
  - Fix: Replace @layer components content with verbatim copy of tokens/components.css

[BLOCKER-3] Visual: inline-styles: style="" attributes found on 3 slide elements
  - Slide: 4, 7, 11
  - Fix: Move inline styles to --comp-* variables on <section id="slide-N"> elements
```

### Build-Log Initialization (orchestrator, Step 1)

Source: `new_insights/plans/04-review-pipeline.md` build log format, and `new_insights/agent-architecture-spec.md` §6

```bash
# In build-new-deck.md Step 1 (after creating .pipeline/ directory)
cat > projects/{name}/.pipeline/build-log.yaml << 'EOF'
meta:
  project: "{name}"
  started: "{ISO-8601-timestamp}"
  mode: "normal"

entries: []

summary:
  status: "in-progress"
  total_duration_s: 0
  pipeline_flow: "started"
EOF
```

### Agent Build-Log Append (Bash pattern)

Source: `new_insights/agent-architecture-spec.md` §6 Build Log Integration

```bash
# Phase start entry (recorded at beginning, written at end alongside phase_end)
# Phase end entry
python3 - << 'PYEOF'
import yaml, datetime

log_path = 'projects/{name}/.pipeline/build-log.yaml'
with open(log_path) as f:
    log = yaml.safe_load(f)

now = datetime.datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%SZ')
log['entries'].extend([
    {
        'ts': '{start_ts}',          # timestamp from beginning of agent run
        'agent': 'presentation-builder',
        'phase': 'build',
        'event': 'phase_start',
        'message': 'Building {N} slides from deck-plan.md',
        'verbose_only': False
    },
    {
        'ts': now,
        'agent': 'presentation-builder',
        'phase': 'build',
        'event': 'artifact_written',
        'message': 'presentation.html written — {N} slides, all class names verified',
        'verbose_only': False
    },
    {
        'ts': now,
        'agent': 'presentation-builder',
        'phase': 'build',
        'event': 'phase_end',
        'message': 'Build complete. Self-check: 5/5 passed.',
        'verbose_only': False
    }
])

with open(log_path, 'w') as f:
    yaml.dump(log, f, default_flow_style=False, sort_keys=False, allow_unicode=True)
PYEOF
```

### check-contrast.js Path Fix

Source: Verified during research — `const themesDir` on line 132

```javascript
// tools/check-contrast.js — line 132
// BEFORE:
const themesDir = path.join(rootDir, 'themes');
// AFTER:
const themesDir = path.join(rootDir, 'brands');
```

After this fix, the tool discovers brand subdirectories (default/, startup/, enterprise/) and reads their `theme.css`. The rest of the logic (parsing tokens, merging with base.css, running contrast checks) is unchanged.

### Playwright Screenshot Script CLI

Source: Verified Python patterns, spec from new_insights/plans/04-review-pipeline.md

```bash
# Run from repo root
python3 tools/capture-slides.py projects/q3-board-report/presentation.html
# Output:
#   projects/q3-board-report/screenshots/slide-01.png
#   ...
#   projects/q3-board-report/screenshots/manifest.json
#   projects/q3-board-report/screenshots/contact-sheet.html
```

The reviewer agent calls this in Stage 2.5 (between Visual Review and Delivery Review):
```bash
python3 tools/capture-slides.py projects/{name}/presentation.html 2>/dev/null
# Then checks for overflow in manifest.json:
#   python3 -c "import json; m = json.load(open('projects/{name}/screenshots/manifest.json')); overflows = [s for s in m['slides'] if s['overflows']]; print(f'{len(overflows)} slides with overflow')"
```

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Manual visual QA (open in browser) | Automated Playwright screenshots + overflow detection | Phase 6 | Reviewer gets pixel-accurate per-slide images + DOM overflow data |
| No pipeline traceability | build-log.yaml per project | Phase 6 | Every agent decision is recorded; orchestrator can produce pipeline summaries |
| No automated review gate | Reviewer agent with 18+ checks, BLOCKER/WARNING severity | Phase 6 | Blocked pipelines auto-fix via builder re-run (max 2 rounds) |
| check-contrast.js using themes/ | check-contrast.js using brands/ | Phase 6 (fix) | Contrast checking works with v2.0 brand system |

**Deprecated/outdated:**
- `themes/` directory: Migrated to `brands/` in Phase 3. check-contrast.js still references `themes/` — this is a leftover bug, fixed in Phase 6.
- "Verification loop" concept from SKILL.md: Was a placeholder for the review pipeline. Phase 6 replaces it with the presentation-reviewer agent spec.

---

## Open Questions

1. **build-log.yaml creation in refine-deck flow**
   - What we know: build-new-deck.md creates build-log.yaml in Step 1. refine-deck.md does not currently include this.
   - What's unclear: Should refine-deck.md also initialize build-log.yaml, or should agents gracefully skip logging if the file doesn't exist?
   - Recommendation: Agents should use a `[ -f build-log.yaml ] || {initialize}` guard, and the refine-deck workflow should also initialize build-log.yaml at entry. This is a minor addition to the workflow file.

2. **Reviewer access to screenshots in build-new-deck pipeline**
   - What we know: D-08 says screenshots are optional. The reviewer runs story + visual checks independently. Screenshot capture happens conditionally.
   - What's unclear: At what point in build-new-deck Step 8 does capture-slides.py run — before the reviewer is spawned, or after story+visual pass?
   - Recommendation: Run capture-slides.py after story+visual pass (only if no BLOCKERs), then optionally re-invoke reviewer for visual spot-check mode. This avoids screenshot cost for failing builds.

3. **Build-log summary block — who writes it?**
   - What we know: The schema has a `summary:` block. The spec says "orchestrator reads for summary."
   - What's unclear: Does the orchestrator update the summary block on completion, or is it left as `in-progress`?
   - Recommendation: Orchestrator updates `summary:` in build-new-deck.md Step 9 (Delivery) with final status, duration, and pipeline_flow string. This is one Write operation at the end of the pipeline.

---

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Python 3 | capture-slides.py | Yes | 3.9.6 | — |
| playwright (Python) | capture-slides.py | Yes | installed | — |
| Chromium (Playwright) | capture-slides.py | Yes | working headless | — |
| http.server (stdlib) | capture-slides.py | Yes | stdlib | — |
| PyYAML | capture-slides.py (optional), build-log writing | Yes | 6.0.3 | Raw string append (no PyYAML needed for agents) |
| Node.js | check-contrast.js | Yes | v22.21.1 | — |
| js-yaml | check-contrast.js (internal) | Yes | available | — |
| threading (stdlib) | capture-slides.py | Yes | stdlib | — |

**Missing dependencies with no fallback:** None — all required tools are present.

**Missing dependencies with fallback:** None.

**Notable:** PyYAML was not installed at research start but was installed during `pip3 install pyyaml`. This is a one-time setup. It is NOT required in agent context — agents write YAML by appending formatted strings, which requires no library.

---

## Validation Architecture

nyquist_validation key is absent from `.planning/config.json` — treating as enabled.

### Test Framework

| Property | Value |
|----------|-------|
| Framework | Manual verification (no automated test framework configured) |
| Config file | none |
| Quick run command | `python3 tools/capture-slides.py projects/feature-showcase/presentation.html` |
| Full suite command | `node tools/check-contrast.js && python3 tools/capture-slides.py projects/feature-showcase/presentation.html` |

### Phase Requirements → Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| REVIEW-01 | Reviewer agent produces review-report.md | smoke | Spawn agent against projects/feature-showcase/presentation.html, check for `.pipeline/review-report.md` | ❌ Wave 0 |
| REVIEW-02 | capture-slides.py produces per-slide PNGs + manifest | smoke | `python3 tools/capture-slides.py projects/feature-showcase/presentation.html && ls projects/feature-showcase/screenshots/` | ❌ Wave 0 (script doesn't exist yet) |
| REVIEW-03 | build-log.yaml is created and appended by agents | smoke | Run full pipeline on test project, check `.pipeline/build-log.yaml` has entries from multiple agents | ❌ Wave 0 |
| REVIEW-04 | BLOCKER in review-report.md triggers builder re-run | integration/manual | Run pipeline with a deliberately broken presentation, verify auto-fix loop activates | Manual only — requires full pipeline execution |

### Sampling Rate

- **Per task commit:** `python3 -c "import yaml; yaml.safe_load(open('projects/feature-showcase/.pipeline/build-log.yaml'))"` (YAML validity check)
- **Per wave merge:** `node tools/check-contrast.js` (contrast tool works) + capture-slides.py smoke test
- **Phase gate:** Full pipeline run against projects/feature-showcase/ with review passing before marking REVIEW-01 through REVIEW-04 complete

### Wave 0 Gaps

- [ ] `tools/capture-slides.py` — covers REVIEW-02 (script itself is the deliverable)
- [ ] Test presentation for reviewer smoke test — `projects/feature-showcase/presentation.html` should exist from Phase 5; verify it does before planning

---

## Sources

### Primary (HIGH confidence)

- `new_insights/plans/04-review-pipeline.md` — Complete review pipeline design: Stage 1/2/3 checks table, screenshot script architecture, build-log.yaml format, review-report format, quick review mode
- `new_insights/agent-architecture-spec.md` — Agent 8 (presentation-reviewer) full spec §5, build-log integration pattern §6, agent quality checklist §7
- `.claude/skills/build-presentation/workflows/build-new-deck.md` — Step 8 auto-fix loop, Step 9 delivery, project folder convention
- All 9 `.claude/agents/*.md` files — inspected for structure patterns and retrofit points
- `tools/check-contrast.js` — Source verified: hardcodes `themes/` path (line 132); fix confirmed
- Playwright Python sync_api — Live-tested: sync_playwright, chromium headless, screenshot, evaluate, overflow detection all confirmed working on this machine
- Python http.server + threading — Live-tested: random port, daemon thread, server start/stop confirmed working

### Secondary (MEDIUM confidence)

- `new_insights/TODO.md` — Resolved design decisions confirming Phase 6 is "needs everything" dependency
- `tools/gallery.html` — Contact-sheet pattern reference (3-column grid approach confirmed)
- PyYAML behavior — Tested: yaml.safe_load + yaml.dump round-trip confirmed working after installation

### Tertiary (LOW confidence)

- Reveal.js `Reveal.slide(N)` API for navigation in headless context — Not live-tested with full reveal.js (CDN not available in headless test). Needs verification against a real presentation.html. Alternative: use keyboard navigation (`page.keyboard.press('ArrowRight')`) if Reveal API is unreliable.

---

## Metadata

**Confidence breakdown:**

- Standard stack: HIGH — all tools verified installed and working
- Architecture: HIGH — design spec is comprehensive and authoritative; patterns confirmed from existing agents
- Pitfalls: HIGH — check-contrast.js path bug confirmed by live test; other pitfalls are deductions from existing patterns
- Playwright screenshot implementation: MEDIUM — sync_api confirmed working, but Reveal.js `Reveal.slide(N)` in headless context not tested against a real presentation (see LOW confidence note above)

**Research date:** 2026-04-06
**Valid until:** 2026-05-06 (stable toolchain, 30-day window)
