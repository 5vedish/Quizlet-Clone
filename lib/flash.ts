import { prisma } from './prisma'

export async function getFlashCards() {
  return prisma.user.findUnique({
    where: { email: 'kyle@gmail.com' },
    include: { flash_cards: true },
  })
}
