import { useState, useEffect } from "react";
import SideBar from "../components/admin/SideBar";
import ListUser from "../components/admin/ListUser";
import { CubeIcon, UsersIcon, BanknotesIcon } from "@heroicons/react/24/outline";

const Dashboard = () => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalUser, setTotalUser] = useState(0);
  const [totalOrder, setTotalOrder] = useState(0);
  const [activeView, setActiveView] = useState("dashboard");
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    async function fetchData() {
      try {
        const resProduct = await fetch(`${API}/product/count`);
        const dataProduct = await resProduct.json();
        setTotalProducts(dataProduct.data);

        const resUser = await fetch(`${API}/user`);
        const dataUser = await resUser.json();
        setTotalUser(dataUser.data.length);

        const resOrder = await fetch(`${API}/order/count`);
        const countOrder = await resOrder.json();
        setTotalOrder(countOrder.data);
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      }
    }
    fetchData();
  }, [API]);

  const renderView = () => {
    switch (activeView) {
      case "dashboard":
        return (
          <div>
            <h1 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-sm font-medium text-gray-500">
                      Total Products
                    </h3>
                    <p className="text-3xl font-bold text-gray-900">
                      {totalProducts}
                    </p>
                  </div>
                  <div className="rounded-full bg-indigo-100 p-3">
                    <CubeIcon className="h-6 w-6 text-indigo-600" />
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-sm font-medium text-gray-500">
                      Total Users
                    </h3>
                    <p className="text-3xl font-bold text-gray-900">
                      {totalUser}
                    </p>
                  </div>
                  <div className="rounded-full bg-green-100 p-3">
                    <UsersIcon className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-sm font-medium text-gray-500">
                      Product Yang Terjual
                    </h3>
                    <p className="text-3xl font-bold text-gray-900">
                      {totalOrder}
                    </p>
                  </div>
                  <div className="rounded-full bg-green-100 p-3">
                    <BanknotesIcon className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "customers":
        return <ListUser />;
      default:
        return <div>Dashboard</div>;
    }
  };

  return (
    <div className="relative flex min-h-screen w-full bg-gray-100">
      <SideBar setActiveView={setActiveView} />
      <main className="flex-1 p-8">{renderView()}</main>
    </div>
  );
};


export default Dashboard;