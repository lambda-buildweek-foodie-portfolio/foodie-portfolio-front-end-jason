import { alertConstants } from '../constants';
//  Wrapping acttion methods in object for easy importing , and better view of all actions available. 
export const alertActions = {
    success,
    error,
    clear

};
// Using nested functions for clean code, and ability to use generic names without conflicts with other function names because of the local scope.  
function success(message) {
    return {type: alertConstants.SUCCESS, message};
}
function error(message) {
    return {type: alertConstants.ERROR, message};
}
function clear() {
    return {type: alertConstants.CLEAR};
}

