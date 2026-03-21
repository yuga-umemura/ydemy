import { prisma } from "../../lib/prisma.js";
import { upsertCategories } from "./category/index.js";

export async function main() {
  await upsertCategories();
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
