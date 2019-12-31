import React from 'react';
import Header from './components/Header/Header'
import SideNav from './components/SideNav/SideNav'
import Profile from './components/Profile/Profile'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import {Route} from 'react-router-dom';
import Footer from './components/Footer/Footer'
import './App.css';


const App = (props) => {
//  debugger;

  return (
   
      <div className="appWrapper">
          <Header />
          <SideNav state={ props.state.sideBar }/>
          <div className="content">
             
              <Route path="/dialogs"  render={ () => <DialogsContainer  store={ props.store }/> } />
              <Route path="/profile" render={ () =>  <Profile  store={ props.store } /> }  />
              <Route  path="/music"   render={ () => <Music /> } />
              <Route  path="/settings" render={ () => <Settings /> } />

          </div>
          <Footer/>
      </div>
  );
}

export default App;
