import {profileAPI} from '../../api/api';
import {stopSubmit} from "redux-form";

// Actions
const ADD_POST  = 'social-app/profile/ADD_POST';   
const SET_USER_PROFILE = 'social-app/profile/SET_USER_PROFILE';
const SET_STATUS = 'social-app/profile/SET_STATUS';
const DELETE_POST = 'social-app/profile/DELETE_POST';
const SAVE_PHOTO = 'social-app/profile/SAVE_PHOTO';

let initialState = {

    profilePosts:  [
        { id: 1, message: 'Hi how are you?', like_count: 64, name:'Oliver', photo: 'http://avotarov.net/picture/avatar-100/kartinki/903.jpg' },
        { id: 2, message: 'It is my first post', like_count: 223, name:'Jack', photo: 'http://avotarov.net/picture/avatar-100/kartinki/905.jpg' },
        { id: 3, message: 'This is my third post', like_count: 131, name:'Harry', photo: 'http://avotarov.net/picture/avatar-100/kartinki/902.jpg' },
    ],

    profile: null,
    status: '',
 
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:  {
            let newPost  = { 
                id: 4,
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
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.postId)
            };
        }
        case  SET_USER_PROFILE:  {
            return {...state, profile: action.profile}
        }
        case  SET_STATUS:  {
            return {...state, status: action.status}
        }
        case SAVE_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        }
        default:
            return state; 
    }
};

// action creators 
export const addPostActionCreator = (newPostText) =>({ type: ADD_POST, newPostText });
export const deletePost = (postId) => ({ type: DELETE_POST,  postId });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO, photos});
   
   
// thunk creator  get user profile 
export const setProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

// get user status 
export const getUserStatus = (userId) => async (dispatch) =>  {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));  // когда получу статус я его засетаю
}

// на update status к нам придет in response обьект {resultCode: 1, messages: [Something Wrong], data: {} }   resultCode: 1 - if  error
// indicate the status that needs to be updated
export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);   
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }   
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
    const id = getState().auth.id;
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(setProfile(id));
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Error';
        dispatch(stopSubmit('edit_profile', {_error: message}));
        return Promise.reject(message)
    }
};

export default profileReducer;