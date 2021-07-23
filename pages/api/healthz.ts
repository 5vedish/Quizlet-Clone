import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@lib/prisma'

// Example Query
// export default async (_: NextApiRequest, res: NextApiResponse) => {
//   res.status(200).json({
//     prisma: await prisma.user.findUnique({
//       where: { email: 'z.io' },
//       include: { question_bank: true },
//     }),
//   })
// }

// Create
// export default async (_: NextApiRequest, res: NextApiResponse) => {
//   res.status(200).json({
//     prisma: await prisma.user.create({
//       data: {
//         email: 'jiff@jiff.com',
//         name: 'jiff',
//         question_bank: {
//           create: [],
//         },
//       },
//     }),
//   })
// }

// export default async (_: NextApiRequest, res: NextApiResponse) => {
//   await await prisma.user.update({
//     where: {
//       id: 1,
//     },
//     data: {
//       question_bank: {
//         create: {
//           type: 'mc',
//           question:
//             'Is zhi a butt?',
//           choices: ['Yes, of course.', 'Absolutely.', 'he gay for nadil!', 'Bonk.'],
//           answer: 'd',
//         },
//       },
//     },
//   })

//   res.status(200).json({hello:'yes'})
// }

export default async (_: NextApiRequest, res: NextApiResponse) => {
  await await prisma.user.update({
    where: {
      id: 1,
    },
    data: {
      flash_cards: {
        create: {
          front: "Is Zhi gay?",
          back: "Yes 100% for nadil"
        },
      },
    },
  })

  res.status(200).json({hello:'yes'})
}

// export default async (_: NextApiRequest, res: NextApiResponse) => {
//   res.status(200).json({
//     prisma: await prisma.user.findUnique({
//       where: { id: 6 },
//       include: { question_bank: true },
//     }),
//   })
// }

// export default async (_: NextApiRequest, res: NextApiResponse) => {
//   res.status(200).json({
//     prisma: await prisma.user.update({
//       where: {
//         id: 3,
//       },
//       data: {
//         question_bank: {
//           deleteMany: {},
//         },
//       },
//     }),
//   })
// }
