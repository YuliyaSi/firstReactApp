import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

    let dialogsElements = props.messagesPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} src={d.src}/>)
    let messageElements = props.messagesPage.messages.map(chat => <Message message={chat.message}/>)

    let addNewMessage = (values) => {
        if (values.newMessageValue) props.onSendMessage(values.newMessageValue);
        values.newMessageValue = '';
    }

    // return <Redirect to={'/login'} />

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogs_items}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messageElements}
                </div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

const AddMessageForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
          <div className={s.text}>
              <Field component={'textarea'} name={'newMessageValue'} placeholder={'Write a message here...'}/>
          </div>
          <div className={s.button}>
              <button>Send message</button>
          </div>
      </form>
  )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;