import {setAuth} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
}

export const setInitializedSuccess = () => ({type: INITIALIZED_SUCCESS});

// thunk creator
export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(setAuth());
        promise.then(() => dispatch(setInitializedSuccess()));
    }
};

export default appReducer;