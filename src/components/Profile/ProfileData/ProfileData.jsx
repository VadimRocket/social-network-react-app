import React, {useState} from 'react';
import s from './ProfileData.module.css';

import Preloader from '../../Common/Preloader/Preloader';
import userPhoto from './../../../assets/images/no-photo.svg';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataReduxForm from "./ProfileDataForm";
import Button from '../../Common/Button/Button';

const ProfileData = (props) => {

    const [editMode, setEditMode] = useState(false);

    if(!props.profile) {
        return <Preloader />
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData)
            .then(() => {setEditMode(false);}
        )
    };

    const onPhotoSelected = (e) => {
        if (e.target.files) {
            props.savePhoto(e.target.files[0])
        }
    };


    return (
        <>   
            <h3>Profile</h3>
            <div className={s.profile}>
               
                <div className={s.profileAvatar}>
                    {/* Profile Photo */}
                    <img src={ props.profile.photos.small !=null ? props.profile.photos.small : userPhoto } alt='{photo}' />
                    {/* Update profile photo btn*/}
                    <span>
                    {props.isOwner && 
                        <div className={s.inputWrapper}><input type={"file"} onChange={onPhotoSelected} className={s.fileInput}  />add photo</div>}   
                    </span>
                </div>
                {/* Profile information */}
                <div className={s.profileData}>
                     
                    {/* profile status */}
                    <div className={s.profileData__item}>
                        <p>Status:<span><ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} /></span></p>
                    </div>
                        {/* ProfileData */}
                        {editMode
                            ? <ProfileDataReduxForm profile={props.profile} initialValues={props.profile} onSubmit={onSubmit} />
                            : <ProfileInfo toEditMode={ () => { setEditMode(true)} } profile={props.profile} isOwner={props.isOwner} /> 
                        } 
                </div>
            </div>
        </>    
    );
};

const ProfileInfo = ({profile, isOwner, toEditMode}) => {
    return (
        <>
            <div className={s.profileData__item}>
                <h4>FullName:</h4><p>{profile.fullName}</p>
            </div>
            {/* Social Contacts */}
            <div className={s.profileData__item}>
                <h4>Contacts:</h4>
                <ul>
                    { Object.keys(profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                    })}
                </ul>
            </div>

            {/* Your skills and job status */}
            <div className={s.profileData__item}>
                <span className={profile.lookingForAJob ? s.jobStatusEnable : s.jobStatusDisable}>
                     Looking for a Job:
                </span>
            </div>
            <div className={s.profileData__item}>
                <h4>Your Skills:</h4>
                <p>{profile.lookingForAJobDescription}</p>   
            </div>

            {/* About me */}
            <div className={s.profileData__item}>
                <h4>About me:</h4>
                <p>{profile.aboutMe}</p>
            </div>

            {isOwner
                ? <Button name={'edit Profile'} onClick={toEditMode}/>
                : null
            }
        </>
    )
};

const Contact = ({contactTitle, contactValue}) => {
    return <li><strong>{contactTitle}:</strong> {contactValue}</li>
};

export default ProfileData;


