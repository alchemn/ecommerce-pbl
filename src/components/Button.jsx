import React from "react";

const Button = ({name}) => {
  return (
    <>
      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-indigo-500 text-white text-base font-bold leading-normal tracking-wide shadow-md hover:bg-indigo-700 transition-all focus:ring-4 focus:ring-indigo-300">
        <span className="truncate">{name}</span>
      </button>
    </>
  );
};

export default Button;
