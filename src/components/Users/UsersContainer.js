import {connect} from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPageAC, setUsersTotalCountAC, toggleIsFetching} from '../../storage/reducers/users_reducer';
import React from 'react';
import * as  axios from 'axios'
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';

/*
  makes a request to the server and draws the presentation component; it needs data from the store
  I throw all props in the Users component
 the component level 1 
*/
class UsersAPIComponent extends React.Component {

/*
===================
 Query Parameters
===================
 count: (integer - default: 10 - maximum: 100) - totalCount
 page size (how many items will be returned in response)
 page: (integer - default: 1) number of portion of items
*/
    componentDidMount() {
        this.props.toggleIsFetching(true);
        // get the request - get all users
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {  
               this.props.toggleIsFetching(false);
               this.props.setUsers(response.data.items)
               this.props.setTotalUsersCount(response.data.totalCount)  
            });  
    }
   
    // at the moment of clicking on the pagination buttons I do ajax request
    onPostChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
               this.props.toggleIsFetching(false);
               this.props.setUsers(response.data.items)
            });  
    }

    render() {
        return  <>
                {this.props.isFetching ? <Preloader /> : null }
                <Users totalUsersCount={this.props.totalUsersCount}
                            pageSize={this.props.pageSize }
                            currentPage={this.props.currentPage}
                            onPostChanged={this.onPostChanged} // cb fu
                            // usersArray 
                            users={this.props.users}
                            //for button follow/unfollow
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
                            
                />
            </>    
    }

}

/*
mapStateToProps - gets the global state of the entire application and returns an object with those
data that we need from the state to us
*
* */
let mapStateToProps = (state) => {
    return {
        // See the state branches in the redux-store: usersPage: usersReducer file,
        // the users property will be available in Users.jsx. Values of which are users from state
        // I take certain parts of the state
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,                    // number of pages
        totalUsersCount: state.usersPage.totalUsersCount,     // total number of users
        currentPage: state.usersPage.currentPage,            
        isFetching: state.usersPage.isFetching,             // preloader
    }
}


export default connect(mapStateToProps,
    {   
        follow, unfollow, setUsers,
        setCurrentPage: setCurrentPageAC,
        setTotalUsersCount: setUsersTotalCountAC,
        toggleIsFetching,

    })(UsersAPIComponent);



