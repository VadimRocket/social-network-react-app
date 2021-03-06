import React from "react";
import style from "./Users.module.css";
import userPhoto from "./../../assets/images/no-photo.svg";
import { NavLink } from "react-router-dom";
import Button from "../Common/Button/Button";

const User = ({ user, followInProgress, unfollow, follow }) => {
   return (
      <div className={style.media}>
         <div className={style.img}>
            <div className={style.name}>{user.name}</div>
            <NavLink to={"/profile/" + user.id}>
               <img
                  src={
                     user.photos.small != null ? user.photos.small : userPhoto
                  }
                  alt='user'
               />
            </NavLink>
         </div>

         <div>
            {user.followed ? ( // unfollow, follow - See: UsersContainer.js
               <Button
                  name={"Unfollow"}
                  disabled={followInProgress.some(id => id === user.id)}
                  onClick={() => {
                     unfollow(user.id); // Thunk creator
                  }}
               />
            ) : (
               <Button
                  name={"Follow"}
                  disabled={followInProgress.some(id => id === user.id)}
                  onClick={() => {
                     follow(user.id); // Thunk creator
                  }}
               />
            )}
         </div>

         <div className={style.location}>
            <span className={style.location__title}>Location: </span>
         </div>

         <div className={style.status}>
            <span className={style.status__title}> Status:</span> {user.status}
         </div>
      </div>
   );
};

export default User;
