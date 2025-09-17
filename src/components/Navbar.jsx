import React from "react";
import { Link } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/16/solid";
import { ShoppingCartIcon, TruckIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 px-10 py-4 shadow-sm bg-white sticky top-0 z-20">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3 text-indigo-600">
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
            <h2 className="text-gray-900 text-2xl font-bold leading-tight tracking-tighter">
              ShopSmart
            </h2>
          </div>
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
        </div>
        <div className="flex flex-1 justify-end items-center gap-4">
          <label className="relative w-full max-w-sm">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <PlusIcon className="material-symbols-outlined">search</PlusIcon>
            </div>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full text-gray-900 focus:outline-0 focus:ring-2 focus:ring-primary border-gray-300 bg-gray-100 h-10 placeholder:text-gray-500 pl-10 pr-4 text-sm font-normal leading-normal"
              placeholder="Search products..."
              value=""
            />
          </label>
          <div className="flex items-center gap-2">
            <Link to={'/cart'}>
              <button className="relative flex items-center justify-center rounded-full h-10 w-10 bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors">
                <ShoppingCartIcon height={30} />
              </button>
            </Link>
          </div>
          <Link to={'/profile'}><div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-white shadow-md"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCw3V3bTW44AIt9FPFYPko5OcqtassR0Aze-I8siYiuFUHFfMoHGTMV14-ze9da8ri3ccb9_ntXYMBUgSwNrzshORW0VuFISpZ5exAaxrdlSxAV0vZrFuAyjxCAEHIzjxRKg_ySno6gKsx7-CxXI5_7vV09h9aBEw9XFm1nxvBh3WxN8iSnNvVG85XCpAVnfM3VEbtkDJXo6L6kzdpvv0FJZGGagbqx2hf18B29NdyruBuf8VAaqBHGmhotH6aLoLOJ5F4Vlj-arlPY")',
            }}
          ></div></Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
