import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} src={d.src}/>)
    let messageElements = props.state.messages.map(chat => <Message message={chat.message}/>)
    let newMessage = React.createRef();
    let onSendMessage = () => {
        let msg = newMessage.current.value;
        alert(msg + ' was written')
        newMessage.current.value = ''
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
                <textarea rows="5" ref={newMessage}/>
            </div>
            <div className={s.button}>
                <button onClick={ onSendMessage }>Send a message</button>
            </div>
        </div>
    )
}
export default Dialogs;