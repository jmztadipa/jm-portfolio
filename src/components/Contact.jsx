import React from 'react'
import {motion} from 'framer-motion'

const socialLinks = [
    {
      title: 'https://linkedin.com/in/john-michael-tadipa-519399234',
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.75 3C4.24011 3 3 4.24011 3 5.75V18.25C3 19.7599 4.24011 21 5.75 21H18.25C19.7599 21 21 19.7599 21 18.25V5.75C21 4.24011 19.7599 3 18.25 3H5.75ZM5.75 4.5H18.25C18.9491 4.5 19.5 5.05089 19.5 5.75V18.25C19.5 18.9491 18.9491 19.5 18.25 19.5H5.75C5.05089 19.5 4.5 18.9491 4.5 18.25V5.75C4.5 5.05089 5.05089 4.5 5.75 4.5ZM7.75 6.5C7.41848 6.5 7.10054 6.6317 6.86612 6.86612C6.6317 7.10054 6.5 7.41848 6.5 7.75C6.5 8.08152 6.6317 8.39946 6.86612 8.63388C7.10054 8.8683 7.41848 9 7.75 9C8.08152 9 8.39946 8.8683 8.63388 8.63388C8.8683 8.39946 9 8.08152 9 7.75C9 7.41848 8.8683 7.10054 8.63388 6.86612C8.39946 6.6317 8.08152 6.5 7.75 6.5ZM7 10C6.7235 10 6.5 10.2235 6.5 10.5V17C6.5 17.2765 6.7235 17.5 7 17.5H8.5C8.7765 17.5 9 17.2765 9 17V10.5C9 10.2235 8.7765 10 8.5 10H7ZM10.5 10C10.2235 10 10 10.2235 10 10.5V17C10 17.2765 10.2235 17.5 10.5 17.5H12C12.2765 17.5 12.5 17.2765 12.5 17V13.25C12.5 12.5605 13.0605 12 13.75 12C14.4395 12 15 12.5605 15 13.25V17C15 17.2765 15.2235 17.5 15.5 17.5H17C17.2765 17.5 17.5 17.2765 17.5 17V13C17.5 11.3455 16.1545 10 14.5 10C13.731 10 13.0315 10.293 12.5 10.7705V10.5C12.5 10.2235 12.2765 10 12 10H10.5Z" fill="currentColor" />
      </svg>,
      alt: 'LinkedIn'
    },
  ];

const Contact = () => {
  return (
    <section id='contact' className='section relative pb-10 lg:pb-7 lg:-mt-13 bg-slate-900'>

        <div className="container lg:grid lg:grid-cols-2 lg:gap-5 lg:-mt-10 items-center">
           
            <div className='mb-12 lg:mb-0 lg:flex lg:flex-col'>
                <motion.h2 
                  className='text-white text-3xl font-bold mb-5'
                  initial={{opacity: 0, x: -100,}}
                  whileInView={{opacity: 1, x: 0}}
                  transition={{ duration: 0.5, delay: 0.2 }}>
                    Let’s Connect and Collaborate
                </motion.h2>
                <motion.p 
                  className='text-gray-400 mb-5 max-w-[50ch]'
                  initial={{opacity: 0, x: -100,}}
                  whileInView={{opacity: 1, x: 0}}
                  transition={{ duration: 0.5, delay: 0.3 }}>
                    Get in touch to explore your project needs and create something incredible together!
                  </motion.p>
                <div className='flex flex-col gap-3'>
                  <motion.div 
                  className='flex gap-2 text-gray-300'
                    initial={{opacity: 0, x: -100,}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{ duration: 0.5, delay: 0.4 }}>
                    <span class="material-symbols-outlined">call</span>
                    <p>+63(99) 822 20738</p>
                  </motion.div>
                  <motion.div 
                    className='flex gap-2 text-gray-300'
                    initial={{opacity: 0, x: -100,}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{ duration: 0.5, delay: 0.5 }}>
                    <span class="material-symbols-outlined">location_on</span>
                    <p>Commonwealth, Quezon City, Philippines</p>
                  </motion.div>
                   
                </div>
            </div>

            <form action="https://getform.io/f/bkkkmlxb" method='POST' className='xl:pl-10 2xl:p-20'>
                <motion.div 
                  className='mb-4'
                  initial={{opacity: 0, x: 100,}}
                  whileInView={{opacity: 1, x: 0}}
                  transition={{ duration: 0.5, delay: 0.2 }}>
                    <label htmlFor="email" className='label'>Email</label>
                    <input type="email" name='email' id='email' required placeholder='Your email' className="text-field" />
                </motion.div>
                <motion.div
                  className='mb-4'
                  initial={{opacity: 0, x: 100,}}
                  whileInView={{opacity: 1, x: 0}}  
                  transition={{ duration: 0.5, delay: 0.3 }}>
                    <label htmlFor="message" className='label'>Message</label>
                    <textarea name="message" id="message" placeholder="Let's connect!" required className='text-field resize-y min-h-40 max-h-100'></textarea>
                </motion.div>
                <motion.button 
                  initial={{opacity: 0, x: 100 }}
                  whileInView={{opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  type='submit'
                  className='btn btn-primary max-w-full w-full justify-center'>Submit
                </motion.button>
            </form>

        </div>
    </section>
  )
}

export default Contact