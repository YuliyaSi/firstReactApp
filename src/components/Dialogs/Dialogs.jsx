import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = props.messages.map(chat => <Message message={chat.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}
export default Dialogs;