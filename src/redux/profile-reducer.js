const
    ADD_POST = 'ADD-POST',
    UPDATE_POST = 'UPDATE-POST'

const profileReducer = (state, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };
      state.postsData.push(newPost)
      state.newPostText = ''
      return state;

    case UPDATE_POST:
      state.newPostText = action.newText;
      return state;

    default:
      return state;
  }
}

export const addPostActionCreator = () => ( {type: ADD_POST} )
export const updatePostActionCreator = (text) => (
    {
      type: UPDATE_POST,
      newText: text
    } )

export default profileReducer