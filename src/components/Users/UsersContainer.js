import {connect} from "react-redux";
import Users from "./Users";
import { followActionCreator,    setUsersActionCreator, unfollowActionCreator } from "../../storage/reducers/users_reducer";


/*
mapStateToProps - gets the global state of the entire application and returns an object with those
data that we need from the state to us
*
* */
let mapStateToProps = (state) => {
    return {
        // See the state branches in the redux-store: usersPage: usersReducer file,
        // the users property will be available in Users.jsx. Values of which are users from state
        users: state.usersPage.users
    }
}

// Passes callbacks to the child presentation component Users - the functions that it will call
// Callback appointment to communicate with the state. Callbacks here: follow, unfollow, setUsers
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId)) // dispatch the result of action creator - action
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },

        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Users);