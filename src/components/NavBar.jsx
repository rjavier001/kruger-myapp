import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="header-container">
      {/* <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a> */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">Home</NavLink>
      <NavLink to="/contact">Home</NavLink>
    </div>
  );
};

export default NavBar;
