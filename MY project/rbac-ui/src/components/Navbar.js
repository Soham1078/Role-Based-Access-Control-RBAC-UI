import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isLoggedIn, handleLogout }) => {
  return (
    <div className="navbar">
      <Link to="/" className="nav-button">Dashboard</Link>
      {isLoggedIn && <Link to="/users" className="nav-button">Users</Link>}
      {isLoggedIn && <Link to="/roles" className="nav-button">Roles</Link>}
      {isLoggedIn ? (
        <button onClick={handleLogout} className="nav-button">Logout</button>
      ) : (
        <Link to="/" className="nav-button">Login</Link>
      )}
    </div>
  );
};

export default Navbar;
