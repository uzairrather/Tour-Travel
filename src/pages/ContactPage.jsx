import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = ({ onLogoClick, onNavigate }) => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar onLogoClick={onLogoClick} onNavigate={onNavigate} />

      {/* Hero Section with Background */}
      <div 
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-white">
          <p className="text-sm mb-2">* This Offer Valid Till 22 August</p>
          <h1 className="text-5xl font-bold mb-4">Contact With Us</h1>
          <div className="flex items-center space-x-2 text-sm">
            <span>Home</span>
            <span>&gt;</span>
            <span>Pages</span>
            <span>&gt;</span>
            <span>Contact</span>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Information Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Information:</h2>
            <p className="text-gray-600 mb-8">
              Brendan Fraser, renowned actor of the silver screen, has taken on a new role as a tour guide, leveraging his passion for adventure
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-600" />
                <div>
                  <span className="font-semibold">Phone: </span>
                  <a href="tel:+1239998000" className="text-purple-600 hover:underline">+123 9998 000</a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-purple-600" />
                <div>
                  <span className="font-semibold">Website: </span>
                  <a href="http://www.info.Com" className="text-purple-600 hover:underline">www.info.Com</a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-600" />
                <div>
                  <span className="font-semibold">E-Mail: </span>
                  <a href="mailto:Info@Gmail.Com" className="text-purple-600 hover:underline">Info@Gmail.Com</a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-600" />
                <div>
                  <span className="font-semibold">Address: </span>
                  <span className="text-gray-600">1426 California, USA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Let's Connect And Get To Know Each Other</h2>
            <p className="text-gray-600 mb-8">
              Brendan Fraser, Renowned Actor Of The Silver Screen, Has Taken On A New Role As A Tour Guide, Leveraging His Passion.
            </p>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>

              <input
                type="text"
                placeholder="Website"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />

              <textarea
                placeholder="Comments"
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
              ></textarea>

              <button
                type="submit"
                className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373631531654!3d-37.817209979751554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sau!4v1566174315552!5m2!1sen!2sau"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;