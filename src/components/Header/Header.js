import React from 'react';
import s  from './Header.module.css';
import logo from '../../assets/images/logo.svg';
import {NavLink} from 'react-router-dom';
import Button from '../Common/Button/Button';

const Header = ({isAuth, login, logout}) => {
    return (
        <header className={s.header}>
           <NavLink to="/profile"><img src={logo} alt="logo" /></NavLink>
            <div className={s.loginWrap}>
                <span className={s.login}>
                    { isAuth 
                        ? <span><span className={s.login__name}>{login} </span>
                          <Button name={'Logout'} onClick={logout} /> </span>
                        : <NavLink to={'/login'}>Login</NavLink> }
                </span>
            </div>
        </header>
    );
}

export default Header;