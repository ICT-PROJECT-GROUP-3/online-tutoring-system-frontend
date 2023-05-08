import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

// This function initializes a new instance of the PrismaClient if it hasn't already been initialized
export const getPrismaClient = () => {
  if (!prisma) {
    prisma = new PrismaClient({
      log: ['query'],
    });
  }
  return prisma;
};
