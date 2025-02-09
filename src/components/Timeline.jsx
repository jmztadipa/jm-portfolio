import React from 'react'
import {motion} from 'framer-motion'

const experiences = [
    {
        image: '/jm-portfolio/images/sbc_logo.png',
        position: 'Software Developer',
        date: 'May 2024 - Present',
        exp: [
            'Experienced in leading a development team through planning and implementing systems, ensuring thorough execution of all lifecycle phases.',
            'Experienced in leadership training, applying its principles to foster collaboration, team growth, and project success.',
            'Assisted in developing and supporting multiple client systems, ensuring smooth operations and issue resolution post-launch.',
            'Refactored and optimized systems for maintainability and scalability, ensuring ease of future development.',
            'Integrated payment gateways within systems, enhancing transaction capabilities and ensuring secure payment processing for clients.',
            'Integrated third-party APIs such as TikTok and Lazada into systems, enabling clients to leverage external platforms for improved functionality and enhanced user experience.',
            'Has an experienced working with caching to improve performance and efficiency using tools like Redis.'
        ]
    },
    {
        image: '/jm-portfolio/images/sbc_logo.png',
        position: 'Junior Developer 2',
        date: 'September 2023 - May 2024',
        exp: [
            'Developed and deployed a franchise system and managed updates based on client requirements after deployment.',
            'Delivered timely improvements and ongoing maintenance, tailoring systems to client-specific needs.',
            'Conducted deployment activities to ensure smooth integration and provided continuous support for system enhancements.'
        ]
    },
    {
        image: '/jm-portfolio/images/sbc_logo.png',
        position: 'Junior Developer',
        date: 'April 2023 - September 2023',
        exp: [
            'Practiced and implemented OOP principles, applied best practices for RESTful API integration, and gained experience working with the Blazor framework.',
            'Assisted with code review processes, improving understanding of industry standards and clean coding practices under the guidance of experienced developers'
        ]
    },
    {
        image: '',
        "position": "Freelance Web Developer",
        "date": "2022 - 2023",
        "exp": [
            "Developed a software for a construction company, enhancing its online presence and accessibility, with integrated purchasing and inventory management features.",
            "Built a simple e-commerce store, implementing essential features like product listings, shopping cart functionality, and checkout process."
        ]
    }
]

const Timeline = () => {
  return (
    <section id='work' className='section relative pb-5 lg:pb-22'>
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] bg-slate-800 -z-10"></div>

        <div className='container'>

            <motion.p 
                className='text-white text-3xl font-bold mb-12'
                initial={{opacity: 0, x: -100,}}
                whileInView={{opacity: 1, x: 0}}
                transition={{ duration: 0.5, delay: 0.2 }}>
                Work Experience
            </motion.p>

            <motion.ol 
                class="relative border-s dark:border-gray-500"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{ duration: 0.5, delay: 0.2 }}>                  
                {
                    experiences.map(({image, position, date, exp}) => (
                        <li class="mb-10 ms-7 lg:ms-10">
                            <motion.span 
                                class="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-5 ring-slate-900 bg-slate-900"
                                initial={{opacity: 0, scale: 0}}
                                whileInView={{opacity: 1, scale: 1.1}}
                                transition={{ duration: 0.8, delay: 0.2 }}>
                                <span class="material-symbols-outlined">
                                    check
                                </span>
                            </motion.span>

                            <div className='flex items-center mb-5'>
                                {image && (
                                    <motion.img 
                                        className='w-10 h-9 mr-3'
                                        initial={{opacity: 0, y: -20}}
                                        whileInView={{opacity: 1, y: 0}}
                                        transition={{ duration: 0.7, delay: 0.2 }}
                                        src={image}
                                    />
                                )}
                                <div>
                                    <motion.h3 
                                        class="text-lg font-semibold text-white"
                                        initial={{opacity: 0, x: 20}}
                                        whileInView={{opacity: 1, x: 0}}
                                        transition={{ duration: 0.8, delay: 0.2 }}>
                                            {position}
                                    </motion.h3>
                                    <motion.time 
                                        class="mt-1 block text-sm font-normal leading-none text-gray-500"
                                        initial={{opacity: 0, x: 20}}
                                        whileInView={{opacity: 1, x: 0}}
                                        transition={{ duration: 0.8, delay: 0.2 }}>
                                        {date}
                                    </motion.time>
                                </div>
                            </div>
                           
                            <motion.ul 
                                class="text-sm lg:text-base font-normal text-gray-400 mt-3 list-disc list-inside bg-slate-900 p-5 pb-3 lg:pb-6 lg:p-8 rounded-xl ring-1 ring-inset ring-slate-700"
                                initial={{opacity: 0, x: 50}}
                                whileInView={{opacity: 1, x: 0}}
                                transition={{ duration: 0.8, delay: 0.5 }}>
                                {exp.map((item) => (
                                    <li className='mb-4 list-none flex gap-3'>
                                        <span>●</span>
                                        <span>
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </motion.ul>
                        </li>
                    ))
                }
            </motion.ol>
        </div>
    </section>
  )
}

export default Timeline