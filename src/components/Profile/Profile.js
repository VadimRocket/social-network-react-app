import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileData from './ProfileData/ProfileData';

const Profile = (props) => {
    // console.log(props)
    return (
       
        <div className={s.profileWrap}>
            <ProfileData  profileInfo={ props.profilePage.profileInfo } />            
            <MyPosts profilePosts={ props.profilePage.profilePosts } 
                addPost={ props.addPost } 
                newPostText={props.profilePage.newPostText}
                updateNewPostText={ props.updateNewPostText }
            />
        </div>
  
    );
}
export default Profile;