import React from 'react'

type Props = {
    children: React.ReactNode
}

const HText = ({children}: Props) => {
  return (
    <h2 className="basis-3/5 font-montserrat text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {children}
    </h2>
  )
}

export default HText
