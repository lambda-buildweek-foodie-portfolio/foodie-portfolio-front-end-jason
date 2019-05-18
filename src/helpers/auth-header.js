
export function authHeader() {

    let user= localStorage.getItem('user');

    if(user && user.token) {
        return {'Aurhorization': 'Bearer' + user.token};
    
    } else {
        return {};
    }
}