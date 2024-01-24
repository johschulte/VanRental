import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";

function Header({ loggedIn, setLoggedIn }) {
  function fakeLogOut() {
    localStorage.removeItem("loggedin");
    setLoggedIn(false);
  }
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
      {loggedIn && <button onClick={fakeLogOut}>X</button>}
    </header>
  );
}

export default Header;
