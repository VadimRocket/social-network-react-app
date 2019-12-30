import React from 'react';
import Header from './components/Header/Header'
import SideNav from './components/SideNav/SideNav'
import Profile from './components/Profile/Profile'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'

<<<<<<< HEAD
import Dialogs from './components/Dialogs/Dialogs'
=======
import DialogsContainer from './components/Dialogs/DialogsContainer'
>>>>>>> 9_redux_container_component
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
             
              <Route path="/dialogs" 
                render={ () =>
<<<<<<< HEAD
                  <Dialogs 
                    // messages = {props.state.messagesPage.messages}  
                    // people = {props.state.messagesPage.people} /> 
                    state={ props.state.messagesPage }    /* <- cb fu*/
                  /> 
=======
                  <DialogsContainer  store={ props.store }  /> 

>>>>>>> 9_redux_container_component
                } 
              />
              <Route path="/profile" render={ () =>  <Profile  store={ props.store } /> }  />
                  
             
              
              <Route  path="/music"   render={ () => <Music /> } />
              <Route  path="/settings" render={ () => <Settings /> } />
          </div>
          <Footer/>
      </div>
  );
}

export default App;
