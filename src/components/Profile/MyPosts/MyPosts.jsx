import React from 'react';
import s from './MyPosts.module.css';
import Post from './../Post/Post';

const MyPosts = (props) => {

    let postElements = props.profilePosts.map( post => 
        <Post 
            message={post.message}
            like_count={post.like_count} 
            photo={post.photo} 
            name={post.name} 
            id={post.id} 
            key={post.id}
        />   
    );

    /*
        addPost, onPostChange - callback fu
    */
    let onAddPost = () => { 
        props.addPost(); 
       
    }

    let onPostChange = (e) =>  {
        let text = e.target.value;
        props.updateNewPostText(text);
        console.log(text);
    }
    
    return (
        <div className={s.postWrap}>
            <h2>My posts</h2>

                <fieldset>
                    <textarea onChange={ onPostChange } value={ props.newPostText } rows="10" cols="45"  wrap="off"  />
                    <button  onClick={ onAddPost } type="submit">add Post</button>
                </fieldset>
           
            <div>
                {  postElements }    {/* render postElements */}
            </div>
        </div>  
    );
}
export default MyPosts;