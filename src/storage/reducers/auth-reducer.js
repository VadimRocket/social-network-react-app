import {authAPI} from '../../api/api';

const SET_USER_DATA = 'SET_USER_DATA'; // type action

let initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA: {
           // debugger;
            return  { 
                ...state,
                ...action.data, // create obj data and  properties in it: userId, email, login
                isAuth: true // if logged

            }
        } 
        default:
            return state; // no case
    }
};

// actions creators for the UsersContainer component
export const setAuthUserData = (userId,email,login) => ({type: SET_USER_DATA, data: {userId,email,login} });

// thunk creator
export const getAuthUserData = () => (dispatch) => {
    authAPI.authMe()
        .then(response => {  
            // debugger;
            if(response.data.resultCode === 0) {
                let {id,email,login} = response.data.data;
                dispatch(setAuthUserData(id,email,login));
                // store.getState().auth
            } 
        });  
}




export default authReducer;