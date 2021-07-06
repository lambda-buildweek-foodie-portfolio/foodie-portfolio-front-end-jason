import {
     REGISTRATION_BEGIN ,
     REGISTER_USER_SUCCESS, 
     REGISTER_USER_FAILURE,
     LOGIN_USER_BEGIN ,
     LOGIN_FAILURE,
     LOGIN_USER_SUCCESS,
     GET_ALL_RECIPES_BEGIN,
     GET_ALL_RECIPES_SUCCESS,
     GET_ALL_RECIPES_FAIL,
     GET_ALL_CHEFS_BEGIN,
     GET_ALL_CHEFS_SUCCESS,
     GET_ALL_CHEFS_FAILURE



} from '../actions/index'

const initialState = {
user: [],
isLoggedIn: false,
isLogginIn: false,
isRegistered: false,
getALL: false, 
deletingRecipe: false,
recipes: [],


}






export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTRATION_BEGIN:
            return {
                ...state,
                isRegistering: true
            }
        case REGISTER_USER_SUCCESS :
            return {
              ...state,
              isRegistering: false,
              user: action.payload  
            }
        case REGISTER_USER_FAILURE:
            return {
             ...state,
             isRegistering: false,
             error: action.payload
            }
        case LOGIN_USER_BEGIN:
            return {
                ...state,
                isLogginIn: true,
                isRegistered: true
            }
        case LOGIN_USER_SUCCESS:
                return {
                    ...state,
                    isLogginIn: false,
                    isLoggedIn: true,
                    user: action.payload
                }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLogginIn: false,
                isLoggedIn: false,
                error: action.payload
            }

            case GET_ALL_RECIPES_BEGIN:
                return {
                    ...state,
                    isLoggedIn: false,
                    isRegistered: false
                }
            case GET_ALL_RECIPES_SUCCESS:
                return {
                    ...state,
                    getALL: true,

                }
            case GET_ALL_RECIPES_FAIL:
                return {
                    ...state,
                    error: action.payload
                }

            case GET_ALL_CHEFS_SUCCESS:
                return{
                    ...state,
                    id: action.payload.id
                }
            case GET_ALL_CHEFS_FAILURE:
                return{
                    ...state,
                    error: action.payload
                }

            default:
                return state;

        }
    }