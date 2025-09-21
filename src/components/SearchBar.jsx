import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('search') || '';
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();
  const debounceTimeoutRef = useRef(null);

  // Effect to update local state if URL search param changes (e.g., user navigates back/forward)
  useEffect(() => {
    const currentUrlQuery = searchParams.get('search') || '';
    if (query !== currentUrlQuery) {
      setQuery(currentUrlQuery);
    }
  }, [searchParams]);

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = setTimeout(() => {
      const currentPath = window.location.pathname;
      if (currentPath !== '/product-list') {
        // If not on product-list page, navigate there first
        navigate(`/product-list?search=${encodeURIComponent(newQuery.trim())}`);
      } else {
        // If already on product-list page, just update search param
        if (newQuery.trim()) {
          setSearchParams({ search: newQuery.trim() });
        } else {
          // Clear search param if query is empty
          setSearchParams({});
        }
      }
    }, 500); // Debounce for 500ms
  };

  return (
    <div className="relative w-full max-w-sm"> {/* Changed from form to div */}
      <div className="relative hidden sm:block">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
        <input
          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full border-gray-300 bg-gray-100 h-10 pl-10 pr-4 text-sm font-normal leading-normal text-gray-900 placeholder:text-gray-500 focus:outline-0 focus:ring-2 focus:ring-brand-primary"
          placeholder="Search"
          type="text"
          value={query}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
