import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => (
  <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
    <Link to={'/'} className="hover:text-primary transition-colors">
      Home
    </Link>
    <Link to={'/product-list'} className="hover:text-primary transition-colors">
      Shop
    </Link>
    <Link to={'/about'} className="hover:text-primary transition-colors" href="#">
      About
    </Link>
  </div>
);

export default NavLinks;
