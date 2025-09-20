import React, { useState } from 'react';
import useSWR from 'swr';
import { getAllProducts, deleteProduct } from '../api';
import CardBig from './CardBig';
import { Link } from 'react-router-dom';
import Button from './Button';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const fetcher = () => getAllProducts().then((res) => res.data);

const ProductGrid = () => {
  const { data, error, isLoading, mutate } = useSWR('allProducts', fetcher);
  const user = JSON.parse(localStorage.getItem('user')); // Get user from localStorage

  // State untuk sorting
  const [sortBy, setSortBy] = useState('default');

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteProduct(id);
        mutate(); // Re-fetch the data after deletion
      } catch (error) {
        console.error('Failed to delete product:', error);
      }
    }
  };

  if (error) {
    return <div className="col-span-full text-center text-red-500">Failed to load products</div>;
  }

  // ambil data produk
  let products = data ? (data.product || data) : [];

  // Sorting logic
  if (sortBy === 'name-asc') {
    products = [...products].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'name-desc') {
    products = [...products].sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortBy === 'price-asc') {
    products = [...products].sort((a, b) => (a.price || 0) - (b.price || 0));
  } else if (sortBy === 'price-desc') {
    products = [...products].sort((a, b) => (b.price || 0) - (a.price || 0));
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
        <div className="flex-1">
          <h1 className="text-gray-900 text-3xl font-bold tracking-tight">All Products</h1>
          <p className="text-gray-500 text-sm mt-1">
            {isLoading ? 'Loading...' : `Showing ${products?.length || 0} results`}
          </p>
        </div>

        {/* Dropdown Sort */}
        <div className='relative'>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="block w-full appearance-none border border-gray-300 rounded-md px-3 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="default">Sort By</option>
            <option value="name-asc">Name A-Z</option>
            <option value="name-desc">Name Z-A</option>
            <option value="price-asc">Price Low to High</option>
            <option value="price-desc">Price High to Low</option>
          </select>
          
          <div>
          <ChevronDownIcon width={35} className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 pt-2'/>

          </div>
          
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {isLoading ? (
          <p className="col-span-full text-center">Loading products...</p>
        ) : products.length > 0 ? (
          products.map((product, index) => (
            <div key={index} className="flex flex-col">
              <CardBig
                id={product.id}
                name={product.name || 'No Name'}
                price={product.price || 'Rp0'}
                owner={product.owner || 'Unknown'}
                image={`${import.meta.env.VITE_API_URL}${product.image}`}
              />
              {user && user.id === product.userId && (
                <div className="flex justify-around mt-2">
                  <Link to={`/edit-product/${product.id}`}>
                    <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Edit
                    </Button>
                  </Link>
                  <Button
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </Button>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="col-span-full text-center">No products found.</p>
        )}
      </div>
    </>
  );
};

export default ProductGrid;
