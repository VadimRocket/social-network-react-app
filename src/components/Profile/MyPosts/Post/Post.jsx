import React from 'react';
import s from './Post.module.css';
import like from '../heart.svg';
const Post = (props) => {
    // debugger;
    console.log(props)
    return (
        <div className={s.itemList}>
            <div className={s.itemList__item}>
                <h5> {props.name} </h5>
                <img src={props.photo} alt={props.name}/>
                <p className={ s.likeCount }> <img src={like} alt={like} />{ props.like_count } </p>
            </div>
            <div className={s.itemList__item}>
                 <p> { props.message } </p>
            </div>
        </div>
    );
};
export default Post;