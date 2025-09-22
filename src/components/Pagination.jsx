import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';

const Pagination = ({ currentPage, totalPages, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
        <div className="flex items-center justify-center px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </button>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Page <span className="font-medium">{currentPage}</span> of <span className="font-medium">{totalPages}</span>
          </p>
        </div>
        <div>
                                                  <nav className="flex items-center gap-2" aria-label="Pagination">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full text-gray-500 bg-white hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:pointer-events-none"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {pageNumbers.map(number => (
              <button
                key={number}
                onClick={() => paginate(number)}
                aria-current={currentPage === number ? 'page' : undefined}
                className={`inline-flex items-center justify-center w-10 h-10 text-sm font-semibold rounded-full transition-all duration-300 ease-in-out ${
                  currentPage === number
                    ? 'bg-indigo-600 text-white shadow-lg scale-110'
                    : 'text-gray-700 bg-white hover:bg-gray-100'
                }`}
              >
                {number}
              </button>
            ))}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full text-gray-500 bg-white hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:pointer-events-none"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
