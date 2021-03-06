import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBlog } from '../../store/actions/index';
import { Link } from "react-router-dom";

class NewBlog extends Component {
  
  state = {
    title: '',
    body: '',
  };
  
  changeHandler(e) {
    this.setState({ 
      [e.target.name]: e.target.value 
    });
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">
              Add a new blog to the collection.
            </h1>
            <form>
              <div className="form-group">
                  <label>Title</label>
                  <input
                      type="text"
                      name="title"
                      id="blogTitle"
                      className="form-control"
                      required
                      onChange={this.changeHandler.bind(this)}
                      value={this.state.title}
                  />
              </div>
              <div className="form-group">
                  <label>Body</label>
                  <input
                      type="text"
                      name="body"
                      id="blogBody"
                      className="form-control"
                      required
                      onChange={this.changeHandler.bind(this)}
                      value={this.state.body}
                  />
              </div>

              <button onClick={() => this.props.onSubmitBlog({title: this.state.title, body: this.state.body})} className="btn custom-button mt-3">
                Save Blog
              </button>
              <Link to="/blog" className="btn btn-link mt-3">
                Back
              </Link>
              
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmitBlog: (blog) => dispatch(createBlog(blog))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewBlog);