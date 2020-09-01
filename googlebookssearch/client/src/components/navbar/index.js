import React from "./node_modules/react";
import { Link } from "./node_modules/react-router-dom";
import "./style.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <h1>Google Books Search and Save</h1>
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/"
            className={
              window.location.pathname === "/" || window.location.pathname === "search"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Search Google Books
              </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/saved"
            className={
              window.location.pathname === "/saved" || window.location.pathname === "search"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Saved Books
              </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;