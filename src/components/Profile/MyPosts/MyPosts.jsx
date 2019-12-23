import React from 'react';
import s from './MyPosts.module.css';
import Post from './../Post/Post'



const MyPosts = (props) => {

    let postElements  = props.profilePosts.map( post => <Post message={post.message} like_count={post.like_count} photo={post.photo} name={post.name} key={ post.id }/>);

    let newPostElement = React.createRef();  
    
    let addPost = () => {

        let text = newPostElement.current.value;
            alert(text);
       
    }

    return (
        <div className={s.postWrap}>
            <h2>My  posts</h2>
            
                <fieldset>
                    <textarea ref= { newPostElement } rows="10" cols="45"  wrap="off" name="text" placeholder="Your news..."></textarea>
                        <button  onClick={ addPost } type="submit">add Post</button>
                </fieldset>
           
            <div className={s.posts}>
                {  postElements }    {/* render */}
            </div>
        </div>
        
    );
}
export default MyPosts;