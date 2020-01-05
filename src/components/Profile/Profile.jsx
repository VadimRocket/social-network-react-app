import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileDataContainer from './ProfileData/ProfileDataContainer';

const Profile = (props) => {

    return (
        <div className={s.profileWrap}>
            <ProfileDataContainer store={ props.store } />   
            <MyPostsContainer store={ props.store }  />
        </div>
    );

}

export default Profile;