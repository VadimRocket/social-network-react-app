import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost} from './storage/storage';  // import addPost Fu 

// addPost('Add a new Post in the Profile page');

export let reRenderAllTree = (storage) => {

    ReactDOM.render(
    
         <App storage={storage} addPost={addPost} />, document.getElementById('root')
     
    );
}

serviceWorker.unregister();
