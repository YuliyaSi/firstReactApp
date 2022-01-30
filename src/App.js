// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Nav";
import {Route, Routes} from "react-router-dom";
import News from "./components/News";
import Music from "./components/Music";
import Settings from "./components/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";

const App = () => {

    return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path={`/profile/*`}
                               element={<ProfileContainer />}/>
                        <Route path={`/profile/:userId/`}
                               element={<ProfileContainer />}/>
                        <Route path='/Dialogs/*'
                               element={<DialogsContainer />}/>
                        <Route path='/News' element={<News />}/>
                        <Route path='/Music' element={<Music />}/>
                        <Route path='/Users' element={<UsersContainer />}/>
                        <Route path='/Settings' element={<Settings />}/>
                        <Route path='/login' element={<LoginPage />}/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;
