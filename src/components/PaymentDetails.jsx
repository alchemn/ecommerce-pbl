import React from 'react';

const PaymentDetails = () => (
  <div>
    <h2 className="mb-4 text-xl font-semibold text-gray-800">Payment Method</h2>
    <div className="flex items-center gap-4">
      <div
        className="aspect-video h-8 w-12 shrink-0 bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png")',
        }}
      ></div>
      <div>
        <p className="font-medium text-gray-800">Visa</p>
        <p className="text-sm text-gray-500">Ending in 4242</p>
      </div>
    </div>
  </div>
);

export default PaymentDetails;
