import React from 'react'

export const Banner = () => {
  return (
    <section id="hero">
      <div className='-py-6 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-center'>
        <div className='hidden lg:flex md:flex justify-center col-span-12 lg:-my-20 md:-my-20 -z-1'>     
          <img src='./assets/images/milad-fakurian-PjG_SXDkpwQ-unsplash2.jpg' className='object-contain max-w-full' alt='hero'></img>
        </div>

        <div className='flex justify-center mt-10'>
          <img src='./assets/images/gb_square.jpg' className='rounded-full w-[250px]' alt='george boholteanu' id="profile-img"></img>
        </div>

        <div className='lg:pr-10 flex'>
          <div className='justify-center md:pl-20'>
            <h6 className='text-lg m-1 pt-10 md:pt-20 lg:pt-20 text-center text-white'>Hi, I'm</h6>
            <h2 className='m-1 text-5xl tracking-tight font-extrabold text-center text-yellow-400 dark:text-dark '> George</h2>
            <h6 className='text-lg m-1 text-center text-white'>Software Developer</h6>
            <button href='./assets/gb-resume.pdf' className='mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold mx-2 py-2 px-4 rounded'>Download CV</button>
            <button href='mailto:george.boholteanu@gmail.com' className='bg-blue-500 hover:bg-blue-700 text-white font-bold mx-2 py-2 px-4 rounded'>Let's Talk</button>
          </div>
        </div>

   

      </div>
    </section>
  )
}
