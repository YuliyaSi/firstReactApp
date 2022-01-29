import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator} from "../../utils/validators/validators";

const Dialogs = (props) => {

    let dialogsElements = props.messagesPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} src={d.src}/>)
    let messageElements = props.messagesPage.messages.map(chat => <Message message={chat.message}/>)

    let addNewMessage = (values) => {
        if(values.newMessageValue) props.onSendMessage(values.newMessageValue);
        values.newMessageValue = '';
    }

    // return <Redirect to={'/login'} />

    return (
        <div className={s.dialogs_block}>
            <div className={s.dialogs}>
                <div className={s.dialogs_items}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messageElements}
                </div>
            </div>
            <div className={s.text}>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>

        </div>
    )
}

const maxLength500 = maxLengthCreator(500)

const AddMessageForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
              <Field component={TextArea}
                     name={'newMessageValue'}
                     placeholder={'Write a message here...'}
                     validate={[maxLength500]}/>
          <div>
              <button>Send message</button>
          </div>
      </form>
  )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;