import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const SortDropdown = ({ sortBy, setSortBy }) => {
  return (
    <div className="relative">
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="block w-full appearance-none border border-gray-300 rounded-md px-3 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="default">Sort By</option>
        <option value="name-asc">Name A-Z</option>
        <option value="name-desc">Name Z-A</option>
        <option value="price-asc">Price Low to High</option>
        <option value="price-desc">Price High to Low</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <ChevronDownIcon className="h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
};

export default SortDropdown;
