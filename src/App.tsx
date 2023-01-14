import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Loans from './pages/Loans';
import Mortgages from './pages/Mortgages';
import Login from './pages/Login';

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/home' element={<Home />} />
          <Route path='/loans' element={<Loans />} />
          <Route path='/mortgages' element={<Mortgages />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
