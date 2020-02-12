import {usersAPI,profileAPI} from '../../api/api';

const ADD_POST  = 'ADD_POST';   // type action
const SHOW_PROFILE_INFO = 'SHOW_PROFILE_INFO';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {

    profilePosts:  [
        { id: 1, message: 'Hi how are you?', like_count: 64, name:'Oliver', photo: 'http://avotarov.net/picture/avatar-100/kartinki/903.jpg' },
        { id: 2, message: 'It is my first post', like_count: 223, name:'Jack', photo: 'http://avotarov.net/picture/avatar-100/kartinki/905.jpg' },
        { id: 3, message: 'This is my third post', like_count: 131, name:'Harry', photo: 'http://avotarov.net/picture/avatar-100/kartinki/902.jpg' },
    ],



    profileInfo: [
         {  id: 1, firstName: 'Alex', lastName: 'Smith',  dateBirth: '2 jun', city:'Mozyr', education: 'BSU', site: 'vm.in',
            photo: 'http://avotarov.net/picture/avatar-100/kartinki/913.gif',
         }
    ],

    profile: null,
    status: '',
 
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:  {
            let newPost  = { 
                id: 6,
                message: action.newPostText,
                like_count: 0,
                photo:'http://avotarov.net/picture/avatar-100/kartinki/902.jpg',
                name:'Alex',
            };
            return  {
                ...state,
                profilePosts: [...state.profilePosts,  newPost],
                newPostText: '',  // clear textarea after click on the btn - add Post
            }
        }
            
        case  SET_STATUS:  {
            return {...state, status: action.status}
        }

        case  SET_USER_PROFILE:  {
             return {...state, profile: action.profile}
        }

        case  SHOW_PROFILE_INFO: {
            return {
                // ...state
                // state
            };
        }
        default:
            return state; // no case
    }
};

// actions creators 
export const addPostActionCreator = (newPostText) =>({ type: ADD_POST, newPostText });

export const showProfileInfoCreator = () => ({type: SHOW_PROFILE_INFO});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

// thunk creator
export const getUserProfile = (userId) => (dispatch) => {
      //  get user profile 
      usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export const getStatus = (userId) => (dispatch) => {
    //  get user profile 
    // debugger;
    profileAPI.getStatus(userId).then(response => {
       
      dispatch(setStatus(response.data));  // когда получу статус я его засетаю
    //   debugger;
  });
}
// на update status к нам придет in response обьект {resultCode: 1, messages: [Something Wrong], data: {} }   resultCode: 1 - if  error
                        // указываю статус который надо обновить
export const updateStatus = (status) => (dispatch) => {
    //  get user profile 
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setStatus(response.data));  // когда получу статус я его засетаю
        }
  });
}


export default profileReducer;