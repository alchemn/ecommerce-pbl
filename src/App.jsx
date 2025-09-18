import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import ProductList from "./page/ProductList";
import ProductDetail from "./page/ProductDetail";
import ShoppingCart from "./page/Cart";
import Profile from "./page/Profile";
import CheckoutPage from "./page/Checkout";
import About from "./page/About";

export default function Home() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/order/:id" element={<CheckoutPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
