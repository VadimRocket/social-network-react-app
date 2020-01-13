const ADD_POST  = 'ADD-POST';   // type action
const UPDATE_NEW_POST_TEXT  = 'UPDATE-NEW-POST-TEXT'; // type action
const SHOW_PROFILE_INFO = 'SHOW_PROFILE_INFO';


let initialState = {

    profilePosts:  [
        { id: 1, message: 'Hi how are you?', like_count: 64, name:'Oliver', photo: 'http://avotarov.net/picture/avatar-100/kartinki/903.jpg' },
        { id: 2, message: 'It is my first post', like_count: 223, name:'Jack', photo: 'http://avotarov.net/picture/avatar-100/kartinki/905.jpg' },
        { id: 3, message: 'This is my third post', like_count: 131, name:'Harry', photo: 'http://avotarov.net/picture/avatar-100/kartinki/902.jpg' },
    ],
    newPostText: 'Your text',
    profileInfo: [
         {  id: 1, firstName: 'Alex', lastName: 'Smith',  dateBirth: '2 jun', city:'Mozyr', education: 'BSU', site: 'vm.in',
            photo: 'http://avotarov.net/picture/avatar-100/kartinki/913.gif',
         }
    ],
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost  = { 
                id: 6, message: state.newPostText,
                like_count: 0,
                photo:'http://avotarov.net/picture/avatar-100/kartinki/913.gif',
            };
            return  {
                ...state,
                profilePosts: [...state.profilePosts,  newPost],
                newPostText: '',  // clear textarea after click on the btn - add Post
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText // newText - obj prop
            };
            // added
        case  SHOW_PROFILE_INFO:
            return {
                // ...state
                state
            };

        default:
            return state; // no case
    }
};

// actions creators 
export const addPostActionCreator = () => {
    return  {
        type: ADD_POST
    }
};
export const updateNewPostTextCreator = (text) => {
    return  {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};

export const showProfileInfoCreator = () => ({type: SHOW_PROFILE_INFO});

export default profileReducer;