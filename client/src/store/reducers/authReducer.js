import * as actionTypes from '../actions/actionTypes';

const initialState = {
    current_user: ""
  }
  
function navbarReducer(state = initialState, action) {
    console.log('navbarReducer Action: ', action, 'State: ', state)
    switch (action.type) {
        case actionTypes.FETCH_USER: 
            return {
                current_user: action.payload.data || false
            }
        case actionTypes.LOGIN_USER:
            return {
                current_user: action.payload.data
            }
        default:
            return state
    }
}

  export default navbarReducer;