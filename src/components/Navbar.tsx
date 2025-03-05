
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-darkbg/90 backdrop-blur-md shadow-md' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <a href="#features" className="nav-link">
              Features
            </a>
            <a href="#about" className="nav-link">
              About Us
            </a>
            <div className="ml-6 flex items-center space-x-3">
              <button className="px-5 py-2 rounded-md border border-textgray/30 text-textgray hover:text-white hover:border-white transition-colors duration-300">
                Sign In
              </button>
              <button className="btn-primary">
                Connect Wallet
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-textgray focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-darkbg/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 border-b border-white/10' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-5 space-y-3">
          <a 
            href="#features" 
            className="block py-2 text-textgray hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#about" 
            className="block py-2 text-textgray hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </a>
          <div className="pt-3 space-y-3">
            <button className="w-full py-3 border border-textgray/30 rounded-md text-textgray hover:text-white hover:border-white transition-colors duration-300">
              Sign In
            </button>
            <button className="w-full btn-primary">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
