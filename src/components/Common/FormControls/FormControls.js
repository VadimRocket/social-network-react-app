import React from 'react';
import s from './FormControls.module.css';

export const Textarea = ({input, meta, ...props}) => { // props будут содержать все кроме input, meta исп rest operator

    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + ' ' +  ( hasError ? s.error : '' )}>
             <textarea {...input} {...props}/> 
               {/*if touched and no data return error */}
               { hasError && <span>{meta.error}</span> } 
        </div>
    )
}

// need  refactoring
export const Input = ({input, meta, ...props}) => { 

    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + ' ' +  ( hasError ? s.error : '' )}>
             <input {...input} {...props}/> 
               {/*if touched and no data return error */}
               { hasError && <span>{meta.error}</span> } 
        </div>
    )
}