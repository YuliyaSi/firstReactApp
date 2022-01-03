import React from "react";
import s from './DialogsItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src={props.src} alt={'pic'}/>
            <NavLink to={path} className={s.link}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;