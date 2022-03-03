import {profileApi} from "../api/api";


const ADD_POST = 'profile/ADD-POST',
    SET_USER_PROFILE = 'profile/SET-USER-PROFILE',
    SET_STATUS = 'profile/SET-STATUS', DELETE_POST = 'profile/DELETE-POST';

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 11},
        {id: 2, message: 'It\'s my first post', likesCount: 15},
        {id: 3, message: 'Bla-bla-bla', likesCount: 10},
        {id: 4, message: 'It\'s my second post', likesCount: 13}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsData: [{id: 5, message: action.newPostText, likesCount: 0},
                    ...state.postsData]
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
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id !== action.postId),
            };

        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})

// thunk creators
export const showUserProfile = (userId) => async (dispatch) => {
    let data = await profileApi.getProfile(userId);
    dispatch(setUserProfile(data));
}

export const getStatus = (userId) => async (dispatch) => {
    let data = await profileApi.getStatus(userId);
    dispatch(setStatus(data));
}

export const updateStatus = (status) => async (dispatch) => {
    let data = await profileApi.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default profileReducer