import {sendMessageCreator, updateNewMessageBodyCreator } from './../../storage/reducers/dialogs_page_reducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) => ({dialogsPage: state.dialogsPage});

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

// caused HOC
let AuthRedirectComponent = withAuthRedirect(Dialogs);

/*
* @param{function} connect returns other fu (a new container component)
* @param{function} mapStateToProps
* @param{function} mapDispatchToProps
* */
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;