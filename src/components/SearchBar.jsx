import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchBar = () => (
  <label className="relative w-full max-w-sm">
    <div className="relative hidden sm:block">
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
      <input
        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full border-gray-300 bg-gray-100 h-10 pl-10 pr-4 text-sm font-normal leading-normal text-gray-900 placeholder:text-gray-500 focus:outline-0 focus:ring-2 focus:ring-brand-primary"
        placeholder="Search"
        type="text"
        defaultValue=""
      />
    </div>
  </label>
);

export default SearchBar;
