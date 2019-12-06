import { axiosWithAuth } from "../axiosAuth"

export const GET_FRIENDS_START = 'GET_FRIENDS_START'
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS'
export const GET_FRIENDS_FAIL = 'GET_FRIENDS_FAIL'
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS='LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const SET_FRIENDS = 'SET_FRIENDS'
export const HANDLE_CHANGE= 'HANDLE_CHANGE'
export const LOGOUT = 'LOGOUT'

export const getFriends = credentials => dispatch => {
    dispatch({ type: GET_FRIENDS_START });
    axiosWithAuth()
      .get('http://localhost:5000/api/friends', credentials)
      .then(res =>
        dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data })
      )
      .catch(err => dispatch({ type: GET_FRIENDS_FAIL, payload: err }));
  };

  export const login = (event, credentials) => dispatch => {
    event.preventDefault()
    dispatch({ type: LOGIN_START });
    axiosWithAuth()
      .post('http://localhost:5000/api/login', credentials)
      .then(res =>
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })
      )
      .catch(err => dispatch({ type: LOGIN_FAIL, payload: err }));
  };

export const handleChange = event => ({
    type: HANDLE_CHANGE,
    payload: event
})

export const setFriends = list => ({
    type: SET_FRIENDS,
    payload: list
})

export const logout = ()=> ({
    type: LOGOUT
})

