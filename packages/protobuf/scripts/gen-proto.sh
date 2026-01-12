#!/usr/bin/env bash

# set -e : 処理が失敗したら中断して異常終了させる
# set -u : 未定義変数の使用箇所で中断して異常終了させる
set -eu

PROTO_DIR=./proto
OUT_DIR=./generated

protoc \
    --plugin=./node_modules/.bin/protoc-gen-ts_proto \
    --ts_proto_out="${OUT_DIR}" \
    --ts_proto_opt=esModuleInterop=true,outputServices=grpc-js,forceLong=string \
    --proto_path="${PROTO_DIR}" \
    ${PROTO_DIR}/*.proto