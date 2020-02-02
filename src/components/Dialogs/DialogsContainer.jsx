import {sendMessageCreator, updateNewMessageBodyCreator } from './../../storage/reducers/dialogs_page_reducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";




let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
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