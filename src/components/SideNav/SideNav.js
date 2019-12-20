import React from 'react';
import s from './SideNav.module.css';
import {NavLink} from 'react-router-dom';

const SideNav = () => {
    return (
        <nav className={s.nav}>
           <ul>
               <li><NavLink to="/profile">Profile</NavLink></li>
               <li><NavLink to="/dialogs">Messages</NavLink></li>
               <li><NavLink to="/music">Music</NavLink></li>
               <li><NavLink to="/settings">Settings</NavLink></li>
            </ul>
        </nav>
    );
}


export default SideNav;