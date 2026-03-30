#!/bin/bash
# Protect component templates and base design tokens from accidental modification.
# Outputs a permissionDecision of "ask" when the target file is in templates/ or tokens/base.css.
# Otherwise allows the operation to proceed.

set -euo pipefail

# Read stdin JSON
INPUT=$(cat)

# Extract tool name and file path from input
TOOL_NAME=$(echo "$INPUT" | jq -r '.tool_name // empty')
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // .tool_input.path // empty')

# Only check edit/write operations
if [[ "$TOOL_NAME" != "str_replace"* && "$TOOL_NAME" != "edit"* && "$TOOL_NAME" != "write"* && "$TOOL_NAME" != "Edit" && "$TOOL_NAME" != "Write" ]]; then
  echo '{"continue": true}'
  exit 0
fi

# No file path means nothing to protect
if [[ -z "$FILE_PATH" ]]; then
  echo '{"continue": true}'
  exit 0
fi

# Check if the file is a component template
if echo "$FILE_PATH" | grep -qE '/templates/[^/]+\.html$'; then
  cat <<EOF
{
  "continue": true,
  "hookSpecificOutput": {
    "permissionDecision": "ask",
    "permissionDecisionReason": "You are about to modify a component template. Templates are reference patterns -- changes affect all future presentations. Confirm this is intentional."
  }
}
EOF
  exit 0
fi

# Check if the file is base.css tokens
if echo "$FILE_PATH" | grep -qE '/tokens/base\.css$'; then
  cat <<EOF
{
  "continue": true,
  "hookSpecificOutput": {
    "permissionDecision": "ask",
    "permissionDecisionReason": "You are about to modify base design tokens. This affects all themes and presentations globally. Confirm this is intentional."
  }
}
EOF
  exit 0
fi

# All other files: allow
echo '{"continue": true}'
