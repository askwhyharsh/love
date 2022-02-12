import React from 'react'
import Link from 'next/link'

type Props = {
  title: string
  button: string
  button2: string
  button_href: string
  button2_href: string
}

const Detail = (props: Props) => {
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
          <Link href={props.button_href}>
            <button className="text-gabriola cursor-pointer rounded-xl bg-[#912235] py-4 px-8 text-lg text-white">
              {props.button}
            </button>
          </Link>
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
