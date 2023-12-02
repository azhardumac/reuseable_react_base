import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import HomePage from './pages/Homepage/Homepage';
import LoginPage from './pages/Loginpage/LoginPage';
import SignUpPage from './pages/SignupPage/SignupPage';


const App = () => {
  return (
    
      <div>
        <Routes>
          <Route exact path='/app' element={<App/>}/>
          <Route exact path='/' element={<HomePage/>} />
          <Route exact path='/login' element={<LoginPage/>}/>
          <Route exact path='/signup' element={<SignUpPage/>}/>
          
        </Routes>

      </div>

   
  );
};


export default App;
