import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import ThemeTogller from '../ThemeTogller'
import Button from '../Button'

import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {    
    
  return (
    <div className='pb-10 top-0 w-full min-h-20 h-auto bg-mute text-muted flex items-center md:pb-0'>
        <div className="w-11/12 m-auto md:flex md:items-center md:justify-between grid grid-cols-1">
            <div className="w-full h-20 logo-section flex items-center justify-between">
                <Logo />
                <GiHamburgerMenu className='h-6 w-6 md:hidden' />
            </div>
            <div className="w-full link-section flex flex-col  md:flex-row items-center gap-8 pt-5 md:pt-0 ">
                <Link href={'/'}>Home</Link>
                <Link href={'#'}>Trending</Link>
            </div>
            <div className="pt-10 w-full user-section flex flex-col md:flex-row items-center justify-end gap-8 md:pt-0">
                <div>
                    <ThemeTogller />
                </div>
                <Link href={'#'}>Login</Link>
                <Button buttonText={'Sign In'} link={'/signin'} />
            </div>
        </div>
    </div>
  )
}

export default Header