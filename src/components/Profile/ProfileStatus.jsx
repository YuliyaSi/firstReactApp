import React, {useEffect, useState} from "react";
import s from './Profile.module.css'

const ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={s.status}>
            {editMode ?
                <input value={status} onBlur={deactivateEditMode} autoFocus={true}
                       onChange={onStatusChange}/>
                :
                <span onDoubleClick={activateEditMode} className={s.span}>{props.status || ' ...'}</span>
            }
        </div>
    );
}

export default ProfileStatus;
