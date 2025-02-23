import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import { works } from './Project'; 
import {motion} from 'framer-motion'

const ProjectDetails = () => {
  const { title } = useParams();
  const project = works.find(p => p.title === decodeURIComponent(title));

  const navigate = useNavigate();
  const handleBackToHome = () => {
    navigate("/jm-portfolio");
    setTimeout(() => {
      const section = document.getElementById("project");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  if (!project) {
    return <h2 className="text-white text-center mt-10">Project Not Found</h2>;
  }

  return (
    <section className='section min-h-screen flex lg:items-center lg:justify-center relative '>

      <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] -z-9"></div>
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_-20%,#1D293D_40%,#03050b_100%)]"></div>

      <div className="container lg:grid lg:grid-cols-2 lg:gap-5 lg:-mt-50 lg:!px-4 lg:!max-w-[90%] items-center">

        <div className='mb-12 lg:mb-0 lg:flex lg:flex-col lg:mr-10'>
          <motion.div
            initial={{opacity: 0, x: -100,}}
            whileInView={{opacity: 1, x: 0}}
            transition={{ duration: 0.5, delay: 0.1 }}>
            <button onClick={handleBackToHome} className="text-blue-400 mt-4 mb-5 inline-block cursor-pointer">
              ← Back to Projects
            </button>
          </motion.div>
          
          <motion.h2 
            className='text-white text-4xl font-semibold mb-5'
            initial={{opacity: 0, x: -100,}}
            whileInView={{opacity: 1, x: 0}}
            transition={{ duration: 0.5, delay: 0.2 }}>
              {project.title}
          </motion.h2>
          <motion.p 
            className='text-gray-400 mb-6 max-w-[85ch]'
            initial={{opacity: 0, x: -100,}}
            whileInView={{opacity: 1, x: 0}}
            transition={{ duration: 0.5, delay: 0.3 }}>
            {project.description}
          </motion.p>

          <motion.div 
            className='flex flex-wrap items-center gap-2'
            initial={{opacity: 0, x: -100,}}
            whileInView={{opacity: 1, x: 0}}
            transition={{ duration: 0.5, delay: 0.4 }}>
            {
                project.tags.map((label, key) => (
                    <span key={key} className='h-10 text-sm text-gray-300 bg-slate-800 grid items-center px-5 rounded-lg ring-1 ring-inset ring-slate-700'>
                        {label}
                    </span>
                ))
            }
          </motion.div>
        </div>

        <div>
        <motion.div 
          className='rounded-lg overflow-hidden mb-5 '
          initial={{opacity: 0, x: 100,}}
          whileInView={{opacity: 1, x: 0}}
          transition={{ duration: 0.5, delay: 0.2 }}>
            <iframe 
              width="100%" 
              height="400" 
              src={project.projectLink.replace("watch?v=", "embed/")} 
              title={project.title} 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
        </motion.div>
        </div>

      </div>

    </section>
  );
};

export default ProjectDetails;
