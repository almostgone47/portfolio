import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getAllBlogs } from '../../store/actions/index';


class Blogs extends Component {
    componentDidMount() {
        this.props.onGetAllBlogs();
    }
    
    render() {
        console.log('this.props', this.props.blogs)
        const allBlogs = this.props.blogs.map((blog, index) => (
            <div key={index} className="col-md-12">
                <Link to={`/blog/${blog.id}`} className="btn custom-button">
                    <div className="card mb-5">
                        <div className="card-body">
                            <h5 className="card-title">{blog.title}</h5>
                            <p>{blog.body}</p>      
                        </div>
                    </div>
                </Link>
            </div>
        ));

        const noBlog = (
            <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
                <h4>
                    No blogs yet.
                    <Link exact to="/new_blog">Write your first blog!</Link>
                </h4>
            </div>
        );

        return (
            <>
                <section className="jumbotron jumbotron-fluid text-center">
                    <div className="container py-5">
                        <h1 className="display-4">Blog coming soon!</h1>
                        <p className="lead text-muted">
                            This page isn't done yet. I'm going to add subjects and whatnot when I finish some other projects. I'll be adding old and new blog posts in the near future.
                        </p>
                    </div>
                </section>
                <div className="py-5">
                    <main className="container">
                        <div className="mb-3">
                            <Link exact to="/new_blog" className="btn">
                                Create New Blog
                            </Link>
                        </div>
                        <div className="row">
                            {this.props.blogs.length > 0 ? allBlogs : noBlog}
                        </div>
                    </main>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    console.log('blogs mapstatetoprops: ', state.blogState.blogs)
    return {
        blogs: state.blogState.blogs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetAllBlogs: () => dispatch(getAllBlogs())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Blogs);