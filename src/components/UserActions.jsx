import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/outline';
import { getUser } from '../utils/auth';

const UserActions = () => {
  const user = getUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="flex items-center gap-2">
      {user ? (
        <>
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
          <button onClick={handleLogout} className="px-4 py-2 text-sm font-semibold text-gray-800 bg-transparent rounded-lg hover:bg-red-500 hover:text-white">
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to={'/login'}>
            <button className="px-4 py-2 text-sm font-semibold text-gray-800 bg-transparent border border-gray-400 rounded-lg hover:bg-gray-100 hover:text-gray-900">
              Login
            </button>
          </Link>
          <Link to={'/register'}>
            <button className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Register
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default UserActions;
