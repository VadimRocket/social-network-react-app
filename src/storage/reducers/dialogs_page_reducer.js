
const SEND_MESSAGE = 'SEND_NEW_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Oliver'},
        {id: 2, name: 'Jack'},
        {id: 3, name: 'Harry'},
        {id: 4, name: 'Jacob'},
        {id: 5, name: 'Charlie'},
        {id: 6, name: 'Alex'}
    ],
    messages:  [
        { id: 1, message: 'Hello'},
        { id: 2, message: 'How are you?'},
        { id: 3, message: 'I\'m fine'},
        { id: 4, message: 'Hi'},
        { id: 5, message: 'What\'s up?'},
        { id: 6, message: 'Bye-Bye!'}
    ],
 
};


const dialogsReducer = (state = initialState, action) => { // state = this._state.dialogsPage

    // let stateOfCopy = {...state,  // shallow copy  messages: [...state.messages], // deep copy};

    switch (action.type) {
       
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages:[...state.messages, { id: 7, message: body }] // deep copy
            };
        default:
            return state;
    }
};

// For the dialogsContainer - action creators
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});


export default dialogsReducer;