import React from 'react'

type Props = {
  title: string
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
        <button className="text-gabriola cursor-pointer rounded-xl bg-[#912235] py-4 px-8 text-lg text-white">
          GIFT AN NFT
        </button>
      </div>
    </div>
  )
}

export default Detail
