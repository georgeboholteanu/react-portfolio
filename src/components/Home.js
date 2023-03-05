import React from 'react'


export const Home = () => {
  return (
    <div className='mt-10 flex-col max-w-screen-sm mx-auto text-center'>
      <div>
        <h6 className='text-lg m-2'>Hi, I'm</h6>
        <h1 className='text-5xl m-2 '> George Boholteanu</h1>
        <h6 className='text-xl m-2'>Software Developer</h6>
      </div>
      <div className='align-middle text-center m-3 justify-center items-center'>
        <img src='./assets/images/gb_square.jpg' className='rounded-3xl' alt='george boholteanu'></img>
      </div>
      <div className='mt-8'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold mx-2 py-2 px-4 rounded' href='./assets/gb-resume.pdf'>Download CV</button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold mx-2 py-2 px-4 rounded'>Let's Talk</button>
      </div>
    </div>
    
  )
}
