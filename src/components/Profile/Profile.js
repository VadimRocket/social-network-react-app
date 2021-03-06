import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileData from "./ProfileData/ProfileData";

const Profile = (props) => {

    return (
        <div className={s.profileWrap}>
            <ProfileData  
                profile = {props.profile} 
                status = {props.status} 
                updateStatus = {props.updateUserStatus}
                savePhoto = {props.savePhoto}
                isOwner = {props.isOwner}
                saveProfile = {props.saveProfile}
            />  
            
            <MyPostsContainer store={props.store} />
        </div>
    );
}; 

export default Profile;