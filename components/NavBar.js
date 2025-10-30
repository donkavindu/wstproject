"use client"
import SmoothScrollLink from './SmoothScrollLink';
import { useState } from 'react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <div className="h-[7vh] w-full flex justify-center mt-3 fixed z-50">
        <div className="w-[85%] h-full bg-[#ffe7c5] flex items-center justify-between rounded-4xl px-5 text-[#766549]">
          {/* Logo */}
          <SmoothScrollLink 
            href="/" 
            className="font-bold text-lg md:text-xl"
            onClick={closeMenu}
          >
            petty<span className="font-normal">world</span>
          </SmoothScrollLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-10 items-center font-medium">
            <SmoothScrollLink href="#home" className="hover:text-[#bf8c61] transition-colors">Home</SmoothScrollLink>
            <SmoothScrollLink href="#about" className="hover:text-[#bf8c61] transition-colors">About</SmoothScrollLink>
            <SmoothScrollLink href="#portfolio" className="hover:text-[#bf8c61] transition-colors">Portfolio</SmoothScrollLink>
            <SmoothScrollLink href="#contact" className="hover:text-[#bf8c61] transition-colors">Contact</SmoothScrollLink>
          </div>

          {/* Desktop Login Button */}
          <div className="hidden md:block">
            <button onClick={() => window.location.href = '/login'} className="bg-[#bf8c61] w-20 py-1 rounded-xl text-[#fffaf4] font-medium hover:bg-[#a87a52] transition-colors">
              login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-6 h-6"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`bg-[#766549] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
            }`}></span>
            <span className={`bg-[#766549] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`bg-[#766549] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
            }`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={closeMenu}
        ></div>
        
        {/* Menu Content */}
        <div className={`absolute top-[10vh] right-[7.5%] w-[85%] bg-[#ffe7c5] rounded-2xl p-6 transition-transform duration-300 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-4'
        }`}>
          {/* Mobile Navigation Links */}
          <div className="flex flex-col gap-4 font-medium">
            <SmoothScrollLink 
              href="#home" 
              className="hover:text-[#bf8c61] transition-colors py-2 text-lg"
              onClick={closeMenu}
            >
              Home
            </SmoothScrollLink>
            <SmoothScrollLink 
              href="#about" 
              className="hover:text-[#bf8c61] transition-colors py-2 text-lg"
              onClick={closeMenu}
            >
              About
            </SmoothScrollLink>
            <SmoothScrollLink 
              href="#portfolio" 
              className="hover:text-[#bf8c61] transition-colors py-2 text-lg"
              onClick={closeMenu}
            >
              Portfolio
            </SmoothScrollLink>
            <SmoothScrollLink 
              href="#contact" 
              className="hover:text-[#bf8c61] transition-colors py-2 text-lg"
              onClick={closeMenu}
            >
              Contact
            </SmoothScrollLink>
          </div>

          {/* Mobile Login Button */}
          <div className="mt-6 pt-4 border-t border-[#766549] border-opacity-20">
            <button className="bg-[#bf8c61] w-full py-3 rounded-xl text-[#fffaf4] font-medium text-lg hover:bg-[#a87a52] transition-colors">
              login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;