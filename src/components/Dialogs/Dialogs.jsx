import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = () => {

    let messages = [

        { id: 1, message: 'Hello'},
        { id: 2, message: 'How are you?'},
        { id: 3, message: 'I\'m fine'},
        { id: 4, message: 'Hi'},
        { id: 5, message: 'What\'s up?'},
        { id: 6, message: 'Bye-Bye!'}

    ];

    let dialogsData = [

        {id: 1, name: 'Oliver'},
        {id: 2, name: 'Jack'},
        {id: 3, name: 'Harry'},
        {id: 4, name: 'Jacob'},
        {id: 5, name: 'Charlie'},
        {id: 6, name: 'Alex'}

    ];

    let dialogsElements = dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
    let messagesElements = messages.map( m => <Message message={ m.message } /> );

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