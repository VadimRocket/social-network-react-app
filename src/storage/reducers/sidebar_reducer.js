const SHOW_FRIENDS = 'social-app/sidebar/SHOW_FRIENDS';

let initialState = {

    friends: [
        { id: 1, name: 'Alex',    photo: 'https://www.discordavatars.com/wp-content/uploads/2020/07/marvel-character-avatar-188.jpg' },
        { id: 2, name: 'Olivia',  photo: 'https://www.discordavatars.com/wp-content/uploads/2020/05/male-actors-avatar-004.jpg' },
        { id: 3, name: 'Harry',   photo: 'https://www.discordavatars.com/wp-content/uploads/2020/05/444979733181235210.jpg' },
        { id: 4, name: 'Charlie', photo: 'https://www.discordavatars.com/wp-content/uploads/2020/05/the-walking-dead-avatar-002.jpg' },
        { id: 5, name: 'Jack',    photo: 'https://www.discordavatars.com/wp-content/uploads/2020/05/male-actors-avatar-028.jpg' },
        { id: 6, name: 'Oliver',  photo: 'https://www.discordavatars.com/wp-content/uploads/2020/05/male-actors-avatar-024.jpg' },
    ],
};

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        // case  SHOW_FRIENDS:
            // return {
            //     // ...state
            // };
        default:
            return state; // no case
    }
};

export const showFriendsCreator = () => ({type: SHOW_FRIENDS});

export default sidebarReducer;