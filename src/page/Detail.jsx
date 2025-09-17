import React from 'react';
import Navbar from '../components/Navbar';

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
                  <button className="flex w-full items-center justify-center rounded-xl h-12 px-6 bg-[var(--primary-color)] text-white text-base font-bold shadow-md hover:bg-indigo-700 transition-colors duration-300">
                    <span className="truncate">Proceed to Checkout</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="bg-white border-t border-gray-200">
          <div className="max-w-6xl mx-auto py-10 px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3 text-indigo-600">
                <span className="material-symbols-outlined text-3xl">store</span>
                <h2 className="text-gray-800 text-xl font-bold">MarketSquare</h2>
              </div>
              <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
                <a className="text-gray-500 hover:text-indigo-600 text-sm" href="#">About Us</a>
                <a className="text-gray-500 hover:text-indigo-600 text-sm" href="#">Contact</a>
                <a className="text-gray-500 hover:text-indigo-600 text-sm" href="#">Terms of Service</a>
                <a className="text-gray-500 hover:text-indigo-600 text-sm" href="#">Privacy Policy</a>
              </nav>
              <div className="flex gap-4">
                <a className="text-gray-400 hover:text-indigo-600" href="#"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg></a>
                <a className="text-gray-400 hover:text-indigo-600" href="#"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.438 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" fillRule="evenodd"></path></svg></a>
                <a className="text-gray-400 hover:text-indigo-600" href="#"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.86.383-1.244.767-.383.383-.585.777-.767 1.244-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.383.86.767 1.244.383.383.777.585 1.244.767.353.137.882.3 1.857.344 1.023.047 1.351.058 3.807.058h.468c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207 1.857-.344.467-.182.86-.383 1.244-.767.383-.383.585-.777.767-1.244.137-.353.3-.882.344-1.857.047-1.023.058-1.351.058-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857a3.097 3.097 0 00-.767-1.244 3.097 3.097 0 00-1.244-.767c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" fillRule="evenodd"></path></svg></a>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-8">© 2024 MarketSquare. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ShoppingCart;