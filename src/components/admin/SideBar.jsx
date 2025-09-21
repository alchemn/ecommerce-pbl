import React from "react";
import {
  Squares2X2Icon,
  ShoppingCartIcon,
  TagIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/solid";

const SideBar = ({ setActiveView }) => {
  return (
    <aside className="w-64 flex-shrink-0 border-r border-gray-200 bg-white py-6">
      <div className="flex items-center gap-2 px-6">
        <div className="h-8 w-8 rounded-full bg-gray-300" />
        <h2 className="text-lg font-bold text-gray-900">AdminPanel</h2>
      </div>
      <nav className="mt-8 space-y-2 px-4">
        <a
          href="#"
          onClick={() => setActiveView("dashboard")}
          className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
        >
          <Squares2X2Icon className="h-5 w-5" />
          Dashboard
        </a>
        <a
          href="#"
          onClick={() => setActiveView("orders")}
          className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <ShoppingCartIcon className="h-5 w-5" />
          Orders
        </a>
        <a
          href="#"
          onClick={() => setActiveView("products")}
          className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white"
        >
          <TagIcon className="h-5 w-5" />
          Products
        </a>
        <a
          href="#"
          onClick={() => setActiveView("customers")}
          className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <UserGroupIcon className="h-5 w-5" />
          Customers
        </a>
      </nav>
      <div className="mt-6 border-t border-gray-200 pt-6">
        <div className="px-6 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Settings
        </div>
        <nav className="mt-2 space-y-2 px-4">
          <a
            href="#"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <Cog6ToothIcon className="h-5 w-5" />
            General
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
            Logout
          </a>
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
