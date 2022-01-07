import React from "react";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";


const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                store => {
                let state = store.getState().messagesPage;
                let onSendMessage = () => {
                    store.dispatch( addMessageActionCreator() )
                }

                let onChangeMessage = (text) => {
                    store.dispatch( updateMessageActionCreator(text) )
                }
                return (
                    <Dialogs messagesPage={state}
                             onSendMessage={onSendMessage}
                             onChangeMessage={onChangeMessage}/>
                )
            }
        }
        </StoreContext.Consumer>
    )
}
export default DialogsContainer;