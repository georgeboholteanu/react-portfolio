import React from 'react';
import data from '../projects.json';

export const Gallery = () => {

  return (
    <section id="gallery">
      <h2 className='text-black text-center m-10 text-2xl'>Gallery</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          {data.map((project) => (

            
            <div className="max-w-sm m-1 bg-white  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href={project.url}>
                    <img className="gallery-img rounded-t-lg h-[280px] w-full object-cover border border-grey bg-center" src={project.thumb} alt="" />
                </a>
                <div className="p-5">
                    <a href="/">
                    <h6 className="mb-2 text-xl  tracking-tight text-gray-900 dark:text-white">{project.name}</h6>
                    </a>

                    <a href={project.url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>

            
            // <div className="work-item  ">
            //   <div className="work-image" key={project.id}> 
            //    <a href={project.url} target="_blank" rel="noreferrer">     
            //     <img src={project.thumb} alt='thumbnail' className='gallery-img object-top rounded-xl p-1 h-[280px] w-full object-cover  bg-center'/>      
            //     </a>        
            //   </div>
            // </div>
          ))} 
      </div>
    </section>
  );
};

