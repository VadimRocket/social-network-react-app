import React from 'react';
import s from './MyPosts.module.css';
import Post from './../Post/Post'


const MyPosts = () => {

    let postData = [

        { id: 1, message: 'Hi how are you?', like_count: 6},
        { id: 2, message: 'It is my first post', like_count: 3},
        { id: 3, message: 'This is my third post', like_count: 1},
    ];

    return (
        <div className={s.postWrap}>
            <h2>My  posts</h2>
            <form action="">
                <fieldset>
                    <textarea rows="10" cols="45"  wrap="off" name="text" placeholder="your news..."></textarea>
                    <button type="submit">Send</button>
                </fieldset>
            </form>
            <div className={s.posts}>
                <Post  message={postData[0].message} like_count={postData[0].like_count} />
                <Post  message={postData[1].message} like_count={postData[1].like_count} />
                <Post  message={postData[2].message} like_count={postData[2].like_count} />
            </div>
        </div>
        
    );
}

export default MyPosts;