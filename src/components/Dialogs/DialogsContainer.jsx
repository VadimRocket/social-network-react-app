import React from 'react';
import Dialogs from './../Dialogs/Dialogs';
import {sendNewMessageCreator, updateNewMessageCreator } from './../../storage/reducers/dialogs_page_reducer';


const DialogsContainer = (props) => {

    // got the state 
    let state = props.store.getState().messagesPage; 

    let onUpdateMessage = (text) =>  {

        let action = updateNewMessageCreator(text);
        props.store.dispatch(action);
        // console.log(action);
    }   

    let onAddMessage = () => {
        props.store.dispatch( sendNewMessageCreator() );  
        
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