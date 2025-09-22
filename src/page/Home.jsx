import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Promo from '../components/Promo';
import CategoryList from '../components/CategoryList';
import ProductSection from '../components/ProductSection';
import { CreditCardIcon, TruckIcon } from '@heroicons/react/24/outline';

const Dashboard = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-white  font-inter">
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        <div className="flex flex-1 justify-center py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="layout-content-container flex flex-col max-w-screen-xl flex-1 gap-12">
            <Hero />
            <CategoryList />
            <ProductSection />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
              <Promo
                bgColor="bg-indigo-100"
                icon={<TruckIcon width={50} />}
                title="Free Shipping on Orders Over $50"
                description="Shop now and get your items delivered to your doorstep for free."
                buttonText="Shop Now"
                buttonBgColor="bg-blue-500"
                buttonHoverColor="hover:bg-blue-600"
                buttonRingColor="focus:ring-indigo-300"
              />
              <Promo
                bgColor="bg-purple-100"
                icon={<CreditCardIcon width={50} />}
                title="Get $10 Off Your First Purchase"
                description="Sign up and claim your exclusive voucher today!"
                buttonText="Claim Voucher"
                buttonBgColor="bg-purple-600"
                buttonHoverColor="hover:bg-purple-700"
                buttonRingColor="focus:ring-purple-300"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
