// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import { Routes, Route } from "react-router-dom";
import News from "./components/News";
import Music from "./components/Music";
import Settings from "./components/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/Profile'
                               element={<Profile />}/>
                        <Route path='/Dialogs'
                               element={<DialogsContainer />}/>
                        <Route path='/News' element={<News />}/>
                        <Route path='/Music' element={<Music />}/>
                        <Route path='/Settings' element={<Settings />}/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;
