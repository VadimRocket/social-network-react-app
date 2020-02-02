import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Redirect} from 'react-router-dom';

const Dialogs = (props) => {

    // got the state
    let state  = props.dialogsPage;
    let dialogsElements = state.dialogs.map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} /> );
    let messagesElements = state.messages.map( m => <Message message={ m.message } key={m.id} id={m.id} /> );
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick =() => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) =>  {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };

    // if no logged  -> redirect to login page
    // if(!props.isAuth) return <Redirect to={'/login'} /> 

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
                <textarea  onChange={onNewMessageChange }  value={ newMessageBody }  name="text"  cols="30" rows="10"></textarea>
                <button onClick={onSendMessageClick }>Send</button>
            </div>
        </div>
    );
};

export default Dialogs;