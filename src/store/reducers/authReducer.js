const initState = {
    authError: null,
}
const authReducer = (state= initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('Login error');
            return {
                ...state,
                authError: 'Login failed'
            };
        case 'LOGIN_SUCCESS':
            console.log('Login success')
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('Logout Success')
            return state;
        default:
            return state;
    }
}

export default authReducer;