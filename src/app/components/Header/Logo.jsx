import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div>
        <Link href={'#'}>
            <h1 className='font-bold text-xl drop-shadow-md'>MakeKnowledge</h1>
        </Link>
    </div>
  )
}

export default Logo