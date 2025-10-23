import React, { useState } from 'react';
import { Phone, ChevronDown, Menu, X, Mountain } from 'lucide-react';

const Navbar = ({ onLogoClick, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleContactClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate('contact');
    }
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate('home');
    }
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate('about');
    }
  };

  const handleBlogsClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate('blogs');
    }
  };

  return (
    <nav className="bg-black/40 backdrop-blur-md fixed w-full z-50 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition" 
            onClick={onLogoClick}
          >
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <Mountain className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold">Kashmir</div>
              <div className="text-xs text-gray-300">A Travel Agency</div>
            </div>
          </div>

          <div className="hidden lg:flex space-x-8">
            <a 
              href="#home" 
              onClick={handleHomeClick}
              className="text-white hover:text-purple-400 transition-colors"
            >
              Home
            </a>
            <a href="#" className="text-white hover:text-purple-400 transition-colors flex items-center">
              Features <ChevronDown className="w-4 h-4 ml-1" />
            </a>
            <a href="#" className="text-white hover:text-purple-400 transition-colors flex items-center">
              Pages <ChevronDown className="w-4 h-4 ml-1" />
            </a>
            <a 
              href="#blogs" 
              onClick={handleBlogsClick}
              className="text-white hover:text-purple-400 transition-colors"
            >
              Blogs
            </a>
            <a 
              href="#about" 
              onClick={handleAboutClick}
              className="text-white hover:text-purple-400 transition-colors"
            >
              About
            </a>
            <a 
              href="#contact" 
              onClick={handleContactClick}
              className="text-white hover:text-purple-400 transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-3 lg:space-x-6">
            <div className="hidden md:flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <div>
                <div className="text-xs text-gray-300">Call Us:</div>
                <div className="text-sm font-semibold text-white">+123 5959 66</div>
              </div>
            </div>
            
            <button 
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/20 relative z-50 bg-black/50 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              <a 
                href="#home" 
                onClick={handleHomeClick}
                className="text-white hover:text-purple-400 transition-colors"
              >
                Home
              </a>
              <a href="#" className="text-white hover:text-purple-400 transition-colors flex items-center">
                Features <ChevronDown className="w-4 h-4 ml-1" />
              </a>
              <a href="#" className="text-white hover:text-purple-400 transition-colors flex items-center">
                Pages <ChevronDown className="w-4 h-4 ml-1" />
              </a>
              <a 
                href="#blogs" 
                onClick={handleBlogsClick}
                className="text-white hover:text-purple-400 transition-colors"
              >
                Blogs
              </a>
              <a 
                href="#about" 
                onClick={handleAboutClick}
                className="text-white hover:text-purple-400 transition-colors"
              >
                About
              </a>
              <a 
                href="#contact" 
                onClick={handleContactClick}
                className="text-white hover:text-purple-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;