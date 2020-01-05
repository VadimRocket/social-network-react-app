import React from 'react';

const StoreContext = React.createContext(null);

export default StoreContext;




// const StoreContext = React.createContext(null);

// export const Provider = (props) => {
//     return <StoreContext.Provider value={props.store}>
//             { props.children }
//     </StoreContext.Provider>
// }

// // export dafault StoreContext;
