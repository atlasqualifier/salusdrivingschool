#!/usr/bin/env bash
set -euo pipefail

echo "Serving built site with live reload on port 5174..."
npm run serve:static
