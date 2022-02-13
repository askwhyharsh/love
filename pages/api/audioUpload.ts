// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  success: boolean
}



export default function generateSVG(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
	if(req.method === 'POST') {
		const name = req.body
		// console.log(Object.keys(name))
		
		res.status(200).send({success:true})
	}
}
