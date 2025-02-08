import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Skill from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';
import ProjectDetails from './components/ProjectDetails';

const App = () => {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
};

const MainLayout = () => {
  const location = useLocation();
  const isProjectDetailsPage = location.pathname.startsWith('/jm-portfolio/project/');

  return (
    <>
      {!isProjectDetailsPage && <Header />}
      <main>
        <Routes>
          <Route path="/jm-portfolio" element={
            <>
              <Hero />
              <About />
              <Timeline />
              <Skill />
              <Project />
              <Contact />
            </>
          } />
          <Route path="/jm-portfolio/project/:title" element={<ProjectDetails />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
