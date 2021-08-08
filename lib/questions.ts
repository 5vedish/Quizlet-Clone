import { prisma } from './prisma'

export async function getQuestions() {
  return prisma.user.findUnique({
    where: { email: 'kyle@gmail.com' },
    include: { question_bank: true },
  })
}
