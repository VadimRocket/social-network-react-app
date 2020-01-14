import React from 'react';
import ProfileItem from './ProfileItem';
// import Post from "../MyPosts/Post/Post";

const ProfileData = (props) => {

    let personInformation = props.profileInfo.map( data =>

        <ProfileItem
            firstName={data.firstName}
            lastName={data.lastName}
            site={data.site}
            education={data.education}
            city={data.city}
            dateBirth={data.dateBirth}
            photo={data.photo}
            key={data.id}
        />
    );

    return (
        <>
            { personInformation }
        </>
    );

};

export default ProfileData;


