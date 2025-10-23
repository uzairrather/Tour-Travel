import React from 'react';
import { Play, ArrowRight } from 'lucide-react';

const VideoSection = () => {
  return (
    <div className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 items-center bg-gradient-to-r from-purple-600 to-indigo-900 rounded-2xl overflow-hidden">
          <div className="relative h-64 sm:h-80 md:h-96">
            <img src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800" alt="" className="w-full h-full object-cover" />
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white rounded-full p-4 sm:p-6 hover:scale-110 transition-transform">
                <Play className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 fill-purple-600" />
              </div>
            </button>
          </div>
          <div className="p-8 sm:p-12 text-white">
            <h3 className="font-semibold mb-4">Enjoy Summer Deals</h3>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">Up to 40% Discount!</h2>
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center">
              SEE DETAILS <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;