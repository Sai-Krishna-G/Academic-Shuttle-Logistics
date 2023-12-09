import React from 'react';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Login from './Pages/Login&Signup/Login';
import Signup from './Pages/Login&Signup/Signup';
import Home from './Pages/Home/Home.js';
import NavBar from './Pages/Navbar/Navbar';
import Booking1 from './Pages/Booking/Booking1.js';
import Booking2 from './Pages/Booking/Booking2.js';
import AboutUs from './Pages/AboutUs.jsx';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Booking" element={<Booking1 />} />
            <Route path="/Booking2" element={<Booking2 />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>

        </div>
      </Router>
  </>
  );
}

export default App;
