import React from 'react';
import s  from './Header.module.css';
import logo from './../../logo.svg';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header}>
           <NavLink to="/"><img src={logo} className="App-logo" alt="logo" /> </NavLink>
            <div className={s.loginWrap}>
                <span className={s.login}>
                    {props.isAuth ? props.login : <NavLink to={'/Login'}>Login</NavLink> }
                    {console.log(props.isAuth, props.login)}
                </span>
            </div>
        </header>
    );
}


export default Header;