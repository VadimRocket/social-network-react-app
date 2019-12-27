import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {send_new_messageCreator, update_new_messageCreator } from './../../storage/reducers/dialogs_page_reducer';


const Dialogs = (props) => {
    console.log(props);
    // got the state
    // let state  = props.store.getState().messagesPage; 

    let dialogsElements = props.state.people.map( dialog => <DialogItem name={dialog.name} id={dialog.id}  /> );
    let messagesElements = props.state.messages.map( m => <Message message={ m.message } id={m.id}  /> );

    // let dialogsElements = state.people.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
    // let messagesElements = state.messages.map( m => <Message message={ m.message } id={m.id} /> );

    let onUpdateMessage = (e) =>  {
        let text = e.target.value;
        console.log(text);
        let action = update_new_messageCreator(text);
        props.dispatch(action);
    }   

    let onAddMessage =() => {
        props.dispatch( send_new_messageCreator() );  
    }

    return ( 
       <div>
            <h3>Dialogs</h3>

            <div className={s.dialogs}>
                <div className={s.dialogList}> 
                    { dialogsElements }   {/* render DialogItems */}
                </div>
                
                <div className={s.messages}>
                   <div> { messagesElements }   {/* render DialogItems */}</div>
                </div>
            </div>
            <div className={s.sendMessage}>
                <textarea  onChange={onUpdateMessage }  value={ props.newMassageText }  name="text" id="" cols="30" rows="10"></textarea>
                <button onClick={onAddMessage } > Send</button>
            </div>
        </div>
    );
};

export default Dialogs;