import React from 'react';
import s from './Post.module.css';
import avatar from './../MyPosts/post_avatar.png';

const Post = (props) => {
    // console.log(props.message);
    // debugger;
    return (
       
        <div className={s.item}>
            <img src={avatar} alt="post-avatar"/>
            <p> { props.message } </p>
            <span className={ s.like_count }> { "likes: " + props.like_count } </span>
        </div>

   
    );
};
export default Post;