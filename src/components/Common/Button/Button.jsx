import React from 'react';
import style from './Button.module.css';


const Button = ({name, onClick, disabled}) => {
    return <button className={style.btn}onClick={onClick} disabled={disabled}> {name} </button>
}

export default Button;