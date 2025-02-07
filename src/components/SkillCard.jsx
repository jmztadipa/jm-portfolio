import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const SkillCard = ({
    imgSrc,
    effect
}) => {
  return (
    <motion.div 
      className={'flex justify-center cursor-pointer gap-3 bg-slate-800 rounded-xl p-6 ring-1 ring-slate-700 transition duration-500 ease-in-out ' + effect}
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }} // Ensures animation only triggers once when in view
      transition={{ duration: 0.5 }}
    >
      <img src={imgSrc} className='w-10 h-10 img-glow' />
    </motion.div>
  )
}

SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    effect: PropTypes.string
}

export default SkillCard
