import { 
    GET_FRIENDS_START,
    GET_FRIENDS_FAIL, 
    GET_FRIENDS_SUCCESS,
    LOGIN_START,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    HANDLE_CHANGE ,
    SET_FRIENDS,
    LOGOUT
    } 
from "../actions"

const initialState = {
    error: '',
    isFetching: false,
    isLoggingIn: false,
    friendsList: [],
    credentials: {},
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
    case HANDLE_CHANGE:
        return {
            ...state,
            credentials: {
                ...state.credentials,
                [payload.target.name]: payload.target.value,
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
            credentials: {}
        }
    default: 
        return state
}
}
