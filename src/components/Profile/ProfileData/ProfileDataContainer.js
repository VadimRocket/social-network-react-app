import {showProfileInfoCreator} from './../../../storage/reducers/profile_page_reducer';
import ProfileData from "./ProfileData";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        showProfileInfo: (() => {
            dispatch((showProfileInfoCreator()));
        })
    }
};


const ProfileDataContainer = connect(mapStateToProps,mapDispatchToProps)(ProfileData);

export default ProfileDataContainer;