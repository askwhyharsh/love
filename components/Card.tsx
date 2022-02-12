import { useState } from 'react'

type Props = {
  isHome: boolean
}

const Card = (props: Props) => {
  const [toggle, setToggle] = useState(true)
  const [toggleName, setToggleName] = useState(true)
  const [name, setName] = useState(props.isHome ? 'Name of your special someone' : 'Your Name')
  const [desc, setDesc] = useState(props.isHome ? 'Leave a beautiful message for them' : 'Your Special Message')
  return (
    <svg style={{ height: '584px', width: '581px' }}>
      <image
        href="https://cdn.discordapp.com/attachments/941786627108388904/941789852180037712/NFT_no_.png"
        height="100%"
        width="100%"
      />
      <switch>
        <foreignObject
          x="19%"
          y="15%"
          width="65%"
          height="60"
          style={{ fontSize: '30px' }}
        >
          {toggleName ? (
            <p
              onDoubleClick={() => setToggleName(false)}
              style={{ textAlign: 'center', fontWeight: 'bolder' }}
              className="text-gabriola w-full border-none bg-transparent text-white placeholder-pink-300 outline-none"
              dominant-baseline="middle"
              text-anchor="middle"
            >
              <b>{name}</b>
            </p>
          ) : (
            <input
              onDoubleClick={() => setToggleName(true)}
              maxLength={45}
              style={{ textAlign: 'center', fontWeight: 'bolder' }}
              className="text-gabriola w-full border-none bg-transparent text-white placeholder-pink-300 outline-none"
              value={name}
              placeholder="Name of your special someone"
              onChange={(e) => setName(e.target.value)}
            ></input>
          )}
        </foreignObject>
      </switch>
      <switch>
        <foreignObject x="19%" y="25%" width="65%" height="200">
          {toggle ? (
            <p
              onDoubleClick={() => setToggle(false)}
              className="text-gabriola w-full border-none bg-transparent text-center text-2xl text-white placeholder-pink-300 outline-none"
            >
              {desc}
            </p>
          ) : (
            <textarea
              onDoubleClick={() => setToggle(true)}
              maxLength={300}
              className="text-gabriola w-full border-none bg-transparent text-center text-2xl text-white placeholder-pink-300 outline-none"
              rows={8}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Leave a beautiful message for them"
            ></textarea>
          )}
        </foreignObject>
      </switch>
    </svg>
  )
}

export default Card
