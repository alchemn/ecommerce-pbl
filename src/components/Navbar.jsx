import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";
import UserActions from "./UserActions";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 rounded-2xl border border-white/20 bg-white/50 backdrop-blur-3xl shadow-lg flex items-center justify-between whitespace-nowrap px-10 py-4 mx-4 mt-4 z-50">
      <div className="flex items-center gap-10">
        <Link to="/" className="flex items-center gap-3 text-indigo-600">
         <div className="h-10 w-20 overflow-visible flex items-center">
          {/* keep container height fixed but scale the image visually */}
          <img
            src="/logo.png"
            alt=""
            className="w-[80px] h-auto object-contain transform scale-125 origin-left"
          />
         </div>
          <h2 className="text-gray-900 text-2xl font-bold leading-tight tracking-tighter">
            PumaShop
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

