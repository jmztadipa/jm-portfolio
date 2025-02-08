import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Skill from './components/Skill'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
     <Header />  
      <main>
        <Hero />
        <About />
        <Timeline />
        <Skill />
        <Project />
        <Contact />
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default App