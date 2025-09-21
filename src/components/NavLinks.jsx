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
            ? "text-brand-primary font-semibold" // kalau aktif
            : "text-gray-600 hover:text-brand-secondary transition-colors" // default
        }
      >
        {link.label}
      </NavLink>
    ))}
  </div>
);

export default NavLinks;
