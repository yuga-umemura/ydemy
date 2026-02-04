import { Layer } from "effect";
import { CategoryRepoLive } from "../live/category-repo-live";

export const CategoryLayer = Layer.mergeAll(CategoryRepoLive);
