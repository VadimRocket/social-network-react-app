import {usersAPI} from '../../api/api';

const FOLLOW = 'FOLLOW'; // action type 
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING =  'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOW_PROGRESS =  'TOGGLE_IS_FOLLOW_PROGRESS';

let initialState = {
    users:  [],
    pageSize: 84,         //  number of records per page
    totalUsersCount: 0,  // total number of users
    currentPage: 1,
    isFetching: false,
    followInProgress: [], // add user id  or take user id
    
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
        case SET_USERS: {
            // Перезатираю пользователями которые ко мне пришли из экшиона перезатирая весь массив что был раньше
            // Склеиваю 2 массива: Что был ...state.users  и что пришел из ...action.users
            // return  {  ...state, users:[...state.users, ...action.users ] } // юзеров добавляю в конец массива
             return  {  ...state, users: action.users }  //перезатирать свой массив когда  кликаеш на кнопку пагинаци
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOW_PROGRESS: {
            return {
                ...state, 
                followInProgress: action.isFetching 
                ?  [...state.followInProgress, action.userId] 
                :  state.followInProgress.filter(id => id !== action.userId) 
            }
        }
        default:
            return state; // no case
    }
};

// actions creators for the UsersContainer component
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});

// installs users from a server
export const setUsers = (users) => ({type: SET_USERS, users});

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
// The preloader
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const toggleFollowInProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOW_PROGRESS, isFetching, userId });


// create thunks: getUsersThunkCreator, follow, unfollow
export const getUsers = (currentPage,pageSize) => {
   return (dispatch) =>  {

    dispatch(toggleIsFetching(true));
        // get the request - get all users
        usersAPI.getUsers(currentPage, pageSize).then(data => {  
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));  
            // dispatch(setCurrentPage(data.currentPage));
        });  
    }
}

export const follow = (userId) => {
    return (dispatch) =>  {
 
     dispatch(toggleIsFetching(true));
        dispatch(toggleFollowInProgress(true, userId));
                            
        usersAPI.follow(userId).then(response => {  
             if(response.data.responseCode === 0) {
                dispatch(followAC(userId));
             }
              dispatch(toggleFollowInProgress(false, userId));
        })
     }
 }
 
 export const unfollow = (userId) => {
    return (dispatch) =>  {
 
     dispatch(toggleIsFetching(true));
        dispatch(toggleFollowInProgress(true, userId));
                            
        usersAPI.unfollow(userId).then(response => {  
             if(response.data.responseCode === 0) {
                dispatch(unfollowAC(userId));
             }
              dispatch(toggleFollowInProgress(false, userId));
        })
     }
 }


export default usersReducer;
