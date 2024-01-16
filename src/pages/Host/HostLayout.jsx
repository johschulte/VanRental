import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const HostLayout = () => {
  return (
    <div>
      <nav className="host-nav">
        <NavLink
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              textDecoration: isActive ? "underline" : "",
            };
          }}
          to="."
          end
        >
          Dashboard
        </NavLink>

        <NavLink
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              textDecoration: isActive ? "underline" : "",
            };
          }}
          to="income"
        >
          Income
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              textDecoration: isActive ? "underline" : "",
            };
          }}
          to="vans"
        >
          Vans
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              textDecoration: isActive ? "underline" : "",
            };
          }}
          to="reviews"
        >
          Review
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HostLayout;
