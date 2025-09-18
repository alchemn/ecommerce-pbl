import React from 'react';
import { MagnifyingGlassIcon, HeartIcon, ShoppingCartIcon, HomeIcon, ChevronRightIcon, MapPinIcon, BanknotesIcon, CubeIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function CheckoutPage() {
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
                          <p className="font-medium text-gray-800">Sarah Johnson</p>
                          <p className="text-sm text-gray-500">123 Maple Street, Anytown, CA 91234</p>
                          <p className="text-sm text-gray-500">Phone: (555) 123-4567</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h2 className="mb-4 text-xl font-semibold text-gray-800">Payment Method</h2>
                      <div className="flex items-center gap-4">
                        <div className="aspect-video h-8 w-12 shrink-0 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzE7wdb9mcuhIKGCzQrY9DSGePbUlFQlMwnuKnkzY6Bi5URPBWFcl1WM76idjS-S_IT7Ig997ylfHo9nibHDHyJnpfZwelrEyYc4Z3q0AB0SPCT2ZdpBwu275yrt6GmOTf6G2K8iD8eT7eKq0ddaJBsYWJ419qHUssPuwEB8Fq8I7ZruATRrCDckhuYNzlDrDAPLGSkKId4tcS2FAUf3D91qvDQTgI1UHuNQhEh73VBM9oSiZlVIsokZlLQmkt6SRhhDml0woZI-Cd")' }}></div>
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
                    <div className="flex items-center gap-4">
                      <div className="aspect-square size-16 rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDsvcU9x49driW-W-hx2-IWeO5KouOLeKzmr-09c7bbB4wIXv-qcd_JLQc6FUqhjgl9y50gdP9tKHPsOsffCwJ_kdMpkbp05DZ12FPctlAeZsuJnNZNnogtGbi-fizIRm5XE7ziWFazUu4rEmyow4OqE8r97XIpBIOAwE8pSQsBhKxlgPsnOpoARVI8YH2dlgGUeRsIodXcLZJWcEW-UwmTIIewNFuR_r5790Qy3-3oXvBHRmg5FKYhtK7B23wbP7-IGUAj6e7KICIx")' }}></div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-800">Classic Cotton T-Shirt</p>
                        <p className="text-sm text-gray-500">Size: M</p>
                      </div>
                      <p className="font-medium text-gray-800">$25.00</p>
                    </div>
                   
                   
                  </div>
                  <div className="my-6 border-t border-gray-200"></div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <p className="text-gray-500">Subtotal</p>
                      <p className="font-medium text-gray-800">$75.00</p>
                    </div>
                    <div className="flex justify-between text-sm">
                      <p className="text-gray-500">Shipping</p>
                      <p className="font-medium text-gray-800">$5.00</p>
                    </div>
                    <div className="flex justify-between text-sm">
                      <p className="text-gray-500">Taxes</p>
                      <p className="font-medium text-gray-800">$6.00</p>
                    </div>
                  </div>
                  <div className="my-6 border-t border-gray-200"></div>
                  <div className="flex justify-between text-lg font-semibold">
                    <p className="text-gray-900">Total</p>
                    <p className="text-indigo-600">$86.00</p>
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