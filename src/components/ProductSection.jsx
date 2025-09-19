import React from "react";
import useSWR from "swr";
import { getLatestProducts } from "../api";
import Card from "./Card";

const fetcher = () => getLatestProducts().then((res) => res.data);

const ProductSection = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useSWR("latestProducts", fetcher);

  if (error) {
    return <div className="text-red-500">Failed to load products.</div>;
  }

  return (
    <section className="space-y-6">
      <h2 className="text-gray-900 text-3xl font-bold leading-tight tracking-tighter px-4">
        Latest Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          (products.product || products).map((product) => (
            <Card
              id={product.id}
              key={product.id}
              name={product.name}
              price={product.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
              image={`${import.meta.env.VITE_API_URL}${product.image}`}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default ProductSection;
