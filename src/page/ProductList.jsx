import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductFilters from "../components/ProductFilters";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/Pagination";

const ProductList = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-gray-50 overflow-x-hidden font-inter">
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex gap-8">
            <ProductFilters />
            <div className="flex-1">
              <ProductGrid />
              <Pagination />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ProductList;
