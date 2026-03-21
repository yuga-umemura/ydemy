import { Server } from "@grpc/grpc-js";
import { ReflectionService } from "@grpc/reflection";
import { readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { loadSync } from "@grpc/proto-loader";
import { createRequire } from "node:module";

export function enableReflection(server: Server) {
  const protoDir = join(__dirname, "../proto");

  const protoFiles = [
    // packages/protobuf/proto/*.protoを読み込む
    ...readdirSync(protoDir)
      .filter((f) => f.endsWith(".proto"))
      .map((f) => join(protoDir, f)),
    // packages/protobuf/proto/model/*.protoを読み込む
    ...readdirSync(join(protoDir, "model"))
      .filter((f) => f.endsWith(".proto"))
      .map((f) => join(protoDir, "model", f)),
  ];

  const protobufs = loadSync(protoFiles, {
    defaults: true,
    includeDirs: [
      protoDir,
      join(protoDir, "model"),
      dirname(
        createRequire(__filename).resolve("google-protobuf/package.json"),
      ),
    ],
  });

  new ReflectionService(protobufs).addToServer(server);
}
