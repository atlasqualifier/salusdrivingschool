#!/usr/bin/env bash
set -euo pipefail
# Simple stable preview runner for the built `dist` directory.
# Usage: run as the same user that will run the systemd unit.

REPO_ROOT="/workspaces/salusdrivingschool"
DIST_DIR="$REPO_ROOT/dist"
PID_FILE="/tmp/salus-preview.pid"
LOG_FILE="/tmp/salus-preview.log"

mkdir -p "$(dirname "$PID_FILE")"

if [ -f "$PID_FILE" ]; then
  OLDPID=$(cat "$PID_FILE" 2>/dev/null || true)
  if [ -n "$OLDPID" ] && kill -0 "$OLDPID" 2>/dev/null; then
    echo "Stopping existing preview process $OLDPID"
    kill "$OLDPID" || true
    sleep 1
  fi
fi

cd "$REPO_ROOT"
if [ ! -d "$DIST_DIR" ]; then
  echo "dist directory not found; running build..."
  npm run build --silent || true
fi

echo "Starting preview server serving: $DIST_DIR"
nohup python3 -m http.server 5500 --directory "$DIST_DIR" > "$LOG_FILE" 2>&1 &
echo $! > "$PID_FILE"
echo "Preview server started (pid=$(cat $PID_FILE)), logs: $LOG_FILE"
