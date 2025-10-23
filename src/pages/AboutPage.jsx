import React, { useState } from 'react';
import { Menu, X, Mountain, MapPin, Phone, Clock, ArrowRight, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = ({onLogoClick, onNavigate}) => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <Navbar onLogoClick={onLogoClick} onNavigate={onNavigate}/>

     {/* Hero */}
      <div className="h-96 bg-cover bg-center relative" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=95)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="absolute inset-0 bg-black/25 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg">Home › Pages › About Us</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Gallery */}
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300" alt="Gallery" className="rounded-lg w-full h-48 object-cover" />
            <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=300" alt="Gallery" className="rounded-lg w-full h-48 object-cover" />
            <img src="https://images.unsplash.com/photo-1517299033570-f3946e1e38e9?w=400&h=300" alt="Gallery" className="rounded-lg w-full h-48 object-cover" />
            <img src="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?w=400&h=300" alt="Gallery" className="rounded-lg w-full h-48 object-cover" />
          </div>

          {/* Text */}
          <div>
            <p className="text-purple-600 font-bold mb-2">Explore The World with Us</p>
            <h2 className="text-4xl font-bold mb-6">The Perfect Event Come True With DOWN DALE HOLIDAYS</h2>
            <p className="text-gray-600 mb-4">DOWN DALE HOLIDAYS is a dynamic setup managed by smart professionals with cumulative experience in corporate sector. We provide superior quality services and competitive rates at each stage of your event.</p>
            <p className="text-gray-600 mb-6">Our reputation stands on Integrity, Reliability, and Client Satisfaction. We don't just organize events - we build relationships that last many jobs and years.</p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded font-bold flex items-center gap-2">
              BOOK YOUR EVENT <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* About Details */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">About DOWN DALE HOLIDAYS</h3>
            <p className="text-gray-600 mb-3">DOWN DALE HOLIDAYS is a dynamic setup having ambitious growth plans in the sphere of Corporate MICE & destination management. Managed by a smart team of Professionals with cumulative experience in corporate sector, we organize Domestic as well as International Exhibitions, Conferences, Incentive tours, Off sites, Product launches, and Holiday Packages.</p>
            <p className="text-gray-600">Our professional experience in event planning encompasses a comprehensive network of relevant contacts ensuring that you are provided with superior quality of services as well as competitive rates at each stage.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Reputation</h3>
            <p className="text-gray-600 mb-3">Our reputation stands on Integrity, Reliability, and Client Satisfaction. We are committed to building relationships that last many events and years. Our main aim is client satisfaction by building a professional reputation with a perfect blend of reliability & affordability.</p>
            <p className="text-gray-600">We're a company with a blend of precision and blue-chip mentality with a healthy dose of creativity and a large dollop of fun - if this sounds like your recipe for success.</p>
          </div>
        </div>

        {/* Why Choose */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose DOWN DALE HOLIDAYS?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Reduced Operating Cost</h3>
              <p className="text-gray-600 text-sm">The outsourcing cost would always be lesser in comparison with the events managed by your own as we have larger network of tie-ups in the market all over India & across. You get a better event at a better price by taking advantage of our negotiating skills, vendor and venue relationships, and quantity buying power.</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Risk Management</h3>
              <p className="text-gray-600 text-sm">Outsourcing allows you to delegate the risk & headache and rather provides greater scope for enjoyment. You are free to attend and fully participate in your event without worrying about execution.</p>
            </div>
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Flexibility</h3>
              <p className="text-gray-600 text-sm">DOWN DALE HOLIDAYS has comprehensive network of relevant contacts, resources & expertise ensuring instant expansion or contraction of required inputs depending upon your desire.</p>
            </div>
          </div>
        </div>
        {/* Mission */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-12 text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
          <p className="mb-6 max-w-2xl mx-auto">We define DOWN DALE HOLIDAYS as a new business principle and our Vision is to carve a niche for our brand of concept based events. We endeavor to take entertainment to new heights, adhering to the Vision, with which this organization was founded.</p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <h3 className="font-bold mb-3">Vision</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ Work with our clients for their long term benefit</li>
                <li>✓ Constantly research and develop new strategies, technologies and skills</li>
                <li>✓ Provide exceptional service</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Mission</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ Maintain constant communication</li>
                <li>✓ Build lasting relationships with our clients</li>
                <li>✓ Deliver superior event experiences</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-teal-500 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready for Your Next Event?</h2>
        <button onClick={() => onNavigate('contact')} className="bg-red-500 hover:bg-red-600 px-10 py-3 rounded font-bold">GET IN TOUCH</button>
      </div>

     <Footer/>
    </div>
  );
};

export default AboutUs;