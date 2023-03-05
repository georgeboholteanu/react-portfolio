import React from 'react'
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  let activeStyle = {
    textDecoration: "underline",
  };
  return (
    {/* FOOTER SECTION */},
    <footer id='footer' className=' text-center text-neutral-200 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left'>
      <div className='flex items-center justify-center lg:justify-between m-10'>
        <div className='mr-12 hidden lg:block'>
          <span>Get connected on social networks:</span>
        </div>
        {/* social media links */}
        <div className='flex justify-center'>
          <NavLink to={'https://www.linkedin.com/'} className='socialIcons text-2xl m-1'>
            <i class="fa-brands fa-instagram"></i>   
          </NavLink>        
          <NavLink to={'https://www.linkedin.com/in/georgeboholteanu/'} className='socialIcons text-2xl m-1'>
          <i class="fa-brands fa-linkedin"></i> 
          </NavLink>        
          <NavLink to={'https://github.com/georgeboholteanu'} className='socialIcons text-2xl m-1'>
          
          <i class="fa-brands fa-github"></i>
          </NavLink>        
        </div>
        {/* Nav menu */}
        <div className='flex-row justify-center'>
          <ul className="list-disc list-inside space-y-2 text-sm">          
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
                to="work" className="hover:text-sky-400 transition"
                style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
              Work
            </NavLink>
            </li>
            <li>
              <NavLink
                to="about" className="hover:text-sky-400 transition"
                style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
              Contact
            </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}