import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { MainLayout } from './components/layouts/main';
import Login from './components/Login';
import LayoutAuth from './components/layouts/auth';
import Register from './components/Register';
import { AuthProtect } from './components/AuthProtect';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthProtect><MainLayout /></AuthProtect>} >
          <Route path='home' element={<App />} />
        </Route>
        <Route path='/auth' element={<AuthProtect><LayoutAuth /></AuthProtect>}>
          <Route path='login' element={<Login />}></Route>
          <Route path='register' element={<Register />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
