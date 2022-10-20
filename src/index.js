import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
        apiKey: "AIzaSyAfUTMvTzdc3zJS35ws2ut3mKr1Imna_Uk",
        authDomain: "alomar-reactjs-coderhouse.firebaseapp.com",
        projectId: "alomar-reactjs-coderhouse",
        storageBucket: "alomar-reactjs-coderhouse.appspot.com",
        messagingSenderId: "842725535282",
        appId: "1:842725535282:web:9ebb8b0fb2df92475bd62b"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
