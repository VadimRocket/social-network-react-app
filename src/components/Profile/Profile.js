import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileData from './ProfileData/ProfileData';

const Profile = (props) => {
    // console.log(props)
    return (
       
        <div className={s.profileWrap}>
            <ProfileData  profileInfo={ props.storage.profileInfo } />            
            <MyPosts profilePosts={ props.storage.profilePosts } addPost={ props.addPost } />
        </div>
  
    );
}
export default Profile;