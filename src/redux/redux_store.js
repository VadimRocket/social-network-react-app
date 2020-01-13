
import { createStore, combineReducers } from 'redux';
import profileReducer  from './../storage/reducers/profile_page_reducer';
import dialogsReducer from './../storage/reducers/dialogs_page_reducer';
import sidebarReducer from './../storage/reducers/sidebar_reducer';

// take it as your state
let reducers = combineReducers({
    
    profilePage: profileReducer,
    // messagesPage: dialogsReducer,
    // sideBar: sidebarReducer,

});


let store = createStore(reducers);


export default store;