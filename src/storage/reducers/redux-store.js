import {combineReducers, createStore, applyMiddleware, compose} from "redux";

import dialogsReducer from "./dialogs_page_reducer";
import profileReducer from "./profile_page_reducer";
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users_reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware  from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './app-reducer';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer, // we have 1 more form branch in the state
    app: appReducer,
});
// applyMiddleware - промежуточный слой для обработки ф-ций
// const store = createStore(reducers, applyMiddleware(thunkMiddleware));


/*
redux-devtools-extension
Advanced store setup 
https://github.com/zalmoxisus/redux-devtools-extension 
*/
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
 
// window.store = store; // check data

export default store;