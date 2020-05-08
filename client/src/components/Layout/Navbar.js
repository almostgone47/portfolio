import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../../store/actions/index';

import menuIcon from '../../images/menu-icon.png';

class Navbar extends Component {
  constructor(props) {
    super(props);
  
    this.state = {}
  
    this.handleScroll = this.handleScroll.bind(this);
  }

  renderLogin() {
    switch (this.props.auth.current_user) {
      case null:
        return 'Still deciding'
      case false:
        return <Link to="/login" className="nav-item">Login</Link>
      default:
        return <><Link to="/blog" className="nav-item">Blog</Link>
                <a href="/api/logout" className="nav-item">Logout</a>
               </>
    }
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
    this.props.onFetchUser();
  }

  componentDidUpdate() {
    this.state.scroll > this.state.top ? document.body.style.paddingTop = `${this.state.height}px` : document.body.style.paddingTop = 0;
    
  }

  render() {
    return (
      <nav className= {this.state.scroll > this.state.top ? 'scrolled fixed-nav navbar navbar-expand navbar-dark fixed-top align-content-right' : 'navbar navbar-expand navbar-dark fixed-top align-content-right'}>
        <img src={menuIcon} alt="menu icon" id="menu-icon" /> 
        <ul className="navbar-nav">
            <Link to="/" className="nav-item">About Me</Link>
            <Link to="/resume" className="nav-item">Resume</Link>
            {this.renderLogin()}
        </ul>
      </nav>
    )
  }
}

function mapStateToProps({auth}) {
  console.log('mapstateToProps: ', auth)
  return {
    auth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchUser: () => dispatch(fetchUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);