import { prisma } from '../../../generated/prisma-client';

export default {
  Query: {
    allBeverage: () => prisma.beverages()
  }
}