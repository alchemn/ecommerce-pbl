import React from "react";
import { Link } from "react-router-dom";

const Category = ({name, image, id}) => {
  return (
    <div>
      <Link to={`/category/${id}`} className="group flex flex-col items-center gap-3 p-2 rounded-xl hover:bg-gray-100 transition-colors">
      <img
          className="w-24 h-24 aspect-square bg-cover rounded-full shadow-sm "
          src={image}
        ></img>
        <p className="text-gray-800 text-sm font-semibold leading-normal group-hover:text-primary transition-colors">
          {name}
        </p>
      </Link>
    </div>
  );
};  

export default Category;
