import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top" id="my-navbar">
      <div className="container d-flex justify-content-center align-items-center">
        <Link className="navbar-brand" to="/">
          FOSILMU.
        </Link>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-lg-auto  mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/test">
                Link
              </Link>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
