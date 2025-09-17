import React from "react";

const Category = ({name}) => {
  return (
    <div>
      <a
        className="group flex flex-col items-center gap-3 p-2 rounded-xl hover:bg-gray-100 transition-colors"
        href="#"
      >
        <div
          className="w-24 h-24 bg-center bg-no-repeat aspect-square bg-cover rounded-full shadow-sm"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBKdid5p9QjfQzwZcuLH3SSCr1dT6Y7mysm-w0Ey23o58i3pcDWhkFtIXVw-KqqDNiCG6ORzPF7ztmfcgoNbVMQRhmJ7WTTQFY4VdtR_nWK3cSWP7KcIzktSLZCwe0Q0LSu1u-kDO96ssR-lAw7vyqxxEnIjGsC001Xn4GmHyN9Xp-7Oe2bJoYRW_DHlnZTbLLshAMFWBp7M7Eu4PeIfcr-8xge_u8iz6z2Df3XlaEDAOFByfaliuEb1CxC8P2FWhfwxjX2vN0L7wvP")',
          }}
        ></div>
        <p className="text-gray-800 text-sm font-semibold leading-normal group-hover:text-primary transition-colors">
          {name}
        </p>
      </a>
    </div>
  );
};

export default Category;
