import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HeartIcon, UserCircleIcon } from '@heroicons/react/16/solid';
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
          <Link to={''}>
            <button className="relative flex items-center justify-center rounded-full h-10 w-10 bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors">
              <HeartIcon height={30} className='text-red-600' />
            </button>
          </Link>
          <Link to={'/profile'}>
            <div
              className="relative flex items-center justify-center rounded-full h-10 w-10  bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
              
            ><UserCircleIcon height={30} className='text-brand-primary'/> </div>

          </Link>
          <button onClick={handleLogout} className="px-4 py-2 text-sm font-semibold text-gray-800 bg-transparent rounded-lg hover:bg-brand-primary hover:text-white">
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
