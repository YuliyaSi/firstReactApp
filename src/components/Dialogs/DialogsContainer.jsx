// import React from "react";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
      messagesPage: state.messagesPage
  }
}
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;