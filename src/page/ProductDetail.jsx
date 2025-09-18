import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ProductDetail() {
  const { id } = useParams(); // ambil param dari url
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isBuying, setIsBuying] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getProductById = async () => {
      try {
        const res = await axios.get(`http://172.16.10.24:9009/product/${id}`);
        setProduct(res.data); // simpan data ke state
      } catch (error) {
        console.log("error ambil data", error);
      } finally {
        setLoading(false);
      }
    };
    getProductById();
  }, [id]);

  useEffect(() => {
    if (!isBuying) return;

    const postBuyRequest = async () => {
      setError(null);
      try {
        if (!product) {
          setError('Product not loaded');
          setIsBuying(false);
          return;
        }
        // Try get userId from localStorage as default; replace with your auth source if available
        const storedUserId = localStorage.getItem("userId");
        const userId = storedUserId ? Number(storedUserId) : 1; // fallback to 1 for testing

        // Backend expects { userId, productIds: [id, ...] } per your test
        const payload = {
          userId,
          productIds: [product.id]
        };
        console.log('Order payload:', payload);

        const response = await axios.post("http://172.16.10.24:9009/order/", payload);
        console.log("Buy request successful:", response.data);

        // Navigate to order page (use returned id if available)
        const orderId = response.data?.id;
        if (orderId) navigate(`/order/${orderId}`);
        else navigate(`/order`);
      } catch (err) {
        // Log detailed server response if available to diagnose validation errors
        console.error("Error posting buy request:", err);
        console.error('server response:', err?.response?.status, err?.response?.data);
        const serverMsg = err?.response?.data?.message || err?.response?.data || err.message;
        setError(serverMsg);
      } finally {
        setIsBuying(false);
      }
    };

    postBuyRequest();
  }, [isBuying, id, navigate, product]);

  const handleBuyNow = () => {
    setIsBuying(true);
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
            {/* Breadcrumb */}
            <div className="flex gap-2 text-sm text-gray-500 mb-6">
              <a className="hover:text-indigo-600" href="#">
                {product.category?.name || "Category"}
              </a>
              <span>/</span>
              <span className="font-medium text-slate-800">
                {product.name}
              </span>
            </div>

            {/* Grid gambar + detail */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Gambar utama */}
              <div className="flex flex-col gap-4">
                <div className="w-full h-[500px] bg-white rounded-lg shadow-sm overflow-hidden">
                  <img
                    src={
                      product.image?.startsWith("http")
                        ? product.image
                        : `http://172.16.10.24:9009${product.image}`
                    }
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Detail produk */}
              <div className="flex flex-col">
                <h1 className="text-3xl font-bold text-slate-800 mb-2">
                  {product.name}
                </h1>
                <p className="text-gray-500 mb-4">{product.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-slate-800">
                    Rp {product.price?.toLocaleString()}
                  </span>
                </div>

                <p className="text-sm text-green-600 font-medium mb-6">
                  In stock: {product.stock}
                </p>

                <div className="flex flex-col gap-3 mb-6">
                  <button className="w-full rounded-lg h-12 px-6 bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all">
                    Add to Cart
                  </button>
                  {/* Perform POST then navigate; don't wrap with Link to avoid navigation before request completes */}
                  <button
                    onClick={handleBuyNow}
                    disabled={isBuying}
                    className={`w-full rounded-lg h-12 px-6 text-white font-bold transition-all ${isBuying ? 'bg-gray-500 cursor-not-allowed' : 'bg-gray-800 hover:bg-gray-900'}`}
                  >
                    {isBuying ? 'Processing...' : 'Buy Now'}
                  </button>

                  {error && (
                    <p className="text-sm text-red-600 mt-2">Gagal melakukan pembelian. Cek console untuk detail.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default ProductDetail;
