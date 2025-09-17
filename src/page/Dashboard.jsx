import React from 'react';
import { PlusIcon } from '@heroicons/react/16/solid';
import { ShoppingCartIcon, TruckIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { CreditCardIcon } from '@heroicons/react/24/outline';
import Category from '../components/Category';
import Button from '../components/Button';


const ShopSmart = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-white group/design-root overflow-x-hidden font-inter">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 px-10 py-4 shadow-sm bg-white sticky top-0 z-20">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3 text-indigo-600">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
              </svg>
              <h2 className="text-gray-900 text-2xl font-bold leading-tight tracking-tighter">ShopSmart</h2>
            </div>
            <Navbar/>
          </div>
          <div className="flex flex-1 justify-end items-center gap-4">
            <label className="relative w-full max-w-sm">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <PlusIcon className="material-symbols-outlined">search</PlusIcon>
              </div>
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full text-gray-900 focus:outline-0 focus:ring-2 focus:ring-primary border-gray-300 bg-gray-100 h-10 placeholder:text-gray-500 pl-10 pr-4 text-sm font-normal leading-normal" placeholder="Search products..." value="" />
            </label>
            <div className="flex items-center gap-2">
              <button className="relative flex items-center justify-center rounded-full h-10 w-10 bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors">
                <ShoppingCartIcon height={30}/>
                <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">2</span>
              </button>
            </div>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-white shadow-md" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCw3V3bTW44AIt9FPFYPko5OcqtassR0Aze-I8siYiuFUHFfMoHGTMV14-ze9da8ri3ccb9_ntXYMBUgSwNrzshORW0VuFISpZ5exAaxrdlSxAV0vZrFuAyjxCAEHIzjxRKg_ySno6gKsx7-CxXI5_7vV09h9aBEw9XFm1nxvBh3WxN8iSnNvVG85XCpAVnfM3VEbtkDJXo6L6kzdpvv0FJZGGagbqx2hf18B29NdyruBuf8VAaqBHGmhotH6aLoLOJ5F4Vlj-arlPY")' }}></div>
          </div>
        </header>

        <div className="flex flex-1 justify-center py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="layout-content-container flex flex-col max-w-screen-xl flex-1 gap-12">
            <div className="@container">
              <div className="p-0">
                <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-2xl items-start justify-center p-12 md:p-16 shadow-lg" style={{ backgroundImage: 'linear-gradient(75deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBTUmLg2ihsQgOyfNUKntX04JUU8mUIoidbN_SV_LHYPlf3rGN4CMdPy-yZaxuPXeXxAeVeePmS0yb3S4GMgGQY6FZ_fGZhLwX1lkahsZoFpijUcRJ7LpR1iT83K94XBUfxTTuIIfe2N0lEKpTCWttmNTZZwHiErxKWnPAYfo6EwbDL9tLoSCddk94ynoVe8ep2nM3b_KaTsEES6XQuFF98nLk0ByvcDxXUKw315wcM0iPqGXAn203F7k11c7mlBF__wcdYGXaqOeMD")' }}>
                  <div className="flex flex-col gap-4 text-left max-w-xl">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-tighter md:text-6xl">
                      Discover Your Next Favorite Thing
                    </h1>
                    <h2 className="text-gray-200 text-lg font-normal leading-relaxed md:text-xl">
                      Explore a world of curated products, from stylish furniture to the latest gadgets.
                    </h2>
                  </div>
                  <Button name={'Shop Now'}/>
                </div>
              </div>
            </div>

            <section>
              <h2 className="text-gray-900 text-3xl font-bold leading-tight tracking-tighter px-4 pb-6">Shop by Category</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
                <Category name={'Furniture'}/>
                <Category name={'Furniture'}/>
                <Category name={'Furniture'}/>
                <Category name={'Furniture'}/>
                <Category name={'Furniture'}/>
                <Category name={'Furniture'}/>
                <Category name={'Furniture'}/>
                <Category name={'Furniture'}/>
                
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-gray-900 text-3xl font-bold leading-tight tracking-tighter px-4">Trending Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                <Card name={'Kasur'} price={'Rp200.000'}/>
                <Card name={'Sofa'} price={'Rp.40.000'}/>
                <Card name={'Sofa'} price={'Rp.40.000'}/>
                <Card name={'Sofa'} price={'Rp.40.000'}/>
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
              <div className="bg-indigo-100 rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-4">
               <TruckIcon width={50}/>
                <h3 className="text-gray-900 text-2xl font-bold tracking-tight">Free Shipping on Orders Over $50</h3>
                <p className="text-gray-600">Shop now and get your items delivered to your doorstep for free.</p>
                <button className="mt-2 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-11 px-6 bg-blue-500 text-white text-base font-bold leading-normal tracking-wide shadow-md hover:bg-blue-600 transition-all focus:ring-4 focus:ring-indigo-300">
                  <span className="truncate">Shop Now</span>
                </button>
              </div>
              <div className="bg-purple-100 rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-4">
                <CreditCardIcon width={50}/>
                <h3 className="text-gray-900 text-2xl font-bold tracking-tight">Get $10 Off Your First Purchase</h3>
                <p className="text-gray-600">Sign up and claim your exclusive voucher today!</p>
                <button className="mt-2 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-11 px-6 bg-purple-600 text-white text-base font-bold leading-normal tracking-wide shadow-md hover:bg-purple-700 transition-all focus:ring-4 focus:ring-purple-300">
                  <span className="truncate">Claim Voucher</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <Footer/>
      </div>
    </div>
  );
};

export default ShopSmart;