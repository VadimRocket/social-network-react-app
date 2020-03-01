import React from 'react';
import s from './Login.module.css';
import {reduxForm, Field} from 'redux-form';
import {required} from '../../utils/validators/validators';
import {Input} from '../Common/FormControls/FormControls';
import { connect } from 'react-redux';
import { login } from '../../storage/reducers/auth-reducer';
import {Redirect} from 'react-router-dom';

const LoginForm = (props) => {
    return (
        <>    
             {/* Field контейнерная компонента которая рисует другую компоненту приходит из redux-form */}
            <div className={s.formContainer}>
                <form onSubmit={props.handleSubmit}  className={s.uiForm}>
                    <div className={s.formRow}>
                       <Field  placeholder={'Email'} name={'email'} component={Input} validate={required} />    
                    </div>
                    <div className={s.formRow}> 
                        <Field  placeholder={'Password'}  name={'password'} type={'password'} component={Input} validate={required}  />
                    </div>
                    <div> 
                        Remember me   
                        <Field  className={s.formRow} component={Input}  name={'rememberMe'} type={'checkbox'} validate={required}  />
                    </div>
                    <div> 
                        <button>Sign in</button> 
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
            props.login(formData.email, formData.password, formData.rememberMe);
        }

        // if logged 
        if(props.isAuth) {
            return <Redirect to={'/profile'} />
        }

    return (
        <>
            <h3>Login</h3>
            <LoginReduxForm  onSubmit={onSubmit}/>
        </>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});
export default connect(mapStateToProps, {login} )(Login);


