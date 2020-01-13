import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator } from './../../storage/reducers/dialogs_page_reducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = (props) => {
//
//     // got the state
//     let state  = props.store.getState().dialogsPage;
//
//     let onSendMessageClick =() => {
//         props.store.dispatch( sendMessageCreator() );
//     };
//
//     let onNewMessageChange = (body) =>  {
//         let action = updateNewMessageBodyCreator(body);
//         props.store.dispatch(action);
//     };
//
//     return ( <Dialogs updateNewMessageBody={ onNewMessageChange}
//                       sendMessage={onSendMessageClick}
//                       dialogsPage={state}  />);
// };

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
    }
};

/*
* @param{function} connect returns other fu (a new container component)
* @param{function} mapStateToProps
* @param{function} mapDispatchToProps
* */
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;