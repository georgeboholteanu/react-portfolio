import React from 'react';
import { NavLink } from 'react-router-dom'

export const Work = () => {
  return (
    <section id="work">
      <h2 className='text-black text-center m-10 text-2xl'>Work</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        <div className="work-item  ">
          <div className="work-image">
            <NavLink to='\assets\images\cgi001.jpg'>
            <img src="\assets\images\cgi001_sml.jpg" className='img-work rounded-xl p-1 h-[280px] w-full object-cover  bg-center' alt="cgi"/>
              
            </NavLink>
          </div>
        </div>
        <div className="work-item  ">
          <div className="work-image">
            <img src="\assets\images\cgi002_sml.jpg" className='img-work rounded-xl p-1 h-[280px] w-full object-cover  bg-center' alt="cgi"/>
          </div>
        </div>
        <div className="work-item  ">
          <div className="work-image">
            <img src="\assets\images\cgi003_sml.jpg" className='img-work rounded-xl p-1 h-[280px] w-full object-cover  bg-center' alt="cgi"/>
          </div>
        </div>
        <div className="work-item  ">
          <div className="work-image">
            <img src="\assets\images\cgi004_sml.jpg" className='img-work rounded-xl p-1 h-[280px] w-full object-cover  bg-center' alt="cgi"/>
          </div>
        </div>
        <div className="work-item  ">
          <div className="work-image ">
            <img src="\assets\images\cgi005_sml.jpg" className='img-work rounded-xl p-1 h-[280px] w-full object-cover  bg-center' alt="cgi"/>
          </div>
        </div>
        <div className="work-item  ">
          <div className="work-image">
            <img src="\assets\images\data-visualization.jpg" className='img-work rounded-xl p-1 h-[280px] w-full object-cover  bg-center' alt="data visualization"/>
          </div>
        </div>
        <div className="work-item">
          <div className="work-image">
            <img src="\assets\images\SAM-preview.jpg" className='img-work rounded-xl p-1 h-[280px] w-full object-cover object-top bg-center' alt="sam app"/>
          </div>
        </div>
        <div className="work-item  ">
          <div className="work-image">
            <img src="\assets\images\portfolio-mochup.png" className='img-work rounded-xl p-1 h-[280px] w-full object-cover  bg-center' alt="cgi"/>
          </div>
        </div>
      </div>
    </section>
  )
}
