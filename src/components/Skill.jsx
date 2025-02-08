import React from 'react'
import SkillCard from './SkillCard';
import {motion} from 'framer-motion'

const skillItem = [
    {
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/1024px-Microsoft_.NET_logo.svg.png',
      effect: 'hover:shadow-[0_20px_50px_rgba(80,_39,_213,_0.7)]'
    },
    {
      imgSrc: 'https://seeklogo.com/images/B/blazor-logo-B6B0844B72-seeklogo.com.png',
      effect: 'hover:shadow-[0_20px_50px_rgba(80,_39,_213,_0.7)]'
    },
    {
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png',
      effect: 'hover:shadow-[0_20px_50px_rgba(80,_39,_213,_0.7)]'
    },
    {
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1820px-Logo_C_sharp.svg.png',
      effect: 'hover:shadow-[0_20px_50px_rgba(80,_39,_213,_0.7)]'
    },
    {
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png',
      effect: 'hover:shadow-[0_20px_50px_rgba(455,_21,_26,_0.7)]'
    },
    {
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png',
      effect: 'hover:shadow-[0_20px_50px_rgba(240,_219,_79,_0.7)]'
    },
    {
      imgSrc: 'https://vite.dev/assets/react.Dn3lPOaa.svg',
      effect: 'hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'
    },
    {
      imgSrc: '/jm-portfolio/images/sql-server.png',
      effect: 'hover:shadow-[0_20px_50px_rgba(27,_115,_186,_0.7)]'
    },
    {
      imgSrc: '/jm-portfolio/images/php.png',
      effect: 'hover:shadow-[0_20px_50px_rgba(27,_115,_186,_0.7)]'
    },
    {
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      effect: 'hover:shadow-[0_20px_50px_rgba(240,_219,_79,_0.7)]'
    },
    {
      imgSrc: 'https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png?f=webp&w=256',
      effect: 'hover:shadow-[0_20px_50px_rgba(227,_78,_37,_0.7)]'
    },
    {
      imgSrc: 'https://cdn.worldvectorlogo.com/logos/css-3.svg',
      effect: 'hover:shadow-[0_20px_50px_rgba(27,_115,_186,_0.7)]'
    },
    {
      imgSrc: 'https://www.svgrepo.com/show/374118/tailwind.svg',
      effect: 'hover:shadow-[0_20px_50px_rgba(27,_115,_186,_0.7)]'
    },
    {
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png',
      effect: 'hover:shadow-[0_20px_50px_rgba(80,_39,_213,_0.7)]'
    },
    {
      imgSrc: 'https://mudblazor.com/_content/MudBlazor.Docs/images/logo.png',
      effect: 'hover:shadow-[0_20px_50px_rgba(80,_39,_213,_0.7)]'
    },
    {
      imgSrc: 'https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg',
      effect: 'hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'
    },
    {
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Visual_Studio_Icon_2022.svg/1200px-Visual_Studio_Icon_2022.svg.png',
      effect: 'hover:shadow-[0_20px_50px_rgba(80,_39,_213,_0.7)]'
    },
    {
      imgSrc: 'https://www.sublimehq.com/images/sublime_text.png',
      effect: 'hover:shadow-[0_20px_50px_rgba(255,_152,_0,_0.7)]'
    },
  ];

const Skill = () => {
  return (
    <section className='section relative pb-13 lg:pb-34 bg-slate-900'>

        <div className="container">

        <motion.p 
          className='text-white text-3xl font-bold mb-5'
          initial={{opacity: 0, x: -100,}}
          whileInView={{opacity: 1, x: 0}}
          transition={{ duration: 0.5, delay: 0.2 }}>
          Tools/Frameworks
        </motion.p>

            <motion.p 
              className='text-gray-400 mb-11 max-w-[50ch]'
              initial={{opacity: 0, x: -100,}}
              whileInView={{opacity: 1, x: 0}}
              transition={{ duration: 0.5, delay: 0.3 }}>
               This is the tools and frameworks that i am using for efficient development, integration, and optimization.
            </motion.p>

            <motion.div 
              className='grid gap-6 grid-cols-[repeat(auto-fill,_minmax(90px,_1fr))]'
              initial={{opacity: 0, y: 80,}}
              whileInView={{opacity: 1, y: 0}}
              transition={{ duration: 0.5, delay: 0.2 }}>
            {
                skillItem.map(({ imgSrc, effect }, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <SkillCard imgSrc={imgSrc} effect={effect} />
                    </motion.div>
                ))
            }
            </motion.div>
        </div>

    </section>
  )
}

export default Skill