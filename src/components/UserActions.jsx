import React from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

const UserActions = () => (
  <div className="flex items-center gap-2">
    <Link to={'/cart'}>
      <button className="relative flex items-center justify-center rounded-full h-10 w-10 bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors">
        <HeartIcon height={30} />
      </button>
    </Link>
    <Link to={'/profile'}>
      <div
        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-white shadow-md"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCw3V3bTW44AIt9FPFYPko5OcqtassR0Aze-I8siYiuFUHFfMoHGTMV14-ze9da8ri3ccb9_ntXYMBUgSwNrzshORW0VuFISpZ5exAaxrdlSxAV0vZrFuAyjxCAEHIzjxRKg_ySno6gKsx7-CxXI5_7vV09h9aBEw9XFm1nxvBh3WxN8iSnNvVG85XCpAVnfM3VEbtkDJXo6L6kzdpvv0FJZGGagbqx2hf18B29NdyruBuf8VAaqBHGmhotH6aLoLOJ5F4Vlj-arlPY")',
        }}
      ></div>
    </Link>
  </div>
);

export default UserActions;
