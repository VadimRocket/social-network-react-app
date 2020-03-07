import React, {Component} from 'react';
import {setProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile} from './../../storage/reducers/profile_page_reducer';
import Profile from "./Profile"
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

class ProfileContainer extends Component {
   
    updateProfile() {
         // get userId 
         let userId = this.props.match.params.userId;
         if(!userId) {
             userId = this.props.authorizedUserId;
             if(!userId) {
                 this.props.history.push('/login'); // old school
             }   
         }
 
        this.props.setProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
       this.updateProfile();
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.updateProfile();
        }
    }

    render() {
        return (
            <Profile {...this.props} 
                profile={this.props.profile} 
                status={this.props.status} 
                updateUserStatus={this.props.updateUserStatus}
                savePhoto={this.props.savePhoto}
                isOwner={!this.props.match.params.userId}
                saveProfile ={this.props.saveProfile}

            />
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth, 
});


export default compose(
    connect(mapStateToProps,{setProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);


