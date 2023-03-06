import React from 'react'
import Form from './Form'

export const Contact = () => {
  return (
    <section id='contact'>
        <div className=" dark:bg-gray-900 justify-center">
          <div className="mx-auto max-w-screen-md">
            <h2 className="m-10 text-4xl tracking-tight font-extrabold text-center text-white dark:text-dark">Get In Touch</h2>            
            <img src='/assets/images/exterior_hero.jpg' alt='contact-me' className='block rounded-3xl mb-4'/> 
            
            {/* Form container */}
            <Form />
          </div>
        </div>    
  </section>
  )
}
