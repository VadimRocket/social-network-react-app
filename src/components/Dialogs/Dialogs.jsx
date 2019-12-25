import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let dialogsElements = props.state.people.map( dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}  /> );
    let messagesElements = props.state.messages.map( m => <Message message={ m.message } id={m.id} key={m.id} /> );

    return ( 
       <div>
            <h3>Dialogs</h3>

            <div className={s.dialogs}>
                <div className={s.dialogList}> 

                    { dialogsElements }   {/* render DialogItems */}

                </div>
                
                <div className={s.messages}>
               
                    { messagesElements }   {/* render DialogItems */}

                </div>
            </div>
        </div>
    );
};

export default Dialogs;