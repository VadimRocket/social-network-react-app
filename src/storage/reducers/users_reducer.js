const FOLLOW = 'FOLLOW'; // type action
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users:  [
    ],
    pageSize: 84,         //  number of records per page
    totalUsersCount: 0,  // total number of users
    currentPage: 1,
};


const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case  FOLLOW:
            return {
                 ...state,
                users: state.users.map(user => {
                    // id пробегаемого юзера === id которого надо зафоловить а он сидит в action.userId
                    // тогда у этого пользователя мы должны сделать изменения: Скопировать пользователя и вернуть копию конкретного обьекта и поменять
                    // followed на true  Т.о если ади совпадает то мы возвращаем копию если не совпадает то возвращаем тотже  обьект - Формирование нового обьекта
                    if(user.id === action.userId) {
                        return {...user, followed: true }
                    }
                    return user;
                })
            }
        case  UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    // id пробегаемого юзера === id которого надо зафоловить а он сидит в action.userId
                    // тогда у этого пользователя мы должны сделать изменения: Скопировать пользователя и вернуть копию конкретного обьекта и поменять
                    // followed на false  Т.о если ади совпадает то мы возвращаем копию если не совпадает то возвращаем тотже  обьект - Формирование нового обьекта
                    if(user.id === action.userId) {
                        return {...user, followed: false }
                    }
                    return user;
                })
            }
        case SET_USERS: {
            // I rewrite users who came to me from the action overwriting the entire array that was before
            // I glue 2 arrays: What was ... state.users and what came from ... action.users
            // return  {  ...state, users:[...state.users, ...action.users ] } // I add users to the end of the array
             return  {  ...state, users: action.users }  // rewrite your users array when you click on the pagination button
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        default:
            return state; // no case
    }
};

// actions creators for the UsersContainer component
export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});

// installs users from a server
export const setUsers = (users) => ({type: SET_USERS, users});

export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});

export default usersReducer;
