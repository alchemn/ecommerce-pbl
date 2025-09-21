import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";
import UserActions from "./UserActions";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 px-10 py-4 shadow-sm bg-brand-light sticky top-0 z-20">
      <div className="flex items-center gap-10">
        <Link to="/" className="flex items-center gap-3 text-brand-primary">
          <svg
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
              fill="currentColor"
            ></path>
          </svg>
          <h2 className="text-brand-secondary text-2xl font-bold leading-tight tracking-tighter">
            PumaApp
          </h2>
        </Link>
        <NavLinks />
      </div>
      <div className="flex flex-1 justify-end items-center gap-4">
        <SearchBar />
        <UserActions />
      </div>
    </header>
  );
};

export default Navbar;
