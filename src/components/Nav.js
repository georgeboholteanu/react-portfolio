import React from 'react'
// import react icons
import { FaEnvelope, FaDraftingCompass, FaChalkboardTeacher, FaHome } from "react-icons/fa";

export const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg-bottom-8 w-full overflow-hidden z-50'>
      <div className="container mx-auto ">
        {/*nav inner*/}
        <div className='w-full  bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] flex px-5 justify-between items-center text-2xl text-white/50'>
          <ul className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <li><a href="/" role='button'><FaHome/></a></li>
          </ul>
          <ul className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <li><a href="#about" role='button'><FaChalkboardTeacher/></a></li>
          </ul>
          <ul className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <li><a href="#work" role='button'><FaDraftingCompass/></a></li>
          </ul>
          <ul className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <li><a href="#contact" role='button'><FaEnvelope/></a></li>
          </ul>
        
        </div>
      </div>
    </nav>
    
  )
}
