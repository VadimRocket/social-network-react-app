import {connect} from "react-redux";
import {showFriendsCreator} from "../../storage/reducers/sidebar_reducer";
import SideNav from "./SideNav";


let mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        showProfileInfo: () => {
            dispatch(showFriendsCreator());
        }
    }
};

const SideNavContainer = connect(mapStateToProps,mapDispatchToProps)(SideNav);


export default SideNavContainer;