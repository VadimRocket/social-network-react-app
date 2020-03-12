import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { required, maxLengthCreator } from "../../utils/validators/validators";
import { Textarea } from "../../components/Common/FormControls/FormControls";
import Button from "../Common/Button/Button";

const Dialogs = props => {
   // got the state
   let state = props.dialogsPage;
   let dialogsElements = state.dialogs.map(dialog => (
      <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
   ));
   let messagesElements = state.messages.map(m => (
      <Message message={m.message} key={m.id} id={m.id} />
   ));

   // if no logged  -> redirect to login page
   if (!props.isAuth) return <Redirect to={"/login"} />;

   const addNewMessage = values => {
      props.sendMessage(values.newMessageBody);
   };
   return (
      <>
         <h3>Dialogs</h3>

         <div className={s.dialogs}>
            <div className={s.dialogList}>
               {dialogsElements} {/* render DialogItems */}
            </div>

            <div className={s.messages}>
               <div>
                  {" "}
                  {messagesElements} {/* render messagesElements */}
               </div>
            </div>
         </div>
         <div className={s.sendMessage}>
            <AddMessageReduxForm onSubmit={addNewMessage} />
         </div>
      </>
   );
};

const maxLength100 = maxLengthCreator(100);
// create form
const AddMessageForm = props => {
   return (
      <form onSubmit={props.handleSubmit}>
         <Field
            component={Textarea}
            validate={[required, maxLength100]}
            name='newMessageBody'
            placeholder='Enter your message'
         />
         <Button name={"Send"} />
      </form>
   );
};
const AddMessageReduxForm = reduxForm({
   // a unique name for the form
   form: "addMessageForm"
})(AddMessageForm);

export default Dialogs;
