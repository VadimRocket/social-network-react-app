import React  from 'react';
import {getUserProfile} from './../../storage/reducers/profile_page_reducer';
import Profile from "./Profile"
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        // get userId 
        let userId = this.props.match.params.userId;
        if(!userId) {userId = 5703;} // by default 

       this.props.getUserProfile(userId);
            
    }
    
    render() {
        return (
            <Profile {...this.props}  profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});


export default compose(
    connect(mapStateToProps,{getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);


