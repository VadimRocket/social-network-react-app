import {profileAPI} from '../../api/api';
// type actions
const ADD_POST  = 'ADD_POST';   
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

        case  SET_USER_PROFILE:  {
            return {...state, profile: action.profile}
        }
            
        case  SET_STATUS:  {
            return {...state, status: action.status}
        }

        

        case  SHOW_PROFILE_INFO: {
            return state;
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

// thunk creator  get user profile 
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

//  get user status 
export const getStatus = (userId) => async (dispatch) =>  {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));  // когда получу статус я его засетаю
}

// на update status к нам придет in response обьект {resultCode: 1, messages: [Something Wrong], data: {} }   resultCode: 1 - if  error
                        // indicate the status that needs to be updated
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }   
}


export default profileReducer;