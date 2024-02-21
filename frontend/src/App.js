import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Register from './pages/register';
import Header from './component/header';
import './App.css';

function App() {
  return (
    <Router>
      <div className='container'>
        <Header/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/login' element= {<Login/>}/>
          <Route path='/register' element= {<Register/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
