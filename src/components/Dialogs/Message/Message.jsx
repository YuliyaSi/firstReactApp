import React from "react";
import s from './Message.module.css'


const Message = (props) => {
    return (
        <div className={s.message}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Message-icon-blue.png" alt="Something bad"/>
            <span>{props.message}</span>
        </div>
    )
}

export default Message;