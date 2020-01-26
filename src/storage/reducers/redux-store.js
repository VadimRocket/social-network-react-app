import {combineReducers, createStore} from "redux";

import dialogsReducer from "./dialogs_page_reducer";
import profileReducer from "./profile_page_reducer";
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users_reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);


window.store = store; // check data


export default store;