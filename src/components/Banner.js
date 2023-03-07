import React from 'react'

export const Banner = () => {
  return (
    <section id="hero">
      <div className='mt-10 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-center'>
        <div className='image-container'>
          <img src='./assets/images/gb_square.jpg' className='rounded-full justify-center w-[250px]' alt='george boholteanu' id="profile-img"></img>
        </div>

        <div className=''>
          <h6 className='text-lg m-1 pt-14 text-center'>Hi, I'm</h6>
          <h2 className='m-1 text-4xl tracking-tight font-extrabold text-center text-yellow-400 dark:text-dark '> George</h2>
          <h6 className='text-lg m-1 text-center'>Software Developer</h6>
        </div>

        {/* <div className='mt-8'>
            <button href='./assets/gb-resume.pdf' className='bg-blue-500 hover:bg-blue-700 text-white font-bold mx-2 py-2 px-4 rounded'>Download CV</button>
            <button href='mailto:george.boholteanu@gmail.com' className='bg-blue-500 hover:bg-blue-700 text-white font-bold mx-2 py-2 px-4 rounded'>Let's Talk</button>
        </div>
         */}
      </div>
    </section>
  )
}
