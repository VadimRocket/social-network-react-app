import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost} from './storage/storage';  // import addPost Fu 
import {updateNewPostText} from './storage/storage';  // import updateNewPostText Fu 

export let reRenderAllTree = (storage) => {

    ReactDOM.render(
    
         <App storage={storage} addPost={addPost}  updateNewPostText={updateNewPostText}/>, document.getElementById('root')
     
    );
}

serviceWorker.unregister();
