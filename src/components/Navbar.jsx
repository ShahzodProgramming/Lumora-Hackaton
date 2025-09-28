import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md my-5">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <h1 className="text-xl font-bold tracking-wide text-gray-800">
          InvestorOS
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-[#8DD3BB]"
            >
              Morning Brief
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-[#8DD3BB]"
            >
              Pipeline
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-[#8DD3BB]"
            >
              Diligence
            </a>
          </li>
          <li>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-[#8DD3BB]"
            >
              Network
            </a>
          </li>
        </ul>

        {/* Burger Menu Icon */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="ri-menu-line"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 shadow-inner">
          <ul className="flex flex-col items-center space-y-4 py-6 font-medium text-gray-700">
            <li>
              <a
                href="#"
                className="transition-colors duration-300 hover:text-[#8DD3BB]"
              >
                Morning Brief
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition-colors duration-300 hover:text-[#8DD3BB]"
              >
                Pipeline
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition-colors duration-300 hover:text-[#8DD3BB]"
              >
                Diligence
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition-colors duration-300 hover:text-[#8DD3BB]"
              >
                Network
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
