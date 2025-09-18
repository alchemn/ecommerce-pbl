import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardBig from "../components/CardBig";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import useSWR from "swr";
import axios from "axios";

// fetcher pakai axios
const fetcher = (url) => axios.get(url).then((res) => res.data);

const ProductList = () => {
  const { data, error, isLoading } = useSWR("http://172.16.10.24:9009/product", fetcher);
  const BASE_URL = "http://172.16.10.24:9009";

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        Failed to load products
      </div>
    );
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-gray-50 overflow-x-hidden font-inter">
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex gap-8">
            {/* Sidebar Filters */}
            <aside className="w-80 hidden lg:block bg-white p-6 rounded-2xl shadow-sm self-start sticky top-8">
              <h2 className="text-gray-900 text-lg font-bold">Filters</h2>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                <div className="flex-1">
                  <h1 className="text-gray-900 text-3xl font-bold tracking-tight">
                    All Products
                  </h1>
                  <p className="text-gray-500 text-sm mt-1">
                    {isLoading
                      ? "Loading..."
                      : `Showing ${data?.products?.length || data?.length || 0} results`}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {isLoading ? (
                  <p className="col-span-full text-center">Loading products...</p>
                ) : data && (data.product || data).length > 0 ? (
                  (data.product || data).map((product, index) => (
                    
                    <CardBig 
                      id={product.id}
                      key={index}
                      name={product.name || "No Name"}
                      price={product.price || "Rp0"}
                      owner={product.owner || "Unknown"}
                      image={`${BASE_URL}${product.image}`}
                    />
                  ))
                ) : (
                  <p className="col-span-full text-center">No products found.</p>
                )}
              </div>

              {/* Pagination (dummy) */}
              <div className="flex items-center justify-center mt-8">
                <nav className="flex items-center space-x-1">
                  <a className="p-2 rounded-md hover:bg-gray-100 text-gray-400" href="#">
                    <ChevronLeftIcon width={30} />
                  </a>
                  <a className="px-4 py-2 rounded-lg bg-indigo-500 text-white font-medium text-sm" href="#">
                    1
                  </a>
                  <a className="px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-600 font-medium text-sm" href="#">
                    2
                  </a>
                  <a className="px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-600 font-medium text-sm" href="#">
                    3
                  </a>
                  <span className="px-4 py-2 text-gray-500 text-sm">...</span>
                  <a className="px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-600 font-medium text-sm" href="#">
                    8
                  </a>
                  <a className="p-2 rounded-md hover:bg-gray-100 text-gray-400" href="#">
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
