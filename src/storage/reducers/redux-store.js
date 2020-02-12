import {combineReducers, createStore, applyMiddleware} from "redux";

import dialogsReducer from "./dialogs_page_reducer";
import profileReducer from "./profile_page_reducer";
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users_reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware  from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer, // we have 1 more form branch in the state
});
// applyMiddleware - промежуточный слой для обработки ф-ций
let store = createStore(reducers, applyMiddleware(thunkMiddleware));


window.store = store; // check data


export default store;