import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { getOrderById } from '../api';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CheckoutSkeleton from '../components/CheckoutSkeleton';
import ShippingDetails from '../components/ShippingDetails';
import PaymentDetails from '../components/PaymentDetails';
import OrderSummary from '../components/OrderSummary';
import { Link } from 'react-router-dom';

function CheckoutPage() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError('Order ID is missing in URL.');
      setLoading(false);
      return;
    }

    const fetchOrder = async () => {
      try {
        const response = await getOrderById(id);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setOrder(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  if (loading) {
    return (
      <div className="relative flex h-auto min-h-screen w-full flex-col bg-gray-50">
        <Navbar />
        <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <CheckoutSkeleton />
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-xl font-semibold text-red-600">Error: {error}</p>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-xl font-semibold text-gray-700">Order not found.</p>
      </div>
    );
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-gray-50 group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
              <h1 className="mb-8 text-3xl font-bold text-gray-900">Review Your Order</h1>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="space-y-6">
                  <ShippingDetails user={order.user} />
                  <PaymentDetails />
                </div>
                <OrderSummary order={order} />
              </div>
              <div className="mt-8">
                <label className="flex items-center gap-x-3">
                  <input
                    className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500/50"
                    type="checkbox"
                  />
                  <p className="text-sm text-gray-700">
                    I agree to the{' '}
                    <a className="font-medium text-indigo-600 hover:underline" href="#">
                      terms and conditions
                    </a>
                  </p>
                </label>
              </div>
              <div className="mt-8 flex justify-end">
                <Link to={'/payment'}>
                <button className="flex min-w-[120px] items-center justify-center rounded-full h-12 px-8 bg-indigo-600 text-white text-base font-bold leading-normal tracking-wide shadow-md shadow-indigo-500/20 transition-all duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/50">
                  <span className="truncate">Paid Now</span>
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </button>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default CheckoutPage;
