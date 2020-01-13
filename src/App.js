import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import {Route} from 'react-router-dom';
import Footer from './components/Footer/Footer'

import DialogsContainer from "./components/Dialogs/DialogsContainer";
import SideNavContainer from "./components/SideNav/SideNavContainer";

const App = (props) => {
  return (
   
      <div className="appWrapper">
          <Header />
          <SideNavContainer store={props.store} />
          <div className="content">
             
              <Route path="/dialogs" render={ () =>
                 <DialogsContainer store={props.store} /> }
              />
              <Route path="/profile"   render={ () => <Profile store={props.store} /> } />
              <Route  path="/music"    render={ () => <Music /> } />
              <Route  path="/settings" render={ () => <Settings /> } />
          </div>
          <Footer/>
      </div>
  );
};

export default App;
