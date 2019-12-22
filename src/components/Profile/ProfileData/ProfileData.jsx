import React from 'react';
import s from './ProfileData.module.css';
import avatar from './pd-images/avatar.jpg';
import panorama from './pd-images/bg.jpg';
import {NavLink} from 'react-router-dom';


const ProfileData = (props) => {
    return (
       
           <div>
               <img  src={panorama}  alt="panorama"/>
                <div className={s.profile}>
                    <div className={s.profileAvatar}> 
                        <img src={avatar} alt="avatar" />
                     </div>
                    <div className={s.profileData}>
                        <div className={s.profileFio}>Name: {props.profileInfo[0].firstName}  {props.profileInfo[0].lastName}</div>
                        <p>Date of Birth: {props.profileInfo[0].dateBirth} </p>
                        <p>City: {props.profileInfo[0].city}  </p>
                        <p>Education: {props.profileInfo[0].education} </p>
                        <NavLink to={ 'https://'+ props.profileInfo[0].site }> { props.profileInfo[0].site }  </NavLink>
                    </div>
                </div>
            </div>

  
    );
}

export default ProfileData;



