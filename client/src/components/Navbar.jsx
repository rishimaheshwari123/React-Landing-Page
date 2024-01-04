import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import Fade from "react-reveal/Fade";
import { useAuth } from "../store/Auth";
const Navbar = () => {
  const { isLoggedIN } = useAuth();
  return (
    <>
      <header>
        <div className="container">
          <Fade right>
            <div className="logo-brand">
              <NavLink to="/">Logo</NavLink>
            </div>
          </Fade>
          <nav>
            <Fade left>
              <ul>
                <li>
                  {" "}
                  <NavLink to="/">Home </NavLink>{" "}
                </li>
                <li>
                  {" "}
                  <NavLink to="/about"> About</NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/contact"> Contact</NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/service"> Service</NavLink>
                </li>
                {isLoggedIN ? (
                  <li>
                    {" "}
                    <NavLink to="/logout"> Logout</NavLink>
                  </li>
                ) : (
                  <>
                    <li>
                      {" "}
                      <NavLink to="/register">Register </NavLink>
                    </li>
                    <li>
                      {" "}
                      <NavLink to="/login">Login </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </Fade>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
