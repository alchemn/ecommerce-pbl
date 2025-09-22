import React from 'react';
import { SparklesIcon, GlobeAltIcon, RocketLaunchIcon, UserIcon } from '@heroicons/react/24/outline';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col" >
      <Navbar />
      <main className="flex-1">
        <div className="bg-gray-50 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Tentang Kami</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Menghadirkan Pengalaman Belanja Terbaik untuk Anda
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Kami adalah platform marketplace yang berdedikasi untuk menghubungkan pembeli dan penjual dengan mudah, menyediakan berbagai produk berkualitas, dan memastikan setiap transaksi berjalan aman dan nyaman.
              </p>
            </div>
            <div className="mt-20">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3 lg:gap-y-16">
                <div className="relative">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <GlobeAltIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <span className="ml-16">Jangkauan Global</span>
                  </dt>
                  <dd className="ml-16 mt-2 text-base leading-7 text-gray-600">
                    Kami menghubungkan pembeli dari seluruh dunia dengan produk unik dari penjual lokal dan internasional.
                  </dd>
                </div>
                <div className="relative">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <RocketLaunchIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <span className="ml-16">Teknologi Inovatif</span>
                  </dt>
                  <dd className="ml-16 mt-2 text-base leading-7 text-gray-600">
                    Platform kami didukung oleh teknologi terbaru untuk memastikan keamanan, kecepatan, dan kemudahan penggunaan.
                  </dd>
                </div>
                <div className="relative">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <span className="ml-16">Komunitas Kreatif</span>
                  </dt>
                  <dd className="ml-16 mt-2 text-base leading-7 text-gray-600">
                    Kami mendukung para pengrajin dan pelaku usaha kecil untuk tumbuh dan menjangkau audiens yang lebih luas.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Tim Kami</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Orang-orang di Balik Layar
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="h-40 w-40 rounded-full bg-gray-200" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDIWwvdgj9iQz_iVd50WBntzMsAxl1qzn6wwayIFAK4RSWhl-uVKja4VUrCj1BZEoiZ1LGmOop--j_M4_Dc4kBd3OiAEsOnX9QOuXajnTxcb-9KMj-sz3HGsp_Yxt0kIKbibyo1J2EWJ_lr8ViKB7kNv9nTJcPGqXV6pjS3x7HlfQazCrwnVPbW5Vwi9aQhwkBR2Uwj3beiLJik-BQtA5kYZAFWrH3BVW4bbwbovylpeWlea4yrBuLJSDtX1O1UJpnlrBeHCxmalfQk5")' }} />
                <h3 className="mt-6 text-lg font-semibold text-gray-900">Jane Doe</h3>
                <p className="text-sm leading-6 text-indigo-600">CEO & Founder</p>
                <p className="mt-2 text-base leading-7 text-gray-600">Memimpin visi dan strategi untuk menghadirkan platform terbaik.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-40 w-40 rounded-full bg-gray-200" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDIWwvdgj9iQz_iVd50WBntzMsAxl1qzn6wwayIFAK4RSWhl-uVKja4VUrCj1BZEoiZ1LGmOop--j_M4_Dc4kBd3OiAEsOnX9QOuXajnTxcb-9KMj-sz3HGsp_Yxt0kIKbibyo1J2EWJ_lr8ViKB7kNv9nTJcPGqXV6pjS3x7HlfQazCrwnVPbW5Vwi9aQhwkBR2Uwj3beiLJik-BQtA5kYZAFWrH3BVW4bbwbovylpeWlea4yrBuLJSDtX1O1UJpnlrBeHCxmalfQk6")' }} />
                <h3 className="mt-6 text-lg font-semibold text-gray-900">John Smith</h3>
                <p className="text-sm leading-6 text-indigo-600">Chief Technology Officer</p>
                <p className="mt-2 text-base leading-7 text-gray-600">Bertanggung jawab atas semua inovasi teknologi di platform kami.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-40 w-40 rounded-full bg-gray-200" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDIWwvdgj9iQz_iVd50WBntzMsAxl1qzn6wwayIFAK4RSWhl-uVKja4VUrCj1BZEoiZ1LGmOop--j_M4_Dc4kBd3OiAEsOnX9QOuXajnTxcb-9KMj-sz3HGsp_Yxt0kIKbibyo1J2EWJ_lr8ViKB7kNv9nTJcPGqXV6pjS3x7HlfQazCrwnVPbW5Vwi9aQhwkBR2Uwj3beiLJik-BQtA5kYZAFWrH3BVW4bbwbovylpeWlea4yrBuLJSDtX1O1UJpnlrBeHCxmalfQk7")' }} />
                <h3 className="mt-6 text-lg font-semibold text-gray-900">Emily Clark</h3>
                <p className="text-sm leading-6 text-indigo-600">Head of Marketing</p>
                <p className="mt-2 text-base leading-7 text-gray-600">Mengembangkan strategi untuk menjangkau lebih banyak pelanggan.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;