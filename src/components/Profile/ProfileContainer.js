import React  from 'react';
import {getUserProfile} from './../../storage/reducers/profile_page_reducer';
import Profile from "./Profile"
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

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

// caused HOC
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);


// returns other Container Component
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile} )(WithUrlDataContainerComponent);


