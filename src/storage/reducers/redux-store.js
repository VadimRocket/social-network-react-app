import {combineReducers, createStore} from "redux";

import dialogsReducer from "./dialogs_page_reducer";
import profileReducer from "./profile_page_reducer";
import sidebarReducer from "./sidebar_reducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sidebarReducer,
});

let store = createStore(reducers);

export default store;