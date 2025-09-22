import React from "react";
import { Link } from "react-router-dom";

const Card = ({name, price,image, id}) => {
  return (
    <>
     <Link to={`/product/${id}`}>
                  <div className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:ring-2 hover:ring-indigo-500">
        <img
          className="w-full h-56 bg-center bg-cover object-contain"
          src={image}
        ></img>
        <div className="p-4 space-y-2">
          <h3 className="text-gray-800 text-lg font-semibold truncate group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-lg font-bold text-gray-900">{price}</p>
        </div>
      </div>
      </Link>
    </>
  );
};

export default Card;
