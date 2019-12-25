import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileData from './ProfileData/ProfileData';

const Profile = (props) => {
    
    return (

        <div className={s.profileWrap}>
            <ProfileData  profileInfo={ props.profilePage.profileInfo } />            
            <MyPosts profilePosts={ props.profilePage.profilePosts } 
                newPostText={ props.profilePage.newPostText }
                dispatch={ props.dispatch }
            />
        </div>
  
    );
}
export default Profile;