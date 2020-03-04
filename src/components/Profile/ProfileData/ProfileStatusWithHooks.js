import React, {useState} from 'react';

const ProfileStatusWithHooks = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);
    // debugger;
    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);   
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <>
            { !editMode && 
                <span  onDoubleClick={activateEditMode }> {props.status || '-------'}</span> 
            }

            { editMode &&  
                <span><input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} /></span> 
            }
        </>   
    ); 
};

export default ProfileStatusWithHooks;


