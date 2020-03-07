import React, {useState, useEffect} from 'react';

const ProfileStatusWithHooks = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

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
                <span  onDoubleClick={activateEditMode }> {props.status || 'Set status'}</span> 
            }

            { editMode &&  
                <span><input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} /></span> 
            }
        </>   
    ); 
};

export default ProfileStatusWithHooks;


