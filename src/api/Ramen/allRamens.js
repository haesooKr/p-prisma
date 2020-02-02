import { prisma } from '../../../generated/prisma-client';

export default {
  Query: {
    allRamens: () => prisma.ramens()
    }
}