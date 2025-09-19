import React from 'react';
import { MagnifyingGlassIcon, BellIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

const HeaderAddProduct = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
      <div className="relative">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="w-64 rounded-lg border border-gray-300 bg-gray-100 py-2 pl-10 pr-4 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
      </div>
      <div className="flex items-center gap-4">
        <BellIcon className="h-6 w-6 text-gray-500" />
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gray-300" />
          <div className="text-sm font-medium text-gray-700">Admin</div>
          <ChevronDownIcon className="h-4 w-4 text-gray-500" />
        </div>
      </div>
    </header>
  );
};

export default HeaderAddProduct;