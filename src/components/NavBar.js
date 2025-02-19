// src/components/NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHome } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

const NavBar = ({ cartCount }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Shopping<span className="text-orange">Karo</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <FontAwesomeIcon icon={faHome} /> {/* Home icon */}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} /> {/* Cart icon */}
                {cartCount > 0 && (
                  <span className="badge rounded-pill bg-warning text-dark ms-1">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
