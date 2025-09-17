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
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 bg-white px-10 py-4 shadow-sm">
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
            <Navbar />
          </div>
          <div className="flex flex-1 justify-end gap-4">
            <label className="hidden lg:flex flex-col min-w-40 !h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full shadow-sm">
                <div
                  className="text-gray-400 flex border-none bg-white items-center justify-center pl-3 rounded-l-lg border-r-0"
                  data-icon="MagnifyingGlass"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    fill="currentColor"
                    height="20px"
                    viewBox="0 0 256 256"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                  </svg>
                </div>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 focus:outline-0 focus:ring-2 focus:ring-indigo-500/50 border-gray-300 bg-white focus:border-indigo-500 h-full placeholder:text-gray-400 px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal"
                  placeholder="Search products..."
                  value=""
                />
              </div>
            </label>
            <div className="flex gap-2">
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-sm">
                <div
                  className="text-gray-700"
                  data-icon="Heart"
                  data-size="20px"
                  data-weight="regular"
                >
                  <svg
                    fill="currentColor"
                    height="20px"
                    viewBox="0 0 256 256"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"></path>
                  </svg>
                </div>
              </button>
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-sm">
                <div
                  className="text-gray-700"
                  data-icon="ShoppingCart"
                  data-size="20px"
                  data-weight="regular"
                >
                  <svg
                    fill="currentColor"
                    height="20px"
                    viewBox="0 0 256 256"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path>
                  </svg>
                </div>
              </button>
            </div>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9YV-a8y06JDVSFtIO_aGvbZtXfQsfahka2VHbFHMBGsrkFCP-KfT6p2hnHHEQd1w-PFn-_XklhsWVXfxu3CuqAmqIWbQvCQBgWx8S11O6ShwaSj-UbUd9ernONdDh2CSnp8Qrp-jhd3pHLFPDrWVhLFqza9Ywfd3tTVh2tuc3G5ZyXqxQ-d7ChQNqbfz69TV9D10JfORF4mnQQiAa-qdz-nRShrCN5s6-drY9WstqZxrS70qMbZNGUBALwrWEYG1_-N6-cG9rqlZk")',
              }}
            ></div>
          </div>
        </header>

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
