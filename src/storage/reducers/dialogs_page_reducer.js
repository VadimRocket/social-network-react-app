const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';

const dialogsReducer = (state, action) => { // state = this._state.messagesPage

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMassageText = action.body;   // body - obj property
            return state;

        case SEND_NEW_MESSAGE:

            let newMessageObj = { id: 7,  message: state.newMassageText, };
            state.messages.push( newMessageObj );
            state.newMassageText = '';    // clear textarea after click on the btn - add Message 
            return state;

        default:
            return state;
    }
}

// For the dialogs.jsx  - action creators
export const send_new_messageCreator = () => ({type: SEND_NEW_MESSAGE});
export const update_new_messageCreator  = (body) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: body});


export default dialogsReducer;