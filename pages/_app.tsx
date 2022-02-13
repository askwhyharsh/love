import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [audio, setAudio] = useState('')
  return <Component {...pageProps} audio={audio} setAudio={setAudio} />
}

export default MyApp
