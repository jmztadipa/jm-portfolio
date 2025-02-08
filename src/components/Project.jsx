import React from 'react'
import ProjectCard from './ProjectCard';
import {motion} from 'framer-motion'
import Tilt from 'react-parallax-tilt';

export const works = [
    {
      imgSrc: '/jm-portfolio/images/project-1.jpg',
      title: 'Full stack music app',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      tags: ['API', 'MVC', '.NET'],
      projectLink: 'https://musify-5al0.onrender.com/'
    },
    {
      imgSrc: '/jm-portfolio/images/project-2.jpg',
      title: 'Free stock photo app',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: ['API', '.NET'],
      projectLink: 'https://pixstock-official.vercel.app/'
    },
    {
      imgSrc: '/jm-portfolio/images/project-3.jpg',
      title: 'Recipe app',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: ['.NET', 'API'],
      projectLink: ''
    },  
  ];
  
const Project = () => {
  return (
    <section id='project' className='section relative pb-13 lg:pb-41'>

    <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] -z-10 bg-slate-800"></div>

        <div className="container">

            <motion.p 
              className='text-white text-3xl font-bold mb-5'
              initial={{opacity: 0, x: -100,}}
              whileInView={{opacity: 1, x: 0}}
              transition={{ duration: 0.5, delay: 0.2 }}>
              My Projects
            </motion.p>
            <motion.p 
              className='text-base md:text-lg text-gray-400 mb-7 max-w-[55ch]'
              initial={{opacity: 0, x: -100,}}
              whileInView={{opacity: 1, x: 0}}
              transition={{ duration: 0.5, delay: 0.3 }}>
             A collection of software solutions showcasing my expertise in system development.
            </motion.p>

            <div 
              className='grid gap-x-6 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]'
              >
                {
                    works.map(({imgSrc, title, tags, projectLink}, key) => (
                      <Tilt>
                        <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} />
                      </Tilt>
                    ))
                }
            </div>

        </div>
    </section>
  )
}

export default Project