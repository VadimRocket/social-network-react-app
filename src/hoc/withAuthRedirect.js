import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";


let mapStateToProps = (state) => ({isAuth: state.auth.isAuth});

export const withAuthRedirect = (Component) => {
    // first container component
    class RedirectComponent extends React.Component {
        render() {
             // if no logged  -> redirect to login page
            if(!this.props.isAuth) return <Redirect to={'/login'}/>
            return <Component {...this.props}/>
        }
    }

        // second container component
    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent);    
    return ConnectedAuthRedirectComponent;
}