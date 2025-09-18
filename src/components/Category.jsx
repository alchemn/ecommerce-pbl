import React from "react";

const Category = ({name, image}) => {
  return (
    <div>
      <a
        className="group flex flex-col items-center gap-3 p-2 rounded-xl hover:bg-gray-100 transition-colors"
        href="#"
      >
        <img
          className="w-24 h-24 bg-center bg-no-repeat aspect-square bg-cover rounded-full shadow-sm"
          src={image}
        ></img>
        <p className="text-gray-800 text-sm font-semibold leading-normal group-hover:text-primary transition-colors">
          {name}
        </p>
      </a>
    </div>
  );
};

export default Category;
