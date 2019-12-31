import React from 'react';
import s from './ProfileData.module.css';
import {NavLink} from 'react-router-dom';
import profileBg from './pd-images/bg.jpg';


const ProfileItem = ({ firstName, lastName,  site,  education, city, dateBirth, photo }) => {

    return (
       
        <>
            <img  src={profileBg}  alt={profileBg}/>

            <div className={s.profile}>
                <div className={s.profileAvatar}> 
                    <img src={photo} alt={photo} />
                </div>
                <div className={s.profileData}>
                    <p className={s.profileFio}>
                        <span>Name:</span> {firstName} {lastName}
                    </p>
                    <p><span>Date of Birth:</span> {dateBirth} </p>
                    <p><span>City: </span>{city}  </p>
                    <p><span>Education:</span> {education} </p>
                    <p><span>Site:</span>   <NavLink to={ 'https://'+ site }> { site }  </NavLink></p>
                </div>
            </div>
        </>

    );
};
export default ProfileItem;

