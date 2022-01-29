import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import { reducer as formReducer } from "redux-form"
import thunkMiddleWare from 'redux-thunk'


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));
window.store = store;

export default store;