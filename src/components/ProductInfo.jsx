import React from "react";
import Spinner from "./Spinner";

const ProductInfo = ({ product, isBuying, handleBuyNow, error }) => (
  <div className="flex flex-col justify-between h-[540px]">
    <div>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">{product.name}</h1>

      <div className="mb-6">
        <span className="text-3xl font-bold text-slate-800">
          Rp{product.price?.toLocaleString()}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1">
            Size
          </label>
          <select className="w-full border rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800">
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1">
            Color
          </label>
          <select className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800">
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
            <option value="Blue">Red</option>
          </select>
        </div>
      </div>

      <p className="text-sm text-gray-600 font-medium mb-6 whitespace-pre-line max-h-[300px] overflow-y-auto pr-2">
        Deskripsi: <br /> {product.description}
      </p>
    </div>

    <div className="pt-4">
      <button
        onClick={handleBuyNow}
        disabled={isBuying}
        className={`w-full rounded-lg h-12 px-6 text-white font-bold transition-all flex items-center justify-center ${
          isBuying
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-gray-800 hover:bg-gray-900"
        }`}
      >
        {isBuying ? <Spinner /> : "Buy Now"}
      </button>

      {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
    </div>
  </div>
);

export default ProductInfo;
