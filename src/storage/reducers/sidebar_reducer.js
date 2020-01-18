const SHOW_FRIENDS = 'SHOW_FRIENDS';
// let initialState = {};

let initialState = {

    friends: [
        { id: 1, name: 'Alex',    photo: 'http://avotarov.net/picture/avatar-100/kartinki/905.jpg' },
        { id: 2, name: 'Olivia',  photo: 'http://avotarov.net/picture/avatar-100/kartinki/912.jpg' },
        { id: 3, name: 'Harry',   photo: 'http://avotarov.net/picture/avatar-100/kartinki/903.jpg' },
        { id: 4, name: 'Charlie', photo: 'http://avotarov.net/picture/avatar-100/kartinki/902.jpg' },
        { id: 5, name: 'Jack',    photo: 'http://avotarov.net/picture/avatar-100/kartinki/910.jpg' },
        { id: 6, name: 'Oliver',  photo: 'http://avotarov.net/picture/avatar-100/kartinki/913.gif' },
    ],
};

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case  SHOW_FRIENDS:
            return {
                // ...state
            };
        default:
            return state; // no case
    }
};

export const showFriendsCreator = () => ({type: SHOW_FRIENDS});

export default sidebarReducer;