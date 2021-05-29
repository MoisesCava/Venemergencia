import {
    USER_STARTED,
    USER_ERROR,
    SET_USER,
    SET_USERS,
    USER_UPDATE,
    SET_USER_ID,
    DELETE_USER,
} from "./userActions"

const initialState = {

    loading: false,
    error: null,
    user: {},
    users: [],
    currentUserId: null,
    currentUser: null

}




const userReducer = (state = initialState, action) => {
    
    const update = () => {
    
        Object.assign(state.users.find(user => user.id === action.updatedUser.id), action.updatedUser)
        
        return state.users
    }

    switch (action.type) {

        case USER_STARTED:
            return {
                ...state,
                loading: true
            }

        case USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }

        case SET_USER:
            return {
                ...state,
                loading: false,
                error: null,
                currentUser: action.user
            }
        case SET_USERS:
            return {
                ...state,
                loading: false,
                error: null,
                users: action.users
            }

        case USER_UPDATE:
            return {
                ...state,
                loading: false,
                error: null,
                users: update()
            }
        // case USER_UPDATE:
        //     return {
        //         ...state,
        //         loading: false,
        //         error: null,
        //         updatedUser: action.updatedUser
        //     }

        case DELETE_USER:
            return {
                ...state,
                loading: false,
                error: null,
                users: state.users.filter(user => user.id !== action.currentUserId)
            }
        case SET_USER_ID:
            return {
                ...state,
                loading: false,
                error: null,
                currentUserId: action.id
            }


        default:
            return state
    }
}



export default userReducer;