// import { Link } from "react-router-dom";
// import React from "react";
// import "./Login.css";
// import logo from "../../images/logo.png"

// function Login() {
//   return (
//     <>
//       <div className="login-page">
//         <div className="login-container">
//           <div className="logo">
//             <img src={logo} alt="Logo" />
//           </div>
//           <div className="login-form">
//             <h2>Login</h2>
//             <form>
//               <label htmlFor="login-input" className="label">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 className="login-input"
//                 id="login-input"
//                 required
//               />

//               <label htmlFor="login-input-password" className="label">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 className="login-input"
//                 id="login-input-password"
//                 required
//               />
//               <button className="btn-login" type="submit">
//                 Log In
//               </button>
//               <p className="auth-para">
//                 Don't have an account?{" "}
//                 <span>
//                   <Link to="/Signup"> Sign Up </Link>
//                 </span>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;

import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../images/logo.png"
import "./Login.css";
function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChangeemail = (e) => {
    setEmail(e.target.value);
  };
  const onChangepassword = (e) => {
    setPassword(e.target.value);
  };
  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      nav("/Home");
    }
  });
  const [loading,setLoading]=useState(false);
  const handleLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    // const response = await fetch(
    //   "http://localhost:5000/api/authorization/login",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email: email, password: password }),
    //   }
    // );
    try {
      const response = await axios.post(
        "http://localhost:5000/api/authorization/login",
        {
          email: email,
          password: password
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
  
      const jsonData = response.data;

  
      if (jsonData.success === true) {
        localStorage.setItem("token", jsonData.authToken);
        nav("/");
        window.location.reload();
      } else {
        console.log(jsonData.message);
      }
      console.log(jsonData.authToken)
    } catch (error) {
      console.error('Error making the request:', error);
    }
    setLoading(false);
    // const jsonData = await response.json();
    // if (jsonData.success === true) {
    //   localStorage.setItem("token", jsonData.authToken);
    //   nav("/");
    //   window.location.reload();
    // } else {
    //   console.log(jsonData.message); 
    // }
        

  };
  return (
    <>  
      {!loading && 
      <div className="login-page">
      <div className="login-container">
      <div className="logo">
             <img src={logo} alt="Logo" />
           </div>
        <div className="login-form">
          <h2>LOGIN</h2>
          <h4>WELCOME!</h4>
          <form onSubmit={handleLogin}>
            <label htmlFor="login-input" className="label">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              className="login-input"
              id="login-input"
              onChange={onChangeemail}
              required
            />

            <label htmlFor="login-input-password" className="label">
              PASSWORD
            </label>
            <input
              type="password"
              className="login-input"
              id="login-input-password"
              onChange={onChangepassword}
              required
            />
            <button className="btn-login" type="submit">
              LOG IN
            </button>
            <p className="auth-para">
              Don't have an account?{" "}
              <span>
                <Link to="/Signup"> SIGN UP </Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>}
    </>
  );
}

export default Login;
