import React from 'react';

const ProductImage = ({ image, name }) => (
  <div className="flex flex-col gap-4">
    <div className="w-full h-[500px] bg-white rounded-lg shadow-sm overflow-hidden">
      <img
        src={image?.startsWith('http') ? image : `http://172.16.10.24:9009${image}`}
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>
  </div>
);

export default ProductImage;
