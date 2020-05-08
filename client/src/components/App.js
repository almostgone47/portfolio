import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';

import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import AboutPage from './AboutPage/AboutPage';
import BlogPage from './Blog/Blogs';
import NewBlog from './Blog/NewBlog';
import Blog from './Blog/Blog';
import Resume from './Resume/Resume';
import Login from './auth/Login';
import Signup from './auth/Signup';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Navbar />
                    <Route path="/" exact component={AboutPage} />
                    <Route path="/new_blog" exact component={NewBlog} />
                    <Route path="/blog/:id" exact component={Blog} />
                    <Route path="/blog" exact component={BlogPage} />
                    <Route path="/resume" exact component={Resume} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/signup" exact component={Signup} />
                    <Footer />
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);