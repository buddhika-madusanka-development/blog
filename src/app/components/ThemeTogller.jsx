"use client"

import React from 'react'

// icons imports from the react icons
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const ThemeTogller = () => {
  return (
    <div className='relative cursor-pointer'>
        <MdOutlineLightMode className='light h-6 w-6 relative'/>
        <MdOutlineDarkMode className='dark h-6 w-6 absolute top-0 hidden' />
    </div>
  )
}

export default ThemeTogller