import React from 'react';
import s from './Login.module.css';
import {reduxForm, Field} from 'redux-form';

const LoginForm = (props) => {
    return (
        <>    
             {/* Field контейнерная компонента которая рисует другую компоненту приходит из redux-form */}
            <div className={s.formContainer}>
                <form onSubmit={props.handleSubmit}  className={s.uiForm}>
                    <h5>LOGIN</h5>
                    <div className={s.formRow}>
                       <Field  placeholder={'Name'} name={'login'} component={'input'} />    
                    </div>
                    <div className={s.formRow}> 
                        <Field  placeholder={'Password'}  name={'password'}  component={'input'}/>
                    </div>
                    <div> 
                        <Field  className={s.formRow} component={'input'}  name={'rememberMe '} type={'checkbox'}/>remember me   
                    </div>
                    <div> 
                        <button>Login</button> 
                    </div>
                </form>
            </div>
        </>
    )
}

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
  })(LoginForm);
  // store.getState().form  

const Login = (props) => {
        // сюда придут все значения из формы
        const onSubmit = (formData) => {
            console.log(formData);
        }
    return (
        <>
            <h3>Login</h3>
            <LoginReduxForm  onSubmit={onSubmit}/>
        </>
    )
}

export default Login;


