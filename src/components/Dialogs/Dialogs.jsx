import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    // got the state 
    let state = props.messagesPage; 

    let dialogsElements = state.people.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
    let messagesElements = state.messages.map( m => <Message message={ m.message } id={m.id} /> );  
    let newMassageText  = state.newMassageText;  // <= value
 
    let onUpdateMessage = (e) =>  {
        let text = e.target.value;
        props.updateNewMessage(text);
    }   

    let onAddMessage = () => {
        props.sendMessage(); 
    }

    return ( 
       <div>
            <h3>Dialogs</h3>

            <div className={s.dialogs}>

                <div className={s.dialogList}> 
                    { dialogsElements }             {/* render DialogItems */}
                </div>
                
                <div className={s.messages}>
                   { messagesElements }             {/* render DialogItems */}
                </div>

            </div>

            <div className={s.sendMessage}>
                <textarea  onChange={onUpdateMessage }  value={ newMassageText }  name="text" cols="30" rows="10"></textarea>
                <button onClick={onAddMessage } > Send</button>
            </div>
        </div>
    );
};

export default Dialogs;