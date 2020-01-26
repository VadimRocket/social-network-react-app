import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileData from "./ProfileData/ProfileData";

const Profile = (props) => {
    
    return (
        <div className={s.profileWrap}>
            <ProfileData  profile={props.profile} />   
            <MyPostsContainer store={props.store} />
        </div>
    );
}; 

export default Profile;