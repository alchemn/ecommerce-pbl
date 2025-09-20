import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductFilters from "../components/ProductFilters";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/Pagination";
import { getAllProducts, deleteProduct } from "../api";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const fetchProducts = async () => {
    try {
      const res = await getAllProducts();
      const productData = res.data.product || [];
      setProducts(productData);
      setFilteredProducts(productData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    let newFilteredProducts = [...products];
    if (selectedCategory) {
      newFilteredProducts = newFilteredProducts.filter((p) =>
        p.category && p.category.name === selectedCategory
      );
    }
    setFilteredProducts(newFilteredProducts);
  }, [selectedCategory, products]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteProduct(id);
        fetchProducts(); // Re-fetch the data after deletion
      } catch (error) {
        console.error('Failed to delete product:', error);
      }
    }
  };

  const handleCategoryChange = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-gray-50 overflow-x-hidden font-inter">
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex gap-8">
            <ProductFilters 
              selectedCategory={selectedCategory}
              onCategorySelect={handleCategoryChange}
            />
            <div className="flex-1">
              <ProductGrid products={filteredProducts} handleDelete={handleDelete} />
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
