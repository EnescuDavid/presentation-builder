#!/bin/bash
# Export a reveal.js presentation to PDF using DeckTape
# Usage: ./tools/export-pdf.sh <presentation.html> [output.pdf]
#
# Requires: npm install (decktape is an optional dependency)
# Note: DeckTape requires a running HTTP server. This script starts one automatically.

set -euo pipefail

INPUT="${1:?Usage: export-pdf.sh <presentation.html> [output.pdf]}"
OUTPUT="${2:-${INPUT%.html}.pdf}"
PORT="${PORT:-8173}"

# Verify decktape is available
if ! npx decktape --version >/dev/null 2>&1; then
  echo "Error: decktape not installed. Run: npm install"
  echo "Note: decktape is listed in optionalDependencies"
  exit 1
fi

# Start local server in background
npx -y serve -l "$PORT" -s . &
SERVER_PID=$!
trap "kill $SERVER_PID 2>/dev/null" EXIT

# Wait for server to be ready
sleep 2

# Run DeckTape with reveal.js plugin, 16:9 at 2x resolution
npx decktape reveal \
  -s 1920x1080 \
  -p 2000 \
  "http://localhost:${PORT}/${INPUT}" \
  "$OUTPUT"

echo "PDF exported to: $OUTPUT"
