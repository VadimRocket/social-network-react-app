import React from 'react';
import s from './FormControls.module.css';

export const Textarea = ({input, meta, ...props}) => { // props будут содержать все кроме input, meta исп rest operator

    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + ' ' +  ( hasError ? s.error : '' )}>
             <textarea {...input} {...props}/> 
               {/*если эл-т был тронут и нет данных  верни спан */}
               { hasError && <span>{meta.error}</span> } 
        </div>
    )
}