import { prisma } from '../../../generated/prisma-client';

export default {
  Query: {
    allSnack: () => prisma.snacks()
  }
}