// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Routes, Route } from "react-router-dom";
import News from "./components/News";
import Music from "./components/Music";
import Settings from "./components/Settings";

const App = (props) => {

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/Profile' element={<Profile postsData={props.postsData}/>}/>
                        <Route path='/Dialogs' element={<Dialogs dialogsData={props.dialogsData} messages={props.messages}/>}/>
                        <Route path='/News' element={<News />}/>
                        <Route path='/Music' element={<Music />}/>
                        <Route path='/Settings' element={<Settings />}/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;
