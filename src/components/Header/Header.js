import React from 'react';
import s  from './Header.module.css';
import logo from '../../assets/images/logo.svg';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header}>
           <NavLink to="/profile"><img src={logo} alt="logo" /></NavLink>
            <div className={s.loginWrap}>
                <span className={s.login}>
                    {props.isAuth 
                        ? <span>{props.login}  <button onClick={props.logout}>Logout</button></span>
                        : <NavLink to={'/Login'}>Login</NavLink> }
                </span>
            </div>
        </header>
    );
}

export default Header;