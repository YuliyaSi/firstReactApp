// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header.jsx";
import Navbar from "./components/Nav";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className='app-wrapper'>
       <Header />
       <Navbar />
        <Profile />
    </div>
  );
}

export default App;
