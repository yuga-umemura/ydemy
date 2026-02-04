import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client.js";
import { Context, Effect, Layer } from "effect";

export class Prisma extends Context.Tag("Prisma")<Prisma, PrismaClient>() {}

const host = process.env.DATABASE_HOST;
const user = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;
const database = process.env.DATABASE_NAME;

if (!host || !user || !password || !database) {
  throw new Error("missing database env vars");
}

const makePrismaClient = Effect.sync(() => {
  const adapter = new PrismaMariaDb({
    host,
    user,
    password,
    database,
    connectionLimit: 5,
  });

  return new PrismaClient({ adapter });
});

// PrismaClientは起動と終了があるため、Layer.scoped + acqureReleaseを用いる

export const PrismaLive = Layer.scoped(
  Prisma,
  // Prismaサービスの使用が終わったらdisconnectする
  Effect.acquireRelease(makePrismaClient, (client) =>
    Effect.promise(() => client.$disconnect()).pipe(Effect.orDie),
  ),
);
