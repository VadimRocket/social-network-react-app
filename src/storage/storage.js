let storage = {
    // profile page data
    profilePage: {
         
        profilePosts:  [
            { id: 1, message: 'Hi how are you?', like_count: 6},
            { id: 2, message: 'It is my first post', like_count: 3},
            { id: 3, message: 'This is my third post', like_count: 1},
        ],
        profileInfo: [
            {firstName: 'Alex', lastname: 'Smith', date_birth: '2 jun', city: 'Mozyr', education: 'BSU', site: 'vm.in', },
        ],
    },
    // message page data
    messagesPage: {

        messages:  [
            { id: 1, message: 'Hello'},
            { id: 2, message: 'How are you?'},
            { id: 3, message: 'I\'m fine'},
            { id: 4, message: 'Hi'},
            { id: 5, message: 'What\'s up?'},
            { id: 6, message: 'Bye-Bye!'}
        ],
        // message page data
        people: [
            {id: 1, name: 'Oliver'},
            {id: 2, name: 'Jack'},
            {id: 3, name: 'Harry'},
            {id: 4, name: 'Jacob'},
            {id: 5, name: 'Charlie'},
            {id: 6, name: 'Alex'}
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

};

export default storage;