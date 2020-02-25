import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {reduxForm, Field} from 'redux-form';
import {required,maxLengthCreator} from '../../../utils/validators/validators';
import {Textarea} from '../../../components/Common/FormControls/FormControls';

//validator
const maxLength15 = maxLengthCreator(15);

const MyPosts = (props) => {
    let postElements = props.profilePosts.map( post =>
        <Post message={post.message}  like_count={post.like_count}
              photo={post.photo} name={post.name} key={post.id} id={post.id} />
    );


    // addPost - callback fu
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.postWrap}>
            <h2>My posts</h2>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {  postElements }    {/* render */}
            </div>
        </div>
        
    );
};

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='newPostText' component={Textarea} placeholder='Enter your post message' validate={[required, maxLength15]} />
            <button>add Post</button>
        </form>
    )
};

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);


export default MyPosts;