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
        messagesPage: {
            
            people: [
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
        
        },

        sideBar: {

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

    _callSubscriber()  {
        console.log('the state ch');
    },

    addPost() {
        let newPost  = {
            id: 5,
            message: this._state.profilePage.newPostText, // get data from newPostText
            like_count: 0,  
        };
        this._state.profilePage.profilePosts.push(newPost);
        this._state.profilePage.newPostText = ''; // clear textarea after  Click on the btn - Add Post
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

};

export default store;
window.store = store; // check data