import { hashSync } from "bcrypt";
import { prisma } from "./prisma-client";

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "Вася Петров Ильич",
        email: "t2est@user.ru",
        password: hashSync('11111111', 10),
        verified: new Date(),
        role: "USER",
      }, 
      {
        fullName: "Гадя Петров Вич",
        email: "test@admin.ru",
        password: hashSync('11111111', 10),
        verified: new Date(),
        role: "ADMIN",
      }
    ]
  })
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;

}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.log('error:', e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect
  })
  .catch(async (e) => {
    console.log("error:", e);
    await prisma.$disconnect();
    process.exit(1);
  })