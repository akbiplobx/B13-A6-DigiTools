import React, { useState } from 'react';
// cart icon
import cartIconImg from '../assets/shopping-cart.png';

const Navbar = () => {
  // cart item state
  const [cartCount, setCartCount] = useState(0);

  // menu item array
  const navLinks = [
    { name: 'Products', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Testimonials', href: '#' },
    { name: 'FAQ', href: '#' },
  ];

  return (
    <div className="navbar bg-base-100 px-4 md:px-12 py-3 shadow-sm sticky top-0 z-50">
      {/* logo section */}
      <div className="navbar-start">
        <a className="flex items-center gap-2 cursor-pointer">
          {/*  user.png  */}
          
          <span className="text-4xl p-1 font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      DigiTools
    </span>
        </a>
      </div>

      {/* middle menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="text-gray-600 hover:text-primary text-lg font-medium transition-colors">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Cart, Login, Button */}
      <div className="navbar-end gap-3.5">
        {/* cart icon section */}
        <div className="dropdown dropdown-end">
          <button 
            onClick={() => setCartCount(cartCount + 1)} 
            className="btn btn-ghost btn-circle"
          >
            <div className="indicator">
              {/*cart img */}
              <img 
                src={cartIconImg} 
                alt="Shopping Cart" 
                className="h-8 w-8 object-contain" 
              />
              {/* number/bdg */}
              <span className="badge badge-sm indicator-item badge-primary text-white border-none py-1.5 px-1 font-semibold">
                {cartCount}
              </span>
            </div>
          </button>
        </div>

        {/* loginlink */}
        <a href="#" className="text-gray-700 font-medium hover:text-primary transition-colors hidden md:flex mx-1">
          Login
        </a>

        {/* get started btn */}
        <button className="btn btn-primary rounded-full px-7 text-white bg-gradient-to-r from-blue-600 to-purple-600 border-none hover:from-blue-700 hover:to-purple-700 transition-all font-semibold hidden sm:flex">
          Get Started
        </button>

        {/* Responsive */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2.5 shadow-xl bg-base-100 rounded-box w-60 border">
            {navLinks.map((link) => (
              <li key={link.name}><a href={link.href} className="py-2.5">{link.name}</a></li>
            ))}
            <div className="divider my-1"></div>
            <li><a href="#" className="py-2.5 font-medium">Login</a></li>
            <li className="mt-1">
              <button className="btn btn-primary btn-sm rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 border-none">
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;