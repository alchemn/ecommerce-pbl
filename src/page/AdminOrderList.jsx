import React from 'react';
import { getAllOrders } from '../api';
import Spinner from '../components/Spinner';
import Pagination from '../components/Pagination';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useAdminData } from '../hooks/useAdminData';

const AdminOrderList = () => {
  const { 
    currentData: currentOrders, 
    loading, 
    error, 
    pagination 
  } = useAdminData(getAllOrders, { itemsPerPage: 10 });

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this order? NOTE: API function not implemented yet.')) {
      console.log('Delete order:', id);
      // In a real app, you would call an API to delete and then refetch()
    }
  };
  
  const handleEdit = (id) => {
    console.log('Edit order:', id);
  };

  const getStatusChip = (status) => {
    let className = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ';
    switch (status) {
      case 'COMPLETE':
        className += 'bg-green-100 text-green-800';
        break;
      case 'PROCESSING':
        className += 'bg-blue-100 text-blue-800';
        break;
      case 'CANCELLED':
        className += 'bg-red-100 text-red-800';
        break;
      default:
        className += 'bg-gray-100 text-gray-800';
    }
    return <span className={className}>{status}</span>;
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
          <h1 className="text-2xl font-bold text-gray-900">Order Management</h1>
          <p className="mt-1 text-sm text-gray-500">A list of all orders from your customers.</p>
        </div>
      </div>
      
      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Order ID</th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Customer</th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Product</th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Total</th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Date</th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {currentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">#{order.id}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{order.user ? order.user.email : 'N/A'}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{order.product ? order.product.name : 'N/A'}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    Rp {new Intl.NumberFormat('id-ID').format(order.total)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {getStatusChip(order.status)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{new Date(order.createdAt).toLocaleDateString('id-ID')}</td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <button onClick={() => handleEdit(order.id)} className="text-indigo-600 hover:text-indigo-900 mr-4">
                      <PencilIcon className="h-5 w-5 inline-block" />
                      <span className="sr-only">, Order {order.id}</span>
                    </button>
                    <button onClick={() => handleDelete(order.id)} className="text-red-600 hover:text-red-900">
                      <TrashIcon className="h-5 w-5 inline-block" />
                      <span className="sr-only">, Order {order.id}</span>
                    </button>
                  </td>
                </tr>
              ))}
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

export default AdminOrderList;