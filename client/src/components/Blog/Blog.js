import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Blog = (props) => {
  return (
    <div className="Blog">
      <div className="hero position-relative d-flex align-items-center justify-content-center">
        {/* <img
          src={blog.image}
          alt={`${} image`}
          className="img-fluid position-absolute"
        /> */}

        <h1 className="display-4 position-relative">
          { props.blog.title }
        </h1>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-12 col-lg-3">
              <h5 className="mb-2">Subject (i.e. JavaScript, SQL, Design, etc.)</h5>
          </div>
          <div className="col-sm-12 col-lg-7">
              <p>{props.blog.body}</p>
          </div>
          <div className="col-sm-12 col-lg-2">
            {/* <button type="button" className="btn btn-danger" onClick={this.deleteBlogHandler}>
              Delete
            </button> */}
          </div>
        </div>
        <Link to="/blogs" className="btn btn-link">
          Back
        </Link>
      </div>
    </div>
  );
}


const mapStateToProps = state => {
  console.log('mapStateToProps: ', state)
  return {
    blog: state.blogState.blog
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);