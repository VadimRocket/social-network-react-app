import React from 'react';
import s from './MyPosts.module.css';
import Post from './../Post/Post'


const MyPosts = () => {

    let postData = [
        { id: 1, message: 'Hi how are you?', like_count: 6},
        { id: 2, message: 'It is my first post', like_count: 3},
        { id: 3, message: 'This is my third post', like_count: 1},
    ];

    let postElements  = postData.map( post => <Post message={post.message} like_count={post.like_count} />);

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
                {  postElements }    {/* render postElems */}
            </div>
        </div>
        
    );
}
export default MyPosts;