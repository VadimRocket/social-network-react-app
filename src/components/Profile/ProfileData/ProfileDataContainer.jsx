import React from 'react';
import ProfileData from './ProfileData';
const ProfileDataContainer = (props) => {
  let state = props.store.getState().profilePage; 
 
    return (
      <ProfileData  profilePage={state}/>
    );
      
    
}

export default ProfileDataContainer;



