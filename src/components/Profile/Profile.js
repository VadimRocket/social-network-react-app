import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileData from './ProfileData/ProfileData';

const Profile = () => {
    return (
       
        <div className={s.profile__wrap}>
            <ProfileData />            
            <MyPosts />
        </div>
  
    );
}

export default Profile;