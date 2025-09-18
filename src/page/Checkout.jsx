import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams hook
import { MagnifyingGlassIcon, HeartIcon, ShoppingCartIcon, HomeIcon, ChevronRightIcon, MapPinIcon, BanknotesIcon, CubeIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function CheckoutPage() {
  // Route defines param as :id, alias it to orderId for compatibility
  const { id } = useParams(); // Ambil orderId dari URL
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError("Order ID is missing in URL.");
      setLoading(false);
      return;
    }

    const fetchOrder = async () => {
      try {
        const response = await fetch(`http://172.16.10.24:9009/order/${id}`);
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
      <div className="flex h-screen items-center justify-center">
        <p className="text-xl font-semibold text-gray-700">Loading...</p>
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

  const subtotal = order.product.reduce((acc, currentItem) => acc + currentItem.price, 0);
  const shipping = 50000;
  const taxes = subtotal * 0.1; 
  const total = subtotal + shipping + taxes;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };
  
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-gray-50 group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <Navbar/>
        <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
              <h1 className="mb-8 text-3xl font-bold text-gray-900">Review Your Order</h1>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <div className="space-y-6">
                    <div>
                      <h2 className="mb-4 text-xl font-semibold text-gray-800">Shipping Address</h2>
                      <div className="flex items-start gap-4">
                        <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                          <MapPinIcon className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{order.user.profile.name}</p>
                          <p className="text-sm text-gray-500">{order.user.profile.addres}</p>
                          <p className="text-sm text-gray-500">Phone: {order.user.profile.phone}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h2 className="mb-4 text-xl font-semibold text-gray-800">Payment Method</h2>
                      <div className="flex items-center gap-4">
                        <div className="aspect-video h-8 w-12 shrink-0 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png")' }}></div>
                        <div>
                          <p className="font-medium text-gray-800">Visa</p>
                          <p className="text-sm text-gray-500">Ending in 4242</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-gray-50 p-6">
                  <h2 className="mb-4 text-xl font-semibold text-gray-800">Order Summary</h2>
                  <div className="space-y-4">
                    {order.product.map((item) => (
                      <div key={item.id} className="flex items-center gap-4">
                        <div className="aspect-square size-16 rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('http://172.16.10.24:9009${item.image}')` }}></div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-800">{item.name}</p>
                          <p className="text-sm text-gray-500">Description: {item.description}</p>
                        </div>
                        <p className="font-medium text-gray-800">{formatPrice(item.price)}</p>
                      </div>
                    ))}
                  </div>
                  <div className="my-6 border-t border-gray-200"></div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <p className="text-gray-500">Subtotal</p>
                      <p className="font-medium text-gray-800">{formatPrice(subtotal)}</p>
                    </div>
                    <div className="flex justify-between text-sm">
                      <p className="text-gray-500">Shipping</p>
                      <p className="font-medium text-gray-800">{formatPrice(shipping)}</p>
                    </div>
                    <div className="flex justify-between text-sm">
                      <p className="text-gray-500">Taxes (10%)</p>
                      <p className="font-medium text-gray-800">{formatPrice(taxes)}</p>
                    </div>
                  </div>
                  <div className="my-6 border-t border-gray-200"></div>
                  <div className="flex justify-between text-lg font-semibold">
                    <p className="text-gray-900">Total</p>
                    <p className="text-indigo-600">{formatPrice(total)}</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <label className="flex items-center gap-x-3">
                  <input className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500/50" style={{ '--tw-ring-offset-shadow': '0 0 #0000', '--tw-ring-shadow': '0 0 #0000' }} type="checkbox" />
                  <p className="text-sm text-gray-700">I agree to the <a className="font-medium text-indigo-600 hover:underline" href="#">terms and conditions</a></p>
                </label>
              </div>
              <div className="mt-8 flex justify-end">
                <button className="flex min-w-[120px] items-center justify-center rounded-full h-12 px-8 bg-indigo-600 text-white text-base font-bold leading-normal tracking-wide shadow-md shadow-indigo-500/20 transition-all duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/50">
                  <span className="truncate">Place Order</span>
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    </div>
  );
}

export default CheckoutPage;