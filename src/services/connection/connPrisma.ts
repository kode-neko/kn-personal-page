import { PrismaClient } from "@prisma/client";

function getPrisma() {
  return new PrismaClient();
}

export {getPrisma}