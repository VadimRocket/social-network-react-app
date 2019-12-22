import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileData from './ProfileData/ProfileData';

const Profile = (props) => {
    
    return (
       
        <div className={s.profileWrap}>
            <ProfileData />            
            <MyPosts profilePosts={props.storage.profilePosts}/>
        </div>
  
    );
}
export default Profile;