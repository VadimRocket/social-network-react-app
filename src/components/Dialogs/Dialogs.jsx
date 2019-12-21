import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';


const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    );
}

const Message = (props) => {

    return (
        <div className={s.dialog}>
            <div className="massage">{props.message}</div>
        </div>
    );
}

const Dialogs = (props) => {

   

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

                    { dialogsElements }   {/* render dialogsElements */}

                </div>
                <div className={s.messages}>
               
                    { messagesElements }     {/* render messagesElems */}

                </div>
            </div>
        </div>
    );
};

export default Dialogs;