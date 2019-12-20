import React from 'react';
import  s from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <nav>
               <ul>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                </ul>
            </nav>
       </footer>
    );
}


export default Footer;