import React from 'react';
import s from './Dialogs.module.css';


const Dialogs = (props) => {

    return (
      
       <div>
            <h3>Dialogs</h3>
       
            <div className={s.dialogs}>
                <div className={s.dialog__list}>
                    <div className={s.dialog}>
                        Oliver
                    </div>
                    <div className={s.dialog}>
                        Jack
                    </div>
                    <div className={s.dialog}>
                        Harry
                    </div>
                    <div className={s.dialog}>
                        Jacob
                    </div>
                    <div className={s.dialog}>
                        Charlie
                    </div>
                    <div className={s.dialog}>
                        Name
                    </div>
                </div>
                <div className={s.messages}>
                    <div className="massage">Hello</div>
                    <div className="massage">How are you ?</div>
                    <div className="massage">I'am fine.</div>
                    <div className="massage">=)</div>
                    <div className="massage">Hi</div>
                    <div className="massage">Bye-Bye!</div>
                </div>
            </div>
        </div>
    );
};



export default Dialogs;