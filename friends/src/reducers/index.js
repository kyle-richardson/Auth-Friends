import { 
    GET_FRIENDS_START,
    GET_FRIENDS_FAIL, 
    GET_FRIENDS_SUCCESS,
    LOGIN_START,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    HANDLE_CHANGE_LOGIN ,
    HANDLE_CHANGE_FRIEND,
    SET_FRIENDS,
    LOGOUT,
    ADD_FRIEND_START,
    ADD_FRIEND_FAIL,
    ADD_FRIEND_SUCCESS,
    DELETE_FRIEND
    } 
from "../actions"

const initialState = {
    error: '',
    isFetching: false,
    isLoggingIn: false,
    isAdding: false,
    friendsList: [],
    credentials: {},
    newFriend: {
        name: '',
        age: '',
        email: ''
    },
    token: ''
}

export const rootReducer = (state = initialState, {type, payload})=> {
switch (type) {
    case GET_FRIENDS_START:
        return {
            ...state,
            error: '',
            isFetching: true
        }
    case GET_FRIENDS_FAIL:
        return {
            ...state,
            error: payload,
            isFetching: false
        }
    case GET_FRIENDS_SUCCESS:
        return {
            ...state,
            error: '',
            isFetching: false,
            friendsList: payload
        }
    case LOGIN_START:
        return {
            ...state,
            error: '',
            isLoggingIn: true
        }
    case LOGIN_FAIL:
        return {
            ...state,
            error: payload,
            isLoggingIn: false
        }
    case LOGIN_SUCCESS:
        return {
            ...state,
            error: '',
            isLoggingIn: false,
            token: payload
        }
    case HANDLE_CHANGE_LOGIN:
        return {
            ...state,
            credentials: {
                ...state.credentials,
                [payload.target.name]: payload.target.value,
            }
        }
    case HANDLE_CHANGE_FRIEND:
        return {
            ...state,
            newFriend: {
                ...state.newFriend,
                [payload.target.name]: payload.target.value
            }
        }
    case SET_FRIENDS:
        return {
            ...state,
            friendsList: payload
        }
    case LOGOUT:
        return {
            ...state,
            token: '',
            credentials: {},
            error: ''
        }
    case ADD_FRIEND_START:
        return {
            ...state,
            isAdding: true,
            err: ''
        }
    case  ADD_FRIEND_FAIL:
        return {
            ...state,
            err: payload,
            isAdding: false

        }
    case ADD_FRIEND_SUCCESS: 
        return {
            ...state,
            err: '',
            friendsList: payload,
            isAdding: false
        }
    case DELETE_FRIEND:
        return {
            ...state,
            friendsList: payload
        }
    default: 
        return state
}
}
