import React from 'react';

const CheckoutSkeleton = () => (
  <div className="mx-auto max-w-4xl animate-pulse">
    <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
      <div className="mb-8 h-9 w-3/5 rounded bg-gray-200"></div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <div className="space-y-6">
            <div>
              <div className="mb-4 h-6 w-2/5 rounded bg-gray-200"></div>
              <div className="flex items-start gap-4">
                <div className="size-12 flex-shrink-0 rounded-full bg-gray-200"></div>
                <div className="flex-1 space-y-2 py-1">
                  <div className="h-4 w-4/5 rounded bg-gray-200"></div>
                  <div className="h-4 w-3/5 rounded bg-gray-200"></div>
                  <div className="h-4 w-2/5 rounded bg-gray-200"></div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-4 h-6 w-2/5 rounded bg-gray-200"></div>
              <div className="flex items-center gap-4">
                <div className="h-8 w-12 shrink-0 rounded bg-gray-200"></div>
                <div className="flex-1 space-y-2 py-1">
                  <div className="h-4 w-1/4 rounded bg-gray-200"></div>
                  <div className="h-4 w-2/4 rounded bg-gray-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-gray-100 p-6">
          <div className="mb-4 h-6 w-3/5 rounded bg-gray-200"></div>
          <div className="space-y-4">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="aspect-square size-16 rounded-lg bg-gray-200"></div>
                <div className="flex-1 space-y-2 py-1">
                  <div className="h-4 w-4/5 rounded bg-gray-200"></div>
                  <div className="h-4 w-3/5 rounded bg-gray-200"></div>
                </div>
                <div className="h-5 w-1/4 rounded bg-gray-200"></div>
              </div>
            ))}
          </div>
          <div className="my-6 border-t border-gray-200"></div>
          <div className="space-y-2">
            <div className="h-5 w-full rounded bg-gray-200"></div>
            <div className="h-5 w-full rounded bg-gray-200"></div>
            <div className="h-5 w-full rounded bg-gray-200"></div>
          </div>
          <div className="my-6 border-t border-gray-200"></div>
          <div className="h-7 w-full rounded bg-gray-200"></div>
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <div className="h-12 w-36 rounded-full bg-gray-200"></div>
      </div>
    </div>
  </div>
);

export default CheckoutSkeleton;
