import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardBig from "../components/CardBig";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

const ProductList = () => {
  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-gray-50 group/design-root overflow-x-hidden font-inter"
      style={{
        "--radio-dot-svg":
          'url("data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27%234F46E5%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e")',
        "--select-button-svg":
          'url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27rgb(101,99,136)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z%27%3e%3c/path%3e%3c/svg%3e")',
      }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex gap-8">
            <aside className="w-80 hidden lg:block bg-white p-6 rounded-2xl shadow-sm self-start sticky top-8">
              <h2 className="text-gray-900 text-lg font-bold leading-tight tracking-tight">
                Filters
              </h2>
              <div className="mt-6 space-y-8">
                <div>
                  <h3 className="text-gray-800 text-base font-medium leading-normal mb-4">
                    Price Range
                  </h3>
                  <div className="relative pt-1">
                    <div className="h-1.5 rounded-full bg-gray-200">
                      <div
                        className="absolute h-1.5 rounded-full bg-indigo-500"
                        style={{ width: "75%", left: "10%" }}
                      ></div>
                    </div>
                    <div className="absolute -top-1.5" style={{ left: "10%" }}>
                      <div className="w-4 h-4 bg-indigo-500 rounded-full border-2 border-white shadow"></div>
                      <span className="text-xs text-gray-500 mt-2 absolute -left-1.5">
                        $50
                      </span>
                    </div>
                    <div className="absolute -top-1.5" style={{ left: "85%" }}>
                      <div className="w-4 h-4 bg-indigo-500 rounded-full border-2 border-white shadow"></div>
                      <span className="text-xs text-gray-500 mt-2 absolute -left-2.5">
                        $350
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-gray-800 text-base font-medium leading-normal mb-4">
                    Rating
                  </h3>
                  <div className="flex flex-col gap-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        checked=""
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        name="rating"
                        type="radio"
                      />
                      <span className="text-gray-700 text-sm">
                        4 Stars & Up
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        name="rating"
                        type="radio"
                      />
                      <span className="text-gray-700 text-sm">
                        3 Stars & Up
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        name="rating"
                        type="radio"
                      />
                      <span className="text-gray-700 text-sm">
                        2 Stars & Up
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        name="rating"
                        type="radio"
                      />
                      <span className="text-gray-700 text-sm">1 Star & Up</span>
                    </label>
                  </div>
                </div>
                <div>
                  <h3 className="text-gray-800 text-base font-medium leading-normal mb-4">
                    Brand
                  </h3>
                  <select className="form-select w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-sm text-gray-700">
                    <option>All Brands</option>
                    <option>AudioTech</option>
                    <option>ErgoSolutions</option>
                    <option>FitTrack</option>
                  </select>
                </div>
                <div>
                  <h3 className="text-gray-800 text-base font-medium leading-normal mb-4">
                    Availability
                  </h3>
                  <div className="flex flex-col gap-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        checked=""
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        name="availability"
                        type="radio"
                      />
                      <span className="text-gray-700 text-sm">In Stock</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        name="availability"
                        type="radio"
                      />
                      <span className="text-gray-700 text-sm">
                        Out of Stock
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </aside>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                <div className="flex-1">
                  <h1 className="text-gray-900 text-3xl font-bold tracking-tight">
                    All Products
                  </h1>
                  <p className="text-gray-500 text-sm mt-1">
                    Showing 1-12 of 48 results
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <CardBig name={"Headset"} price={"Rp30.000"} owner={"Hoco"} />
                <CardBig name={"Headset"} price={"Rp30.000"} owner={"Hoco"} />
                <CardBig name={"Headset"} price={"Rp30.000"} owner={"Hoco"} />
                <CardBig name={"Headset"} price={"Rp30.000"} owner={"Hoco"} />
                <CardBig name={"Headset"} price={"Rp30.000"} owner={"Hoco"} />
                <CardBig name={"Headset"} price={"Rp30.000"} owner={"Hoco"} />
                <CardBig name={"Headset"} price={"Rp30.000"} owner={"Hoco"} />
                <CardBig name={"Headset"} price={"Rp30.000"} owner={"Hoco"} />
              </div>
              <div className="flex items-center justify-center mt-8">
                <nav className="flex items-center space-x-1">
                  <a
                    className="p-2 rounded-md hover:bg-gray-100 text-gray-400"
                    href="#"
                  >
                    <ChevronLeftIcon width={30} />
                  </a>
                  <a
                    className="px-4 py-2 rounded-lg bg-indigo-500 text-white font-medium text-sm"
                    href="#"
                  >
                    1
                  </a>
                  <a
                    className="px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-600 font-medium text-sm"
                    href="#"
                  >
                    2
                  </a>
                  <a
                    className="px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-600 font-medium text-sm"
                    href="#"
                  >
                    3
                  </a>
                  <span className="px-4 py-2 text-gray-500 text-sm">...</span>
                  <a
                    className="px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-600 font-medium text-sm"
                    href="#"
                  >
                    8
                  </a>
                  <a
                    className="p-2 rounded-md hover:bg-gray-100 text-gray-400"
                    href="#"
                  >
                    <ChevronRightIcon width={30} />
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ProductList;
