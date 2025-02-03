import React, { useState } from 'react'
import Navbar from './Navbar'

const Header = () => {

  const [navOpen, setNavOpen] = useState(false);

  return (

    <header className='fixed pt-5 left-0 w-full flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0'>
        <div className='max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6'>
            <div className='flex align-center'>
              <span className="material-symbols-outlined mr-2 mt-[1px]">mail</span> 
              <span>me.jmtadipa@gmail.com</span>
            </div>
            <div className='relative md:justify-self-center'>
              <button className='menu-btn' onClick={() => setNavOpen((prev) => !prev)}>
                <span className="material-symbols-rounded">
                  {navOpen ? 'close' : 'menu'}
                </span>
              </button>
              <Navbar navOpen={navOpen} />
            </div>

            {/* <a href="#contact" className='btn btn-secondary'>Contact Me</a> */}

        </div>
    </header>

  )
}

export default Header