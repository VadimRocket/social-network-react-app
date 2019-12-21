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

const Dialogs = () => {

    return (
      
       <div>
            <h3>Dialogs</h3>
       
            <div className={s.dialogs}>
                <div className={s.dialog__list}>
                    <DialogItem  name="Oliver" id="1" />
                    <DialogItem  name="Jack" id="2" />
                    <DialogItem  name="Harry" id="3" />
                    <DialogItem  name="Jacob" id="4" />
                    <DialogItem  name="Charlie" id="5" />
                    <DialogItem  name="Alex" id="6" />
                </div>
                <div className={s.messages}>
                    <Message  message="Hello" />
                    <Message  message="How are you?" />
                    <Message  message="I'm fine" />
                    <Message  message="=)" />
                    <Message  message="Hi" />
                    <Message  message="Bye-Bye!" />
                </div>
            </div>
        </div>
    );
};

export default Dialogs;