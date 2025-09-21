import React from "react";
import SideBarAddProduct from "../components/admin/SideBar";
import { CubeIcon, UsersIcon, BanknotesIcon } from "@heroicons/react/24/outline";


const Dashboard = () => {
  return (
    <div className="relative flex min-h-screen w-full bg-gray-100">
      <SideBarAddProduct />
      <main className="flex-1 p-8">
        <h1 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">
          Dashboard
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Total Product Card */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div className="flex flex-col space-y-2">
                <h3 className="text-sm font-medium text-gray-500">
                  Total Products
                </h3>
                <p className="text-3xl font-bold text-gray-900">1,234</p>
              </div>
              <div className="rounded-full bg-indigo-100 p-3">
                <CubeIcon className="h-6 w-6 text-indigo-600" />
              </div>
            </div>
          </div>

          {/* Total User Card */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div className="flex flex-col space-y-2">
                <h3 className="text-sm font-medium text-gray-500">Total Users</h3>
                <p className="text-3xl font-bold text-gray-900">567</p>
              </div>
              <div className="rounded-full bg-green-100 p-3">
                <UsersIcon className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
            {/* Total Buy Product */}
                      <div className="rounded-xl bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div className="flex flex-col space-y-2">
                <h3 className="text-sm font-medium text-gray-500">Product Yang Terjual</h3>
                <p className="text-3xl font-bold text-gray-900">567</p>
              </div>
              <div className="rounded-full bg-green-100 p-3">
                <BanknotesIcon className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;