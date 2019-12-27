const ADD_POST  = 'ADD-POST';   // type action
const UPDATE_NEW_POST_TEXT  = 'UPDATE-NEW-POST-TEXT'; // type action



const profileReducer = (state, action) => {
    // console.log(state);
    // state = this._state.profilePage

    switch (action.type) {
        case ADD_POST:

            let newPost  = { 
                id: 6,
                message: state.newPostText, // get data from the newPostText
                like_count: 0,  
            };

            state.profilePosts.push(newPost);
            state.newPostText = '';    // clear textarea after click on the btn - add Post
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;  // newText - obj property
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
export const updateNewPostTextCreator = (text) => {
    return  {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReducer;