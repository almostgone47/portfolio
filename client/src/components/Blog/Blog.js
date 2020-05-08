import React from "react";
import { Link } from "react-router-dom";

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
        blog: {
            title: "", 
            body: "" 
        } 
    };
    this.deleteBlogHandler = this.deleteBlogHandler.bind(this);
  }

  deleteBlogHandler() {
    const { match: {params: { id }} } = this.props;
    const url = `/api/v1/destroy/${id}`;
    const token = document.querySelector('meta[name="csrf-token"]').content;

    fetch(url, {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(() => 
        this.props.history.push("/blog")
      )
      .catch(error => 
        console.log(error.message)
      );
  }

  componentDidMount() {
    const { match: {params: { id }} } = this.props;
    const url = `/api/v1/show/${id}`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(response => 
        this.setState({ 
          blog: response 
        }))
      .catch((err) => 
        console.log("blog fetch: ", err)
      );
  }

  render() {
    const { blog } = this.state;

    return (
      <div className="Blog">
        <div className="hero position-relative d-flex align-items-center justify-content-center">
          {/* <img
            src={blog.image}
            alt={`${} image`}
            className="img-fluid position-absolute"
          /> */}
          <div className="overlay bg-dark position-absolute" />
          <h1 className="display-4 position-relative text-white">
            {blog.title}
          </h1>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-12 col-lg-3">
                <h5 className="mb-2">Subject (i.e. JavaScript, SQL, Design, etc.)</h5>
            </div>
            <div className="col-sm-12 col-lg-7">
                <p>{blog.body}</p>
            </div>
            <div className="col-sm-12 col-lg-2">
              <button type="button" className="btn btn-danger" onClick={this.deleteBlogHandler}>
                Delete
              </button>
            </div>
          </div>
          <Link to="/blog" className="btn btn-link">
            Back
          </Link>
        </div>
      </div>
    );
  }
}

export default Blog;