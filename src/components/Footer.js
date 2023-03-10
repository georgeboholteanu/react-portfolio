import React from 'react'
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  let activeStyle = {
    textDecoration: "underline",
  };
  return (
    {/* FOOTER SECTION */},
    <footer id='footer' className='relative bottom-0 text-center text-neutral-200 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left'>
      <div className=' grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-evenly mt-10 md:mt-20 lg:mt-20'>

        {/* Nav menu */}
        <div className='lg:col-span-6 md:col-span-6 col-span-12 lg:mt-2 md:mt-2 lg:mr-10 md:mr-10'>
          <ul className="space-x-5 text-sm flex">          
            <li>
              <NavLink
                to="/" className="hover:text-sky-400 transition"
                style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
              Home
            </NavLink>
            </li>
            <li>
              <NavLink
                to="about" className="hover:text-sky-400 transition"
                style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
              About
            </NavLink>
            </li>
            <li>
              <NavLink
                to="gallery" className="hover:text-sky-400 transition"
                style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
              Gallery
            </NavLink>
            </li>
            <li>
              <NavLink
                to="contact" className="hover:text-sky-400 transition"
                style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
              Contact
            </NavLink>
            </li>
          </ul>
          
        </div>

        {/* icon links */}
        <div className='lg:col-span-6 md:col-span-6 col-span-12  justify-center'>
          <span className='text-sm mx-5 '>Get connected </span>
          <NavLink to={'mailto:george.boholteanu@gmail.com'} className='socialIcons text-yellow-400 text-2xl m-1 hover:text-sky-400 '>
            <i className="fa-solid fa-envelope"></i>   
          </NavLink>        
          <NavLink to={'https://www.instagram.com/'} className='socialIcons text-yellow-400 text-2xl m-1 hover:text-sky-400 '>
            <i className="fa-brands fa-instagram"></i>   
          </NavLink>        
          <NavLink to={'https://www.linkedin.com/in/georgeboholteanu/'} className='socialIcons text-yellow-400 text-2xl m-1 hover:text-sky-400'>
            <i className="fa-brands fa-linkedin"></i> 
          </NavLink>        
          <NavLink to={'https://github.com/georgeboholteanu'} className='socialIcons text-yellow-400 text-2xl m-1 hover:text-sky-400'>          
            <i className="fa-brands fa-github"></i>
          </NavLink>        
        </div>
        
      {/* copyright */}
      <div className='flex mx-10 pt-2 justify-center mb-10 col-span-12'>
        <NavLink to={'mailto:george.boholteanu@gmail.com'} className='text-sm text-gray-400 mx-2 hover:text-yellow-400'>
          <h6 className='text-center'><i className="fa-regular fa-copyright"></i> George Boholteanu</h6>
        </NavLink>        
      </div>
      </div>

    </footer>
  )
}
