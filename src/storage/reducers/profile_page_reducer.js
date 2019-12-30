
const ADD_POST  = 'ADD-POST';   // type action
const UPDATE_NEW_POST_TEXT  = 'UPDATE-NEW-POST-TEXT'; // type action

let initialState =  {
    // profile page data
    profilePage: {
            
        profilePosts:  [
            { id: 1, message: 'Hi how are you?', like_count: 64, name:'Oliver', photo: 'http://avotarov.net/picture/avatar-100/kartinki/903.jpg' },
            { id: 2, message: 'It is my first post', like_count: 223, name:'Jack', photo: 'http://avotarov.net/picture/avatar-100/kartinki/905.jpg' },
            { id: 3, message: 'This is my third post', like_count: 131, name:'Harry', photo: 'http://avotarov.net/picture/avatar-100/kartinki/902.jpg' },
        ],

        newPostText: "",

    },
    profileInfo: [
        {   firstName: 'Alex', 
            lastName: 'Smith',
            dateBirth: '2 jun', 
            city:'Mozyr',
            education: 'BSU', 
            site: 'vm.in', 
            photo: 'http://avotarov.net/picture/avatar-100/kartinki/913.gif',
        }
    ],
};

const profileReducer = (state = initialState, action) => {
    // debugger;
    switch (action.type) {
        case ADD_POST:

            let newPost=  { id: 4, message: state.profilePage.newPostText, like_count: 0, name:'Alex', photo: 'http://avotarov.net/picture/avatar-100/kartinki/913.gif' };
            state.profilePage.profilePosts.push(newPost);
            state.newPostText = "";    // clear textarea after click on the btn - add Post
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.profilePage.newPostText = action.newText;  // newText - obj property
            return state;

        default:
            return state; // no case
    }
}

// actions creators 
export const addPostActionCreator = () => {
    return  {
        type: ADD_POST
    }
}
export const updateNewPostTextCreator = (newText) => {
    return  {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    }
}

export default profileReducer;