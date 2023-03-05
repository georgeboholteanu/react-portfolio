import React from 'react'
import { NavLink } from 'react-router-dom';
// import react icons
import { FaEnvelope, FaDraftingCompass, FaChalkboardTeacher, FaHome } from "react-icons/fa";


export const Nav = () => {
  return (
    <nav className='nav'>
      <div className="container flex flex-wrap items-center justify-between mx-auto mt-5">
        {/*nav inner*/}     
        <div className='bg-black/10 h-[60px] backdrop-blur-2xl rounded-full max-w-[460px] flex px-5 justify-between items-center text-2xl text-white/50'>
          <ul className='cursor-pointer w-[40px] h-[60px] flex items-center justify-center mx-10'>
            <li>
              <img className='App-logo' src='./assets/images/gb_logo.png' alt='logo'/>
            </li>
          </ul>
          <ul className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <li>
              <NavLink to="/" end className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}><FaHome/></NavLink>
            </li>
          </ul>
          <ul className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <li>
              <NavLink to="about" end className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}><FaChalkboardTeacher/></NavLink>
            </li>
          </ul>
          <ul className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <li>
              <NavLink to="work" end className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}><FaDraftingCompass/></NavLink>
            </li>
          </ul>
          <ul className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <li>
              <NavLink to="contact" end className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}><FaEnvelope/></NavLink>
            </li>
          </ul>        
        </div>
      </div>
    </nav> 


  )
}
