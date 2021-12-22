import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'>Yulia</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Alex</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Sanya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Klava</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>Hi! Ho!</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
}
export default Dialogs;