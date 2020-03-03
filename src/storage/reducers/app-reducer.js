import {getAuthUserData} from './auth-reducer';

const SET_INITILIZED_SUC = 'SET_INITILIZED_SUC'; // type action

let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_INITILIZED_SUC: {
            return  { 
                ...state,
                initialized: true, 
            }
        } 
        default:
            return state; // no case
    }
};

// action creator
export const initializedSuccess = () => ({type: SET_INITILIZED_SUC});

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
