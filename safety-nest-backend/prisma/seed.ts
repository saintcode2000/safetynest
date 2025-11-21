import { prisma } from "../src/lib/prisma";
import bcrypt from "bcrypt";

async function main() {
  const email = "admin@safetynest.com";
  const passwordHash = await bcrypt.hash("AdminPass123!", 10);

  const admin = await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      email,
      passwordHash,
      role: "admin",
    },
  });

  console.log("Admin created:", admin);
}

main()
  .catch(err => console.error(err))
  .finally(() => process.exit());
