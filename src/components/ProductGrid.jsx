import React from 'react';
import useSWR from 'swr';
import { getAllProducts } from '../api';
import CardBig from './CardBig';

const fetcher = () => getAllProducts().then((res) => res.data);

const ProductGrid = () => {
  const { data, error, isLoading } = useSWR('allProducts', fetcher);

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
            <CardBig
              id={product.id}
              key={index}
              name={product.name || 'No Name'}
              price={product.price || 'Rp0'}
              owner={product.owner || 'Unknown'}
              image={`${import.meta.env.VITE_API_URL}${product.image}`}
            />
          ))
        ) : (
          <p className="col-span-full text-center">No products found.</p>
        )}
      </div>
    </>
  );
};

export default ProductGrid;
