import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <h1>Kalvium❤️</h1>
      </Link>
      <div>
        <Link to="/contacts">Contacts</Link>
        <Link to="/form">Registration form</Link>
      </div>
    </div>
  );
};

export default Navbar;
