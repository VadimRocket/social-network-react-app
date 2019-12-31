import React from 'react';
import MyPosts from './../MyPosts/MyPosts';
import {addPostActionCreator, updateNewPostTextCreator } from '../../../storage/reducers/profile_page_reducer';


const MyPostsContainer = (props) => {

    let state = props.store.getState().profilePage;
  
    
    let onAddPost = () => {  
        props.store.dispatch( addPostActionCreator() );   

    }

    let onPostChange = (text) => {
        let action = updateNewPostTextCreator(text);
            props.store.dispatch( action ); 
            // console.log(text);
    }

    return ( 
        
        <MyPosts 
            updateNewPostText={ onPostChange } 
            addPost={ onAddPost }  
            profilePosts={ state.profilePage.profilePosts } 
            newPostText={ state.profilePage.newPostText }    
        />  
    )
}

export default MyPostsContainer;