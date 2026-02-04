import { Layer } from "effect";
import { CategoryRepoLive } from "../../infrastructure/category/category-repo-live";

export const CategoryLayer = Layer.mergeAll(CategoryRepoLive);
