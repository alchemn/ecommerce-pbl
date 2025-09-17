import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import ProductList from "./page/ProductList";
import ProductDetail from "./page/ProductDetail";
import ShoppingCart from "./page/Cart";
import Profile from "./page/Profile";

export default function Home() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/product-list-id/" element={<ProductDetail />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
