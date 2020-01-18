const FOLLOW = 'FOLLOW'; // type action
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users:  [
        // { id: 1, status: 'active', followed: false, location: {city: 'Tokyo', country:'Japan'}, message: 'Hi how are you?', fullName:'Oliver', photo: 'http://avotarov.net/picture/avatar-100/kartinki/903.jpg' },
        // { id: 2, status: 'active', followed: false, location: {city: 'Berlin', country:'Germany'}, message: 'It is my first post',  fullName:'Jack', photo: 'http://avotarov.net/picture/avatar-100/kartinki/905.jpg' },
        // { id: 3, status: 'active', followed: true,  location: {city: 'Paris', country:'France'}, message: 'This is my third post', fullName:'Harry', photo: 'http://avotarov.net/picture/avatar-100/kartinki/902.jpg' },
    ],
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case  FOLLOW:
            return {
                 ...state,
                users: state.users.map(u => {
                    // id пробегаемого юзера === id которого надо зафоловить а он сидит в action.userId
                    // тогда у этого пользователя мы должны сделать изменения: Скопировать пользователя и вернуть копию конкретного обьекта и поменять
                    // followed на true  Т.о если ади совпадает то мы возвращаем копию если не совпадает то возвращаем тотже самый обьект - Формирование нового обьекта
                    if(u.id === action.userId) {
                        return {...u, followed: true }
                    }
                    return u;
                })
            }
        case  UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    // id пробегаемого юзера === id которого надо зафоловить а он сидит в action.userId
                    // тогда у этого пользователя мы должны сделать изменения: Скопировать пользователя и вернуть копию конкретного обьекта и поменять
                    // followed на false  Т.о если ади совпадает то мы возвращаем копию если не совпадает то возвращаем тотже самый обьект - Формирование нового обьекта
                    if(u.id === action.userId) {
                        return {...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            // Перезатираю пользователями которые ко мне пришли из экшиона перезатирая весь массив что был раньше
            // Склеиваю 2 массива: Что был ...state.users  и что пришел из ...action.users
            return  {  ...state, users:[...state.users, ...action.users ] }
        default:
            return state; // no case
    }
};

// actions creators  for the page users
export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});

// устанавливает юзеров из сервака
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});

export default usersReducer;
