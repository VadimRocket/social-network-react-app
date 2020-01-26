import React from 'react';
import s from './ProfileData.module.css';
import profileBg from './pd-images/bg.jpg';
import Preloader from '../../Common/Preloader/Preloader';
import userPhoto from './../../../assets/images/user.jpg';

const ProfileData = (props) => {
    
    if(!props.profile) {
        return <Preloader />
    }

    let  {facebook,vk,twitter,instagram,github} =  props.profile.contacts;

    return (
        <>
            <img  src={profileBg}  alt={profileBg}/> From ProfileData

            <div className={s.profile}>
                <div className={s.profileAvatar}>
                    <img src={ props.profile.photos.small !=null ? props.profile.photos.small : userPhoto } alt='' />
                </div>
                <div className={s.profileData}>
                    <p className={s.profileFio}>
                        <span>Name:</span> { props.profile.fullName}
                    </p>
                    <p><span>About me:</span> {props.profile.aboutMe} </p>

                     <h4>Contacts: </h4> 
                     <p> <span>facebook:</span>  {facebook}</p>      
                     <p> <span>vk:</span> {vk}</p>      
                     <p> <span>twitter: </span> {twitter}</p>      
                     <p> <span>facebook: </span>{instagram} </p>   
                     <p> <span>github: </span> {github}</p>   
                     <p><span>Status: </span>{props.profile.lookingForAJobDescription}</p>
                </div>
            </div>
        </>    
    );

};

export default ProfileData;


