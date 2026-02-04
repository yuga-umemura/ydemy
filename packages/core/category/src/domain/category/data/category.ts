import { Schema } from "effect";
import { UUID } from "effect/Schema";

export const CategoryId = UUID.pipe(Schema.brand("@category/id"));
export type CategoryId = Schema.Schema.Type<typeof CategoryId>;

export const CategoryName = Schema.String.pipe(Schema.brand("@category/name"));
export type CategoryName = Schema.Schema.Type<typeof CategoryName>;

export const Slug = Schema.String.pipe(Schema.brand("@category/slug"));
export type Slug = Schema.Schema.Type<typeof Slug>;

export const Category = Schema.Struct({
  id: CategoryId,

  name: CategoryName,

  slug: Slug,
});
export type Category = Schema.Schema.Type<typeof Category>;

export const Categories = Schema.Array(Category);
export type Categories = Schema.Schema.Type<typeof Categories>;
