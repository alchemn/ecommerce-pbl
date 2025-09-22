const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-gray-300">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-12">
        {/* Left Section */}
        <div className="col-span-2 space-y-6">
          {/* Logo */}
          <div className="flex flex-row gap-4">
            <svg
              className="h-8 w-8 text-brand-primary"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
                fill="currentColor"
              ></path>
            </svg>
            <h2 className="text-brand-secondary text-3xl font-bold tracking-wide">
              PumaShop
            </h2>
          </div>

          {/* Partner Button */}
          <button className="bg-brand-accent text-white px-5 py-2 rounded-lg shadow hover:bg-brand-dark transition cursor-pointer">
            Partner With Us
          </button>

          {/* Payment Partners */}
          <div>
            <h3 className="text-white font-semibold mb-3">Payment Partners</h3>
            <div className="grid grid-cols-3 gap-3 ">
              {[
                "/public/visa.png",
                "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
                "/gopay.png",
                "https://static.cdnlogo.com/logos/o/41/ovo.svg",
                "https://static.cdnlogo.com/logos/d/5/dana.svg",
                "https://static.cdnlogo.com/logos/b/21/bank-mandiri.svg",
                "https://static.cdnlogo.com/logos/b/7/bni.svg",
              ].map((logo, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center bg-white rounded-md p-1 shadow hover:scale-110 cursor-pointer"
                >
                  <img
                    src={logo}
                    alt="Partner"
                    className="h-7 object-contain "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="text-white font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                How to Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Training and Course
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-white font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Aksesoris
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Elektronik
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Mainan
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Pakaian
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Olahraga
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Kecantikan
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Kesehatan
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Sepatu
              </a>
            </li>
          </ul>
        </div>

        {/* Others */}
        <div>
          <h3 className="text-white font-semibold mb-4">Others</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* App Download */}
        <div>
          <h3 className="text-white font-semibold mb-4">Download PumaShop</h3>
          <div className="space-y-4 flex flex-row gap-4">
            <a href="#" className="block hover:opacity-90 transition">
              <img
                className="h-12 bg-amber-50 rounded-lg"
                src="/playstore.png"
                alt="Google Play"
              />
            </a>
            <a href="#" className="block hover:opacity-90 transition">
              <img
                className="h-12"
                src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_(iOS).svg"
                alt="App Store"
              />
            </a>
          </div>
          <h3 className="text-white font-semibold mb-4">Support Partners</h3>
          <div className="space-y-4 flex flex-row gap-4">
            <a className="block hover:opacity-90 transition">
              <img
                className="h-12 bg-amber-50 rounded-lg"
                src="/bpvp.png"
                alt="BPVP Banda Aceh"
              />
            </a>
            <a className="block hover:opacity-90 transition cursor-pointer">
              <img
                className="h-12"
                src="/gcloud.png"
                alt="App Store"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 py-5 text-center text-xs text-gray-500">
        © {year} <span className="font-semibold text-gray-300">PumaShop</span>.
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
