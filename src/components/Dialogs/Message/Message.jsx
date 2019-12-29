import React from 'react';
import s from './Message.module.css';

const Message = ({message}) => {

    return (
           <div className={s.massage}> 
               {message} 
            </div>
    );
}

export default Message;