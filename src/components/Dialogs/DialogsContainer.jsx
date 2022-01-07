import React from "react";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().messagesPage
    let onSendMessage = () => {
        props.store.dispatch( addMessageActionCreator() )
    }

    let onChangeMessage = (text) => {
        props.store.dispatch( updateMessageActionCreator(text) )
    }

    return (
        <Dialogs messagesPage={state}
                 onSendMessage={onSendMessage}
                 onChangeMessage={onChangeMessage}/>
    )
}
export default DialogsContainer;