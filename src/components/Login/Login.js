import React from 'react';
import s from './Login.module.css';
import style from '../Common/FormControls/FormControls.module.css';
import {reduxForm} from 'redux-form';
// import {Field} from 'redux-form';
import {required} from '../../utils/validators/validators';
import {Input, createFieldFC} from '../Common/FormControls/FormControls';
import { connect } from 'react-redux';
import { login } from '../../storage/reducers/auth-reducer';
import {Redirect} from 'react-router-dom';
import Button from '../Common/Button/Button';


const LoginForm = ({handleSubmit, error}) => {
    return (
        <>    
            {/* // see createFieldFC} from '../Common/FormControls/FormControls */}
            {/* Field контейнерная компонента которая рисует другую компоненту приходит из redux-form */}
            <div className={s.formContainer}>
                <form onSubmit={handleSubmit}  className={s.uiForm}>
                    <div className={s.formRow}>
                        {/*!!!!! createFieldFC(placeholder, name, component, validators, props = {}, text= '') */}

                        {createFieldFC('Email', 'email', Input, [required] )}
                        {/* <Field  placeholder={'Email'} name={'email'} component={Input} validate={required} />*/}
                    </div>
                    <div className={s.formRow}> 
                         {createFieldFC('Password', 'password', Input, [required], {type: 'password' })}
                        {/* <Field  placeholder={'Password'}  name={'password'} type={'password'} component={Input} validate={required}  /> */}
                    </div>
                   
                        {/* Remember me */}
                        {createFieldFC(null, 'rememberMe', Input, [required],  {type: 'checkbox' }, '')}
        
                        {/* <Field  className={s.formRow} component={Input}  name={'rememberMe'} type={'checkbox'} validate={required}  /> */}
                        {/* common error for the form */}
                    { error && <div className={style.formSummaryError}>{error}</div> }
                    <Button name={'Sign in'} />        
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
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});
export default connect(mapStateToProps, {login} )(Login);


