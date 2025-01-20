import React, { useContext } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import logomark from "../assets/logomark.png";
import { CiSearch } from "react-icons/ci";
import { AiTwotoneAppstore } from "react-icons/ai";
import { GiNightSleep } from "react-icons/gi";
import { CiSun } from "react-icons/ci";
import { Context } from './Context/Context';

const Navbar = () => {
  const {theme,toggletheme} = useContext(Context)
  return (
    <div>
       <div className=' w-screen flex'>
        <div className='ml-[48px] justify-between flex w-[1434px] border h-[56px]  p-2'>
            <div className=' flex gap-4 justify-center items-center'>
            <GiHamburgerMenu  className=' cursor-pointer'/>
              <img src={logomark} alt='image'/>
              <h2> DoIt</h2>
            </div>
            <div className='flex justify-center items-center gap-4 cursor-pointer'>
              <CiSearch/>
              <AiTwotoneAppstore/>
              {theme === "dark" ? <CiSun onClick={toggletheme}/> : <GiNightSleep onClick={toggletheme}/>}
            </div>
        </div>
       </div>
    </div>
  )
}

export default Navbar
