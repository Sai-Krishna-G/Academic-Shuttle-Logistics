import { Link } from "react-router-dom";
import React from "react";
import logo from "../../images/logo.png"
import "./Signup.css";



function Signup() {
  return (
    <>
      <div className="signup-page">
        <div className="signup-container">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="signup-form">
            <h2>signup</h2>
            <form>
              <label htmlFor="signup-input" className="label">
                Email Address
              </label>
              <input
                type="email"
                className="signup-input"
                id="signup-input"
                required
              />

              <label htmlFor="signup-input-password" className="label">
                Password
              </label>
              <input
                type="password"
                className="signup-input"
                id="signup-input-password"
                required
              />
              <label htmlFor="signup-input-confirmPassword" className="label">
                confirm Password 
              </label>
              <input
                type="password"
                className="signup-input"
                id="signup-input-password"
                required
              />
              <button className="btn-signup" type="submit">
                Log In
              </button>
              <p className="auth-para">
                Alredy have an account?{" "}
                <span>
                  <Link to="/">Login</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;