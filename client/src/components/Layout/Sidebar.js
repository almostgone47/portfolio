import React from 'react'


class Sidebar extends React.Component {
  constructor(props) {
  super(props);

  this.state = {}

  this.handleScroll = this.handleScroll.bind(this);
  }
  
  handleScroll() {
    this.setState({
      scroll: window.scrollY
    });
  }

  componentDidMount() {
    const element = document.querySelector('nav')
    this.setState({
      top: element.offsetTop,
      height: element.offsetHeight
    });
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate() {
    this.state.scroll > this.state.top ? document.body.style.paddingTop = `${this.state.height}px` : document.body.style.paddingTop = 0;
  }

  render() {
    return (
      <nav className={this.state.scroll > this.state.top ? 'scrolled Sidebar' : 'Sidebar'}>
        <img src="images/menu-icon.png" alt="menu icon" id="menu-icon" /> 
        <ul className="Sidebar-nav">
            <li className="nav-item"><a href="#about">About</a></li>
            <li className="nav-item"><a href="#skills">Skills</a></li>
            <li className="nav-item"><a href="#projects">Projects</a></li>
            <li className="nav-item"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    )
  }
}

export default Sidebar