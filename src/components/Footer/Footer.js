import React from 'react';
import  s from './Footer.module.css';
import {NavLink} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <nav>
               <ul>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><NavLink to="/dialogs">Messages</NavLink></li>
                    <li><NavLink to="/settings">Settings</NavLink></li>
                </ul>
            </nav>
       </footer>
    );
}

export default Footer;