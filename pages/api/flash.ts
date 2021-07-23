import { NextApiRequest, NextApiResponse } from 'next'
import { getFlashCards } from '@lib/flash'

export default async (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(await getFlashCards())
}
