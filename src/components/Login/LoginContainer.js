import React from 'react';
import Login from './Login';
import { connect } from "react-redux";
import { login } from "../../storage/reducers/auth-reducer";
import { compose } from "redux";

class LoginContainer extends React.Component {    
    render() {
        return (
           <Login login={this.props.login} {...this.props} captcha={this.props.captcha} />
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha
})

export default compose(
    connect(mapStateToProps, {login})
)(LoginContainer);
