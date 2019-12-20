import React from 'react';
import  s from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <nav>
               <ul>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/dialogs">Messages</a></li>
                    <li><a href="/settings">Settings</a></li>
                </ul>
            </nav>
       </footer>
    );
}

export default Footer;