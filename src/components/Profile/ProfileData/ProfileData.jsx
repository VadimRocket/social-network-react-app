import React from 'react';
import ProfileItem from './ProfileItem';

const ProfileData = (props) => {

   let state = props.profilePage; 

    let personInformation = state.profileInfo.map( data =>

      <ProfileItem 
            firstName={data.firstName} 
            lastName={data.lastName}  
            site={data.site}
             education={data.education}
             city={data.city}
             dateBirth ={data.dateBirth}
             photo ={data.photo}
      />);

    return (
       <div>
         { personInformation }
       </div>
    );
}

export default ProfileData;



