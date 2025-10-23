import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const HeroSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 15000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, index) => (
          <div 
            key={`slide-${index}-${currentSlide === index ? 'active' : 'inactive'}`}
            className={`absolute inset-0 bg-cover bg-center hero-slide ${
              index === currentSlide ? 'active' : 'inactive'
            } ${index % 2 === 0 ? 'drone-zoom-in' : 'drone-zoom-out'}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              zIndex: index === currentSlide ? 1 : 0
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/20 z-10"></div>
      </div>
      
      <button 
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-3 sm:p-4 rounded-full transition-all z-30"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-3 sm:p-4 rounded-full transition-all z-30"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </button>

      <div className="relative pt-32 h-full flex flex-col items-center justify-center text-white px-4 z-20">
        <div className="text-center mb-8">
          <p className="text-sm sm:text-lg mb-4">* This Offer Valid Till 22 August</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">{slides[currentSlide].title}</h1>
          <p className="text-base sm:text-xl mb-2">{slides[currentSlide].subtitle}</p>
          <p className="text-base sm:text-xl mb-6">{slides[currentSlide].subtitle2}</p>
          <div className="text-3xl sm:text-4xl font-bold mb-8">
            Booking Start From <span className="text-4xl sm:text-5xl">${459}</span><span className="text-xl sm:text-2xl">/night</span>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold flex items-center mx-auto">
            TAKE A TOUR <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;