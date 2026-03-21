import { prisma } from "../../../src";
import { categories } from "./data";

export async function upsertCategories() {
  return Promise.all(
    categories.map(async (category) => {
      await prisma.category.upsert(category);
    }),
  );
}
