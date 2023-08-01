import React from 'react';
import ReactDOM from 'react-dom/client';
import './Assets/css/index.css';
import './Assets/css/Font.css';
import './Assets/css/Button.css'
import App from './App';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
