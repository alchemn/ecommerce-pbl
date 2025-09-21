import React from 'react';
import useSWR from 'swr';
import { getCategories } from '../api';

const fetcher = () => getCategories().then((res) => res.data);

const ProductFilters = ({ selectedCategory, onCategorySelect }) => {
  const { data: categories, error } = useSWR('categories', fetcher);

  const handleCategoryClick = (categoryId) => {
    onCategorySelect(selectedCategory === categoryId ? null : categoryId);
  };

  return (
    <aside className="w-80 hidden lg:block bg-white p-6 rounded-2xl shadow-sm self-start sticky top-8">
      <h2 className="text-gray-900 text-lg font-bold mb-4">Filters</h2>
      <div>
        <h3 className="text-gray-800 font-semibold mb-2">Category</h3>
        {error && <p className="text-red-500">Error loading categories</p>}
        {!categories && !error && <p>Loading categories...</p>}
        {categories && (
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
                  ${selectedCategory === category.id
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
};

export default ProductFilters;
