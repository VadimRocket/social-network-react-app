import React from 'react';
import s from './SideNav.module.css';

const SideNav = () => {
    return (
        <nav className={s.nav}>
           <ul>
               <li><a href="/profile">Profile</a></li>
               <li><a href="/dialogs">Messages</a></li>
               <li><a href="/music">Music</a></li>
               <li><a href="/settings">Settings</a></li>
            </ul>
        </nav>
    );
}


export default SideNav;