import React from 'react';
import Dialogs from './../Dialogs/Dialogs';
import {send_new_messageCreator, update_new_messageCreator } from './../../storage/reducers/dialogs_page_reducer';


const DialogsContainer = (props) => {

    // got the state
    let state = props.store.getState().messagesPage; 

    let onUpdateMessage = (text) =>  {

        let action = update_new_messageCreator(text);
        props.store.dispatch(action);
        console.log(action);
    }   

    let onAddMessage = () => {
        props.store.dispatch( send_new_messageCreator() );  
        
    }

    return ( 
        <Dialogs 
            updateNewMessage={onUpdateMessage} 
            sendMessage={onAddMessage} 
            messagesPage={state}
             
        />
    )
};

export default DialogsContainer;