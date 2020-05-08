import React from 'react';

import Intro from './Intro';
import Skills from './Skills';
import Projects from './Projects';
import Contact from '../Layout/Contact';
import '../main.css';

class AboutPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <Intro />
        <Skills />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default AboutPage;