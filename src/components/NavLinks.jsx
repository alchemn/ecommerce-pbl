import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { path: "/", label: "Home" },
  { path: "/product-list", label: "Shop" },
  { path: "/about", label: "About" },
];

const NavLinks = () => (
  <div className="flex items-center gap-6 text-sm font-medium">
    {links.map((link) => (
      <NavLink
        key={link.path}
        to={link.path}
        className={({ isActive }) =>
          isActive
            ? "text-indigo-600 font-semibold" // kalau aktif
            : "text-gray-600 hover:text-indigo-400 transition-colors" // default
        }
      >
        {link.label}
      </NavLink>
    ))}
  </div>
);

export default NavLinks;
