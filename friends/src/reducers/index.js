import { 
    GET_FRIENDS_START,
    GET_FRIENDS_FAIL, 
    GET_FRIENDS_SUCCESS,
    LOGIN_START,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    HANDLE_CHANGE,
    SET_FRIENDS,
    LOGOUT,
    ADD_FRIEND_START,
    ADD_FRIEND_FAIL,
    ADD_FRIEND_SUCCESS,
    DELETE_FRIEND,
    EDIT_START,
    EDIT_SUCCESS,
    EDIT_FAIL
    } 
from "../actions"

const initialState = {
    error: '',
    isFetching: false,
    isLoggingIn: false,
    isAdding: false,
    isEditing: false,
    friendsList: [],
    credentials: {},
    newFriend: {
        name: '',
        age: '',
        email: ''
    },
    token: '',
    editedFriend: {}
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
            [payload.form]: {
                ...state[payload.form],
                [payload.event.target.name]: payload.event.target.value,
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
            error: '',
            isFetching: false,
            isLoggingIn: false,
            isAdding: false,
            isEditing: false,
            friendsList: [],
            credentials: {},
            newFriend: {
                name: '',
                age: '',
                email: ''
            },
            token: '',
            editedFriend: {}
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
    case EDIT_START:
        return {
            ...state,
            error: '',
            isEditing: true,
            editedFriend: state.friendsList.find(friend=> friend.id===payload)
        }
    case EDIT_SUCCESS:
        return {
            ...state,
            error: '',
            isEditing: false,
            editedFriend: {},
            friendList: payload
        }
    case EDIT_FAIL:
        return {
            error: payload,
            isEditing: false,
            editedFriend: {}
        }
    default: 
        return state
}
}
