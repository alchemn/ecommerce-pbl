import React from 'react';
import LoadingSpinner from './LoadingSpinner';

const Loading = ({ hiding }) => {
  return (
    <div className={`flex items-center justify-center h-screen bg-white transition-opacity duration-500 ${hiding ? 'opacity-0' : 'opacity-100'}`}>
      <div className="flex flex-col items-center">
        <LoadingSpinner />
        <p className="text-gray-600 mt-4 text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
