import { PrismaClient } from "@prisma/client";
import prismaRandom from 'prisma-extension-random';

// Instantiate a single Prisma Client with the random extension
const prisma = new PrismaClient().$extends(prismaRandom());

// Export the single instance
export default prisma;
