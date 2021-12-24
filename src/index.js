import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

let postsData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 11},
    {id: 2, message: 'It\'s my first post', likesCount: 15},
    {id: 2, message: 'Bla-bla-bla', likesCount: 10},
    {id: 2, message: 'It\'s my second post', likesCount: 13}
]
let dialogsData = [
    {id: 1, name: 'Yuliya'},
    {id: 2, name: 'Alex'},
    {id: 3, name: 'Sanya'},
    {id: 4, name: 'Klava'},
    {id: 5, name: 'Kesha'},
    {id: 6, name: 'Vova'},
    {id: 6, name: 'Vovan'}
];
let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hi! Ho!'},
    {id: 3, message: 'How is your IT-kamasutra'},
    {id: 4, message: 'Yo'},
]

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App postsData={postsData}
                 dialogsData={dialogsData}
                 messages={messages}/>
        </BrowserRouter>

    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
