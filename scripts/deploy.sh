#!/usr/bin/env bash
# Uploads a prerendered build to the site's S3 bucket. Used by CI and
# `make deploy-prod`.
#
#   scripts/deploy.sh <bucket> [build dir]
#
# Three passes, each with --delete over its own files only:
#  1. assets/ (Vite's content-hashed output): cached forever.
#  2. the extensionless pages (about, process, ...): text/html, no-cache.
#     Without the content type S3 serves them as binary and browsers
#     download them instead of showing the page.
#  3. everything else (index.html, 404.html, sitemap, icons): no-cache, so a
#     deploy is never served stale HTML that points at deleted assets.
set -euo pipefail

bucket="${1:?usage: scripts/deploy.sh <bucket> [build dir]}"
dist="${2:-dist}"

# The prerendered pages are top-level files without a dot in the name.
pages=()
while IFS= read -r -d '' file; do pages+=("$(basename "$file")"); done \
  < <(find "$dist" -maxdepth 1 -type f ! -name '*.*' -print0)

if [[ ! -f "$dist/404.html" || ${#pages[@]} -eq 0 ]]; then
  echo "$dist is not a prerendered build (no 404.html or page files). Refusing to upload." >&2
  exit 1
fi

include_pages=()
exclude_pages=()
for page in "${pages[@]}"; do
  include_pages+=(--include "$page")
  exclude_pages+=(--exclude "$page")
done

aws s3 sync "$dist" "s3://$bucket" --delete \
  --exclude "*" --include "assets/*" \
  --cache-control "public,max-age=31536000,immutable"

aws s3 sync "$dist" "s3://$bucket" --delete \
  --exclude "*" "${include_pages[@]}" \
  --content-type "text/html; charset=utf-8" --cache-control "no-cache"

aws s3 sync "$dist" "s3://$bucket" --delete \
  --exclude "assets/*" "${exclude_pages[@]}" \
  --cache-control "no-cache"

echo "deployed ${#pages[@]} pages (${pages[*]}) and index.html to s3://$bucket"
