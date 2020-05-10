import axios from 'axios';
import { GET_BLOG, GET_ALL_BLOGS } from './actionTypes';


export const setAllBlogs = (res) => {
    return {
        type: GET_ALL_BLOGS,
        payload: res
    }
}

export const setBlog = (res) => {
    return {
        type: GET_BLOG,
        payload: res
    }
}

export const getAllBlogs = (blog) => {
    const url = '/api/blogs';
    // NOT SURE IF DATA IS REQUIRED???
    const data = {}
    const config = {
        withCredential: true
    }

    return (dispatch) => {
        axios.get(url, data, config)
            .then(res => {
                dispatch(setAllBlogs(res.data))
            })
            .catch(err => {
                console.log('error fetching all blogs: ', err)
            })
    }
}

export const createBlog = (blog) => {
    const url = '/api/blog/new';
    const data = {
        title: blog.title,
        body: blog.body
    }
    const config = {
        withCredential: true
    }
    
    return (dispatch) => {
        axios.post(url, data, config)
            .then(res => {
                // NOT SURE IF THIS NEEDS TO USE DISPATCH OR JUST CALL GETALLBLOGS()
                console.log('this is the dispatch that I do no think will work because it should call setting for reducer: ', res)
                dispatch(getAllBlogs(res.data))
            })
            .catch(err => {
                console.log('error posting new blog: ', err)
            })
    }
}

export const updateBlog = (blog) => {
    const url = `/api/blog`;
    const data = {
        id: blog.id,
        title: blog.title,
        body: blog.body
    }
    const config = {
        withCredential: true
    }
    console.log('updateBlog fx: data = ', data)
    return (dispatch) => {
        axios.put(url, data, config)
            .then(res => {
                // NOT SURE IF THIS NEEDS TO USE DISPATCH OR JUST CALL GETALLBLOGS()
                console.log('blog.js axios.put req: ', res)
                dispatch(getBlog(blog.id))
            })
            .catch(err => {
                console.log('error posting new blog: ', err)
            })
    }
}

export const getBlog = (id) => {
    const url = `/api/blog/${id}`;
    
    return (dispatch) => {
        axios.get(url)
            .then(res => {
                dispatch(setBlog(res.data))
            })
            .catch(err => {
                console.log('error fetching blog: ', err)
            })
    }
}

  // componentDidMount() {
  //   const { match: {params: { id }} } = this.props;
  //   const url = `/api/v1/show/${id}`;

  //   fetch(url)
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //     })
  //     .then(response => 
  //       this.setState({ 
  //         blog: response 
  //       }))
  //     .catch((err) => 
  //       console.log("blog fetch: ", err)
  //     );
  // }