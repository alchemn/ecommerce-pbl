import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/outline';

const ShippingDetails = ({ user }) => (
  <div>
    <h2 className="mb-4 text-xl font-semibold text-gray-800">Shipping Address</h2>
    <div className="flex items-start gap-4">
      <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
        <MapPinIcon className="h-6 w-6" />
      </div>
      <div>
        <p className="font-medium text-gray-800">{user.profile.name}</p>
        <p className="text-sm text-gray-500">{user.profile.addres}</p>
        <p className="text-sm text-gray-500">Phone: {user.profile.phone}</p>
      </div>
    </div>
  </div>
);

export default ShippingDetails;
