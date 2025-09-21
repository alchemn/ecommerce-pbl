import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";
import UserActions from "./UserActions";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="rounded-2xl border border-white/20 bg-white/50 backdrop-blur-xl shadow-lg flex items-center justify-between whitespace-nowrap px-10 py-4 mx-4 mt-4 z-20">
      <div className="flex items-center gap-10">
        <Link to="/" className="flex items-center gap-3 text-indigo-600">
          <svg
            className="h-6 w-6 md:h-8 md:w-8"
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
              fill="currentColor"
            ></path>
          </svg>
          <h2 className="text-gray-900 text-2xl font-bold leading-tight tracking-tighter">
            ShopSmart
          </h2>
        </Link>
        <div className="hidden md:flex">
          <NavLinks />
        </div>
        <button
          className="md:hidden text-gray-900 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="hidden md:flex flex-1 justify-end items-center gap-2 md:gap-4">
        <SearchBar />
        <UserActions />
      </div>
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 rounded-b-2xl bg-white/50 backdrop-blur-xl shadow-lg md:hidden">
          <NavLinks />
          <div className="p-4">
            <SearchBar />
            <UserActions />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
