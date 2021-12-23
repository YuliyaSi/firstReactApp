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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem name='Yuliya' id='1'/>
                <DialogItem name='Alex' id='2'/>
                <DialogItem name='Sanya' id='3'/>
                <DialogItem name='Klava' id='4'/>
                <DialogItem name='Kesha' id='5'/>
                <DialogItem name='Vova' id='6'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi' />
                <Message message='Hi! Ho!' />
                <Message message='How is your IT-kamasutra' />
                <Message message='Yo' />
            </div>
        </div>
    )
}
export default Dialogs;