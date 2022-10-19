import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ConfigFirebase from './firebase/ConfigFirebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ConfigFirebase/>
  </React.StrictMode>
);
