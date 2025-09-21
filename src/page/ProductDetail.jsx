import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById, createOrder, getMiniProduct } from "../api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductImage from "../components/ProductImage";
import ProductInfo from "../components/ProductInfo";
import Card from "../components/Card";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isBuying, setIsBuying] = useState(false);
  const [error, setError] = useState(null);
  const [miniProducts, setMiniProducts] = useState([]);
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await getProductById(id);
        setProduct(res.data);
      } catch (error) {
        console.error("error fetching product data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    const fetchMini = async () => {
      try {
        const res = await getMiniProduct();
        // backend returns { message: 'Latest Product', product: [...] }
        const list = res?.data?.product || res?.data || [];
        setMiniProducts(list);
      } catch (err) {
        console.error("error fetching mini products:", err);
      }
    };
    fetchMini();
  }, []);

  const handleBuyNow = async () => {
    setIsBuying(true);
    setError(null);
    try {
      if (!product) {
        setError("Product not loaded");
        return;
      }

      const storedUserId = localStorage.getItem("userId");
      const userId = storedUserId ? Number(storedUserId) : 1;

      const payload = {
        userId,
        productIds: [product.id],
      };

      const response = await createOrder(payload);
      const newOrderId = response.data?.order?.id;

      if (newOrderId) {
        navigate(`/order/${newOrderId}`);
      } else {
        setError("Order ID not found in server response.");
        console.error("Server response:", response.data);
      }
    } catch (err) {
      console.error("Error posting buy request:", err);
      const serverMsg = err?.response?.data?.message || err.message;
      setError(serverMsg);
    } finally {
      setIsBuying(false);
    }
  };

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center py-20">Produk tidak ditemukan</div>;
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-gray-50">
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        <main className="flex-1 px-4 sm:px-6 lg:px-24 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-2 text-sm text-gray-500 mb-6">
              <a className="hover:text-indigo-600" href="#">
                {product.category?.name || "Category"}
              </a>
              <span>/</span>
              <span className="font-medium text-slate-800">{product.name}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              <ProductImage 
                image={`${API}${product.image}`}
                name={product.name}
              />
              <ProductInfo
                product={product}
                isBuying={isBuying}
                handleBuyNow={handleBuyNow}
                error={error}
              />
            </div>

            {/* Produk Lainnya section */}
            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                Produk Lainnya
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {miniProducts && miniProducts.length > 0 ? (
                  miniProducts.map((p) => (
                    <Card
                      key={p.id}
                      id={p.id}
                      name={p.name}
                      price={p.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
                      image={`${API}${p.image}`}
                    />
                  ))
                ) : (
                  <p className="text-sm text-gray-500">Tidak ada produk lain.</p>
                )}
              </div>
            </section>
          </div>
          <div></div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default ProductDetail;
