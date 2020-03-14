import React from "react";
import s from "./Login.module.css";
import style from "../Common/FormControls/FormControls.module.css";
import { reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input, createFieldFC } from "../Common/FormControls/FormControls";
import { connect } from "react-redux";
import { login } from "../../storage/reducers/auth-reducer";
import { Redirect } from "react-router-dom";
import Button from "../Common/Button/Button";

const LoginForm = ({ handleSubmit, error, captcha }) => {
   return (
      <>
         {/* // see createFieldFC} from '../Common/FormControls/FormControls */}
         {/*!!!!! createFieldFC(placeholder, name, component, validators, props = {}, text= '') */}
         <div className={s.formContainer}>
            <form onSubmit={handleSubmit} className={s.uiForm}>
               <div className={s.formRow}>
                  {createFieldFC("Email", "email", Input, [required])}
               </div>
               <div className={s.formRow}>
                  {createFieldFC("Password", "password", Input, [required], {
                     type: "password"
                  })}
               </div>
               {/* Remember me checkbox*/}
               {createFieldFC(null, "rememberMe", Input, [required], {
                  type: "checkbox"
               })}

               {/* captcha */}
               {captcha && <img src={captcha} alt='captcha' />}
               {captcha &&
                  createFieldFC("Symbols", "captcha", Input, [required], {})}
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

const Login = ({ login, isAuth, captcha }) => {
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

const mapStateToProps = state => ({
   captcha: state.auth.captcha,
   isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);
