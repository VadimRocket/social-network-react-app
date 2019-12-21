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


const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
          <Header />
          <SideNav/>
          <div className="content">
            <Route  path="/dialogs" component={Dialogs} />
            <Route  path="/profile" component={Profile} />
            <Route  path="/music" component={Music} />
            <Route  path="/settings" component={Settings} />
          </div>
          <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
