import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

let messages = [

    { id: 1, message: 'Hello'},
    { id: 2, message: 'How are you?'},
    { id: 3, message: 'I\'m fine'},
    { id: 4, message: 'Hi'},
    { id: 5, message: 'What\'s up?'},
    { id: 6, message: 'Bye-Bye!'}

];

let dialogsPeople = [

    {id: 1, name: 'Oliver'},
    {id: 2, name: 'Jack'},
    {id: 3, name: 'Harry'},
    {id: 4, name: 'Jacob'},
    {id: 5, name: 'Charlie'},
    {id: 6, name: 'Alex'}
];



let posts = [
    { id: 1, message: 'Hi how are you?', like_count: 6},
    { id: 2, message: 'It is my first post', like_count: 3},
    { id: 3, message: 'This is my third post', like_count: 1},
];
  

ReactDOM.render(<App posts={posts} messages={messages} dialogsPeople={dialogsPeople} />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
