import React from 'react'
import {motion} from 'framer-motion'
import Marquee from "react-fast-marquee";

const aboutItems = [
  {
    label: 'Projects Made',
    number: 6
  },
  {
    label: 'Years Of Experience',
    number: 2
  }
];

const skillsItems = [
  {
    label: 'Data Security & Integrity ',
    desc: 'Implementing security best practices to protect data confidentiality and integrity.'
  },
  {
    label: 'Problem Solving & Debugging',
    desc: 'Diagnosing and resolving technical issues to ensure system reliability.'
  },
  {
    label: 'ERP Systems Development',
    desc: 'Developing and maintaining ERP solutions to streamline business operations.'
  },
  {
    label: 'REST API Development',
    desc: 'Building scalable and secure RESTful APIs for seamless system integration.'
  },
  {
    label: 'Efficiency Optimization',
    desc: 'Identifying and resolving bottlenecks to improve system efficiency.'
  }
];

const About = () => {
  return (
    <section className='section relative pb-13 lg:pb-30 bg-slate-900' id='about'>

      <div className="container">

        <div className='rounded-2xl'>
          <motion.p 
            className='text-white text-3xl font-bold mb-7'
            initial={{opacity: 0, x: -100,}}
            whileInView={{opacity: 1, x: 0}}
            transition={{ duration: 0.5, delay: 0.2 }}>
            About Me
          </motion.p>
          <motion.p 
            className='text-base md:text-lg text-gray-400 mb-12'
            initial={{opacity: 0, x: -100,}}
            whileInView={{opacity: 1, x: 0}}
            transition={{ duration: 0.5, delay: 0.2 }}>
            I'm a Software Developer specializing in business system integration for efficiency and scalability. Skilled in full-cycle development, optimizing performance, and ensuring seamless connectivity. Strong communicator, providing technical updates and training. Committed to delivering secure, scalable, and well-integrated solutions aligned with business needs.
          </motion.p>

          <div className='flex flex-wrap items-center gap-4 md:gap-7'>
            {
              aboutItems.map(({ label, number }, key) => (
                <motion.div 
                  initial={{opacity: 0, y: 50,}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{ duration: 0.5, delay: 0.3 }}> 
                  <div className='flex items-center mb-2'>
                    <span className='text-4xl font-semibold'>{number}</span>
                    <span className='text-sky-400 font-semibold text-3xl'>+</span>
                  </div>
                  <p className='text-sm text-zinc-400'>{label}</p>
                </motion.div>
              ))
            }
          </div>
        </div>

        {/* CARDS */}
        <motion.div 
          className='mt-15 lg:mt-20'
          initial={{opacity: 0,}}
          whileInView={{opacity: 1,}}
          transition={{ duration: 0.5, delay: 0.3 }}>
          <Marquee
            speed={100}
            pauseOnClick>
            {
              skillsItems.map(({label, desc}, key) => (
                <div className='flex items-center cursor-pointer gap-3 bg-slate-800 rounded-xl p-5 mx-3 ring-1 ring-inset ring-slate-700'>
                  <div>
                      <h3 className='max-w-[15ch] mb-1'>{label}</h3>
                      <p className='text-gray-400 text-base max-w-[25ch]'>{desc}</p>
                  </div>
                </div>
              ))
            }
          </Marquee>
        </motion.div>

      </div>
        
    </section>
  )
}

export default About