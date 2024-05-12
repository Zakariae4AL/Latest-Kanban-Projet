import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from "./components/Login/LoginForm.jsx";
import Signup from "./components/Login/Signup.jsx";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
   

      <App />
    </Provider>
  </React.StrictMode>
);


