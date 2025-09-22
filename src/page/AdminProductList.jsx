import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { deleteProduct, getAllProducts } from '../api';
import Spinner from '../components/Spinner';
import Pagination from '../components/Pagination';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useAdminData } from '../hooks/useAdminData';

const AdminProductList = () => {
  const {
    currentData: currentProducts,
    loading,
    error,
    refetch,
    pagination,
  } = useAdminData(getAllProducts, { itemsPerPage: 5 });

  const handleDelete = useCallback(async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteProduct(id);
        // After successful deletion, refetch the data
        refetch();
      } catch (err) {
        console.error('Failed to delete product:', err);
        let errorMessage = 'Failed to delete product. ';
        
        if (err.response && err.response.data && err.response.data.message) {
          errorMessage += err.response.data.message;
        } else if (err.message) {
          errorMessage += err.message;
        } else {
          errorMessage += 'Please try again later.';
        }
        
        alert(errorMessage);
      }
    }
  }, []);

  if (loading && currentProducts.length === 0) {
    return <Spinner />;
  }

  if (error) {
    return <div className="p-8 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="sm:flex sm:items-center sm:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Product Management</h1>
          <p className="mt-1 text-sm text-gray-500">A list of all the products in your store.</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <Link to="/add-product" className="inline-flex items-center justify-center rounded-lg border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700">
            Add Product
          </Link>
        </div>
      </div>
      
      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Product</th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Price</th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Date Added</th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {currentProducts && currentProducts.length > 0 ? (
                currentProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img className="h-10 w-10 rounded-md object-cover" src={`${import.meta.env.VITE_API_URL}${product.image}`} alt={product.name} />
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">{product.name}</div>
                          <div className="text-gray-500">{product.category ? product.category.name : 'Uncategorized'}</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      Rp {new Intl.NumberFormat('id-ID').format(product.price)}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{new Date(product.createdAt).toLocaleDateString('id-ID')}</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <Link to={`/edit-product/${product.id}`} className="text-indigo-600 hover:text-indigo-900 mr-4">
                        <PencilIcon className="h-5 w-5 inline-block" />
                        <span className="sr-only">Edit {product.name}</span>
                      </Link>
                      <button onClick={() => handleDelete(product.id)} className="text-red-600 hover:text-red-900">
                        <TrashIcon className="h-5 w-5 inline-block" />
                        <span className="sr-only">Delete {product.name}</span>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-4 text-center text-gray-500">
                    No products found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {pagination.totalPages > 1 && (
          <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} paginate={pagination.paginate} />
        )}
      </div>
    </div>
  );
};

export default AdminProductList;