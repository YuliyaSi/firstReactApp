import {authApi} from "../api/api";

const SET_USER_DATA = 'react1/auth/SET-USER-DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    error: ''
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: action.payload.isAuth,
                error: action.error,
            };

        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth, error) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth},
    error
});

// thunk creator
export const setAuth = () => async (dispatch) => {
    let data = await authApi.authMe();
    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true, ''));
    }
};
export const loginUser = (email, password, rememberMe) => async (dispatch) => {
    let data = await authApi.logIn(email, password, rememberMe);
    if (data.resultCode === 0) {
        dispatch(setAuth())
    } else {
        let message = data.messages[0] || 'Login failed';
        dispatch(setAuthUserData(null, null, null, false, message))
    }
};
export const logoutUser = () => async (dispatch) => {
    let data = await authApi.logOut();
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false, ''))
    }
};


export default authReducer;