import React from 'react';

const PopularDestinations = ({ destinations }) => {
  return (
    <div className="py-20 px-4 bg-white relative overflow-hidden">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-5 hidden md:block">
        <svg className="w-48 h-72 lg:w-64 lg:h-96" viewBox="0 0 100 200" fill="currentColor">
          <path d="M50,20 L30,60 L50,40 L70,60 Z M50,80 L50,140 M30,140 L70,140 M40,160 L60,160 M45,180 L55,180" stroke="currentColor" strokeWidth="3" fill="none"/>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <h3 className="text-purple-600 font-semibold mb-4">Next Adventure Destination</h3>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Popular Travel Destinations Available Worldwide</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Are You Tired Of The Typical Tourist Destinations And Looking To Step Out Of Your Comfort Zonetravel</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, idx) => (
            <div key={idx} className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl">
                <img src={dest.image} alt={dest.name} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">{dest.tours}</span>
                  <h3 className="text-white text-2xl font-bold mt-3">{dest.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;