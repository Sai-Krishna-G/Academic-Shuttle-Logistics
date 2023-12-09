// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import "./Navbar.css";

// function NavBar() {
//   const [click, setClick] = useState(false);
//   const handelLogout = () => {
//     localStorage.removeItem("token");
//   };

//   const handleClick = () => setClick(!click);
//   return (
//     <>
//       <nav className="navbar">
//         <div className="nav-container">
//           <NavLink exact={"true"} to="/" className="nav-logo">

//             <i className="fas fa-code"></i>
//           </NavLink>

//           <ul className={click ? "nav-menu active" : "nav-menu"}>
//             <li className="nav-item">
//               <NavLink
//                 exact={"true"}
//                 to="/Home"
//                 activeclassname="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact={"true"}
//                 to="/Booking"
//                 activeclassname="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 Booking
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact={"true"}
//                 to="/collaborate"
//                 activeclassname="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 Collaborate
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact={"true"}
//                 to="/about"
//                 activeclassname="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 About Us
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact={"true"}
//                 to="/"
//                 activeclassname="active"
//                 className="nav-links"
//                 onClick={handelLogout}
//               >
//                 Logout
//               </NavLink>
//             </li>
//           </ul>
//           <div className="nav-icon" onClick={handleClick}>
//             <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default NavBar;
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const handleClick = () => setClick(!click);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/AboutUs"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About Us
              </NavLink>
            </li>
            {isLoggedIn ? (
              <li className="nav-item">
              <NavLink
                exact
                to="/Booking"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Booking
              </NavLink>
            </li>):null}
            
            <li className="nav-item">
              {isLoggedIn ? (
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleLogout}
                  id="logout"
                >
                  Logout
                </NavLink>
              ) : (
                <NavLink
                  exact
                  to="/login"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                  id="login"
                >
                  Login
                </NavLink>
              )}
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
