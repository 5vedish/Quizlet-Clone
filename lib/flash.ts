import { prisma } from './prisma'

export async function getFlashCards() {
  return prisma.user.findUnique({
    where: { email: 'jiff@jiff.com' },
    include: { flash_cards: true},
  })
}
