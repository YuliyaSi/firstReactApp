const ADD_MESSAGE = 'ADD-MESSAGE',
    UPDATE_MESSAGE = 'UPDATE-MESSAGE'

const dialogsReducer = (state, action) => {

  switch (action.type) {

    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.newMessageValue
      };
      state.messages.push(newMessage);
      state.newMessageValue = '';
      return state;

    case UPDATE_MESSAGE:
      state.newMessageValue = action.newMessage;
      return state;

    default:
      return state;
  }
}

export const addMessageActionCreator = () =>( {type: ADD_MESSAGE} )
export const updateMessageActionCreator = (text) => (
    {
      type: UPDATE_MESSAGE,
      newMessage: text
    } )

export default dialogsReducer