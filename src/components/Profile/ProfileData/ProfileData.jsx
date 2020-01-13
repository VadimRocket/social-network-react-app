import React from 'react';
import ProfileItem from './ProfileItem';
import Post from "../MyPosts/Post/Post";

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

//
// const ProfileData = ({firstName,lastName,dateBirth,city,education,site,photo}) => {
//     return (
//            <div>
//                <img  src={panorama}  alt="panorama"/>
//                 <div className={s.profile}>
//                     <div className={s.profileAvatar}>
//                         <img src={photo} alt="avatar" />
//                      </div>
//                     <div className={s.profileData}>
//                         <p className={s.profileFio}>
//                            <span>Name:</span> {props.profileInfo[0].firstName}  {props.profileInfo[0].lastName}</p>
//                            <p><span>Date of Birth:</span> {props.profileInfo[0].date_birth} </p>
//                            <p><span>City: </span>{props.profileInfo[0].city}  </p>
//                            <p><span>Education:</span> {props.profileInfo[0].education} </p>
//                            <p><span>Site:</span>   <NavLink to={ 'https://'+ props.profileInfo[0].site }> { props.profileInfo[0].site }  </NavLink></p>
//                     </div>
//                 </div>
//             </div>
//
//
//     );
// }
//
// export default ProfileData;
//


