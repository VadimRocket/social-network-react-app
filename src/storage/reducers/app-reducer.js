import {getAuthUserData} from './auth-reducer';
// type action
const SET_INITIALIZED = 'social-app/app/SET_INITIALIZED'; 

let initialState = {
    initialized: false,
};

// Reducer
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return  { 
                ...state,
                initialized: true, 
            }
        } 
        default:
            return state; // no case
    }
};

// Action creator
export const initializedSuccess = () => ({type: SET_INITIALIZED});

// thunk creator App initialization
export const initializeApp = () => (dispatch) => {
   let promise = dispatch(getAuthUserData());
    // debugger;
    Promise.all([promise])
      .then(() => {
        dispatch(initializedSuccess());
    })
}

export default appReducer;
