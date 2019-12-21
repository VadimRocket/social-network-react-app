import React from 'react';
import s from './ProfileData.module.css';
import avatar from './pd-images/avatar.jpg';
import panorama from './pd-images/bg.jpg';
import {NavLink} from 'react-router-dom';


const ProfileData = () => {
    return (
       
            <div className={s.profile__wrap}>
                <img  src={panorama}  alt="panorama"/>
                <div className={s.profile}>
                    <div className={s.profileAvatar}> <img src={avatar} alt="avatar" /> </div>
                    <div className={s.profileData}>
                        <div className={s.profileFio}>Alex Smith</div>
                        <p>Date of Birth: 2 jun</p>
                        <p>City: Mozyr</p>
                        <p>Education: BSU</p>
                        <NavLink to="https://vm.in">vm.in</NavLink>
                        
                    </div>
                </div>
            
                
            </div>
  
    );
}

export default ProfileData;