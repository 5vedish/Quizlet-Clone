import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@lib/prisma'

export default async (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    text: 'Hello',
    prisma: await prisma.user.findUnique({
      where: { id: 3 },
      include: { question_bank: true },
    }),
  })
}
