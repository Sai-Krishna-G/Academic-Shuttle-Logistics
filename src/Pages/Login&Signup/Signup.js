import { Link } from "react-router-dom";
import React from "react";
import "./Signup.css";

const imgAddress="https://st4.depositphotos.com/1006318/20337/v/1600/depositphotos_203371206-stock-illustration-yellow-school-bus-front-view.jpg"

function Signup() {
  return (
    <>
      <div className="login-page">
        <div className="login-container">
          <div className="logo">
            <img src={imgAddress} alt="Logo" />
          </div>
          <div className="login-form">
            <h2>Login</h2>
            <form>
              <label htmlFor="login-input" className="label">
                Email Address
              </label>
              <input
                type="email"
                className="login-input"
                id="login-input"
                required
              />

              <label htmlFor="login-input-password" className="label">
                Password
              </label>
              <input
                type="password"
                className="login-input"
                id="login-input-password"
                required
              />
              <label htmlFor="login-input-confirmPassword" className="label">
                confirm Password 
              </label>
              <input
                type="password"
                className="login-input"
                id="login-input-password"
                required
              />
              <button className="btn-login" type="submit">
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