import React from 'react'

export const Home = () => {
  return (
    
      <div className='mt-5 flex-col max-w-screen-sm mx-auto text-center'>
        <div>
          {/* <i className='fa fa-apple logo'></i> */}
          <h6 className='text-lg m-1'>Hi, I'm</h6>
          <h2 className='text-4xl m-1 '> George Boholteanu</h2>
          <h6 className='text-lg m-1'>Software Developer</h6>
        </div>
        <div className='align-middle text-center m-2 justify-center items-center w-30'>
          <img src='./assets/images/gb_square.jpg' className='rounded-3xl justify-center' alt='george boholteanu'></img>
        </div>
        <div className='mt-8'>
            <a href='./assets/gb-resume.pdf' role='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold mx-2 py-2 px-4 rounded'>Download CV</a>
            <a href='mailto:george.boholteanu@gmail.com' role='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold mx-2 py-2 px-4 rounded'>Let's Talk</a>
        </div>
      </div>
 
  )
}
