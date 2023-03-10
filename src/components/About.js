import React from 'react';

const skills = [
  { name: 'HTML5', width: '80%' },
  { name: 'CSS3', width: '80%' },
  { name: 'JavaScript', width: '55%' },
  { name: 'Bootstrap', width: '70%' },
  { name: 'Tailwind', width: '70%' },
  { name: 'jQuery', width: '50%' },
  { name: 'Node JS', width: '35%' },
  { name: 'React', width: '45%' },
  { name: 'GitHub', width: '65%' },
];

const SkillBar = ({ name, width }) => (
  <div className="text-gray-300 m-5">
    <p>{name}</p>
    <div className="w-60 bg-gray-300 rounded-full h-2.5 dark:bg-gray-700">
      <div
        className="bg-cyan-500 h-2.5 rounded-full"
        style={{ width }}
        aria-label={`${name} proficiency`}
      ></div>
    </div>
  </div>
);

export const About = () => {
  return (
    <section id="about">
      <div className="dark:bg-gray-900 ">
        <header>
          <h2 className="lg:mt-10 mt-10 tracking-tight font-extrabold text-center text-white dark:text-dark lg:text-4xl md:text-3xl text-3xl">
            About me
          </h2>
        </header>

        <main className="lg:mt-30 lg:mb-10 md:mb-60 mb-4">
          <div className="flex flex-col lg:flex-row md:flex-row items-center justify-center">
            <img
              src="/assets/images/exterior_hero.jpg"
              alt="Contact me CGI"
              className="lg:rounded-3xl md:rounded-3xl justify-center lg:w-[550px] md:w-[550px] w-full lg:mt-20 mt-10"
            />
            <p className="text-stone-300 italic m-5 lg:m-10 lg:pt-10 md:pt-5 pt-4 lg:w-[280px] w-[280px] text-justify">
            I am an aspiring junior software developer, fresh out of an intensive 18 weeks coding bootcamp and looking to build on my previous work experience in architectural visualization.
            </p>
          </div>
        </main>

        {/* SKILLS */}
        <article className="justify-center mb-10">
          <h3 className="text-amber-400 text-2xl font-extrabold pt-10 justify-center text-center">
            Technical skills
          </h3>
          <div className="grid lg:grid-cols-3 lg:gap-2 gap-0 justify-center">
            {skills.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

