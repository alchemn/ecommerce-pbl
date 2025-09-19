import React from "react";
import Spinner from "./Spinner";

const ProductInfo = ({ product, isBuying, handleBuyNow, error }) => (
  <div className="flex flex-col justify-between">
    <div>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">{product.name}</h1>

      <div className="mb-6">
        <span className="text-3xl font-bold text-slate-800">
          Rp{product.price?.toLocaleString()}
        </span>
      </div>

      <p className="text-sm text-green-600 font-medium mb-6">
        Deskripsi: <br /> {product.description}
      </p>
    </div>

    <div className="">
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
