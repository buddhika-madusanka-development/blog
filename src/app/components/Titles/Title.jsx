import React from 'react'

const Title = ({titleContent = "This is title contnet"}) => {
  return (
    <div>
        <h1 className='text-3xl md:text-4xl font-bold text-base-title drop-shadow-md'>{titleContent}</h1>
    </div>
  )
}

export default Title