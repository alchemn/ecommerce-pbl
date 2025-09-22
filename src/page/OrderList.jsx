import React, { useEffect, useState } from 'react';
import { getAllOrders } from '../api';
import Spinner from '../components/Spinner';
import { MagnifyingGlassIcon, HeartIcon, ShoppingCartIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { Squares2X2Icon } from '@heroicons/react/24/solid';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getUser } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

function OrderList() {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = getUser();
    if (user) {
      getAllOrders({ userId: user.id })
        .then(res => {
          setOrders(Array.isArray(res.data) ? res.data : []);
          setLoading(false);
        })
        .catch(() => {
          setError('Failed to fetch orders');
          setLoading(false);
        });
    } else {
      navigate('/login');
    }
  }, [navigate]);

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <Navbar/>
        <main className="flex-1 px-10 py-8 lg:px-20 xl:px-40">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">My Orders</h2>
            <div className="mt-6 border-b border-gray-200">
              <nav aria-label="Tabs" className="-mb-px flex space-x-8">
                <a className="whitespace-nowrap border-b-2 border-indigo-600 px-1 py-4 text-sm font-semibold text-indigo-600" href="#">All</a>
                <a className="whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700" href="#">Processing</a>
                <a className="whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700" href="#">Shipped</a>
                <a className="whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700" href="#">Completed</a>
                <a className="whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700" href="#">Cancelled</a>
                <a className="whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700" href="#">Returns</a>
              </nav>
            </div>
            <div className="mt-8 flex flex-col gap-4 whitespace-pre-line max-h-180 overflow-y-auto ">
              {loading ? (
                <div className="flex justify-center items-center py-10"><Spinner /></div>
              ) : error ? (
                <div className="text-red-500 text-center py-10">{error}</div>
              ) : orders.length === 0 ? (
                <div className="text-gray-500 text-center py-10">No orders found.</div>
              ) : (
                orders.map(order => (
                  <div key={order.id} className="flex items-center gap-6 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md ">
                    <img className="h-20 w-20 flex-shrink-0 rounded-lg bg-cover bg-center" src={`${import.meta.env.VITE_API_URL}${order.product.image}`}></img>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between">
                        <p className="text-lg font-semibold text-gray-800">{order.product.name}</p>
                        <p className="text-sm text-gray-500">{formatDate(order.createdAt)}</p>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className={`h-2.5 w-2.5 rounded-full ${order.status === 'COMPLETE' ? 'bg-green-500' : order.status === 'PROCESSING' ? 'bg-blue-500' : order.status === 'CANCELLED' ? 'bg-red-500' : 'bg-gray-400'}`}></span>
                          <p className={`text-sm font-medium ${order.status === 'COMPLETE' ? 'text-green-600' : order.status === 'PROCESSING' ? 'text-blue-600' : order.status === 'CANCELLED' ? 'text-red-600' : 'text-gray-600'}`}>{order.status}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    </div>
  );
}

export default OrderList;