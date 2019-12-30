import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import store from './storage/storage';
import store from './redux/redux_store';
import {BrowserRouter} from 'react-router-dom';

let reRenderAllTree = (state) => {
    
    ReactDOM.render(
         <BrowserRouter>  
            <App state={ state } dispatch={ store.dispatch.bind(store) }   store={store} />  {/* the method's owner - store object   */}
        </BrowserRouter>,  
            document.getElementById('root')
    );
}

reRenderAllTree(store.getState());

// store.subscribe(reRenderAllTree);
store.subscribe( () => {
    let state = store.getState();
    reRenderAllTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
