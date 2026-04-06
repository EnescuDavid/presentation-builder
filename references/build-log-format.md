# Build Log Format Reference

> Schema reference for `projects/{name}/.pipeline/build-log.yaml`. Every pipeline agent appends entries to this file. The orchestrator creates it and writes the summary.

## File Location

`projects/{name}/.pipeline/build-log.yaml` — created by `build-new-deck.md` Step 1, appended by all agents, summary updated by orchestrator at delivery.

---

## Schema

### Meta Block (written once by orchestrator)

```yaml
meta:
  project: "{project-name}"
  started: "{ISO-8601-timestamp}"
  mode: "normal"   # or "verbose"
```

### Entries List (appended by agents)

```yaml
entries:
  - ts: "{ISO-8601}"
    agent: "{agent-name}"
    phase: "{pipeline-step-label}"
    event: "{event-type}"
    message: "{human-readable description}"
    verbose_only: false
```

### Summary Block (updated by orchestrator at delivery)

```yaml
summary:
  status: "success|failure|in-progress"
  total_duration_s: {number}
  pipeline_flow: "{brief(OK) -> research(6 blocks) -> strategy(12 slides) -> review(pass) -> build(done)}"
```

---

## Event Types

| Event | When | Example |
|-------|------|---------|
| phase_start | Agent begins work | "Starting story review of 12-slide deck" |
| phase_end | Agent completes | "Build complete. Self-check: 5/5 passed." |
| phase_skip | Step skipped | "No brand.yaml found, skipping brand check" |
| decision | Agent makes a choice | "SCQA applied: C-Suite audience, clear complication" |
| validation | Check result | "Check 3 template-adherence: PASS" |
| error | Something failed | "check-contrast.js returned non-zero exit" |
| user_action | User intervened | "User approved deck-plan after round 2" |
| artifact_written | File created/modified | "presentation.html written — 12 slides" |

---

## Per-Agent Event Taxonomy

| Agent | Events |
|-------|--------|
| presentation-researcher | phase_start, phase_end, artifact_written |
| brand-checker | phase_start, phase_end, artifact_written |
| brand-profiler | phase_start, phase_end, artifact_written |
| narrative-planner | phase_start, decision, phase_end, artifact_written |
| presentation-architect | phase_start, validation (per check), phase_end, artifact_written |
| presentation-critic | phase_start, validation (per check), phase_end, artifact_written |
| presentation-builder | phase_start, decision (deviations), artifact_written, phase_end |
| slide-stylist | phase_start, artifact_written, phase_end |
| slide-editor | phase_start, decision, artifact_written, phase_end |
| presentation-reviewer | phase_start, validation (per check), phase_end, artifact_written |

---

## Append Pattern

Agents append using Bash cat-append to avoid full file parse/write:

```bash
cat >> projects/{name}/.pipeline/build-log.yaml << 'ENTRY'
  - ts: "2026-04-06T14:30:00Z"
    agent: "presentation-builder"
    phase: "build"
    event: "phase_end"
    message: "Built 12 slides, all class names match catalog"
    verbose_only: false
ENTRY
```

CRITICAL: Use exactly 2-space indentation. Malformed YAML breaks the orchestrator summary reader.

---

## verbose_only Field

Both normal and verbose modes write identical build-log.yaml files. The `verbose_only` field controls what the orchestrator echoes to the user in conversation:

- `false` — always shown to user (phase transitions, final outcomes)
- `true` — only shown in verbose mode (per-slide progress, individual check results)

---

## Initialization Template

Orchestrator creates this file before spawning the first agent:

```yaml
meta:
  project: "{name}"
  started: "{ISO-8601}"
  mode: "normal"

entries: []

summary:
  status: "in-progress"
  total_duration_s: 0
  pipeline_flow: "started"
```

---

## Guard Pattern

Agents MUST handle the case where build-log.yaml does not exist (e.g., direct agent invocation outside the pipeline, or refine-deck flow):

```bash
[ -f projects/{name}/.pipeline/build-log.yaml ] || cat > projects/{name}/.pipeline/build-log.yaml << 'EOF'
meta:
  project: "{name}"
  started: "unknown"
  mode: "normal"

entries: []

summary:
  status: "in-progress"
  total_duration_s: 0
  pipeline_flow: "direct-invocation"
EOF
```

---

## Complete Example

```yaml
meta:
  project: "q3-strategy"
  started: "2026-04-06T09:00:00Z"
  mode: "normal"

entries:
  - ts: "2026-04-06T09:00:05Z"
    agent: "presentation-researcher"
    phase: "research"
    event: "phase_start"
    message: "Starting research for q3-strategy"
    verbose_only: false
  - ts: "2026-04-06T09:02:10Z"
    agent: "presentation-researcher"
    phase: "research"
    event: "artifact_written"
    message: "research.md written — 7 blocks, 0 gaps flagged"
    verbose_only: false
  - ts: "2026-04-06T09:02:12Z"
    agent: "presentation-researcher"
    phase: "research"
    event: "phase_end"
    message: "Research complete. Mode: standard."
    verbose_only: false
  - ts: "2026-04-06T09:04:00Z"
    agent: "narrative-planner"
    phase: "strategy"
    event: "phase_start"
    message: "Starting deck planning for C-Suite audience, 10-12 slides"
    verbose_only: false
  - ts: "2026-04-06T09:05:30Z"
    agent: "narrative-planner"
    phase: "strategy"
    event: "decision"
    message: "SCQA applied: clear complication identified, situation slide added"
    verbose_only: false
  - ts: "2026-04-06T09:06:00Z"
    agent: "narrative-planner"
    phase: "strategy"
    event: "artifact_written"
    message: "deck-plan.md written — 11 slides, round 1"
    verbose_only: false

summary:
  status: "in-progress"
  total_duration_s: 0
  pipeline_flow: "research(7 blocks) -> strategy(11 slides) -> ..."
```
