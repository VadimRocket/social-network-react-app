import React from 'react';
import Header from './components/Header/Header'
import SideNav from './components/SideNav/SideNav'
import Profile from './components/Profile/Profile'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'

import Dialogs from './components/Dialogs/Dialogs'
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer'
import './App.css';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="appWrapper">
          <Header />
          <SideNav storage={ props.storage.sideBar }/>
          <div className="content">
              {/* 2 way */}
              <Route path="/dialogs" 
                render={ () =>
                  <Dialogs 
                    // messages = {props.storage.messagesPage.messages}  
                    // people = {props.storage.messagesPage.people} /> 
                    storage={ props.storage.messagesPage } 
                  /> 
                } 
              />
              <Route path="/profile" render={ () => <Profile storage={  props.storage.profilePage }   /> } />
              <Route  path="/music"   render={ () => <Music /> } />
              <Route  path="/settings" render={ () => <Settings /> } />
          </div>
          <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
