import React  from 'react';
import {getUserProfile} from './../../storage/reducers/profile_page_reducer';
import Profile from "./Profile"
import {connect} from "react-redux";
import {withRouter, Redirect} from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount() {
        // get userId 
        let userId = this.props.match.params.userId;
        if(!userId) {userId = 5703;} // by default 

       this.props.getUserProfile(userId);
            
    }
    
    render() {
        
    // if no logged  -> redirect to login page
    //   if(!this.props.isAuth) return <Redirect to={'/login'} /> 

        return (
            <Profile {...this.props}  profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    
})

// returns other Container Component
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile} )(WithUrlDataContainerComponent);


