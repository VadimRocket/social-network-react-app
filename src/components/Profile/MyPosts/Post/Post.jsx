import React from "react";
import s from "./Post.module.css";
import like from "../heart.svg";
const Post = ({ name, photo, like_count, message }) => {
   return (
      <div className={s.itemList}>
         <div className={s.itemList__item}>
            <h5> {name} </h5>
            <img src={photo} alt='name' />
            <p className={s.likeCount}>
               <img src={like} alt='like' />
               {like_count}
            </p>
         </div>
         <div className={s.itemList__item}>
            <p> {message} </p>
         </div>
      </div>
   );
};

export default Post;
