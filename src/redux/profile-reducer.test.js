import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
  postsData: [
    {id: 1, message: 'Hi, how are you?', likesCount: 11},
    {id: 2, message: 'It\'s my first post', likesCount: 15},
    {id: 3, message: 'Bla-bla-bla', likesCount: 10},
    {id: 4, message: 'It\'s my second post', likesCount: 13}
  ],
};

it('length os posts array should be incremented', () => {
  // 1. test data
  let action = addPostActionCreator('it-kamasutra');
  // 2. action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.postsData.length).toBe(5);
});

it('new value of message', () => {
  // 1. test data
  let action = addPostActionCreator('it-kamasutra');

  // 2. action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.postsData[0].message).toBe('it-kamasutra');
})

it('after deleting post length should be decremented', () => {
  // 1. test data
  let action = deletePost(1);

  // 2. action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.postsData.length).toBe(3);
})

it(`after deleting length shouldn't be decremented if id is incorrect`, () => {
  // 1. test data
  let action = deletePost(7);

  // 2. action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.postsData.length).toBe(4);
})