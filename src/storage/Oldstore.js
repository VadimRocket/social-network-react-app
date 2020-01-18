import profileReducer  from './reducers/profile_page_reducer'
import  dialogsReducer  from './reducers/dialogs_page_reducer'
import { sidebarReducer } from './reducers/sidebar_reducer'

let store = {
    // private property // old name - storage
    _state: {
        // profile page data
        profilePage: {
            
            profilePosts:  [
                { id: 1, message: 'Hi how are you?', like_count: 64, name:'Oliver', photo: 'http://avotarov.net/picture/avatar-100/kartinki/903.jpg' },
                { id: 2, message: 'It is my first post', like_count: 223, name:'Jack', photo: 'http://avotarov.net/picture/avatar-100/kartinki/905.jpg' },
                { id: 3, message: 'This is my third post', like_count: 131, name:'Harry', photo: 'http://avotarov.net/picture/avatar-100/kartinki/902.jpg' },
            ],

            newPostText: 'Your text',

            profileInfo: [
                { firstName: 'Alex', 
                lastName: 'Smith',
                date_birth: '2 jun', 
                city:'Mozyr',
                education: 'BSU', 
                site: 'vm.in', 
                photo: 'http://avotarov.net/picture/avatar-100/kartinki/913.gif',
                },
            ],
        },
        // message page data
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Oliver'},
                {id: 2, name: 'Jack'},
                {id: 3, name: 'Harry'},
                {id: 4, name: 'Jacob'},
                {id: 5, name: 'Charlie'},
                {id: 6, name: 'Alex'}
            ],
            messages:  [
                { id: 1, message: 'Hello'},
                { id: 2, message: 'How are you?'},
                { id: 3, message: 'I\'m fine'},
                { id: 4, message: 'Hi'},
                { id: 5, message: 'What\'s up?'},
                { id: 6, message: 'Bye-Bye!'}
            ],
            newMessageBody: 'Your message',
        },

        sidebar: {
            friends: [
                { id: 1, name: 'Alex',   photo: 'http://avotarov.net/picture/avatar-100/kartinki/905.jpg' },
                { id: 2, name: 'Olivia', photo: 'http://avotarov.net/picture/avatar-100/kartinki/912.jpg' },
                { id: 3, name: 'Harry',  photo: 'http://avotarov.net/picture/avatar-100/kartinki/903.jpg' },
                { id: 4, name: 'Charlie',  photo: 'http://avotarov.net/picture/avatar-100/kartinki/902.jpg' },
                { id: 5, name: 'Jack',  photo: 'http://avotarov.net/picture/avatar-100/kartinki/910.jpg' },
                { id: 6, name: 'Oliver',  photo: 'http://avotarov.net/picture/avatar-100/kartinki/913.gif' },
            ],
        },
    },

    getState() {
        return this._state;
    },
    
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    _callSubscriber()  {
        console.log('the state ch');
    },

    dispatch(action) {  // obj action 

        /* usersReducer(state, action)
            the state was updated in usersReducer and then we assigned it = profilePage
            the right part is executed then it is assigned to the left part or not updated.
        */     
     
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.dialogsPage = sidebarReducer(this._state.dialogsPage, action);
       
        this._callSubscriber(this._state);

    },

};

export default store;
// window.store = store; // check data