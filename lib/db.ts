// import { PrismaClient } from "@prisma/client";

// declare global {
//   // eslint-disable-next-line no-var
//   var cachePrisma: PrismaClient | undefined;
// }

// let prisma: PrismaClient;

// if (process.env.NODE_ENV === "production") {
//   prisma = new PrismaClient();
// } else {
//   if (!global.cachePrisma) {
//     global.cachePrisma = new PrismaClient();
//   }
//   prisma = global.cachePrisma;
// }
// export const db = prisma;


import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  });

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}