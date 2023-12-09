import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";
import logo from "../../images/logo.png"


function Signup() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setname] = useState("");
  const [loading,setLoading]=useState(false);
  const onChangeemail = (e) => {
    setEmail(e.target.value);
  };
  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      nav("/");
    }
  });
  const onChangepassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangename = (e) => {
    setname(e.target.value);
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    // const response = await fetch(
    //   "http://localhost:5000/api/authorization/signup",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ name: name, email: email, password: password }),
    //   }
    // );
    // setLoading(false);
    // const jsonData = await response.json();
    // if (jsonData.success === true) {
    //   localStorage.setItem("token", jsonData.authToken);
    //   nav("/");
    //   window.location.reload();
    // } else {
    //   if (jsonData.errors) {
    //     jsonData.errors.forEach((error) => {
    //       alert(error.msg);
    //     });
    //   } else {
    //     console.log(jsonData.message);
    //   }
    // }
    try{
      const response = await axios.post(
        "http://localhost:5000/api/authorization/signup",
        { name: name, email: email, password: password },
        {
          headers: {
            "Content-Type": "application/json",
          }}
      );
      const jsonData = await response.data;
      if (jsonData.success === true) {
        localStorage.setItem("token", jsonData.authToken);
        nav("/");
        window.location.reload();
      } else {
        if (jsonData.errors) {
          jsonData.errors.forEach((error) => {
            alert(error.msg);
          });
        } else {
          console.log(jsonData.message);
        }
      }
      setLoading(false);
    }
    catch (error) {
      console.error('Error making the request:', error);
    }
  };
  return (
    <>
    {!loading && 
      <div className="signup-page">
      <div className="signup-container">
      <div className="logo">
             <img src={logo} alt="Logo" />
      </div>
        <div className="signup-form">
          <h2>SIGN UP</h2>
          <h4>START YOUR JOURNEY TODAY!</h4>
          <form onSubmit={handleSignup}>
            <label htmlFor="signup-input-name" className="label">
              NAME
            </label>
            <input
              type="text"
              className="signup-input"
              id="signup-input-name" 
              required
              onChange={onChangename}
            />
            <label htmlFor="signup-input" className="label">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              className="signup-input"
              id="signup-input"
              required
              onChange={onChangeemail}
            />

            <label htmlFor="signup-input-password" className="label">
              PASSWORD
            </label>
            <input
              type="password"
              className="signup-input"
              id="signup-input-password"
              onChange={onChangepassword}
              required
            />

            {/* <label htmlFor="signup-confirm-password" className="label">
              Confirm Password
            </label>
            <input
              type="password"
              className="signup-input"
              id="signup-confirm-password"
              required
            /> */}

            <button className="btn-login" type="submit">
              SIGN UP
            </button>
            <p className="auth-para">
              Already have an account?
              <span>
                <Link to="/"> LOGIN </Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>}
    </>
  );
}

export default Signup;
