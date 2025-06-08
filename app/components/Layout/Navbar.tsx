'use client'

import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] transition-all duration-300">
      <div className="w-[95%] sm:w-[90%] lg:w-[70%] mx-auto mt-3 sm:mt-5">
        <div className="bg-[#67729D]/30 backdrop-blur-md border border-white/20 rounded-2xl sm:rounded-3xl px-4 sm:px-6 lg:px-12 py-3 sm:py-4 shadow-xl">
          <div className="flex justify-between items-center">
            <h1 className="font-shrik text-lg sm:text-2xl lg:text-3xl font-bold text-white hover:text-purple-300 transition-colors duration-300">
              ARYA PRATAMA
            </h1>
            
            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-2 lg:space-x-6">
              <li>
                <a 
                  href="#home" 
                  className="relative font-poppins font-bold text-white px-2 lg:px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-purple-300 hover:shadow-lg group text-sm lg:text-base"
                >
                  About Me
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  className="relative font-poppins font-bold text-white px-2 lg:px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-purple-300 hover:shadow-lg group text-sm lg:text-base"
                >
                  Experience
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#portofolio" 
                  className="relative font-poppins font-bold text-white px-2 lg:px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-purple-300 hover:shadow-lg group text-sm lg:text-base"
                >
                  Portofolio
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="relative font-poppins font-bold text-white px-2 lg:px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-purple-300 hover:shadow-lg group text-sm lg:text-base"
                >
                  Contact
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-xl" />
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
            <ul className="flex flex-col space-y-2 pt-2 border-t border-white/20">
              <li>
                <a 
                  href="#home" 
                  onClick={closeMenu}
                  className="block font-poppins font-bold text-white px-4 py-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-purple-300"
                >
                  About Me
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  onClick={closeMenu}
                  className="block font-poppins font-bold text-white px-4 py-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-purple-300"
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  href="#portofolio" 
                  onClick={closeMenu}
                  className="block font-poppins font-bold text-white px-4 py-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-purple-300"
                >
                  Portofolio
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={closeMenu}
                  className="block font-poppins font-bold text-white px-4 py-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-purple-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
} 