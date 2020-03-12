import { sendMessageCreator } from "./../../storage/reducers/dialogs_page_reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = state => ({ dialogsPage: state.dialogsPage });

let mapDispatchToProps = dispatch => {
   return {
      sendMessage: newMessageBody => {
         dispatch(sendMessageCreator(newMessageBody));
      }
   };
};

/*
 I make 2 calls to the compose function that the first call to compose returned
  Dialogs - the target. which will go through the assembly line. We go from bottom to top.
  The dialogue came first. which gets into the withAuthRedirect handler
  compose will take a dialog and drop it into a call to withAuthRedirect.
  then it will take the result of the withAuthRedirect function and throw it into the connect function
  connect is a function that returns hoc.
  I take connect function which returns the first connection call ->  connect(mapStateToProps, mapDispatchToProps)
*/

export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirect
)(Dialogs);
