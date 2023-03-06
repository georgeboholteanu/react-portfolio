import React from 'react'

export const Home = () => {
  return (
    <section id="hero">
      <div className='mt-10 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-w-screen-md justify-center'>
        <div className='align-middle text-center m-2 justify-center items-center w-30'>
          <img src='./assets/images/gb_square.jpg' className='rounded-full justify-center w-[250px]' alt='george boholteanu'></img>
        </div>
        <div>
          {/* <i className='fa fa-apple logo'></i> */}
          <h6 className='text-lg m-1 mt-3 text-center'>Hi, I'm</h6>
          <h2 className='m-1 text-4xl tracking-tight font-extrabold text-center text-yellow-400 dark:text-dark '> George</h2>
          <h6 className='text-lg m-1 text-center'>Software Developer</h6>
        </div>
        <div className='mt-8'>
            <a href='./assets/gb-resume.pdf' role='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold mx-2 py-2 px-4 rounded'>Download CV</a>
            <a href='mailto:george.boholteanu@gmail.com' role='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold mx-2 py-2 px-4 rounded'>Let's Talk</a>
        </div>
        
      </div>
    </section>
  )
}
