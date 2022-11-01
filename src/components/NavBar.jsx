import React from "react";
import { Link } from "react-router-dom";
import "./../App.css";
import logo from "./../assets/chromagifheader.gif";

function NavBar() {
  return (
    <div className="nav">
      <a href="https://chroma64.com/" className="cafe-logo">
        <img className="logo" src={logo} />
      </a>
      <Link to="/cafe" className="cafe-nav">
        Cafe
      </Link>
    </div>
  );
}

export default NavBar;
