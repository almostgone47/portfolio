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
                dispatch(getAllBlogs(res))
            })
            .catch(err => {
                console.log('error posting new blog: ', err)
            })
    }
}

export const getBlog = (blog) => {
    const url = '/api/blog/:id';
    const data = {
        id: blog.id
    }
    const config = {
        withCredential: true
    }
    
    return (dispatch) => {
        axios.get(url, data, config)
            .then(res => {
                dispatch(setBlog(res))
            })
            .catch(err => {
                console.log('error fetching blog: ', err)
            })
    }
}