import Link from 'next/link';
import React from 'react'

// Icons import using react icons
import { MdOutlineArrowOutward } from "react-icons/md";


const RedirectButton = () => {
  return (
    <Link href={'#'} className='bg-base-button text-muted px-3 py-3 rounded-full'>
        <MdOutlineArrowOutward className='w-6 h-6'/>
    </Link>
  )
}

export default RedirectButton