import React from 'react';

const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
};

const OrderSummary = ({ order }) => {
  // Ensure order and order.product are not null
  if (!order || !order.product) {
    return (
      <div className="rounded-xl bg-gray-50 p-6">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">Order Summary</h2>
        <p>No product information available.</p>
      </div>
    );
  }

  const product = Array.isArray(order.product) ? order.product : [order.product];

  const subtotal = product.reduce((acc, currentItem) => acc + currentItem.price, 0);
  const shipping = 50000;
  const taxes = subtotal * 0.1;
  const total = subtotal + shipping + taxes;

  return (
    <div className="rounded-xl bg-gray-50 p-6">
      <h2 className="mb-4 text-xl font-semibold text-gray-800">Order Summary</h2>
      <div className="space-y-4">
        {product.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <div
              className="aspect-square size-16 rounded-lg bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('http://172.16.10.24:9009${item.image}')` }}
            ></div>
            <div className="flex-1">
              <p className="font-medium text-gray-800">{item.name}</p>
             
            </div>
            <p className="font-medium text-gray-800">{formatPrice(item.price)}</p>
          </div>
        ))}
      </div>
      <div className="my-6 border-t border-gray-200"></div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <p className="text-gray-500">Subtotal</p>
          <p className="font-medium text-gray-800">{formatPrice(subtotal)}</p>
        </div>
        <div className="flex justify-between text-sm">
          <p className="text-gray-500">Shipping</p>
          <p className="font-medium text-gray-800">{formatPrice(shipping)}</p>
        </div>
        <div className="flex justify-between text-sm">
          <p className="text-gray-500">Taxes (10%)</p>
          <p className="font-medium text-gray-800">{formatPrice(taxes)}</p>
        </div>
      </div>
      <div className="my-6 border-t border-gray-200"></div>
      <div className="flex justify-between text-lg font-semibold">
        <p className="text-gray-900">Total</p>
        <p className="text-indigo-600">{formatPrice(total)}</p>
      </div>
    </div>
  );
};

export default OrderSummary;
