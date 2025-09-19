import React from 'react';
import useSWR from 'swr';
import { getAllProducts, deleteProduct } from '../api';
import CardBig from './CardBig';
import { Link } from 'react-router-dom';
import Button from './Button';

const fetcher = () => getAllProducts().then((res) => res.data);

const ProductGrid = () => {
  const { data, error, isLoading, mutate } = useSWR('allProducts', fetcher);
  const user = JSON.parse(localStorage.getItem('user')); // Get user from localStorage

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

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
        <div className="flex-1">
          <h1 className="text-gray-900 text-3xl font-bold tracking-tight">All Products</h1>
          <p className="text-gray-500 text-sm mt-1">
            {isLoading ? 'Loading...' : `Showing ${data?.products?.length || data?.length || 0} results`}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {isLoading ? (
          <p className="col-span-full text-center">Loading products...</p>
        ) : data && (data.product || data).length > 0 ? (
          (data.product || data).map((product, index) => (
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
