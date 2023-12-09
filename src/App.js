import React from 'react';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Login from './Pages/Login&Signup/Login';
import Signup from './Pages/Login&Signup/Signup';
import Home from './Pages/Home/Home.js';
import NavBar from './Pages/Nav-1/Navbar';
import Booking from './Pages/Booking.js';
import UserProfile from './Pages/profile.js';
import Body from './Pages/Body/Body.js';
import Footer from './Pages/Footer/Footer.js';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Booking" element={<Booking/>}/>
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Body" element={<Body/>} />
            <Route path="/UserProfile" element={<UserProfile/>} />
            <Route path="/Footer" element={<Footer/>} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
