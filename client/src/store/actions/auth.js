import axios from 'axios';
import { FETCH_USER, LOGIN_USER } from './actionTypes';

export const getUserState = (res) => {
    return {
        type: FETCH_USER,
        payload: res
    }
}

export const fetchUser = () => {
    return function(dispatch) {
        axios.get('http://localhost:5000/api/current_user')
            .then(res => {
                console.log('reducer FetchUser: ', res.data)
                dispatch(getUserState(res))
            })
            .catch((err) => {
                console.log('reducer FetchUser Error: ', err)
            })
    }
}

export const setUserState = (res) => {
    return { 
        type: LOGIN_USER, 
        payload: res
    }
}

export const loginUser = (user) => {
    console.log('loginUser fucntion: ', user)
    const url = 'http://localhost:5000/api/login';
    const data = {
          username: user.username,
          password: user.password
    }
    const config = {
       withCredentials: true
    }

    return (dispatch) => {
        axios.post(url, data, config)
           .then(res => {
              console.log('logged in: ', res)
              dispatch(setUserState(res));  
            })
           .catch(err => {
              console.log('login err from loginUser POST request: ', err)
           })
    }
 }