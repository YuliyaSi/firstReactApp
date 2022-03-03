import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Nav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News";
import Music from "./components/Music";
import Settings from "./components/Settings";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
// import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import store from "./redux/redux-store";

const DialogsContainer = React.lazy(() => {
   return import('./components/Dialogs/DialogsContainer')
});
const LoginPage = React.lazy(() => {
    return import('./components/Login/Login')
});
const UsersContainer = React.lazy(() => {
    return import('./components/Users/UsersContainer')
});

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <React.Suspense fallback={<Preloader/>}>
                        <Routes>
                            <Route path={`/profile`}
                                   element={<ProfileContainer/>}/>
                            <Route path={`Users/profile/:userId/`}
                                   element={<ProfileContainer/>}/>
                            <Route path='/Dialogs/*'
                                   element={<DialogsContainer/>}/>
                            <Route path='/News' element={<News/>}/>
                            <Route path='/Music' element={<Music/>}/>
                            <Route path='/Users' element={<UsersContainer/>}/>
                            <Route path='/Settings' element={<Settings/>}/>
                            <Route path='/login' element={<LoginPage/>}/>
                            <Route path='' element={<LoginPage/>}/>
                        </Routes>
                    </React.Suspense>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return ({
        initialized: state.initialization.initialized,
    })
}

let AppContainer = connect(mapStateToProps, {initializeApp})(App);
// because start test was failed, App needs to be clean
export const SamuraiJSApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}
