import React from 'react'

const MainTitle = ({titleContent = "This is main title"}) => {
  return (
    <div>
        <h1 className="text-5xl font-bold text-base-title drop-shadow-lg">{titleContent}</h1>
    </div>
  )
}

export default MainTitle