// import React from "react";
import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);