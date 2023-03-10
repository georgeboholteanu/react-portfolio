import React from 'react'
import Form from './Form'

export const Contact = () => {
  return (
    <section id='contact'>
        <div className=" dark:bg-gray-900 mx-10 mb-10">
          <div className="md:w-[700px]">
            <h2 className="m-10 text-4xl tracking-tight font-extrabold text-center text-white dark:text-dark">Get In Touch</h2>              
            {/* Form container */}
            <Form />
          </div>
        </div>    
  </section>
  )
}
