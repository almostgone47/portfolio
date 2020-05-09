import * as actionTypes from '../actions/actionTypes';

const initialState = {
    blogs: [],
    blog: {}
}

function blogReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_ALL_BLOGS:
            return {
                ...state,
                blogs: action.payload
            }
        case actionTypes.GET_BLOG:
            return {
                ...state,
                blog: action.payload
            }
        default:
            return state
    }
}
export default blogReducer; 