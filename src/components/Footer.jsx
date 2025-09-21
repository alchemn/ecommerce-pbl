const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-12">
        
        {/* Left Section */}
        <div className="col-span-2 space-y-6">
          {/* Logo */}
          <h2 className="text-white text-2xl font-bold">ShopSmart</h2>

          {/* Partner Button */}
          <button className="bg-gray-800 text-gray-200 px-4 py-2 rounded-md hover:bg-gray-700 transition">
            Partner with ShopSmart
          </button>

          {/* Payment Partners */}
          <div>
            <h3 className="text-white font-semibold mb-3">Payment Partners</h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1920px-Visa_2021.svg.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/800px-Mastercard-logo.svg.png",
                "https://via.placeholder.com/80x40?text=BCA",
                "https://via.placeholder.com/80x40?text=Mandiri",
                "https://via.placeholder.com/80x40?text=BNI",
                "https://via.placeholder.com/80x40?text=Gopay",
              ].map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt="Partner"
                  className="h-8 object-cover bg-white rounded p-1"
                />
              ))}
            </div>
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="text-white font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">How to Shop</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-white font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Electronics</a></li>
            <li><a href="#" className="hover:text-white">Fashion</a></li>
            <li><a href="#" className="hover:text-white">Groceries</a></li>
            <li><a href="#" className="hover:text-white">Furniture</a></li>
          </ul>
        </div>

        {/* Others */}
        <div>
          <h3 className="text-white font-semibold mb-4">Others</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
          </ul>
        </div>

        {/* App Download */}
        <div>
          <h3 className="text-white font-semibold mb-4">Download ShopSmart App</h3>
          <div className="space-y-3">
            <a href="#">
              <img
                className="h-12"
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
              />
            </a>
            <a href="#">
              <img
                className="h-12"
                src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_(iOS).svg"
                alt="App Store"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 py-4 text-center text-xs text-gray-500">
        © {year} ShopSmart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
