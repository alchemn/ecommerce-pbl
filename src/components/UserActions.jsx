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
          <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to={'/login'}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </Link>
          <Link to={'/register'}>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Register
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default UserActions;
