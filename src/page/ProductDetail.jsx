import React from 'react';
import {
  BuildingStorefrontIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingBagIcon,
  ShareIcon,
  TruckIcon,
  StarIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
  UserCircleIcon // Ikon pengganti untuk profil
} from '@heroicons/react/24/solid';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ProductDetail() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-gray-50 group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <Navbar/>
        <main className="flex-1 px-4 sm:px-6 lg:px-24 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-2 text-sm text-gray-500 mb-6">
              <a className="hover:text-indigo-600" href="#">Clothing</a>
              <span>/</span>
              <span className="font-medium text-slate-800">T-Shirts</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="flex flex-col gap-4">
                <div className="w-full h-[500px] bg-white rounded-lg shadow-sm overflow-hidden group">
                  <div className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 ease-in-out group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJaLmasTPcTwyeecSKrt7OgoADS44gXQFj-JRRTD0fnr48m3_W5a9qZlGlkCW3Z3jnuurzIk1p3U4RzW1esgkMhEuLQ0OwRslXSHzFuwrDTIrUrR3V-aHzV19EIfkav9bolqsXuOLwFv3okZBKvN_1N3HQTnXsYRDAQS8aWxAtFvNydnTdZhQfJm1UTzNseGmL6CsNEpaki9j-RC593dtR1zcNgvea_Fy9wP9-jO_6TsQ1df5sASC8moEJaXX-pGpGogbpHe1mMznL")' }}></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="w-full h-32 bg-white rounded-lg shadow-sm overflow-hidden group">
                    <div className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 ease-in-out group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA3zCKltqSzv0iuQZi3Bn6Ze-DjZQUOw0pdbsKM5qg9KjwZ1hJ-nOeLnw397n6kKwTN8_5Jrzl79si8-LV1dR8Fs0IaN5yygpj1pBD7_2JA_PJfzstNwD7cutujSQSPIV-8J-UXEJpBUYPVSA2BukczE6LGOmEADNg5HawbDdE4M71ziaZuezwlpboD-g4drwN2xNPkEa_igsjQr9LisLiwX98qEGBQNJRarvYaxaF3p5fkoQPTnI-g-UzYghhlK1xJQlBTQKAHj_ur")' }}></div>
                  </div>
                  <div className="w-full h-32 bg-white rounded-lg shadow-sm overflow-hidden group">
                    <div className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 ease-in-out group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDLogrVJdCut8WSSP_3V3uPY1bMoQfZpJdyVWfedQVxerbEZ5F2SRGJttLbiAqVXHjskJidCMQzHV439ZRLwtwyrYOR-qqubMLeP04LmEJdocPzSN4WzHCRHnG2X7NT_HAJ5qCUqF81ILika9xaQLWDaOriKvi4uM-12-AWn6wiKQTWRye6mEd-ZbtPQzlLZBESxjcbjtLqHtrejn0RWvn0pqmMHNp9x6bJa6KWpIM3rlDwKZRhZL73Ye8lOfQBpS18JCyDXAiUy1U8")' }}></div>
                  </div>
                  <div className="w-full h-32 bg-white rounded-lg shadow-sm overflow-hidden group">
                    <div className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 ease-in-out group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuASV1u-GCv4_5BsCypdZEzKPI3LZ3wAAg6BuuA3UdGP-0MF2EmksAu6DJ4AW8uehninufir-AjHTuisQW8Carx_Qml5hDR5TJmDxurFDgGX623eY6WNjS50sKarPYPABiY71sPVCiqF_fMjOHpRV9HaMpf645lujan2WNjCV5V7GgWLMst8baY3x1HcKp8Olc6zBnCO0_RpFv4-9pjJCryNCB_vnhs_FKwJgNXiS4jU2fihyXjxj04k1k9DqkWQN7zVpsgarutL1uTW")' }}></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-3xl font-bold text-slate-800 mb-2">Premium Cotton Crew Neck T-Shirt</h1>
                <p className="text-gray-500 mb-4">A classic, comfortable t-shirt made from high-quality cotton.</p>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-yellow-400">
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4 text-gray-300" />
                  </div>
                  <span className="text-sm text-gray-600 font-medium">4.5 (125 reviews)</span>
                </div>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-slate-800">$29.99</span>
                  <span className="text-lg text-gray-500 line-through ml-2">$39.99</span>
                  <span className="text-sm font-semibold text-red-500 ml-2">25% OFF</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-2" htmlFor="size">Size</label>
                    <select className="form-select w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500/50 shadow-sm" id="size">
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-2" htmlFor="color">Color</label>
                    <select className="form-select w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500/50 shadow-sm" id="color">
                      <option>White</option>
                      <option>Black</option>
                      <option>Navy</option>
                      <option>Gray</option>
                    </select>
                  </div>
                </div>
                <p className="text-sm text-green-600 font-medium mb-6">In stock: 15</p>
                <div className="flex flex-col gap-3 mb-6">
                  <button className="w-full flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-indigo-600 text-white text-base font-bold shadow-md hover:bg-indigo-700 transition-all">
                    <ShoppingBagIcon className="h-5 w-5" />
                    Add to Cart
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-gray-800 text-white text-base font-bold shadow-md hover:bg-gray-900 transition-all">
                    Buy Now
                  </button>
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <button className="flex items-center gap-2 hover:text-indigo-600">
                    <HeartIcon className="h-5 w-5" />
                    Add to Wishlist
                  </button>
                  <button className="flex items-center gap-2 hover:text-indigo-600">
                    <ShareIcon className="h-5 w-5" />
                    Share
                  </button>
                </div>
                <hr className="my-8 border-gray-200" />
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-base font-bold text-slate-800 mb-3">Seller Information</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-center bg-no-repeat bg-cover rounded-lg" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZJWb6P60RIU15f4UUSzt8CVxL6rJ9RFy755rycNyF6n3bsko_w0RneLtj8GxCFizAtstSyJnqX6guZ-lPA4bW8kfU_9dY_WqTaJat2guQ07kGYbhCb767o8ht935FZA-kQVtDXTDEuGOubdmP4du7hYRAcNn6xn3gJKhgtqgefbdFzkaKRX5c2Oxo6URgRDc4FSOqptCNcJq_CvCaN9YgldRWh1ZvhzNwu3r0wOtrOYoGAWmqw-UUvFMozQb8iqRItnSF5u7HJHeE")' }}></div>
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">Urban Threads</p>
                      <p className="text-sm text-gray-500">4.8 stars | 95% positive</p>
                      <p className="text-xs text-gray-500">Ships from Los Angeles, CA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16">
              <div className="border-b border-gray-200">
                <nav aria-label="Tabs" className="-mb-px flex gap-6">
                  <a className="shrink-0 border-b-2 border-indigo-600 px-1 pb-4 text-sm font-medium text-indigo-600" href="#">Description</a>
                  <a className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700" href="#">Specs</a>
                  <a className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700" href="#">Q&A</a>
                  <a className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700" href="#">Reviews</a>
                  <a className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700" href="#">Related</a>
                </nav>
              </div>
              <div className="py-6">
                <h3 className="text-lg font-bold text-slate-800 mb-4">Product Description</h3>
                <p className="text-gray-600 leading-relaxed">This premium cotton crew neck t-shirt is a wardrobe essential. Made from soft, breathable cotton, it offers all-day comfort and a perfect fit. Available in a range of colors and sizes, it's ideal for everyday wear. The fabric is pre-shrunk to maintain its shape after washing, and the double-needle stitching on the collar, sleeves, and hem ensures durability.</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-4">Shipping & Returns</h3>
                  <div className="space-y-4 text-gray-600">
                    <div>
                      <label className="text-sm font-medium text-slate-700 block mb-2" htmlFor="postcode">Estimate Shipping Cost</label>
                      <div className="flex gap-2">
                        <input className="form-input flex-1 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500/50 shadow-sm" id="postcode" placeholder="Enter your postcode" type="text" />
                        <button className="rounded-lg h-11 px-4 bg-gray-200 text-slate-700 text-sm font-bold hover:bg-gray-300 transition-all">Calculate</button>
                      </div>
                      <p className="text-sm mt-2">Estimated cost: <span className="font-medium text-slate-800">$5.99</span></p>
                    </div>
                    <div className="flex items-start gap-3">
                      <TruckIcon className="h-5 w-5 text-green-500" />
                      <p>Free returns within 30 days. See our <a className="text-indigo-600 hover:underline" href="#">return policy</a> for details.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-4">Customer Reviews</h3>
                  <div className="flex items-center gap-8">
                    <div>
                      <p className="text-5xl font-bold text-slate-800">4.5</p>
                      <div className="flex text-yellow-400 mt-1">
                        <StarIcon className="h-4 w-4" /><StarIcon className="h-4 w-4" /><StarIcon className="h-4 w-4" /><StarIcon className="h-4 w-4" /><StarIcon className="h-4 w-4 text-gray-300" />
                      </div>
                      <p className="text-sm text-gray-500 mt-1">Based on 125 reviews</p>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-sm">
                        <span>5</span><StarIcon className="h-4 w-4 text-yellow-400" />
                        <div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-yellow-400 h-2 rounded-full" style={{ width: '40%' }}></div></div>
                        <span className="w-8 text-right text-gray-500">40%</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span>4</span><StarIcon className="h-4 w-4 text-yellow-400" />
                        <div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-yellow-400 h-2 rounded-full" style={{ width: '30%' }}></div></div>
                        <span className="w-8 text-right text-gray-500">30%</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span>3</span><StarIcon className="h-4 w-4 text-yellow-400" />
                        <div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-yellow-400 h-2 rounded-full" style={{ width: '15%' }}></div></div>
                        <span className="w-8 text-right text-gray-500">15%</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span>2</span><StarIcon className="h-4 w-4 text-yellow-400" />
                        <div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-yellow-400 h-2 rounded-full" style={{ width: '10%' }}></div></div>
                        <span className="w-8 text-right text-gray-500">10%</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span>1</span><StarIcon className="h-4 w-4 text-yellow-400" />
                        <div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-yellow-400 h-2 rounded-full" style={{ width: '5%' }}></div></div>
                        <span className="w-8 text-right text-gray-500">5%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-slate-800">Top Reviews (125)</h3>
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium text-slate-700" htmlFor="sort-reviews">Sort by:</label>
                  <select className="form-select rounded-lg border-gray-300 text-sm focus:border-indigo-500 focus:ring-indigo-500/50 shadow-sm" id="sort-reviews">
                    <option>Most Recent</option>
                    <option>Highest Rating</option>
                    <option>Lowest Rating</option>
                    <option>Most Helpful</option>
                  </select>
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <img alt="Emily Carter avatar" className="h-10 w-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1viTJkVWvaWozzYLf3WWkYGWXuSWyGUcujKm4ZqWRrGoDVStdbJMB9POfMaHo_NFaHUOmkOyGRVpEmW6z9ji_q7xUxpQm-so30JYpsEXcz1H4MiUgpDDjgM83Ay3l72_clF2FsoGwF2rReDxbf0KqIkwQvlfY-t9-JRPN6ddsYt9ebqoHfgkAiSb_aAal-kD8yve2sUFi9Dqk3j3yaOxWt72nEfmShV_Ai2UiDFXR2AJ4K96dDN9yGv0jiDN2mcBBTkhuSWaqXAjp" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-slate-800">Emily Carter</p>
                        <p className="text-sm text-gray-500">2023-08-15</p>
                      </div>
                      <div className="flex text-yellow-400">
                        <StarIcon className="h-4 w-4" /><StarIcon className="h-4 w-4" /><StarIcon className="h-4 w-4" /><StarIcon className="h-4 w-4" /><StarIcon className="h-4 w-4" />
                      </div>
                    </div>
                    <p className="mt-2 text-gray-600">Absolutely love this t-shirt! The cotton is so soft and comfortable, and the fit is perfect. I've washed it several times, and it still looks great. Highly recommend!</p>
                    <div className="flex gap-4 text-sm mt-3 text-gray-500">
                      <button className="flex items-center gap-1 hover:text-indigo-600"><HandThumbUpIcon className="h-4 w-4" />Helpful (12)</button>
                      <button className="flex items-center gap-1 hover:text-indigo-600"><HandThumbDownIcon className="h-4 w-4" />Not Helpful (2)</button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <img alt="David Lee avatar" className="h-10 w-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcm_xxereCcqu4H95ndqJ7J93XyoOJgeXouutaxgYhgAeKUHxSeSnd52dXNKPdl3-QhpZjw3O4Dbd-nNoPuPXBYI_bJIhkHTdmGyxWjfrZJ3-vKpzIHiLZBxbpjj-TR_JTtI3M67FS_o-3iqFMWXvXlHGpOwg1X1rfIMAg08s8uYRcUsrhysx4e5evRX_L6Sa1IKrTA4NgguL2enlsuCr0aEmrSoWB8Rhua7eKSa8cWSRgxwttX-17YXlHtrulKjCiow7Llj9udf_o" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-slate-800">David Lee</p>
                        <p className="text-sm text-gray-500">2023-07-22</p>
                      </div>
                      <div className="flex text-yellow-400">
                        <StarIcon className="h-4 w-4" /><StarIcon className="h-4 w-4" /><StarIcon className="h-4 w-4" /><StarIcon className="h-4 w-4" /><StarIcon className="h-4 w-4 text-gray-300" />
                      </div>
                    </div>
                    <p className="mt-2 text-gray-600">Great t-shirt for the price. The material is good quality, and it fits well. I've worn it a few times, and it's held up nicely. Would buy again.</p>
                    <div className="flex gap-4 text-sm mt-3 text-gray-500">
                      <button className="flex items-center gap-1 hover:text-indigo-600"><HandThumbUpIcon className="h-4 w-4" />Helpful (8)</button>
                      <button className="flex items-center gap-1 hover:text-indigo-600"><HandThumbDownIcon className="h-4 w-4" />Not Helpful (1)</button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <img alt="Sarah Johnson avatar" className="h-10 w-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU3L0zS1PmT3yr0lZwFacjyJKPWJFQ3szIlk2C5Zp_vJs7HWDLbqhridA5e2ps-9tENLETiGAm7Ta-zGTH4flEGr4GlYrRl4UO4SP9T75HnieB5PpzazdQ6f2YfAmUk8sTKv8_REc3Vv-4ieAiVcGyX6FKMaziw-8oHv39ReDaov0xPZ3Z-_p9vm4tgj95X1afNjZdK7o-EqB1FxO0UO5sN0mP_bdLWIOM2OrWwCTL9jKjeUA6YzgXkTsUiY_W2NvcX_6CueRu3IIp" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-slate-800">Sarah Johnson</p>
                        <p className="text-sm text-gray-500">2023-06-10</p>
                      </div>
                      <div className="flex text-yellow-400">
                        <StarIcon className="h-4 w-4" /><StarIcon className="h-4 w-4" /><StarIcon className="h-4 w-4" /><StarIcon className="h-4 w-4" /><StarIcon className="h-4 w-4" />
                      </div>
                    </div>
                    <p className="mt-2 text-gray-600">This t-shirt exceeded my expectations. The color is vibrant, and the fabric is so soft. It's my new favorite t-shirt. Will definitely be ordering more in different colors.</p>
                    <div className="flex gap-4 text-sm mt-3 text-gray-500">
                      <button className="flex items-center gap-1 hover:text-indigo-600"><HandThumbUpIcon className="h-4 w-4" />Helpful (15)</button>
                      <button className="flex items-center gap-1 hover:text-indigo-600"><HandThumbDownIcon className="h-4 w-4" />Not Helpful (0)</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    </div>
  );
}

export default ProductDetail;