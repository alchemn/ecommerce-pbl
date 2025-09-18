import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';

const Pagination = () => (
  <div className="flex items-center justify-center mt-8">
    <nav className="flex items-center space-x-1">
      <a className="p-2 rounded-md hover:bg-gray-100 text-gray-400" href="#">
        <ChevronLeftIcon width={30} />
      </a>
      <a className="px-4 py-2 rounded-lg bg-indigo-500 text-white font-medium text-sm" href="#">
        1
      </a>
      <a className="px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-600 font-medium text-sm" href="#">
        2
      </a>
      <a className="px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-600 font-medium text-sm" href="#">
        3
      </a>
      <span className="px-4 py-2 text-gray-500 text-sm">...</span>
      <a className="px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-600 font-medium text-sm" href="#">
        8
      </a>
      <a className="p-2 rounded-md hover:bg-gray-100 text-gray-400" href="#">
        <ChevronRightIcon width={30} />
      </a>
    </nav>
  </div>
);

export default Pagination;
