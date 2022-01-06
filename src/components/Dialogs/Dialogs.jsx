import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.messagesPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} src={d.src}/>)
    let messageElements = props.messagesPage.messages.map(chat => <Message message={chat.message}/>)
    let newMessage = React.createRef();

    let onSendMessage = () => {
        let newVar = {type: 'ADD-MESSAGE'};
        props.dispatch( newVar )
    }

    let onChangeMessage = () => {
        let text = newMessage.current.value;
        let newVar = {type: 'UPDATE-MESSAGE', newMessage: text};
        props.dispatch( newVar )
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
                          ref={newMessage}
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