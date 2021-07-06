import axios from 'axios'

export const REGISTRATION_BEGIN = 'REGISTRATION_BEGIN'
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE'
export const LOGIN_USER_BEGIN = 'LOGIN_USER_BEGIN'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const GET_ALL_RECIPES_BEGIN = 'GET_ALL_RECIPES_BEGIN'
export const GET_ALL_RECIPES_SUCCESS = 'GET_ALL_RECIPES_SUCCESS'
export const GET_ALL_RECIPES_FAIL = 'GET_ALL_RECIPES_FAIL'
export const DELETE_RECIPE_SUCCESS = 'DELETE_RECIPE_SUCCESS'
export const DELETE_RECIPE = 'DELETE_RECIPE'
export const DELETE_RECIPE_ERROR = 'DELETE_RECIPE_ERROR'
export const GET_ALL_CHEFS_BEGIN ='GET_ALL_CHEFS_BEGIN'
export const GET_ALL_CHEFS_SUCCESS = 'GET_ALL_CHEFS_SUCCESS'
export const GET_ALL_CHEFS_FAILURE = 'GET_ALL_CHEFS_FAILURE'





//logic for registration 
export const register = user => dispatch => {
    dispatch({
        type: REGISTRATION_BEGIN
    })
    axios
    .post('https://foodie-portfolio.herokuapp.com/users/register', user)
    .then(res => {
            sessionStorage.setItem('isRegistered', true)
         
            console.log(res.data)
            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: res.data
            })

    }).catch((err)=> {
        console.log('test', err);
        dispatch({
            type:REGISTER_USER_FAILURE,
            payload: err
        })})

}


// logic for chef/user logging in 

export const login = (user, password) => dispatch => {
    console.log()
    dispatch({
        type: LOGIN_USER_BEGIN
        
    });
    axios
    .post('https://foodie-portfolio.herokuapp.com/users/login', user, password)
    .then( res => {
        console.log(res.data)
        sessionStorage.setItem('jwt', res.data.token);
        sessionStorage.setItem('isLoggedIn', true)
        localStorage.setItem('username', user.username);
 
        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: res.data
        })
    })
         .catch(err => dispatch ({
             type: LOGIN_FAILURE,
             payload: err
         }))
    
  
 }

 // Logic for getting all recipes

 export const getALL = () => dispatch => {
    dispatch({type: GET_ALL_RECIPES_BEGIN});
    axios
    .get('https://foodie-portfolio.herokuapp.com/recipe')
    .then(res => {
       dispatch({type: GET_ALL_RECIPES_SUCCESS,
                 payload: res.data})
    })
    .catch(err => {
        dispatch({tpye: GET_ALL_RECIPES_FAIL, error: "Sorry having trouble loading recipes"})
    })

 }

// Logic for deleting recipe

export const deleteRecipe = (id) => {
    return(dispatch) => {
        dispatch({type: DELETE_RECIPE});
        axios
        .delete(`https://foodie-portfolio.herokuapp.com/recipe/${id}`)
        .then(res => {
            dispatch({type: DELETE_RECIPE_SUCCESS})
        })
        .catch(err => {
            dispatch({type: DELETE_RECIPE_ERROR , error: "Sorry! Could not delete recipe.."})
        });
        
    }

}


// Logic for getting all users/chefs 

export const getChefs =(username) => {
    return (dispatch) => {
        dispatch({type: GET_ALL_CHEFS_BEGIN});
        axios
        .get('https://foodie-portfolio.herokuapp.com/users')
        .then(response => {
            dispatch({type: GET_ALL_CHEFS_SUCCESS,
            payload: response.data.filter(user => user.username === username)[0]  //returns a single user based off the data  [0] since filter returns an array
            })
        }).catch(err => {
            dispatch({type: GET_ALL_CHEFS_FAILURE, payload: 'Sorry having some issues loading chefs'})
        });
    }
}





