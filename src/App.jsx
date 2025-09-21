import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Main from "./page/Home";
import ProductList from "./page/ProductList";
import ProductDetail from "./page/ProductDetail";
import Profile from "./page/Profile";
import CheckoutPage from "./page/Checkout";
import About from "./page/About";
import OrderList from "./page/OrderList";
import AddProduct from "./page/AddProduct";
import EditProduct from "./page/EditProduct";
import Register from "./page/Register";
import Login from "./page/Login";
import Loading from "./components/Loading";
import Dashboard from "./page/Dashboard";
import ListUser from "./components/admin/ListUser";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHiding(true);
      setTimeout(() => {
        setLoading(false);
      }, 500); // Corresponds to the duration of the fade-out animation
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading hiding={hiding} />;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/order/:id" element={<CheckoutPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/payment" element={<OrderList />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/user" element={<ListUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
