import React from 'react';
import { Mountain, ArrowRight, Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <Mountain className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-bold">Kashmir</div>
                <div className="text-xs text-gray-400">A Travel Agency</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">Pharetra Maecenas Felis Vestibulum Convallis Mollis Nullam Congue Sild Rviers Of Finland Quebec.</p>
            <div className="relative">
              <input type="email" placeholder="Enter your mail" className="w-full bg-gray-800 px-4 py-3 rounded-lg pr-12 outline-none text-sm sm:text-base" />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 p-2 rounded-lg">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="flex space-x-3 mt-6">
              <a href="#" className="bg-gray-800 hover:bg-purple-600 p-2 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-purple-600 p-2 rounded-full transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-purple-600 p-2 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-purple-600 p-2 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                </svg>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-purple-600 p-2 rounded-full transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li><a href="#" className="text-gray-400 hover:text-purple-400">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400">Tour Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Information</h3>
            <div className="space-y-4 text-sm sm:text-base">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-400">58 Street Commercial Road Fratton, Australia</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <p className="text-gray-400">+123 888 9999</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Mon - Sat: 8 Am - 5 Pm,</p>
                  <p>Sunday: <span className="text-white">CLOSED</span></p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Utility Pages</h3>
            <ul className="space-y-3 text-sm sm:text-base">
              <li><a href="#" className="text-gray-400 hover:text-purple-400">Style Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400">Password Protected</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400">404 Error</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400">Changelog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400">Licenses</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm sm:text-base">
          <p>Copyright ©Kashmir | All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;