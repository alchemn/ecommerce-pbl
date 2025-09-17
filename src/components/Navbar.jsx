import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
        <Link to={"/"} className="hover:text-primary transition-colors">
          Home
        </Link>
        <Link
          to={"/product-list"}
          className="hover:text-primary transition-colors"
        >
          Shop
        </Link>
        <a className="hover:text-primary transition-colors" href="#">
          Flash Deals
        </a>
        <a className="hover:text-primary transition-colors" href="#">
          Trending
        </a>
      </div>
    </>
  );
};

export default Navbar;
