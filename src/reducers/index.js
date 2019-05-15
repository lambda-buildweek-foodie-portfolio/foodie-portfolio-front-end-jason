import {combineReducers} from 'redux'
import alertReducer from './alertReducers'
import authenticationReducer from './authenticationReducer'
import registrationReducer from './registrationReducer'
import userReducer from './usersReducer'



const rootReducer = combineReducers({ alertReducer, authenticationReducer, registrationReducer, userReducer})


export default rootReducer;