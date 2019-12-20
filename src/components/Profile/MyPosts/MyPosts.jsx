import React from 'react';
import s from './MyPosts.module.css';
import Post from './../Post/Post'


const MyPosts = () => {
    return (
        <div className={s.post__wrap}>
            <h2>My  posts</h2>
            <form action="">
                <fieldset>
                    <textarea rows="10" cols="45"  wrap="off" name="text" placeholder="your news..."></textarea>
                    <button type="submit">Send</button>
                </fieldset>
            </form>
            <div className={s.posts}>
                <Post  message='Hi how are you?' like_count="6" />
                <Post  message='It is my first post' like_count="3" />
                <Post  message='This is my third post' like_count="1" />
            </div>
        </div>
        
    );
}

export default MyPosts;