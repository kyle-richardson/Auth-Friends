import { axiosWithAuth } from "../axiosAuth"

export const GET_FRIENDS_START = 'GET_FRIENDS_START'
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS'
export const GET_FRIENDS_FAIL = 'GET_FRIENDS_FAIL'
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS='LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const SET_FRIENDS = 'SET_FRIENDS'
export const HANDLE_CHANGE_LOGIN= 'HANDLE_CHANGE_LOGIN'
export const HANDLE_CHANGE_FRIEND='HANDLE_CHANGE_FRIEND'
export const LOGOUT = 'LOGOUT'
export const ADD_FRIEND_START='ADD_FRIEND_START'
export const ADD_FRIEND_FAIL='ADD_FRIEND_FAIL'
export const ADD_FRIEND_SUCCESS='ADD_FRIEND_SUCCESS'
export const DELETE_FRIEND='DELETE_FRIEND'

export const getFriends = () => dispatch => {
  dispatch({ type: GET_FRIENDS_START });
  axiosWithAuth()
    .get('http://localhost:5000/api/friends')
    .then(res =>
      dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data })
    )
    .catch(err => {
      return dispatch({ type: GET_FRIENDS_FAIL, payload: err })
    });
};

export const login = (event, credentials) => dispatch => {
  event.preventDefault()
  dispatch({ type: LOGIN_START });
  axiosWithAuth()
    .post('http://localhost:5000/api/login', credentials)
    .then(res =>
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })
    )
    .catch(err => {
      return dispatch({ type: LOGIN_FAIL, payload: err })
    });
};

export const addFriend = (event, newFriend) => dispatch => {
  event.preventDefault()
  dispatch({ type: ADD_FRIEND_START });
  axiosWithAuth()
    .post('http://localhost:5000/api/friends', newFriend)
    .then(res =>
      dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data.payload })
    )
    .catch(err => {
      return dispatch({ type: ADD_FRIEND_FAIL, payload: err })
    });
};

export const deleteFriend = id => dispatch=> {
  axiosWithAuth()
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(res => dispatch({ type: DELETE_FRIEND, payload: res.data.payload}))
    .catch(err=> console.log(err))
}
export const handleChangeLogin = event => ({
    type: HANDLE_CHANGE_LOGIN,
    payload: event
})
export const handleChangeFriend = event => ({
    type: HANDLE_CHANGE_FRIEND,
    payload: event
})

export const setFriends = list => ({
    type: SET_FRIENDS,
    payload: list
})

export const logout = ()=> ({
    type: LOGOUT
})



