import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import TourDetailsPage from './pages/TourDetailsPage';
import ContactPage from './pages/ContactPage';
import AboutUs from './pages/AboutPage';
import BlogsPage from './pages/BlogsPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedTour, setSelectedTour] = useState(null);

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .scrollbar-hide::-webkit-scrollbar { display: none; }
      .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      @keyframes droneZoomIn { 0% { transform: scale(1); } 100% { transform: scale(1.3); } }
      @keyframes droneZoomOut { 0% { transform: scale(1.2); } 100% { transform: scale(1); } }
      .drone-zoom-in { animation: droneZoomIn 30s ease-out forwards; }
      .drone-zoom-out { animation: droneZoomOut 30s ease-out forwards; }
      .hero-slide { transition: opacity 1.2s ease-in-out; }
      .hero-slide.active { opacity: 1; animation-play-state: running; }
      .hero-slide.inactive { opacity: 0; animation-play-state: paused; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const handleTourClick = (tour) => {
    setSelectedTour(tour);
    setCurrentPage('details');
    window.scrollTo(0, 0);
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setSelectedTour(null);
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedTour(null);
    window.scrollTo(0, 0);
  };

  // Blogs Page
  if (currentPage === 'blogs') {
    return (
      <BlogsPage 
        onLogoClick={handleBackToHome}
        onNavigate={handleNavigation}
      />
    );
  }

  // About Page
  if (currentPage === 'about') {
    return (
      <AboutUs 
        onLogoClick={handleBackToHome}
        onNavigate={handleNavigation}
      />
    );
  }

  // Details Page
  if (currentPage === 'details' && selectedTour) {
    return (
      <TourDetailsPage 
        tour={selectedTour} 
        onBack={handleBackToHome}
        onLogoClick={handleBackToHome}
        onNavigate={handleNavigation}
      />
    );
  }

  // Contact Page
  if (currentPage === 'contact') {
    return (
      <ContactPage 
        onLogoClick={handleBackToHome} 
        onNavigate={handleNavigation} 
      />
    );
  }

  // Home Page
  return (
    <HomePage 
      onTourClick={handleTourClick}
      onNavigate={handleNavigation}
    />
  );
};

export default App;