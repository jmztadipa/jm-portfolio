import React from 'react'
import ProjectCard from './ProjectCard';
import {motion} from 'framer-motion'
import Tilt from 'react-parallax-tilt';

export const works = [
    {
      imgSrc: '/jm-portfolio/images/StaySphere.jpg',
      title: 'StaySphere Hotel Booking',
      description: 'StaySphere Hotel Booking is an advanced hotel reservation platform designed for seamless and efficient booking experiences. It features dynamic room listings that allow hotels to manage availability in real time. The system integrates SignalR for instant updates and push notifications, ensuring users and administrators receive real-time booking and status alerts. A secure payment gateway processes transactions, with a webhook that automatically updates booking statuses upon successful payment, streamlining operations and enhancing user experience.',
      tags: ['API', '.NET', 'MVC', 'BLAZOR', 'EF CORE', 'SQL SERVER', 'PAYMENT GATEWAY', 'SIGNALR', 'PUSH NOTIFICATION'],
      projectLink: 'https://www.youtube.com/watch?v=21uyv7xQcao'
    },
    {
      imgSrc: '/jm-portfolio/images/InvoiceBuilder.jpg',
      title: 'Invoice Builder',
      description: 'Invoice Builder is a streamlined invoicing solution that enables dynamic invoice creation for customers. Once an invoice is generated, the user receives it instantly. The system integrates a secure payment gateway, allowing customers to complete transactions seamlessly. Upon successful payment, a webhook is triggered to automatically update the invoice status in the database, ensuring accurate record-keeping and operational efficiency.',
      tags: ['API', '.NET', 'MVC', 'BLAZOR', 'EF CORE', 'SQL SERVER', 'PAYMENT GATEWAY', 'PUSH NOTIFICATION'],
      projectLink: 'https://www.youtube.com/watch?v=fq-OTZkCzfI'
    },
    {
      imgSrc: '/jm-portfolio/images/Ticketing.jpg',
      title: 'Helpdesk Ticketing',
      description: 'Helpdesk Ticketing System is a real-time support platform that enables seamless communication between customers and administrators. Customers can create tickets, which are instantly received by admins through SignalR-powered real-time updates and push notifications. Both parties can engage in real-time messaging to resolve issues efficiently. Once the conversation is complete, the admin can mark the ticket as resolved, ensuring a streamlined and responsive support process.',
      tags: ['API', '.NET', 'MVC', 'BLAZOR', 'EF CORE', 'SQL SERVER', 'SIGNALR', 'PUSH NOTIFICATION'],
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