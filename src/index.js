import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import {SamuraiJSApp} from "./App";


    ReactDOM.render(
        <React.StrictMode>
            <SamuraiJSApp/>
        </React.StrictMode>,
        document.getElementById('root')
    );

reportWebVitals();