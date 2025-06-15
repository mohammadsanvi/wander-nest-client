import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, label, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `transition duration-200 ${
          isActive
            ? "text-blue-600 dark:text-blue-400"
            : "hover:text-blue-600 dark:hover:text-blue-400"
        }`
      }
    >
      {label}
    </NavLink>
  );
};

export default NavItem;
