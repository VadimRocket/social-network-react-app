import React from 'react';
import  s from './Footer.module.css';
import {NavLink} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <nav>
               <ul>
                    <li className={s.item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
                    <li className={s.item}><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></li>
                    <li className={s.item}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></li>
                    <li className={s.item}><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></li>
                </ul>
            </nav>
       </footer>
    );
}

export default Footer;