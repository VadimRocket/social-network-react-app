import React from 'react';
import s from './ProfileData.module.css';
import panorama from './pd-images/bg.jpg';
import {NavLink} from 'react-router-dom';


const ProfileData = (props) => {
    return (
       
           <div>
               <img  src={panorama}  alt="panorama"/>
                <div className={s.profile}>
                    <div className={s.profileAvatar}> 
                        <img src={props.profileInfo[0].photo} alt="avatar" />
                     </div>
                    <div className={s.profileData}>
                        <p className={s.profileFio}>
                           <span>Name:</span> {props.profileInfo[0].firstName}  {props.profileInfo[0].lastName}</p>
                           <p><span>Date of Birth:</span> {props.profileInfo[0].date_birth} </p>
                           <p><span>City: </span>{props.profileInfo[0].city}  </p>
                           <p><span>Education:</span> {props.profileInfo[0].education} </p>
                           <p><span>Site:</span>   <NavLink to={ 'https://'+ props.profileInfo[0].site }> { props.profileInfo[0].site }  </NavLink></p>
                    </div>
                </div>
            </div>

  
    );
}

export default ProfileData;



