import React from "react";
import s from "./Login.module.css";
import style from "../Common/FormControls/FormControls.module.css";
import { reduxForm } from "redux-form";
// import {Field} from 'redux-form';
import { required } from "../../utils/validators/validators";
import { Input, createFieldFC } from "../Common/FormControls/FormControls";
import { connect } from "react-redux";
import { login } from "../../storage/reducers/auth-reducer";
import { Redirect } from "react-router-dom";
import Button from "../Common/Button/Button";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const LoginForm = ({ handleSubmit, error, captcha }) => {
   console.log(props);
   return (
      <>
         {/* // see createFieldFC} from '../Common/FormControls/FormControls */}
         {/* Field контейнерная компонента которая рисует другую компоненту приходит из redux-form */}
         <div className={s.formContainer}>
            <form onSubmit={handleSubmit} className={s.uiForm}>
               <div className={s.formRow}>
                  {/*!!!!! createFieldFC(placeholder, name, component, validators, props = {}, text= '') */}

                  {createFieldFC("Email", "email", Input, [required])}
                  {/* <Field  placeholder={'Email'} name={'email'} component={Input} validate={required} />*/}
               </div>
               <div className={s.formRow}>
                  {createFieldFC("Password", "password", Input, [required], {
                     type: "password"
                  })}
                  {/* <Field  placeholder={'Password'}  name={'password'} type={'password'} component={Input} validate={required}  /> */}
               </div>

               {/* Remember me */}
               {createFieldFC(
                  null,
                  "rememberMe",
                  Input,
                  [required],
                  { type: "checkbox" },
                  ""
               )}

               {captcha && <img src={captcha} alt='captcha' />}
               {/*!!!!! createFieldFC(placeholder, name, component, validators, props = {}, text= '') */}
               {captcha &&
                  createFieldFC("Symbols", "captcha", Input, [required], {})}
               {/* <Field  className={s.formRow} component={Input}  name={'rememberMe'} type={'checkbox'} validate={required}  /> */}
               {/* common error for the form */}
               {error && <div className={style.formSummaryError}>{error}</div>}
               <Button name={"Sign in"} />
            </form>
         </div>
      </>
   );
};

const LoginReduxForm = reduxForm({
   // a unique name for the form
   form: "login"
})(LoginForm);
// store.getState().form

const Login = ({ isAuth, login, captcha }) => {
   //   console.log(props);
   // сюда придут все значения из формы
   const onSubmit = formData => {
      login(
         formData.email,
         formData.password,
         formData.rememberMe,
         formData.captcha
      );
   };

   // if logged
   if (isAuth) {
      return <Redirect to={"/profile"} />;
   }
   return (
      <>
         <h3>Login</h3>
         <LoginReduxForm onSubmit={onSubmit} captcha={captcha} />
      </>
   );
};

export default Login;
