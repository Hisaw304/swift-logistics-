import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/swift.png";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Swift Logistics Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold text-blue-700">
            Swift Logistics
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="text-2xl text-gray-700"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">
          <Link
            to="/"
            onClick={closeMenu}
            className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
          >
            Home
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
