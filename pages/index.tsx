import Detail from '../components/Detail'
import Card from '../components/Card'
import { useAudioRecorder } from '@sarafhbk/react-audio-recorder'

// var videoshow = require('videoshow')

export default function Home() {
  const { audioResult, timer, startRecording, stopRecording, status } =
    useAudioRecorder()

  // let images = [<Card />]
  // let audio = audioResult

  // videoshow(images)
  //   .audio(audio)
  //   .save('video.mp4')
  //   .on('start', (command) => {
  //     console.log('ffmpeg process started: ', command)
  //   })
  //   .on('error', (err) => console.log('error', err))
  //   .on('end', (output) => console.log('Video created in: ', output))

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#FFDDEB] to-[#FFCCD5]">
      <div
        className="flex flex-col items-center justify-center  py-2 pt-20
    xl:flex-row xl:pt-0"
      >
        <Detail
          title="From your Wallet to 
your valentines heart"
        />
        <div className="mt-20 flex w-full justify-center xl:mt-0">
          <Card />
        </div>
      </div>
      {/* recording section */}
      <div>
        <a className="mb-8 text-xl" href={audioResult} download="test">
          Status : <b className="text-gray-400">{status}</b>
        </a>
        <div>
          <p>{new Date(timer * 1000).toISOString().substr(11, 8)}</p>
          <div className="flex space-x-6">
            <button onClick={startRecording}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="iconify iconify--zondicons text-green-400"
                width="32"
                height="32"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9 18v-1.06A8 8 0 0 1 2 9h2a6 6 0 1 0 12 0h2a8 8 0 0 1-7 7.94V18h3v2H6v-2h3zM6 4a4 4 0 1 1 8 0v5a4 4 0 1 1-8 0V4z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>

            <button onClick={stopRecording}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="iconify iconify--subway text-red-400"
                width="32"
                height="32"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 512 512"
              >
                <path
                  d="M465.5 0h-419C20.9 0 0 20.9 0 46.5v418.9C0 491.1 20.9 512 46.5 512h418.9c25.7 0 46.5-20.9 46.5-46.5v-419C512 20.9 491.1 0 465.5 0z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
