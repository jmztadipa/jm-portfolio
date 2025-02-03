import React from 'react'
import {motion} from 'framer-motion'
import { ButtonPrimary, ButtonOutline } from './Button'
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (

    <section className='pt-28 lg:pt-16 lg:h-dvh relative' id='home'>
        
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] -z-10 bg-slate-800"></div>

        <div className='flex flex-col justify-center items-center text-center px-6 mt-10'>
            <motion.img
                src="/images/avatar-1.gif" 
                alt="Avatar"
                className="w-50 rounded-full" 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
            />

            <motion.div 
                className='flex items-center mb-5 text-lg sm:text-2xl'
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}>
                {/* <img src="/images/wave.gif" alt="" width={48} className='mr-2' /> */}
                <TypeAnimation
                    sequence={[
                        "👋 Hello, I'm John Michael Tadipa!",
                        2000,
                        "Let’s Build Something Amazing Together!",
                        2000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ display: "inline-block" }}
                    />
            </motion.div>
               
            <motion.h1
                className="text-3xl md:text-5xl leading-11 sm:leading-16 font-bold text-gray-100 mb-6 max-w-[30ch]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                >
                Building Practical, Scalable Software with a <span className='text-blue-400'>Focus on Your Needs.</span>
            </motion.h1>

            <motion.p
                className="text-base md:text-lg text-gray-300 mb-12 max-w-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
               A Software Developer with a passion for creating custom business solutions, ensuring efficiency, scalability, and seamless user experiences.
            </motion.p>

            <div className='flex mb-16 gap-5'>
                <motion.a
                    href="#contact"
                    className="bg-blue-500 text-white px-8 py-3 rounded-xl font-medium text-sm md:text-base hover:bg-blue-800 transition-all duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    Contact Me
                </motion.a>

                <motion.a
                    className="ring-1 ring-inset text-white px-7 py-3 rounded-xl font-medium text-sm md:text-base hover:bg-white hover:text-gray-600 transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    Download CV
                </motion.a>
            </div>

            <motion.img
                className="w-9 mb-10 mb-sm-0"
                src="/images/mouse.gif"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}>
            </motion.img>

        </div>
    </section>
  )
}

export default Hero