import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import ProductList from "./page/ProductList";
import ProductDetail from "./page/ProductDetail";
import ShoppingCart from "./page/Cart";
import Profile from "./page/Profile";
import CheckoutPage from "./page/Checkout";
import About from "./page/About";

import OrderList from "./page/OrderList";
import AddProduct from "./page/AddProduct";
import EditProduct from "./page/EditProduct";
import Register from "./page/Register";
import Login from "./page/Login";

export default function Home() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          {/* <Route path="/cart" element={<ShoppingCart />} /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/order/:id" element={<CheckoutPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/payment" element={<OrderList />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
