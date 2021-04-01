import React, { useState } from 'react'
import Educations from './compo/Educations';
import Hero from './compo/Hero'
import Navbar from './compo/Navbar'
import NavMobile from "./compo/NavMobile"
import Projetcs from './compo/Projetcs';
import WorkExperience from './compo/WorkExperience';
import "./App.css"
import Contact from './compo/Contact';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <div className="app">
      <NavMobile toggle={toggle} isOpen={isOpen} />
      <Navbar toggle={toggle} />
      <Hero />
      <Educations />
      <WorkExperience />
      <Projetcs />
      <Contact />
    </div>
  );
}

export default App;
