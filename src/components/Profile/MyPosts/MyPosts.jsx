import React from 'react';
import s from './MyPosts.module.css';
import Post from './../Post/Post'



const MyPosts = (props) => {

    let postElements  = props.profilePosts.map( post => <Post message={post.message} like_count={post.like_count} photo={post.photo} name={post.name} key={ post.id }/>);

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
                {  postElements }    {/* render */}
            </div>
        </div>
        
    );
}
export default MyPosts;