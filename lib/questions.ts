import { Question } from '@prisma/client'
import { prisma } from './prisma'

export async function getQuestions() {
  return prisma.user.findUnique({
    where: { email: 'z.io' },
    include: { question_bank: true },
  })
}
