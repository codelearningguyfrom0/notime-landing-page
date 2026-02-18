#!/bin/bash
# Run this script AFTER completing gh auth login
# Usage: ./push-to-github.sh

set -e

# Load Homebrew environment (needed for gh to be in PATH)
eval "$(/opt/homebrew/bin/brew shellenv 2>/dev/null)" || true

cd "$(dirname "$0")"

echo "Creating GitHub repo and pushing..."
gh repo create notime-landing-page --public --source=. --remote=origin --push

echo ""
echo "✓ Done! Your repo is live at: https://github.com/$(gh api user -q .login)/notime-landing-page"
