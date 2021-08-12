import { prisma } from './prisma'

export async function createNew() {
  return await prisma.user.update({
    where: {
      id: 1,
    },
    data: {
      question_bank: {
        create: {
          type: 'mc',
          question: 'Is zhi a butt?',
          choices: [
            'Yes, of course.',
            'Absolutely.',
            'he gay for nadil!',
            'Bonk.',
          ],
          answer: 'd',
        },
      },
    },
  })
}
