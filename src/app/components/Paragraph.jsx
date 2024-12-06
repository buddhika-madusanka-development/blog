import React from 'react'

const Paragraph = ({paragraphText}) => {
  return (
    <div>
        <p className='text-muted-paragraph mt-3 leading-6 text-base-paragraph' >{paragraphText}</p>
    </div>
  )
}

export default Paragraph