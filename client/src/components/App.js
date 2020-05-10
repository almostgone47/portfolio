import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';

import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import About from './About/About';
import Blogs from './Blog/Blogs';
import NewBlog from './Blog/NewBlog';
import EditBlog from './Blog/EditBlog';
import Blog from './Blog/Blog';
import Resume from './Resume/Resume';
import Login from './Auth/Login';
import Signup from './Auth/Signup';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Navbar />
                    <Route path="/" exact component={About} />
                    <Route path="/newBlog" exact component={NewBlog} />
                    <Route path="/editBlog" exact component={EditBlog} />
                    <Route path="/blog" exact component={Blog} />
                    <Route path="/blogs" exact component={Blogs} />
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