const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';

let initialState =  {
            
    people: [
        {id: 1, name: 'Oliver'},
        {id: 2, name: 'Jack'},
        {id: 3, name: 'Harry'},
        {id: 4, name: 'Jacob'},
        {id: 5, name: 'Charlie'},
        {id: 6, name: 'Alex'},
    ],

    messages:  [
        { id: 1, message: 'Hello'},
        { id: 2, message: 'How are you?'},
        { id: 3, message: 'I\'m fine'},
        { id: 4, message: 'Hi'},
        { id: 5, message: 'What\'s up?'},
        { id: 6, message: 'Bye-Bye!'},
    ],

    newMessageText: "",

};

const dialogsReducer = (state = initialState, action) => { 

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.body;   // body - obj property
            return state;

        case SEND_NEW_MESSAGE:

            let newMessageObj = { id: 7,  message: state.newMessageText, };
            state.messages.push( newMessageObj );
            state.newMessageText = '';    // clear textarea after click on the btn - add Message 
            return state;

        default:
            return state;
    }
};

// For the dialogs.jsx  - action creators
export const send_new_messageCreator = () => ({type: SEND_NEW_MESSAGE});
export const update_new_messageCreator  = (body) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: body});


export default dialogsReducer;