import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileDataContainer from "./ProfileData/ProfileDataContainer";

const Profile = (props) => {

    return (

        <div className={s.profileWrap}>
            {/*<ProfileData />*/}
            <ProfileDataContainer store={props.store} />    {/*profileInfo={ props.profilePage.profileInfo } */}
            <MyPostsContainer store={props.store}
            />
        </div>
  
    );
}
export default Profile;