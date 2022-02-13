import Head from 'next/head'

import Detail from '../components/Detail'
import Card from '../components/Card'
import { useAudioRecorder } from '@sarafhbk/react-audio-recorder'
import { useEffect } from 'react'

// var videoshow = require('videoshow')

export default function Home() {
  const { audioResult, timer, startRecording, stopRecording, status } =
    useAudioRecorder()

  useEffect(() => {
    console.log(audioResult)
  }, [audioResult])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#FFDDEB] to-[#FFCCD5]">
      <Head>
        <title>redeem your nft - onchainheart</title>
      </Head>
      <div
        className="flex flex-col items-center justify-center  py-2 pt-20
    xl:flex-row xl:pt-0"
      >
        <Detail
          title="Redeem your love here"
          button="REDEEM A NFT"
          button2="GIFT A NFT"
          button_href="/redeem"
          button2_href="/"
          audio=""
        />
        <div className="mt-20 flex w-full justify-center xl:mt-0">
          <Card isHome={false} />
        </div>
      </div>
    </div>
  )
}
