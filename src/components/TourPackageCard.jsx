import React from 'react';
import { MapPin, Clock, Star } from 'lucide-react';

const TourPackageCard = ({ tour, onClick }) => {
  return (
    <div 
      onClick={() => onClick(tour)} 
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
    >
      <div className="relative">
        <img src={tour.image} alt={tour.title} className="w-full h-48 object-cover" />
        <span className={`absolute top-4 left-4 ${tour.badgeColor} text-white px-3 py-1 rounded text-sm font-semibold`}>
          {tour.badge}
        </span>
        <button className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg mb-3">{tour.title}</h3>
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          {tour.location}
        </div>
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <Clock className="w-4 h-4 mr-1" />
          {tour.days}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            {tour.oldPrice && (
              <span className="text-gray-400 line-through text-sm mr-2">${tour.oldPrice}</span>
            )}
            <span className="text-purple-600 font-bold text-2xl">${tour.price}</span>
            <span className="text-gray-600 text-sm">/Person</span>
          </div>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < tour.reviews ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
            ))}
            <span className="text-sm text-gray-600 ml-1">({tour.reviews})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourPackageCard;