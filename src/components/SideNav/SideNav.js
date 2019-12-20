import React from 'react';
import s from './SideNav.module.css';

const SideNav = () => {
    return (
        <nav className={s.nav}>
           <ul>
               <li><a href="#">Profile</a></li>
               <li><a href="#">Messages</a></li>
               <li><a href="#">Music</a></li>
               <li><a href="#">Settings</a></li>
            </ul>
        </nav>
    );
}


export default SideNav;