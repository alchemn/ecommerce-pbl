import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts, deleteProduct } from '../api';
import Spinner from '../components/Spinner';
import Pagination from '../components/Pagination';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

const AdminProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await getAllProducts();
      if (response.data && Array.isArray(response.data.product)) {
        setProducts(response.data.product.reverse());
      } else {
        console.error("Unexpected data structure for products:", response.data);
        setProducts([]);
      }
    } catch (err) {
      setError('Failed to fetch products. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteProduct(id);
        fetchProducts();
      } catch (err) {
        console.error('Failed to delete product:', err);
      }
    }
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  if (loading) {
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
              {currentProducts.map((product) => (
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
                      <span className="sr-only">, {product.name}</span>
                    </Link>
                    <button onClick={() => handleDelete(product.id)} className="text-red-600 hover:text-red-900">
                      <TrashIcon className="h-5 w-5 inline-block" />
                      <span className="sr-only">, {product.name}</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {totalPages > 1 && (
          <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
        )}
      </div>
    </div>
  );
};

export default AdminProductList;
