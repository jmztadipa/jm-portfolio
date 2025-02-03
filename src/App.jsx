import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Skill from './components/Skill'
import Work from './components/Work'
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
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App