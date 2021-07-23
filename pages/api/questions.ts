import { NextApiRequest, NextApiResponse } from 'next'
import { getQuestions } from '@lib/questions'

export default async (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(await getQuestions())
}
