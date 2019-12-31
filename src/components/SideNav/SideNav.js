import React from 'react';
import s from './SideNav.module.css';
import {NavLink} from 'react-router-dom';
import FriendItem from './FriendItem/FriendItem';


const SideNav = (props) => {
    // debugger;
    let friendsElements = props.state.friends.map( friend => <FriendItem name={friend.name} photo={friend.photo}  key={friend.id}  /> );

    return (

        <div className={s.sidebarWrap}>
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

            <h4>Friends</h4>
            <div className={s.friendsContainer}>
                { friendsElements }
            </div>
        </div>
    );
}

export default SideNav;