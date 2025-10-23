import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import SearchBar from '../components/SearchBar';
import TourGallery from '../components/TourGallery';
import TourPackageCard from '../components/TourPackageCard';
import PopularDestinations from '../components/PopularDestinations';
import DreamTripSection from '../components/DreamTripSection';
import VideoSection from '../components/VideoSection';
import ExploreSection from '../components/ExploreSection';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogSection from '../components/BlogSection';
import ContactInfoSection from '../components/ContactInfoSection';
import Footer from '../components/Footer';

import { heroSlides } from '../data/heroSlides';
import { tourPackages } from '../data/tourPackages';
import { destinations } from '../data/destinations';
import { testimonials } from '../data/testimonials';
import { blogs } from '../data/blogs';

const HomePage = ({ onTourClick, onNavigate }) => {
  const [activePackageTab, setActivePackageTab] = useState('hotel');

  const handleLogoClick = () => {
    if (onNavigate) {
      onNavigate('home');
    }
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar isDark={true} onLogoClick={handleLogoClick} onNavigate={onNavigate} />
      
      <HeroSlider slides={heroSlides} />
      <SearchBar />

      <TourGallery />

      {/* Tour Packages */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-purple-600 font-semibold mb-4">Most Popular Tour Packages</h3>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Something Amazing Waiting For you</h2>
            <div className="flex justify-center overflow-x-auto space-x-4 sm:space-x-8 mt-8 scrollbar-hide px-4">
              {['Hotel', 'Restaurant', 'Rental', 'Activity', 'Car Rental'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActivePackageTab(tab.toLowerCase())}
                  className={`py-2 px-4 font-semibold whitespace-nowrap ${activePackageTab === tab.toLowerCase() ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tourPackages.map((pkg) => (
              <TourPackageCard key={pkg.id} tour={pkg} onClick={onTourClick} />
            ))}
          </div>
        </div>
      </div>

      <DreamTripSection />
      <VideoSection />
      <PopularDestinations destinations={destinations} />
      <ExploreSection />
      <TestimonialsSection testimonials={testimonials} />
      <BlogSection blogs={blogs} />
      <ContactInfoSection />
      <Footer />
    </div>
  );
};

export default HomePage;