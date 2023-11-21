import React from 'react';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Login from './Pages/Login&Signup/Login';
import Signup from './Pages/Login&Signup/Signup';
import Home from './Pages/Home/Home.js';
import NavBar from './Pages/Nav-1/Navbar';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>

        </div>
      </Router>
  </>
  );
}

export default App;
