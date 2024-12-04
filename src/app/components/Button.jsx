import Link from 'next/link'
import React from 'react'

const Button = ({buttonText, link}) => {
  return (
    <div className='bg-base-button text-base-button px-6 py-3 rounded-full drop-shadow-md hover:bg-base-button-hover cursor-pointer duration-300 w-fit font-bold'>
        <Link href={link}>{buttonText}</Link>
    </div>
  )
}

export default Button