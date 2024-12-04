import React from 'react'

const SubTitle = ({subTitleContent = "This is subtitle contnet"}) => {
  return (
    <div>
        <h2 className='text-2xl font-semibold text-muted-title'>{subTitleContent}</h2>
    </div>
  )
}

export default SubTitle