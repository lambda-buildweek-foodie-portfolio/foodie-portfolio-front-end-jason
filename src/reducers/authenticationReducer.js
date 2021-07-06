import { userConstants } from '../constants/user.constants'

let user = localStorage.getItem('user');
const initialState = user ? { loggedIn: true, user } : {};

export default function authentication(state = initialState, action) {
  console.log(action)
  const {password,type, ...userInfo} = action  // filtered out user password 
  console.log(userInfo)
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
       
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: userInfo
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}