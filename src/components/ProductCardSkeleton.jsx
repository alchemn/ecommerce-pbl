import React from 'react';

const ProductCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="w-full h-48 bg-gray-300"></div> {/* Image placeholder */}
      <div className="p-4">
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div> {/* Name placeholder */}
        <div className="h-4 bg-gray-300 rounded w-1/2"></div> {/* Price placeholder */}
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
