import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ShoppingCart = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Navbar/>
        <main className="flex-1 w-full max-w-6xl mx-auto py-12 px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h1>
              <div className="bg-white rounded-2xl shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-xl bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-_87ffhhZaQTlce2k55JTl6-nxTe-CckZ-GNRg-0u_UBKXWNSuDsWVZXCGaxmf2Rw7FGWEn4JOxVabOqbqAIdMg1tRn7Wk4k3tIYoZFWyc_zIYYuBajKRLjQ8SRfR3Q-EkpfDwITXtJ2I_CG2BsrbgmwkuawzvDVhU1vRYtgFqEq5D0l2V8QlQI6FhojycGdyw0maq4z3y7Jr9R2Mh2jmXMpkf5j42QxcFP2FnhbfhNZyQ45BY9_9UzY7rPZG_cdUeiNeyoRcoIIB")' }}></div>
                      <div>
                        <h3 className="text-base font-semibold text-gray-800">Classic Cotton T-Shirt</h3>
                        <p className="text-sm text-gray-500">Size: M, Color: White</p>
                        <p className="text-lg font-bold text-gray-900 mt-1">$25.00</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="text-gray-500 flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 cursor-pointer">-</button>
                      <span className="text-base font-medium text-gray-800">1</span>
                      <button className="text-gray-500 flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 cursor-pointer">+</button>
                      <button className="text-gray-500 hover:text-red-500 ml-2"><span className="material-symbols-outlined">delete</span></button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-xl bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDNMDgKfqSIwTl8XSkr1Z_S9iyPElE_V6-f9bVKiF5v1TMX_xDT2UxOIoJmdrQgaERUTs1tcX6GyJz0_6B7ez-BKr9JQWU3s6XHozAUNQE4XNBggn251hbr4rXcLgaueDa64oTtdemb7AhDMRGmvEpIrR62bAAPijeotHP0NShM3P_BCRuczX8c57qgJZvv051S2GCdtHYT8QWKtdPHgtRm2gy67Dbny0UL1Ex8yRkglMBa3AmSyyG4sOKA9oSeH9G3SAQIMANiKF2p")' }}></div>
                      <div>
                        <h3 className="text-base font-semibold text-gray-800">Slim-Fit Denim Jeans</h3>
                        <p className="text-sm text-gray-500">Size: S, Color: Indigo</p>
                        <p className="text-lg font-bold text-gray-900 mt-1">$65.00</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="text-gray-500 flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 cursor-pointer">-</button>
                      <span className="text-base font-medium text-gray-800">1</span>
                      <button className="text-gray-500 flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 cursor-pointer">+</button>
                      <button className="text-gray-500 hover:text-red-500 ml-2"><span className="material-symbols-outlined">delete</span></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Saved for Later</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-2xl shadow-sm overflow-hidden group">
                    <div className="w-full h-48 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCa_82KvWTZaazU4jLlPJsj5TTkjev3cYJ_8DKoRkxMMHzuBx3FyUrUTy3n1lNIVHY7VLfcYr9C8XDLiELbPQrDNJqihrlwJ5cNdR7wQ2eNDhvPVSCznhRzC26I8UFeTxy36PVNnVgFip1HsGN-tFG1OaOtc3Qn1STCyorUqn3mwQtoTggRcV4PzhqcxBniLaVfLmdrb6pqFOlBYE_bd-B7xfejSO4X-dQhII230pEu63SqYkgaAH_JIOq8TDZ0DnQAkXo6692C0Rj_")' }}></div>
                    <div className="p-4">
                      <h3 className="text-base font-semibold text-gray-800">Leather Biker Jacket</h3>
                      <p className="text-sm text-gray-500">$199.00</p>
                      <button className="w-full mt-3 py-2 px-4 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-bold hover:bg-indigo-100">Move to Cart</button>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl shadow-sm overflow-hidden group">
                    <div className="w-full h-48 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA8yQ3UEuoqA6U0qLn5ub__mlbkPR7k-OhK83LPu7SGiON5X8SWXwowWRQbNWdwB1JgO5OOhJGi6ut2kvlO6s_AUDyzGrtcvgrCwndkFM0LoZsX1JLWHPYtGg9iGOT4pTF3CR89z1ZhUqeDjhyZtfM8vOvbx2oqGaYaM3bgnsmK4aWdb-o4LiUbu8szkYMx-fAuaYvh6ighOA2w4dbdUBOi9cniWbGU9mprX03ac0Pm4KSDgDO1kJOgnQ38Rx4oPJPi3poOkiorH5Ex")' }}></div>
                    <div className="p-4">
                      <h3 className="text-base font-semibold text-gray-800">Cashmere Wool Sweater</h3>
                      <p className="text-sm text-gray-500">$120.00</p>
                      <button className="w-full mt-3 py-2 px-4 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-bold hover:bg-indigo-100">Move to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-28">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-medium text-gray-800">$90.00</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Shipping</span>
                    <span className="font-medium text-gray-800">$5.00</span>
                  </div>
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Discount</span>
                    <span className="font-medium">-$10.00</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Tax (5%)</span>
                    <span className="font-medium text-gray-800">$4.00</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex justify-between text-base font-bold text-gray-900">
                    <span>Total</span>
                    <span>$89.00</span>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex gap-2">
                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-800 focus:outline-0 focus:ring-2 focus:ring-indigo-300 border border-gray-300 bg-white h-11 placeholder:text-gray-400 p-3 text-sm font-normal" placeholder="Enter coupon code" defaultValue="" />
                    <button className="flex items-center justify-center rounded-lg h-11 px-4 bg-gray-200 text-gray-700 text-sm font-bold hover:bg-gray-300">Apply</button>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="flex w-full items-center justify-center rounded-xl h-12 px-6 bg-indigo-500 text-white text-base font-bold shadow-md hover:bg-indigo-700 transition-colors duration-300">
                    <span className="truncate">Proceed to Checkout</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    </div>
  );
};

export default ShoppingCart;