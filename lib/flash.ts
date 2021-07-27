import { prisma } from './prisma'

export async function getFlashCards() {
  return prisma.user.findUnique({
    where: { email: 'penis@inbum.com' },
    include: { flash_cards: true },
  })
}
