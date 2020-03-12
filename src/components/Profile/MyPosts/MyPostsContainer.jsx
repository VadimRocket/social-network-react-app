import { addPostActionCreator } from "./../../../storage/reducers/profile_page_reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = state => {
   return {
      profilePosts: state.profilePage.profilePosts,
      newPostText: state.profilePage.newPostText
   };
};

let mapDispatchToProps = dispatch => {
   return {
      addPost: newPostText => {
         dispatch(addPostActionCreator(newPostText));
      }
   };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
