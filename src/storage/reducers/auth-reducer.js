import { authAPI, securityAPI } from '../../api/api';
import {stopSubmit} from 'redux-form';
 // type action 
const SET_USER_DATA = 'social-app/auth/SET_USER_DATA';
const SET_CAPTCHA_URL = 'social-app/auth/SET_CAPTCHA_URL';

let initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
   captcha : null // if null, captcha isn't required
};
// Reducer
const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA: 
           // debugger;
            return  { 
                ...state,
                ...action.data,  // create obj data and properties in it: userId, email, login
            }
        case SET_CAPTCHA_URL:
            
            return {
                ...state,
                ...action.data,
            }
        default:
            return state; // no case
    }
};

// Action Creators
// action creator: setAuthUserData for the UsersContainer component
export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: {userId, email, login, isAuth} });

// action creator: setCaptchaUrl
export const setCaptchaUrl = (captcha ) => ({
    type: SET_CAPTCHA_URL, data: { captcha  }
});


// Thunk Creators
export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.authMe(); // the authMe() returns Promise       
    // debugger;
    if(response.data.resultCode === 0) {
        const {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
        // store.getState().auth
    }      
}

// login thunk creator
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha);
    // debugger;
    if(response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    }
    else {
         // Request. Property: captcha: (string) text from captcha-image that should be added if there is resultCode is 10 in response data.
        if(response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        /*Total Form validation. Get error message from our server
        action creator stopSubmit(form name, {object with errors}). The redux-form method 
        _error - special property */
        const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}));  
    }        
}

// captchaUrl thunk creator
export const getCaptchaUrl = () => async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(setCaptchaUrl(captchaUrl))        
}

// logout thunk creator
export const logout = () => async (dispatch) => {
    const response = await authAPI.logout();
    console.log( response.data.resultCode);
    if(response.data.resultCode === 0 && response.data.resultCode !== 10) {
        dispatch(setAuthUserData(null, null, null, false));
        dispatch(setCaptchaUrl(null));
    }  
}

export default authReducer;
