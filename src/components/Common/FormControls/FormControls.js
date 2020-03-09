import React from 'react';
import s from './FormControls.module.css';
import {Field} from 'redux-form';


const FormControl = ({input, meta, child, ...props}) =>  {
    
    const hasError = meta.touched && meta.error;
    return (
        <div className={ `${s.formControl} ${hasError ? s.error : '' } `}>
               {props.children}   
               {/*if touched and no data return error */}
               { hasError && <span>{meta.error}</span> } 
        </div>
    )
}
// wrappers: Textarea and Input  
export const Textarea = (props) => { 
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}> <textarea {...props.input} {...restProps} /></FormControl>
}

export const Input = (props) => { 
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}>  <input {...input} {...restProps} /></FormControl>
}
      
export const createFieldFC = ( placeholder, name, component, validators, props = {}, text= '') => (
    <>
        <Field placeholder={placeholder}
            name={name} 
            validate={validators} 
            component={component}  
          
            text={text}
            {...props}
        /> {text}
    </>
) 
   
