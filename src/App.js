// import logo from './logo.svg';
import './App.css';


const App = () => {
  return (
    <div className='app-wrapper'>
        <header className='header'>
            <img src="https://media.istockphoto.com/photos/one-like-social-media-notification-with-heart-icon-picture-id1164769192" alt="pic"/>
        </header>
        <nav className='nav'>
            <div>
                <p>Profile</p>
            </div>
            <div>
                <p>Messages</p>
            </div>
            <div>
                <p>News</p>
            </div>
            <div>
                <p>Music</p>
            </div>
            <div>
                <p>Settings</p>
            </div>
        </nav>
        <div className='content'>
            <div>
                <img src="https://images.pexels.com/photos/843226/pexels-photo-843226.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
            </div>
            <div>
                <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt=""/>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    New post
                </div>
                <div>
                    New post
                </div>
            </div>


        </div>
    </div>
  );
}

export default App;
