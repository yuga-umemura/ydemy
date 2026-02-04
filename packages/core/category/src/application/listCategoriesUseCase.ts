import { Effect } from "effect";
import { CategoryRepository } from "../effect/context/category-repo";

export const listCategoriesUseCase = Effect.gen(function* (_) {
  const categoryRepo = yield* _(CategoryRepository);
  const categories = yield* _(categoryRepo.list);

  return categories;
});
