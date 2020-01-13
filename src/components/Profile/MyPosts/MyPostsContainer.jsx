import {addPostActionCreator, updateNewPostTextCreator } from './../../../storage/reducers/profile_page_reducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// import Dialogs from "../../Dialogs/Dialogs";
// const MyPostsContainer = (props) => {
//
//     let state = props.store.getState();
//
//     // addPost - callback fu
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     };
//
//     let onPostChange = (text) => {
//         let action = updateNewPostTextCreator(text);
//         props.store.dispatch(action);
//     };
//
//     return (<MyPosts updateNewPostText={onPostChange} addPost={addPost}
//                      profilePosts={state.profilePage.profilePosts}
//                      newPostText={ state.profilePage.newPostText } />);
//
// };

let mapStateToProps = (state) => {
    return {
        profilePosts: state.profilePage.profilePosts,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;