import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, Hotel, Utensils, Home, Activity, Car } from 'lucide-react';

const SearchBar = () => {
  const [activeTab, setActiveTab] = useState('tour');

  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-6xl bg-white rounded-lg shadow-2xl mx-4 px-4 sm:px-6" style={{zIndex: 30}}>
      <div className="flex justify-center overflow-x-auto border-b scrollbar-hide bg-white rounded-t-lg px-8 sm:px-12 md:px-16 lg:px-24">
        <button
          onClick={() => setActiveTab('tour')}
          className={`flex-shrink-0 flex items-center gap-2 py-4 px-4 sm:px-6 font-semibold text-sm sm:text-base bg-white ${activeTab === 'tour' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600'}`}
        >
          <MapPin className="w-4 h-4" />
          <span>Tour</span>
        </button>
        <button
          onClick={() => setActiveTab('hotel')}
          className={`flex-shrink-0 flex items-center gap-2 py-4 px-4 sm:px-6 font-semibold text-sm sm:text-base bg-white ${activeTab === 'hotel' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600'}`}
        >
          <Hotel className="w-4 h-4" />
          <span>Hotel</span>
        </button>
        <button
          onClick={() => setActiveTab('restaurant')}
          className={`flex-shrink-0 flex items-center gap-2 py-4 px-4 sm:px-6 font-semibold text-sm sm:text-base bg-white ${activeTab === 'restaurant' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600'}`}
        >
          <Utensils className="w-4 h-4" />
          <span>Restaurant</span>
        </button>
        <button
          onClick={() => setActiveTab('rental')}
          className={`flex-shrink-0 flex items-center gap-2 py-4 px-4 sm:px-6 font-semibold text-sm sm:text-base bg-white ${activeTab === 'rental' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600'}`}
        >
          <Home className="w-4 h-4" />
          <span>Rental</span>
        </button>
        <button
          onClick={() => setActiveTab('activity')}
          className={`flex-shrink-0 flex items-center gap-2 py-4 px-4 sm:px-6 font-semibold text-sm sm:text-base bg-white ${activeTab === 'activity' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600'}`}
        >
          <Activity className="w-4 h-4" />
          <span>Activity</span>
        </button>
        <button
          onClick={() => setActiveTab('car')}
          className={`flex-shrink-0 flex items-center gap-2 py-4 px-4 sm:px-6 font-semibold text-sm sm:text-base bg-white ${activeTab === 'car' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600'}`}
        >
          <Car className="w-4 h-4" />
          <span>Car Rental</span>
        </button>
      </div>
      <div className="p-4 sm:p-6 bg-white rounded-b-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Destinations:</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 bg-white">
              <MapPin className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
              <input type="text" placeholder="Where are you going ..." className="w-full outline-none text-gray-700 bg-white" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Check In:</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 bg-white">
              <Calendar className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
              <input type="text" placeholder="18/10/2025" className="w-full outline-none text-gray-700 bg-white" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Check Out:</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 bg-white">
              <Calendar className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
              <input type="text" placeholder="18/10/2025" className="w-full outline-none text-gray-700 bg-white" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Guest:</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 bg-white">
              <Users className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
              <input type="text" placeholder="+ Add Guests" className="w-full outline-none text-gray-700 bg-white" />
            </div>
          </div>
          <div>
            <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center shadow-lg transition-all">
              Search <Search className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;