import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarSolid } from "@heroicons/react/16/solid";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

const CardBig = ({ name, price, owner }) => {
  return (
    <>
      <Link to={'/product-list-id'}>
        <div className="group flex flex-col bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
          <div className="relative">
            <div
              className="w-full h-56 bg-center bg-cover"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCEBWLbmPrRLCTMXKEDIJxaaiKjjnP90FR2Vdi5WlxsPZ974nPPKOXYT3GVK-0MJdSUQlqKOYBliFnMGuivPXSA5Cs293I4rLq4i6WdosI5JAelrs2Y1OAZaoOGCQXs5SmVIMSPPVG3USREVSVAo15HtSQMemYpwheKtaeSUQs9uvTgs-NjIHYSaZOMp5XKlMVJhzfIjRa_jL1S3sxlJ1zD-1DYlda5K4EAiTVMrSKXQcI7Kf1VZKekl5LqOKsy0Qn21LpCK3F7GlsB")',
              }}
            ></div>
            <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 cursor-pointer">
              <HeartIcon width={30} />
            </div>
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <p className="text-sm text-gray-500">By {owner}</p>
            <h3 className="text-base font-semibold text-gray-800 mt-1 flex-grow">
              {name}
            </h3>
            <div className="flex items-center mt-2">
              <span className="text-amber-400">
                <StarSolid width={20} />
              </span>
              <span className="text-amber-400">
                <StarSolid width={20} />
              </span>
              <span className="text-amber-400">
                <StarSolid width={20} />
              </span>
              <span className="text-amber-400">
                <StarSolid width={20} />
              </span>
              <span className="text-gray-300">
                <StarOutline width={20} />
              </span>
              <span className="text-xs text-gray-500 ml-1.5">(88)</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-bold text-gray-900">{price}</p>
              <button className="bg-indigo-50 text-indigo-600 hover:bg-indigo-100 rounded-lg px-3 py-1.5 text-sm font-semibold transition">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardBig;
