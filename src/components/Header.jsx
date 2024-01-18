import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";

function Header() {
  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "")}
        to="/host"
      >
        Host
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "")}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "")}
        to="/vans"
      >
        Vans
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "")}
        to="/login"
      >
        <FaUser />
      </NavLink>
    </header>
  );
}

export default Header;
