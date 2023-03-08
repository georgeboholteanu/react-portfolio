import React from 'react'

export const About = () => {
  return (
    <section id='about'>
      <div className=" dark:bg-gray-900 justify-center max-w-screen-lg">
      <h2 className='m-10 text-4xl tracking-tight font-extrabold text-center text-white dark:text-dark lg:text-4xl md:text-3xl sm:text-2xl'>About me</h2>

        <img src='/assets/images/exterior_hero.jpg' alt='contact-me' className='block rounded-3xl mb-4'/> 
        <p>
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui
          mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus
          porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam
          semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed
          rhoncus mollis diam, sit amet facilisis lectus blandit at.
        </p>
      </div>
    </section>
  )
}
