import {connect} from 'react-redux';
import { follow, unfollow, setCurrentPage,toggleFollowInProgress,getUsers} from '../../storage/reducers/users_reducer';
import React,{Component} from 'react';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {getAllUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowInProgress} from '../../storage/reducers/users-selectors';
 

/*
  makes a request to the server and draws the presentation component; it needs data from the store
  I throw all props in the Users component
 the component level 1 
*/
class UsersAPIComponent extends Component {


    componentDidMount() {
       const {currentPage, pageSize} = this.props;
       this.props.getUsers(currentPage, pageSize); // cb fn
    }
   
    // at the moment of clicking on the pagination buttons I do ajax request get a new pages
    onPostChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize); // cb fn
        
    }

    render() {
        return  <>
                {this.props.isFetching ? <Preloader /> : null }
                <Users 
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize }
                    currentPage={this.props.currentPage}
                    onPostChanged={this.onPostChanged} // cb fu
                    // usersArray 
                    users={this.props.users}
                    //for the button follow/unfollow
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followInProgress={this.props.followInProgress}
                            
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
        // Selectors. See users-selectors.js
        users: getAllUsers(state),
        pageSize: getPageSize(state),                // number of pages
        totalUsersCount:getTotalUsersCount(state),  // total number of users
        currentPage: getCurrentPage(state),            
        isFetching: getIsFetching(state), // preloader
        followInProgress: getFollowInProgress(state),
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowInProgress, getUsers})
)(UsersAPIComponent);



