import React from 'react';
import s from './SideNav.module.css';
import {NavLink} from 'react-router-dom';

const SideNav = () => {
    return (
        <nav className={s.nav}>
           <ul>
               <li className={s.item}>
                   <NavLink to="/profile"  activeClassName={s.active}>Profile</NavLink>
                </li>
                <li className={s.item}>
                   <NavLink to="/dialogs"  activeClassName={s.active}>Messages</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/music"   activeClassName={s.active}>Music</NavLink>
                </li>
                <li className={s.item}>
                   <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
}


export default SideNav;