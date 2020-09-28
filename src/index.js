import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './Component/Navbar.js';
import 'semantic-ui-css/semantic.min.css';




ReactDOM.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>,
  document.getElementById('root')
);

