import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost} from './storage/storage';  // import addPost Fu 
import {updateNewPostText} from './storage/storage';  // import updateNewPostText Fu 
import  storage from './storage/storage';

import {subscribe} from './storage/storage';

let reRenderAllTree = (storage) => {

    ReactDOM.render(
    
         <App storage={storage} addPost={addPost}  updateNewPostText={updateNewPostText}/>, document.getElementById('root')
     
    );
}

reRenderAllTree(storage);


subscribe(reRenderAllTree);





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
