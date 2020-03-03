// See the state branches in the redux-store: usersPage: usersReducer file,
// the users property will be available in Users.jsx. Values of which are users from state
// I take certain parts of the state

export const  getAllUsers = (state) => {
    return state.usersPage.users;
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const  getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const  getFollowInProgress = (state) => {
    return state.usersPage.followInProgress;
}

