import React, {Component} from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import {Route, Switch, withRouter} from 'react-router-dom';
import Footer from './components/Footer/Footer'

import SideNavContainer from './components/SideNav/SideNavContainer';
import LoginContainer from '../src/components/Login/LoginContainer';
import {connect} from 'react-redux';
import {initializeApp} from './storage/reducers/app-reducer';
import {compose} from 'redux';
import Preloader from './components/Common/Preloader/Preloader';

import { withSuspense } from './utils/suspense/withSuspense';
const ProfileContainer = React.lazy( () => import('./components/Profile/ProfileContainer')); 
const DialogsContainer = React.lazy( () => import('./components/Dialogs/DialogsContainer')); 
const UsersContainer = React.lazy( () => import('./components/Users/UsersContainer')); 

class App extends Component {
    componentDidMount() {
      this.props.initializeApp(); // thunk creator. the point of entry
    }

    render() {
        if(!this.props.initialized) {
            return  <Preloader />
        }
        
        return (
            <div className="appWrapper">
                <HeaderContainer />
                <SideNavContainer store={this.props.store} />
                <div className="content">
                    <Switch>
                        <Route path="/login" render={ () => <LoginContainer />  } />
                        <Route path="/dialogs" render={ withSuspense(DialogsContainer) } />
                        <Route path="/users" render={ withSuspense(UsersContainer) } />
                        <Route path="/profile/:userId?" render={ withSuspense(ProfileContainer) } />     
                        <Route path="/music"    render={ () => <Music /> } />
                        <Route path="/settings" render={ () => <Settings /> } />
                    </Switch>   
                </div>
                <Footer/>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);
 
  


