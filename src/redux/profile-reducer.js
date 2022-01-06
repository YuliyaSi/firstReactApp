const ADD_POST = 'ADD-POST', UPDATE_POST = 'UPDATE-POST';

let initialState = {
  postsData: [
    {id: 1, message: 'Hi, how are you?', likesCount: 11},
    {id: 2, message: 'It\'s my first post', likesCount: 15},
    {id: 3, message: 'Bla-bla-bla', likesCount: 10},
    {id: 4, message: 'It\'s my second post', likesCount: 13}
  ],
      newPostText: ''
};

const profileReducer = (state = initialState, action) => {

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