import React from 'react';

const ProductImage = ({ image, name }) => (
  <div className="flex flex-col gap-4">
    <div className="w-full h-[500px] bg-white rounded-lg shadow-sm overflow-hidden">
      <img
        src={image?.startsWith('http') ? image : `${import.meta.env.VITE_API_URL}/${image}`}
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>
  </div>
);

export default ProductImage;
