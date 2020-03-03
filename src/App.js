import React, {Component} from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import {Route} from 'react-router-dom';
import Footer from './components/Footer/Footer'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import SideNavContainer from './components/SideNav/SideNavContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from '../src/components/Profile/ProfileContainer';
import Login from '../src/components/Login/Login';
import {connect} from 'react-redux';
import {initializeApp} from './storage/reducers/app-reducer';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import Preloader from './components/Common/Preloader/Preloader'


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
                    <Route path="/dialogs" render={ () =>   <DialogsContainer store={this.props.store} /> } />
                    <Route path="/users" render={ () => <UsersContainer store={this.props.store}  /> } />
                    <Route path="/profile/:userId?"  render={ () => <ProfileContainer  /> } />
                    <Route path="/music"    render={ () => <Music /> } />
                    <Route path="/settings" render={ () => <Settings /> } />
                    <Route path="/login" render={ () => <Login /> } />
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
 
  


