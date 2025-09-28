import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on navigation
  const handleNavClick = () => setIsOpen(false);

  return (
    <nav className="w-full bg-white shadow-md my-5">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <h1 className="text-xl font-bold tracking-wide text-gray-800">
          <Link to="/" onClick={handleNavClick}>
            InvestorOS
          </Link>
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li>
            <Link
              to="/mb"
              className="transition-colors duration-200 hover:text-[#8DD3BB]"
            >
              Morning Brief
            </Link>
          </li>
          <li>
            <Link
              to="/pipeline"
              className="transition-colors duration-200 hover:text-[#8DD3BB]"
            >
              Pipeline
            </Link>
          </li>
          <li>
            <Link
              to="/diligence"
              className="transition-colors duration-200 hover:text-[#8DD3BB]"
            >
              Diligence
            </Link>
          </li>
        </ul>

        {/* Right-side actions (desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/sign"
            className="px-4 py-2 rounded-md bg-[#8DD3BB] text-gray-900 font-semibold transition-opacity hover:opacity-90"
          >
            Sign in
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 transition-colors hover:text-[#8DD3BB]"
          >
            Login
          </Link>
        </div>

        {/* Burger Menu Icon (mobile) */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <i className="ri-close-line"></i> : <i className="ri-menu-line"></i>}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 shadow-inner">
          <ul className="flex flex-col items-center space-y-4 py-6 font-medium text-gray-700">
            <li>
              <Link
                to="/mb"
                onClick={handleNavClick}
                className="transition-colors duration-200 hover:text-[#8DD3BB]"
              >
                Morning Brief
              </Link>
            </li>
            <li>
              <Link
                to="/pipeline"
                onClick={handleNavClick}
                className="transition-colors duration-200 hover:text-[#8DD3BB]"
              >
                Pipeline
              </Link>
            </li>
            <li>
              <Link
                to="/diligence"
                onClick={handleNavClick}
                className="transition-colors duration-200 hover:text-[#8DD3BB]"
              >
                Diligence
              </Link>
            </li>
            <li className="w-full px-6">
              <Link
                to="/sign"
                onClick={handleNavClick}
                className="block w-full text-center px-4 py-2 rounded-md bg-[#8DD3BB] text-gray-900 font-semibold transition-opacity hover:opacity-90"
              >
                Sign in
              </Link>
            </li>
            <li className="w-full px-6">
              <Link
                to="/login"
                onClick={handleNavClick}
                className="block w-full text-center px-4 py-2 rounded-md border border-gray-300 text-gray-700 transition-colors hover:text-[#8DD3BB]"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
