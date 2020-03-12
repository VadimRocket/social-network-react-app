import React from 'react';
import style from './../FriendItem/FriendItem.module.css';

const FriendItem = ({name, photo}) => {
    return (
        <div className={style.friendItem}>
            <img src={photo} alt='name'  />
            <p> { name } </p>
        </div>
    );
};

export default FriendItem;
