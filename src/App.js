import React from 'react';
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


const App = (props) => {
  return (
   
      <div className="appWrapper">
          <HeaderContainer />
          <SideNavContainer store={props.store} />
          <div className="content">
              <Route path="/dialogs" render={ () =>   <DialogsContainer store={props.store} /> } />
              <Route path="/users" render={ () => <UsersContainer store={props.store}  /> } />
              <Route path="/profile/:userId?"  render={ () => <ProfileContainer  /> } />
              <Route path="/music"    render={ () => <Music /> } />
              <Route path="/settings" render={ () => <Settings /> } />
              <Route path="/login" render={ () => <Login /> } />
          </div>
          <Footer/>
      </div>
  );
};

export default App;
