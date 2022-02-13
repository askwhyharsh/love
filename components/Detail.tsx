import React from 'react'
import Link from 'next/link'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
	'https://jetiljetyojmgdcmehxy.supabase.co/',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpldGlsamV0eW9qbWdkY21laHh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ3NTY3ODAsImV4cCI6MTk2MDMzMjc4MH0.XIfxvSYzkAcvNL2gVJ9D5BLiQQ6Ky5C_mz3C98lyNWM'
)

type Props = {
  title: string
  button: string
  button2: string
  button_href: string
  button2_href: string
  audio: string
}

const Detail = (props: Props) => {
  const giftNFT = async () => {
    console.log(props.audio)
    const data = {
      address: '0x00000', // change address to owner
      song: props.audio
    }
    await supabase.from('songs').insert([data])
  }

  const redeemNFT = () => {
    
  }

  return (
    <div className="flex w-full flex-col items-center">
      <div className="mx-10 md:ml-20">
        <div className="text-gabriola mb-4 text-4xl text-[#C24B66]">
          GIFT YOUR LOVED ONE A LOVELY NFT ON THIS VALENTINE
        </div>
        <div className="text-gabriola mb-4 text-8xl text-[#912235]">
          {props.title}
        </div>
        <div className="text-gabriola mb-10 text-3xl text-[#C24B66]">
          Your Gifts will be sent on 12 AM IST, 14th Feburary, they will know
          who sent it and all the details associated with it, every NFT will be
          directly minted to their wallet address which can be viewed from
          opensea or rarible
        </div>
        <div className="flex space-x-4">
          <button onClick={() => props.button === "GIFT A NFT" ? giftNFT() : redeemNFT()} className="text-gabriola cursor-pointer rounded-xl bg-[#912235] py-4 px-8 text-lg text-white">
            {props.button}
          </button>
          <Link href={props.button2_href}>
            <button className="text-gabriola cursor-pointer rounded-xl bg-[#912235] py-4 px-8 text-lg text-white">
              {props.button2}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Detail
