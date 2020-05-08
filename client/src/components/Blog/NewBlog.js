import React from 'react';
import { Link } from "react-router-dom";

class NewBlog extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: "",
        body: "",
      };
  
      this.changeHandler = this.changeHandler.bind(this);
      this.submitHandler = this.submitHandler.bind(this);
    }
  
    // changeHandler(event) {
    //   this.setState({ 
    //       [event.target.name]: event.target.value 
    //     });
    // }
  
    submitHandler(event) {
      event.preventDefault();
      const url = "/api/blog";
      const { title, body } = this.state;

      const data = {
        title,
        body
      };

      fetch(url, {
        method: "POST",
        body: JSON.stringify(data)
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(response => this.props.history.push(`/blog/${response.id}`))
        .catch(error => console.log(error.message));
    }
  
    render() {
      return (
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-12 col-lg-6 offset-lg-3">
              <h1 className="font-weight-normal mb-5">
                Add a new blog to the collection.
              </h1>
              <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        id="blogTitle"
                        className="form-control"
                        required
                        // onChange={this.changeHandler}
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
                        // onChange={this.changeHandler}
                    />
                </div>

                <button type="submit" className="btn custom-button mt-3">
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
  
  export default NewBlog;