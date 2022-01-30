import {authApi} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    // isFetching: false,
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: action.payload.isAuth,
            };

        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}});
// thunk creator
export const setAuth = () => {
    return (dispatch) => {
        authApi.authMe().then(data => {
            if(data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login, true));

            }
        });
    }
};
export const loginUser = (email, password, rememberMe) => {
    return (dispatch) => {
        authApi.logIn(email, password, rememberMe).then(data => {
            if(data.resultCode === 0) {
                dispatch(setAuth())
            }
        })
    }
};
export const logoutUser = () => {
    return (dispatch) => {
        authApi.logOut().then(data => {
            if(data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
    }
};


export default authReducer;