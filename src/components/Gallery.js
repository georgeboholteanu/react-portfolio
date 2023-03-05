import React from 'react';

export const Gallery = () => {
  const images = [
    { id: 1, src: '/assets/images/trivia-app.png' },
    { id: 2, src: '/assets/images/data-visualization.jpg' },
    { id: 3, src: '/assets/images/data-visualization.jpg' },
    { id: 4, src: '/assets/images/cgi001_sml.jpg' },
    { id: 5, src: '/assets/images/cgi002_sml.jpg' },
    { id: 6, src: '/assets/images/cgi003_sml.jpg' },
    { id: 7, src: '/assets/images/cgi004_sml.jpg' },
    { id: 8, src: '/assets/images/cgi005_sml.jpg' },


  ];

  return (
    <section id="gallery">
      <h2 className='text-black text-center m-10 text-2xl'>Gallery</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          {images.map((image) => (
            <div className="work-item  ">
              <div className="work-image" key={image.id}>      
                <img src={process.env.PUBLIC_URL + image.src} alt='thumbnail' className='gallery-img rounded-xl p-1 h-[280px] w-full object-cover  bg-center'/>              
              </div>
            </div>
          ))}

      </div>
    </section>
  );
};
