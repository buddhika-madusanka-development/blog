"use client"

import React, {useEffect} from 'react'

// icons imports from the react icons
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const ThemeTogller = () => {

  const themeToggl = () => {
    const mainBody = document.querySelector('.main-body');
    const lightBtn = document.querySelector('.light');
    const darkBtn = document.querySelector('.dark');
    
    if(mainBody && lightBtn && darkBtn){ 
      darkBtn.classList.toggle('hidden');
      lightBtn.classList.toggle('hidden');
      mainBody.classList.toggle('dark-theme');
    }
    else{
      console.log("Something went wrong....");
    }
    
  }

  useEffect(() => {
    // Ensure this only runs on the client-side
    if (typeof window !== "undefined") {
      console.log("DOM is ready.");
    }
  }, []);
  
  return (
    <div className='relative cursor-pointer' onClick={() => {themeToggl()}}>
        <MdOutlineLightMode className='light h-6 w-6 relative'/>
        <MdOutlineDarkMode className='dark h-6 w-6 top-0 hidden' />
    </div>
  )
}

export default ThemeTogller