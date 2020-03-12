import React from 'react';
import {createFieldFC, Input, Textarea} from "../../Common/FormControls/FormControls";
import {reduxForm} from "redux-form";
import Button from '../../Common/Button/Button'

import style from "../../Common/FormControls/FormControls.module.css";
import s from "./ProfileData.module.css";




const ProfileDataForm = ({handleSubmit, error, profile}) => {

    return (
       
        <form onSubmit={handleSubmit}>
            {/* createFieldL(placeholder, name, component, validators, props = {}, text= '') */}
            {/*FullName*/}
            <div className={s.profileData__item}>
                <h4>FullName: </h4> {createFieldFC('Full name', 'fullName', Input, [])}
            </div>

            {/*contacts */}
             <div className={s.profileData__item}>
                <h4>Contacts:</h4>
                    {Object.keys(profile.contacts).map(key => {
                        return <div key={key}>
                            <b>{key}: </b> {createFieldFC(key, "contacts." + key, Input, [])}
                        </div>
                    })}
            </div>

            {/* Job */}
            <div className={s.profileData__item}>
                <span>Looking for a Job: </span>
                {createFieldFC('', 'lookingForAJob', Input, null, {type: 'checkbox'})}
            </div>
            <div className={s.profileData__item}>
                <h4>My Professional skills: </h4>
                {createFieldFC('My Professional skills', 'lookingForAJobDescription', Textarea, [],)}
            </div>

            {/* About me */}
            <div className={s.profileData__item}>
                <h4>About me: </h4>
                {createFieldFC('About me', 'aboutMe', Textarea, [],)}
            </div>
            {error ? <span className={style.formSummaryError}>{error}</span> : null}
            <Button name={'Save Profile'} />
        </form>
    )
};
const ProfileDataReduxForm = reduxForm({form: 'edit_profile'})(ProfileDataForm);

export default ProfileDataReduxForm;