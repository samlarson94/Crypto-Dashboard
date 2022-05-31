import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import signinBtn from "../js/signinBtn";
import loginBtn from "../js/loginBtn";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <div className="button nav__button">
                <a
                  href="/"
                  className="nav__button"
                  onClick={() => Auth.logout()}
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <div className="button nav__button">
                <Link to="/signup" className="nav__button">
                  Signup
                </Link>
              </div>
              <div className="button nav__button">
                <Link to="/login" className="nav__button">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default Nav;