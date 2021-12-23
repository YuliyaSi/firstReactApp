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

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi! Ho!'},
        {id: 3, message: 'How is your IT-kamasutra'},
        {id: 4, message: 'Yo'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name='Sanya' id='3'/>
                <DialogItem name='Klava' id='4'/>
                <DialogItem name='Kesha' id='5'/>
                <DialogItem name='Vova' id='6'/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
            </div>
        </div>
    )
}
export default Dialogs;