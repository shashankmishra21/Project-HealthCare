import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // For hamburger icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-green-700 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-white text-green-700 font-bold w-10 h-10 rounded-full flex items-center justify-center shadow">
            Q3
          </div>
          <span className="text-xl font-semibold text-white tracking-wide">
            ClinicFinder
          </span>
        </div>

        {/* Hamburger for mobile */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <a href="#" className="hover:text-yellow-300 transition">
            Home
          </a>
          <a href="#" className="hover:text-yellow-300 transition">
            About Us
          </a>
          <a href="#" className="hover:text-yellow-300 transition">
            Health Articles
          </a>
          <a href="#" className="hover:text-yellow-300 transition">
            Contact Us
          </a>
          <a href="#" className="hover:text-yellow-300 transition">
            Specialities
          </a>
        </nav>

        {/* Auth section */}
        <div className="hidden md:flex items-center space-x-4 text-sm">
          <div className="bg-white text-green-700 px-4 py-2 rounded-md shadow-sm flex items-center space-x-2">
            <a href="#" className="hover:underline">
              Patient Sign In
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:underline">
              Doctor Sign In
            </a>
          </div>
          <button className="bg-white text-green-700 px-4 py-2 rounded-md shadow-sm hover:bg-gray-100 transition">
            Logout
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-green-600 px-6 pb-4 space-y-4 font-medium">
          <a href="#" className="block hover:text-yellow-300">
            Home
          </a>
          <a href="#" className="block hover:text-yellow-300">
            About Us
          </a>
          <a href="#" className="block hover:text-yellow-300">
            Health Articles
          </a>
          <a href="#" className="block hover:text-yellow-300">
            Contact Us
          </a>
          <a href="#" className="block hover:text-yellow-300">
            Specialities
          </a>
          <div className="bg-white text-green-700 px-4 py-3 rounded-md space-y-2 shadow">
            <a href="#" className="block hover:underline">
              Patient Sign In
            </a>
            <a href="#" className="block hover:underline">
              Doctor Sign In
            </a>
          </div>
          <button className="w-full bg-white text-green-700 px-4 py-2 rounded-md shadow hover:bg-gray-100 transition">
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
