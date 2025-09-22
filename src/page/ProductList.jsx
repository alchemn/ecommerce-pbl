import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductFilters from "../components/ProductFilters";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/Pagination";
import { getAllProducts, deleteProduct } from "../api";
import SortDropdown from "../components/SortDropdown";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortBy, setSortBy] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

  const fetchProducts = async (page, search) => {
    try {
      const res = await getAllProducts(page, search);
      const { product, totalPages, currentPage, totalProducts } = res.data;
      setProducts(product || []);
      setFilteredProducts(product || []);
      setTotalPages(totalPages || 1);
      setCurrentPage(currentPage || 1);
      setTotalProducts(totalProducts || 0);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage, searchQuery);
  }, [currentPage, searchQuery]);

  useEffect(() => {
    let newFilteredProducts = [...products];
    if (selectedCategory) {
      newFilteredProducts = newFilteredProducts.filter((p) =>
        p.categoryId === selectedCategory
      );
    }
    setFilteredProducts(newFilteredProducts);
  }, [selectedCategory, products]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteProduct(id);
        fetchProducts(currentPage, searchQuery); // Re-fetch the data after deletion
      } catch (error) {
        console.error('Failed to delete product:', error);
      }
    }
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  // Sorting logic
  let sortedProducts = [...filteredProducts];
  if (sortBy === 'name-asc') {
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'name-desc') {
    sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortBy === 'price-asc') {
    sortedProducts.sort((a, b) => (a.price || 0) - (b.price || 0));
  } else if (sortBy === 'price-desc') {
    sortedProducts.sort((a, b) => (b.price || 0) - (a.price || 0));
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-gray-50 font-inter">
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex gap-8">
            <ProductFilters 
              selectedCategory={selectedCategory}
              onCategorySelect={handleCategoryChange}
            />
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                <div className="flex-1">
                  <h1 className="text-gray-900 text-3xl font-bold tracking-tight">All Products</h1>
                  <p className="text-gray-500 text-sm mt-1">
                    {`Showing ${totalProducts || 0} results`}
                  </p>
                </div>
                <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
              </div>
              <ProductGrid products={sortedProducts} handleDelete={handleDelete} />
              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                paginate={paginate}
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ProductList;
