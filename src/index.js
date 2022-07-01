import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FullPage from './FullPage';
import Nav from "./Nav";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Nav/>
        <FullPage/>
    </div>

);
