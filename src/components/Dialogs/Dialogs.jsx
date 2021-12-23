import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Yuliya'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Sanya'},
        {id: 4, name: 'Klava'},
        {id: 5, name: 'Kesha'},
        {id: 6, name: 'Vova'}
    ];
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi! Ho!'},
        {id: 3, message: 'How is your IT-kamasutra'},
        {id: 4, message: 'Yo'},
    ]

    let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = messages.map(chat => <Message message={chat.message}/>)

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