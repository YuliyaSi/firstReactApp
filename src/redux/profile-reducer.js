import {profileApi} from "../api/api";

const ADD_POST = 'ADD-POST',
    UPDATE_POST = 'UPDATE-POST',
    SET_USER_PROFILE = 'SET-USER-PROFILE',
    SET_STATUS = 'SET-STATUS';

let initialState = {
  postsData: [
    {id: 1, message: 'Hi, how are you?', likesCount: 11},
    {id: 2, message: 'It\'s my first post', likesCount: 15},
    {id: 3, message: 'Bla-bla-bla', likesCount: 10},
    {id: 4, message: 'It\'s my second post', likesCount: 13}
  ],
  newPostText: '',
  profile: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        newPostText: '',
        postsData: [{ id: 5, message: state.newPostText, likesCount: 0 },
        ...state.postsData]
      };

    case UPDATE_POST:
      return {
        ...state,
        newPostText: action.newText
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      };

    default:
      return state;
  }
}

export const addPostActionCreator = () => ( {type: ADD_POST} )
export const setUserProfile = (profile) => ( {type: SET_USER_PROFILE, profile} )
export const updatePostActionCreator = (text) => ({type: UPDATE_POST, newText: text} )
export const setStatus = (status) => ({ type: SET_STATUS, status } )

// thunk creators
export const showUserProfile = (userId) => {
  return (dispatch) => {
    profileApi.getProfile(userId).then(data => {
      dispatch(setUserProfile(data));
    });
  }
}
export const getStatus = (userId) => {
  return (dispatch) => {
    profileApi.getStatus(userId).then(data => {
      dispatch(setStatus(data));
    });
  }
}
export const updateStatus = (status) => {
  return (dispatch) => {
    profileApi.updateStatus(status).then(data => {
      if(data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  }
}

export default profileReducer