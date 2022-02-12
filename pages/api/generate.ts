// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  message: string
}

export default function generateSVG(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const name = req.body['name']
  const message = req.body['message']

  res.status(200).send({name, message})
}
