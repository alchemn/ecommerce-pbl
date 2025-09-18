import React from 'react';

const Promo = ({ bgColor, icon, title, description, buttonText, buttonBgColor, buttonHoverColor, buttonRingColor }) => (
  <div className={`${bgColor} rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-4`}>
    {icon}
    <h3 className="text-gray-900 text-2xl font-bold tracking-tight">{title}</h3>
    <p className="text-gray-600">{description}</p>
    <button
      className={`mt-2 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-11 px-6 ${buttonBgColor} text-white text-base font-bold leading-normal tracking-wide shadow-md ${buttonHoverColor} transition-all focus:ring-4 ${buttonRingColor}`}>
      <span className="truncate">{buttonText}</span>
    </button>
  </div>
);

export default Promo;
