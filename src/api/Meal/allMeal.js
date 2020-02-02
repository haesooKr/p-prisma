import { prisma } from '../../../generated/prisma-client';

export default {
  Query: {
    allMeal: () => prisma.meals()
  }
}