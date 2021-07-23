import { prisma } from './prisma'

export async function getQuestions() {
  return prisma.user.findUnique({
    where: { email: 'jiff@jiff.com' },
    include: { question_bank: true },
  })
}
