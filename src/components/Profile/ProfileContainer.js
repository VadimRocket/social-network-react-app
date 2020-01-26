import React  from 'react';
import {setUsersProfile} from './../../storage/reducers/profile_page_reducer';
import Profile from "./Profile"
import {connect} from "react-redux";
import * as  axios from 'axios';
import {withRouter} from 'react-router-dom';


class ProfileContainer extends React.Component {

    componentDidMount() {
        // get userId 
        let userId = this.props.match.params.userId;
        if(!userId) userId = 5703; // by default 

        //  get a user profile 
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {  
            this.props.setUsersProfile(response.data);
        })
            
    }
    
    render() {
        return (
            <Profile {...this.props}  profile={this.props.profile}/>
        );
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
    
})

// returns other Container Component
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUsersProfile} )(WithUrlDataContainerComponent);

