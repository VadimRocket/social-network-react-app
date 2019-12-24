import React from 'react';
import s from './MyPosts.module.css';
import Post from './../Post/Post'

const MyPosts = (props) => {
    console.log(props);

    let postElements  = props.profilePosts.map( post => <Post message={post.message} like_count={post.like_count} photo={post.photo} name={post.name} key={ post.id }/> );

    let newPostElement = React.createRef();  // create a reference

    // addPost - callback fu
    let addPost = () => {
        props.addPost();  // bll fu       
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
         props.updateNewPostText(text);          // bll fu got a user text
         
    }

    return (
        <div className={s.postWrap}>
            <h2>My posts</h2>
            
                <fieldset>
                    <textarea onChange={ onPostChange } ref={ newPostElement }  value={ props.newPostText }   rows="10" cols="45"  wrap="off" name="text" />
                        <button  onClick={ addPost } type="submit">add Post</button>
                </fieldset>
           
            <div className={s.posts}>
                {  postElements }    {/* render */}
            </div>
        </div>
        
    );
}
export default MyPosts;