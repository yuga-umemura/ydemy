import { Effect } from "effect";
import { CategoryRepo } from "../effect/context/category-repo";

export const listCategoriesUseCase = Effect.gen(function* (_) {
  const categoryRepo = yield* _(CategoryRepo);
  const categories = yield* _(categoryRepo.list);

  return categories;
});
