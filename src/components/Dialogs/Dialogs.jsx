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

    let dialogsData = [

        {id: 1, name: 'Oliver'},
        {id: 2, name: 'Jack'},
        {id: 3, name: 'Harry'},
        {id: 4, name: 'Jacob'},
        {id: 5, name: 'Charlie'},
        {id: 6, name: 'Alex'}

    ];

    let messagesData = [

        { id: 1, message: 'Oliver'},
        { id: 2, message: 'Jack'},
        { id: 3, message: 'Harry'},
        { id: 4, message: 'Jacob'},
        { id: 5, message: 'Charlie'},
        { id: 6, message: 'Alex'}

    ];
    

    return (
       <div>
            <h3>Dialogs</h3>

            <div className={s.dialogs}>
                <div className={s.dialog__list}>
                    <DialogItem  name={dialogsData[0].name} id={dialogsData[0].id} />
                    <DialogItem  name={dialogsData[1].name} id={dialogsData[1].id} />
                    <DialogItem  name={dialogsData[2].name} id={dialogsData[2].id} />
                    <DialogItem  name={dialogsData[3].name} id={dialogsData[3].id} />
                    <DialogItem  name={dialogsData[4].name} id={dialogsData[4].id} />
                    <DialogItem  name={dialogsData[5].name} id={dialogsData[5].id} />
                   
                </div>
                <div className={s.messages}>
                    <Message  message={messagesData[0].message} />
                    <Message  message={messagesData[1].message} />
                    <Message  message={messagesData[2].message} />
                    <Message  message={messagesData[3].message} />
                    <Message  message={messagesData[4].message} />
                    <Message  message={messagesData[5].message} />
                </div>
            </div>
        </div>
    );
};

export default Dialogs;