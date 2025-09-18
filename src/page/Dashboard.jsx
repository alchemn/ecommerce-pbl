import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { CreditCardIcon } from '@heroicons/react/24/outline';
import Category from '../components/Category';
import Button from '../components/Button';
import {TruckIcon} from '@heroicons/react/24/outline'
import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const ShopSmart = () => {
  const { data: categories, error, isLoading } = useSWR("http://172.16.10.24:9009/category", fetcher);
  const BASE_URL = "http://172.16.10.24:9009";

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        Failed to load categories.
      </div>
    );
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-white group/design-root overflow-x-hidden font-inter">
      <div className="layout-container flex h-full grow flex-col">
        <Navbar/>
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
              {isLoading ? (
                <div className="flex items-center justify-center text-gray-500">
                  Loading categories...
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
                  {categories.map((category) => (
                    <Category key={category.id} name={category.name} image={`${BASE_URL}/${category.image}`} />
                  ))}
                </div>
              )}
            </section>

            <section className="space-y-6">
              <h2 className="text-gray-900 text-3xl font-bold leading-tight tracking-tighter px-4">Latest Products</h2>
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