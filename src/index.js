import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import AuthContextProvider from "./context/AuthContext";
import SearchContextProvider from "./context/SearchContext";
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router>
            <SearchContextProvider>
                <AuthContextProvider>
                    <App/>
                </AuthContextProvider>
            </SearchContextProvider>
        </Router>
    </React.StrictMode>
);

