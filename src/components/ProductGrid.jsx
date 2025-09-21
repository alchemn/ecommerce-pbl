import React, { useState } from 'react';
import CardBig from './CardBig';
import { Link } from 'react-router-dom';
import Button from './Button';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { getUser } from '../utils/auth';

const ProductGrid = ({ products, handleDelete }) => {
  const user = getUser(); // Get user from the utility

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div key={index} className="flex flex-col">
              <CardBig
                id={product.id}
                name={product.name || 'No Name'}
                price={product.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              }) || 'Rp0'}
                owner={product.owner || 'Unknown'}
                image={`${import.meta.env.VITE_API_URL}${product.image}`}
              />
              {user && (user.role === 'ADMIN' || user.id === product.userId) && (
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
