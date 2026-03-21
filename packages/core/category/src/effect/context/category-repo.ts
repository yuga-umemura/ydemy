import { Context, Effect } from "effect";
import { Categories } from "../../domain/category/data/category";
import { InternalError, TransformError } from "@ydemy/lib/error";

export class CategoryRepo extends Context.Tag("CategoryRepo")<
  CategoryRepo,
  {
    list: Effect.Effect<Categories, InternalError | TransformError>;
  }
>() {}
