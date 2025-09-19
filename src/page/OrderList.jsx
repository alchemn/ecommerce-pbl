import React from 'react';
import { MagnifyingGlassIcon, HeartIcon, ShoppingCartIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { Squares2X2Icon } from '@heroicons/react/24/solid';

function OrderList() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-gray-200 bg-white px-10 py-4">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2 text-indigo-600">
              <Squares2X2Icon className="h-8 w-8" />
              <h1 className="text-xl font-bold leading-tight tracking-[-0.015em] text-gray-900">MarketPlace</h1>
            </div>
            <nav className="flex items-center gap-8">
              <a className="text-base font-medium text-gray-700 hover:text-indigo-600" href="#">Home</a>
              <a className="text-base font-medium text-gray-700 hover:text-indigo-600" href="#">Shop</a>
              <a className="text-base font-medium text-gray-700 hover:text-indigo-600" href="#">Offers</a>
              <a className="text-base font-medium text-gray-700 hover:text-indigo-600" href="#">Help</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <label className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
              <input className="form-input w-full min-w-40 max-w-64 rounded-xl border-gray-300 bg-gray-50 py-2 pl-10 pr-4 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500" placeholder="Search products..." type="text" />
            </label>
            <div className="flex gap-2">
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800">
                <HeartIcon className="h-6 w-6" />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800">
                <ShoppingCartIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="h-10 w-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDmAHzWZiJ03T1uhJekrYFizzLUUlrifarBEdTE89qrWTYA-z81zSD6g59IYoCK4un6u8nkRKUbPWx0Jf79qgFegAfy2o0KCZdWeMIH-lUOmF1OLsJMdAHfftJys6QbOz1LU2YDwcNS-p_61sEAsitOEus3h5N_LTXt3uvdfUNSgZGTGvE7ly6rZAQ2ijmhZX9YxFfbqf_7XcrBtyzQ2C6bQI-o1S2ott_iB_gLaKnfPk10GNhueWWSVxzKUYYCF4yynh7c9l9zSema")' }}></div>
          </div>
        </header>
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
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-6 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                <div className="h-20 w-20 flex-shrink-0 rounded-lg bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBMlZ2hiJWGa6TQal68GKAev-yG43Kq2AlxmKV2X_B8mz4iee0pZBLrc7Jp2mI_C85zAIBWVZ7-GpyS59mHWIwsE-aLQfoThRfQX9aLR86mgXTQ4USvbOI7o6AW1pJhVYJT4py_e74UOc_hMZCJQyBiI-pJnpj4CB1PW3Asy9pd4Bwz3Kr-CLCmuT8rk5rDjapQ2mpt5ivEScZohMFeJrp9Mty_MXaAJ06tepfx42GDsnaPr9Z-4oAl3wBEvIV1RmOHttqT-K5LLtFo")' }}></div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between">
                    <p className="text-lg font-semibold text-gray-800">Order #1234567890</p>
                    <p className="text-sm text-gray-500">Jan 15, 2024</p>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-sm text-gray-600">Total: <span className="font-medium text-gray-800">$149.99</span></p>
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-blue-500"></div>
                      <p className="text-sm font-medium text-blue-600">Processing</p>
                    </div>
                  </div>
                </div>
                <button className="flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <span>View Details</span>
                  <ArrowRightIcon className="ml-1.5 h-4 w-4" />
                </button>
              </div>
              <div className="flex items-center gap-6 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                <div className="h-20 w-20 flex-shrink-0 rounded-lg bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBYbPsHB6IzlluKTe__6-dhPSDB0SnyANhSx2XpxUrciNcEqSqIjdukd5Q1tPOUx6Axehk8YinEruvOcDbBiGBscAcxaAFkGuY57cq3-S3YLZfwNPR8VHL-KPbOnZE89UI2X_2XLZhNTgRUB3UBB1z2DL-7WgfKF5hF-B5jz2IXhitz70jN1kwY47mmRHkGDh8bDib-m0JRbsVWSGUegptEzcPh37DMXLkvw7LBMcFPZre45POwOS1wqWH09zSCuFWG2iaZV7UrOpgZ")' }}></div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between">
                    <p className="text-lg font-semibold text-gray-800">Order #9876543210</p>
                    <p className="text-sm text-gray-500">Feb 20, 2024</p>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-sm text-gray-600">Total: <span className="font-medium text-gray-800">$89.50</span></p>
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                      <p className="text-sm font-medium text-green-600">Completed</p>
                    </div>
                  </div>
                </div>
                <button className="flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <span>View Details</span>
                  <ArrowRightIcon className="ml-1.5 h-4 w-4" />
                </button>
              </div>
              <div className="flex items-center gap-6 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                <div className="h-20 w-20 flex-shrink-0 rounded-lg bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA4ekswQcYn0xuJcaRH0h0PW19VtYR7-qpQulWJYGQrakqIKEDHpgWe8CwK91IF392ct3ffZhQ0y4lKOlVtYeWnnN99MS0lEHsBRXda9RQDNcBdW7N7UeTB6o6fwVj1Nne4iGGcqtc2nmDnc5tK0W0IxdNR4KgMe5kmadilPkXp1WyLqe85MLTkg_Z8BOd41t-iPZiRiu8Ozj5Uweos044fhtc8_DOOaP4IJZZJV1pmDWPOJrFYXcLmLBQOqmf1bOiTFQanfTziv11R")' }}></div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between">
                    <p className="text-lg font-semibold text-gray-800">Order #5678901234</p>
                    <p className="text-sm text-gray-500">Mar 5, 2024</p>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-sm text-gray-600">Total: <span className="font-medium text-gray-800">$299.00</span></p>
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                      <p className="text-sm font-medium text-yellow-600">Shipped</p>
                    </div>
                  </div>
                </div>
                <button className="flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <span>View Details</span>
                  <ArrowRightIcon className="ml-1.5 h-4 w-4" />
                </button>
              </div>
              <div className="flex items-center gap-6 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                <div className="h-20 w-20 flex-shrink-0 rounded-lg bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBMBguUHOI31cwHBvlo9w_cC6rjaTwEFDqrlkiZJWhq0akrIjQWLiFAvy8diNEhkfcohiLLfKp-S8MY6VrAHk7b0dKLACV6h58NbBPi8bNIcL5AwdieoSud_j_RvA4UZjtSY6IIrOwAuPnq9wsAuBhGSDRH-pJUj1HUuoWs9K3xXcHwHcQSTCilCxIf3jHBp18qpS33wDw79CSUEKh0PipoydCn9t9mPWPyD0ot3oe9SThma_oGJslaGwuGeQCqNvkvM-ykz4WKzRi")' }}></div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between">
                    <p className="text-lg font-semibold text-gray-800">Order #3456789012</p>
                    <p className="text-sm text-gray-500">Apr 10, 2024</p>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-sm text-gray-600">Total: <span className="font-medium text-gray-800">$45.75</span></p>
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                      <p className="text-sm font-medium text-red-600">Cancelled</p>
                    </div>
                  </div>
                </div>
                <button className="flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <span>View Details</span>
                  <ArrowRightIcon className="ml-1.5 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </main>
        <footer className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
            <div className="flex justify-center space-x-6 md:order-2">
              <a className="text-gray-400 hover:text-gray-500" href="#">
                <span className="sr-only">Facebook</span>
                <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path>
                </svg>
              </a>
              <a className="text-gray-400 hover:text-gray-500" href="#">
                <span className="sr-only">Twitter</span>
                <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a className="text-gray-400 hover:text-gray-500" href="#">
                <span className="sr-only">Instagram</span>
                <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6zm-2-6a2 2 0 114 0 2 2 0 01-4 0zm8-3a1 1 0 100-2 1 1 0 000 2z" fillRule="evenodd"></path>
                </svg>
              </a>
            </div>
            <div className="mt-8 md:order-1 md:mt-0">
              <p className="text-center text-sm leading-5 text-gray-500">© 2024 MarketPlace. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default OrderList;