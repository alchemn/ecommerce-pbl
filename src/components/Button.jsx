import React from "react";

const Button = ({ children, onClick, type = "button", disabled = false, className = "", ...props }) => {
  const baseClasses = "flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 text-white text-base font-bold leading-normal tracking-wide shadow-md transition-all focus:outline-none focus:ring-4";
  
  const typeClasses = disabled 
    ? "bg-gray-400 cursor-not-allowed" 
    : "bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-300";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${typeClasses} ${className}`}
      disabled={disabled}
      {...props}
    >
      <span className="truncate">{children}</span>
    </button>
  );
};

export default Button;
