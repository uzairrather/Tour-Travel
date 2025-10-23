import React from 'react';
import { ArrowRight } from 'lucide-react';

const ExploreSection = () => {
  return (
    <div className="relative h-96 sm:h-[500px] md:h-[600px] lg:h-[700px] bg-cover bg-center overflow-hidden" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1920)'}}>
      <div className="absolute inset-0 bg-gradient-to-b from-teal-500/30 to-teal-600/40"></div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 text-center">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-4 tracking-wide">Next Adventure Destination</h3>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 max-w-5xl leading-tight">
          Popular Travel Destinations<br />Available Worldwide
        </h2>
        <button className="bg-white text-purple-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center shadow-lg hover:shadow-xl transition-all">
          BOOK YOUR TRIP NOW <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white/20 text-center tracking-wider py-4 sm:py-8" style={{
          WebkitTextStroke: '2px rgba(255,255,255,0.3)',
          textStroke: '2px rgba(255,255,255,0.3)',
          color: 'transparent'
        }}>
          EXPLORE THE WORLD
        </h1>
      </div>
    </div>
  );
};

export default ExploreSection;