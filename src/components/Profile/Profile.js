import React from 'react';
import s from './Profile.module.css';
import avatar from './avatar.jpg';
import panorama from './bg.jpg';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
       
            <div className={s.profile__wrap}>
                <img  src={panorama} />
                <div className={s.profile}>
                    <div className={s.profile__avatar}> <img src={avatar} alt="avatar" /> </div>
                    <div className={s.profile__data}>
                        <div className={s.profile__fio}>Alex Smith</div>
                        <p>Date of Birth: 2 jun</p>
                        <p>City: Mozyr</p>
                        <p>Education: BSU</p>
                        <p>Web Site: <a href="https://vm.in">vm.in</a></p>
                    </div>
                </div>
            
                
                <MyPosts />
            </div>
  
    );
}

export default Profile;