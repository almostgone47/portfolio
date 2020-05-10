import React from 'react';

import Intro from './Intro';
import Skills from './Skills';
import Projects from './Projects';
import Contact from '../Layout/Contact';
import '../main.css';

const About = () => {
  return (
    <div className="App">
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default About;