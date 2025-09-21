import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';
import Pagination from '../components/Pagination';
import { getProductByCategory } from '../api';
import LoadingSpinner from '../components/LoadingSpinner';

const ProductCategory = () => {
  const { id } = useParams(); // Get category ID from URL
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await getProductByCategory(id);
        // API returns category object with a products array
        setProducts(res.data.category.products || []);
        setCategoryName(res.data.category.name || 'Category');
        setError(null);
      } catch (err) {
        setError('Failed to fetch products. Please try again later.');
        console.error("Error fetching products by category:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]); // Refetch if category ID changes

  const handleDelete = (productId) => {
    // This is a placeholder function
    if (window.confirm('(Design Mode) Are you sure you want to delete this product?')) {
      console.log(`Attempting to delete product with ID: ${productId}`);
      alert(`Product ${productId} would be deleted here.`);
    }
  };

  const renderContent = () => {
    if (loading) {
      return <div className="flex justify-center items-center h-64"><LoadingSpinner /></div>;
    }

    if (error) {
      return <p className="text-center text-red-500">{error}</p>;
    }

    return (
      <>
        <ProductGrid products={products} handleDelete={handleDelete} />
        {products.length > 0 && <Pagination />}
      </>
    );
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-gray-50 overflow-x-hidden font-inter">
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-gray-900 text-3xl font-bold tracking-tight">{loading ? 'Loading...' : categoryName}</h1>
            <p className="text-gray-500 text-sm mt-1">
              {loading ? '' : `Showing ${products.length} results`}
            </p>
          </div>
          {renderContent()}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ProductCategory;
