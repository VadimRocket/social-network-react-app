import {authAPI} from '../../api/api';
import {stopSubmit} from 'redux-form';
 // type action 
const SET_USER_DATA = 'social-app/auth/SET_USER_DATA';

let initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
};
// Reducer
const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA: {
           // debugger;
            return  { 
                ...state,
                ...action.data, // create obj data and properties in it: userId, email, login
            }
        } 
        default:
            return state; // no case
    }
};
// Action Creators
// action creator setAuthUserData for the UsersContainer component
export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth} });

// Thunk Creators
export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.authMe(); // the authMe() returns Promise       
    // debugger;
    if(response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
        // store.getState().auth
    }      
}

// login thunk creator
export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
    // debugger;
    if(response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        /*Total Form validation. Get error message from our server
            action creator stopSubmit(form name, {object with errors}). The redux-form method 
            _error - special property */
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}));  
    }        
}
// logout thunk creator
export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
    if(response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }  
}

export default authReducer;
