import React from 'react';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Login from './Pages/Login&Signup/Login';
import Signup from './Pages/Login&Signup/Signup';
//import Home from './Pages/Home';
import NavBar from './Pages/Navbar/Navbar';
import Booking from './Pages/Booking';
import {View,Text} from 'react-native';


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Login />} />
         
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Booking" element={<Booking />} />
          </Routes>

        </div>
      </Router>
  </>
  );
}

export default App;
