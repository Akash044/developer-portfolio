import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex w-50 me-auto">
          <h5>Akash's Portfolio</h5>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsingNavbar3"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
          <ul className="nav navbar-nav ms-auto w-100 justify-content-end">
            <li className="nav-item li">
              <Link to="/" className="nav-link">
                <h5>Home</h5>
              </Link>
            </li>
            <li className="nav-item li">
              <Link to="/projects" className="nav-link">
                <h5>Projects</h5>
              </Link>
            </li>
            <li className="nav-item li">
              <Link to="/blogs" className="nav-link">
                <h5>Blogs</h5>
              </Link>
            </li>
            <li className="nav-item li">
              <Link to="/resume" className="nav-link">
                <h5>Resume</h5>
              </Link>
            </li>

            <li className="nav-item li">
              <Link to="/contact" className="nav-link">
                <h5>Contact</h5>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
