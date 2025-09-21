import { Outlet } from "react-router-dom";
import SideBar from "../components/admin/SideBar";

const AdminLayout = () => {
  return (
    <div className="relative flex min-h-screen w-full bg-gray-100">
      <SideBar />
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
