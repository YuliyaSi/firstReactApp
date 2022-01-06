import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/state";

const Dialogs = (props) => {

    let dialogsElements = props.messagesPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} src={d.src}/>)
    let messageElements = props.messagesPage.messages.map(chat => <Message message={chat.message}/>)

    let onSendMessage = () => {
        props.dispatch( addMessageActionCreator() )
    }

    let onChangeMessage = (e) => {
        let text = e.target.value;
        props.dispatch( updateMessageActionCreator(text) )
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogs_items}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messageElements}
                </div>
            </div>
            <div className={s.text}>
                <textarea rows="5"
                          placeholder={'Write a message here...'}
                          value={props.messagesPage.newMessageValue}
                          onChange={ onChangeMessage }/>
            </div>
            <div className={s.button}>
                <button onClick={ onSendMessage }>Send message</button>
            </div>
        </div>
    )
}
export default Dialogs;