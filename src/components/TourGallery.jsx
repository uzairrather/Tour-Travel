import React, { useState } from 'react';

const TourGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleries = [
    { id: 1, src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=600&fit=crop", category: "europe", title: "Paris" },
    { id: 2, src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=600&fit=crop", category: "beach", title: "Maldives" },
    { id: 3, src: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=600&fit=crop", category: "mountain", title: "Swiss Alps" },
    { id: 4, src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop", category: "mountain", title: "Himalayas" },
    { id: 5, src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=600&fit=crop", category: "beach", title: "Bali" },
    { id: 6, src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=600&fit=crop", category: "desert", title: "Morocco" },
  ];

  const filters = [
    { id: 'all', label: 'All Photos' },
    { id: 'europe', label: 'Europe' },
    { id: 'beach', label: 'Beach' },
    { id: 'mountain', label: 'Mountain' },
    { id: 'desert', label: 'Desert' },
  ];

  const filteredGalleries = activeFilter === 'all' 
    ? galleries 
    : galleries.filter(g => g.category === activeFilter);

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto mt-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h3 className="text-red-500 font-semibold text-sm uppercase tracking-wide mb-3">Our Tour Gallery</h3>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Best Traveler's Shared Photos
        </h2>
        <p className="text-gray-600 text-base max-w-2xl mx-auto">
          Explore breathtaking destinations through the lens of real travelers. Each photo tells a story of adventure, discovery, and wanderlust.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map(filter => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
              activeFilter === filter.id
                ? 'bg-red-500 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGalleries.map((gallery, idx) => (
          <div
            key={gallery.id}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            style={{
              animation: `slideUp 0.5s ease-out ${idx * 0.1}s both`
            }}
          >
            <div className="relative h-64 overflow-hidden bg-gray-200">
              <img
                src={gallery.src}
                alt={gallery.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300" />
              
              {/* Title overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-bold text-2xl text-center">{gallery.title}</p>
              </div>
            </div>

            {/* Category badge */}
            <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold capitalize opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {gallery.category}
            </div>
          </div>
        ))}
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default TourGallery;