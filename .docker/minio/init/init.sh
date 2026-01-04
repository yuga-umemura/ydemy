#!/bin/sh
set -eu

echo "=== MinIO init start ==="

# MinIO に接続
mc alias set local http://minio:9000 "$MINIO_ROOT_USER" "$MINIO_ROOT_PASSWORD"

# bucket（非公開）作成
mc mb -p "local/$MINIO_BUCKET" || true

# CORS（署名付きURL + ブラウザ直アクセス用）
# sh /init/apply-cors.sh "local/$MINIO_BUCKET" "$WEB_ORIGIN"

# アプリ用ユーザー
mc admin user add local "$APP_MINIO_ACCESS_KEY" "$APP_MINIO_SECRET_KEY" || true

# ポリシー作成・付与
mc admin policy create local app-policy /init/app-policy.json || true
mc admin policy attach local app-policy --user "$APP_MINIO_ACCESS_KEY"

echo "=== MinIO init done ==="