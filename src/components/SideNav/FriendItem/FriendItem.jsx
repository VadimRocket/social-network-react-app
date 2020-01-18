import React from 'react';
import s from './../FriendItem/FriendItem.module.css';

const FriendItem = (props) => {
    return (
        <div className={s.friendItem}>
            <img src={props.photo} alt={ props.name }  />
            <p> { props.name } </p>
        </div>
    );
};

export default FriendItem;
