import React from 'react';
import useSWR from 'swr';
import { getCategories } from '../api';
import Category from './Category';

const fetcher = () => getCategories().then((res) => res.data);

const CategoryList = () => {
  const { data: categories, error, isLoading } = useSWR('categories', fetcher);
  const API= import.meta.env.VITE_API_URL

  if (error) {
    return <div className="text-red-500">Failed to load categories.</div>;
  }

  if (isLoading) {
    return <div className="text-gray-500">Loading categories...</div>;
  }

  return (
    <section>
      <h2 className="text-gray-900 text-3xl font-bold leading-tight tracking-tighter px-4 pb-6">Shop by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 ">
        {(categories || []).map((category) => (
          <Category
          id={category.id}
            key={category.id}
            name={category.name}
            image={`${API}/${category.image}`}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
