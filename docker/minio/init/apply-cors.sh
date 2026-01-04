#!/bin/sh
set -eu

TARGET="$1"   # 例: local/app-bucket
ORIGIN="$2"   # 例: http://localhost:3000

cat <<EOF | mc cors set "$TARGET" -
[
  {
    "AllowedOrigins": ["${ORIGIN}"],
    "AllowedMethods": ["GET", "PUT", "POST", "HEAD"],
    "AllowedHeaders": ["*"],
    "ExposeHeaders": ["ETag"],
    "MaxAgeSeconds": 3000
  }
]
EOF