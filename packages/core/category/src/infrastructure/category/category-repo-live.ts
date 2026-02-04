import { Prisma } from "@ydemy/db";
import { InternalError } from "@ydemy/lib/error";
import { Effect, Layer } from "effect";
import { CategoryRepo } from "../../effect/context/category-repo";
import { transform } from "@ydemy/lib/transform";
import { Categories } from "../../domain/category/data/category";

export const CategoryRepoLive = Layer.effect(
  CategoryRepo,
  Effect.gen(function* (_) {
    const prisma = yield* _(Prisma);

    return {
      list: Effect.tryPromise({
        try: () => prisma.category.findMany(),

        catch: (cause) =>
          new InternalError({ cause, message: "failed to list categories" }),
      }).pipe(Effect.flatMap((rows) => transform(Categories, rows))),
    };
  }),
);
