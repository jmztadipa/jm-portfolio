import React from 'react'
import PropTypes from 'prop-types'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';

const ProjectCard = ({
    imgSrc,
    title,
    tags,
    projectLink,
    classes 
}) => {
  return (
    <motion.div 
        className={'relative cursor-pointer p-4 rounded-2xl bg-slate-900 ring-1 ring-inset ring-slate-700 hover:shadow-[0_20px_50px_rgba(144,_161,_187,_0.3)] ' + classes}
        initial={{opacity: 0, y: 80,}}
        whileInView={{opacity: 1, y: 0}}
        transition={{ duration: 0.5, delay: 0.2 }}>

        <figure className='img-box aspect-square rounded-lg mb-5'>
            <img src={imgSrc} alt={title} loading='lazy' className='img-cover' />
        </figure>

        <div className='flex items-center justify-between gap-4'>
            <div>
                <h3 className='title-1 mb-3 text-xl'>{title}</h3>
                <div className='flex flex-wrap items-center gap-2'>
                    {
                        tags.map((label, key) => (
                            <span key={key} className='h-8 text-sm text-gray-400 bg-zinc-50/5 grid items-center px-3 rounded-lg ring-1 ring-inset ring-slate-700'>
                                {label}
                            </span>
                        ))
                    }
                </div>
            </div>

            <div className='p-2 rounded-lg grid place-items-center bg-blue-400 ring-1 ring-inset ring-blue-300 text-white shrink-0'>
                <span className='material-symbols-rounded' aria-hidden='true'>arrow_outward</span>
            </div>
        </div>
        <Link to={`/jm-portfolio/project/${encodeURIComponent(title)}`} className="absolute inset-0"></Link>

    </motion.div>
  )
}

ProjectCard.PropTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    projectLink: PropTypes.string,
    class: PropTypes.string
}

export default ProjectCard