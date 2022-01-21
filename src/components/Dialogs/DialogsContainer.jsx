// import React from "react";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => ({
        messagesPage: state.messagesPage,
});

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: () => {
            dispatch( addMessageActionCreator() )
        },
        onChangeMessage: (text) => {
            dispatch( updateMessageActionCreator(text) )
        }
    }
}

let DialogsRedirect = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsRedirect)

export default DialogsContainer;