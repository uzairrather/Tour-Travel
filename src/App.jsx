import React, { useState, useEffect } from 'react';
import { Search, MapPin, Calendar, Users, Phone, ShoppingCart, User, ChevronDown, Star, Clock, ArrowRight, Play, Facebook, Twitter, Instagram, Youtube, ChevronLeft, ChevronRight, Hotel, Utensils, Home, Activity, Car, Menu, X, Mountain } from 'lucide-react';

const TourexWebsite = () => {
  const [activeTab, setActiveTab] = useState('tour');
  const [activePackageTab, setActivePackageTab] = useState('hotel');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920',
      title: 'Dal Lake, Srinagar',
      subtitle: 'Experience The Jewel In The Crown Of Kashmir',
      subtitle2: 'Float On Serene Waters Surrounded By Mountains'
    },
    {
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920',
      title: 'Gulmarg Paradise',
      subtitle: 'Discover The Meadow Of Flowers',
      subtitle2: 'Adventure Awaits In The Valley Of Kashmir'
    },
    {
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1920',
      title: 'Pahalgam Valley',
      subtitle: 'Explore The Valley Of Shepherds',
      subtitle2: 'Nature\'s Perfect Creation In Kashmir'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  React.useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      @keyframes droneZoomIn {
        0% {
          transform: scale(1);
        }
        100% {
          transform: scale(1.2);
        }
      }
      @keyframes droneZoomOut {
        0% {
          transform: scale(1.2);
        }
        100% {
          transform: scale(1);
        }
      }
      .drone-zoom-in {
        animation: droneZoomIn 7s ease-out forwards;
      }
      .drone-zoom-out {
        animation: droneZoomOut 7s ease-out forwards;
      }
      .hero-slide {
        transition: opacity 1.2s ease-in-out;
      }
      .hero-slide.active {
        opacity: 1;
        animation-play-state: running;
      }
      .hero-slide.inactive {
        opacity: 0;
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const tourPackages = [
    {
      id: 1,
      title: 'Two Hour Walking Tour Of Manhattan',
      location: 'Veins City, Italy',
      days: '7 Days',
      price: 320,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500',
      badge: 'New',
      badgeColor: 'bg-green-500',
      reviews: 5
    },
    {
      id: 2,
      title: 'When You Visit The Eternal Dubai City',
      location: 'Dubai, Emirates',
      days: '2 Days',
      price: 149,
      oldPrice: 299,
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500',
      badge: '% Offer',
      badgeColor: 'bg-purple-600',
      reviews: 5
    },
    {
      id: 3,
      title: 'The Pulau Seribu, Jakarta Indonesia',
      location: '51 Dekor Land, Thailand',
      days: '2 Days',
      price: 348,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500',
      badge: 'New',
      badgeColor: 'bg-green-500',
      reviews: 5
    },
    {
      id: 4,
      title: 'American Parks Trail End Rapid City Express',
      location: 'New York, USA',
      days: '3 Days',
      price: 255,
      oldPrice: 280,
      image: 'https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=500',
      badge: 'Featured',
      badgeColor: 'bg-orange-500',
      reviews: 4
    }
  ];

  const destinations = [
    {
      name: 'Paris',
      tours: '05 Tours',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500'
    },
    {
      name: 'Australia',
      tours: '08 Tours',
      image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=500'
    },
    {
      name: 'New York',
      tours: '08 Tours',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500'
    },
    {
      name: 'Spain City',
      tours: '07 Tours',
      image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=500'
    }
  ];

  const testimonials = [
    {
      name: 'Jacob Jones',
      title: 'CEO, Traveller',
      avatar: 'https://i.pravatar.cc/150?img=12',
      rating: 4,
      text: 'Morem Ipsum Dolor Siterey Amet Mean Earty Areasew Consec Taetur Adipisrvice Olivirg Ipsum Dolor Consectetur.'
    },
    {
      name: 'Floyd Miles',
      title: 'CEO, Traveller',
      avatar: 'https://i.pravatar.cc/150?img=33',
      rating: 3,
      text: 'Morem Ipsum Dolor Siterey Amet Mean Earty Areasew Consec Taetur Adipisrvice Olivirg Ipsum Dolor Consectetur.'
    },
    {
      name: 'Esther Howard',
      title: 'CEO, Traveller',
      avatar: 'https://i.pravatar.cc/150?img=45',
      rating: 4,
      text: 'Morem Ipsum Dolor Siterey Amet Mean Earty Areasew Consec Taetur Adipisrvice Olivirg Ipsum Dolor Consectetur.'
    }
  ];

  const blogs = [
    {
      id: 1,
      title: 'Spiritual Sojourn: Pilgrimage Tours For Soul Seekers',
      category: 'Travel Bner',
      categoryColor: 'bg-purple-600',
      date: '26th Sep, 2024',
      readTime: '5 Mins Read',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500'
    },
    {
      id: 2,
      title: 'Wine Country Escapes: Vineyard Tours For Connoisseurs',
      category: 'Hiking',
      categoryColor: 'bg-purple-600',
      date: '26th Sep, 2024',
      readTime: '5 Mins Read',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500'
    },
    {
      id: 3,
      title: 'Thrills & Chills: Extreme Sports Tours For Adrenaline',
      category: 'Adventure',
      categoryColor: 'bg-purple-600',
      date: '26th Sep, 2024',
      readTime: '5 Mins Read',
      image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-gray-900/80 backdrop-blur-sm fixed w-full z-50 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <Mountain className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-bold">Kashmir</div>
                <div className="text-xs text-gray-400">A Travel Agency</div>
              </div>
            </div>

            <div className="hidden lg:flex space-x-8">
              <a href="#" className="hover:text-purple-400 flex items-center">Home <ChevronDown className="w-4 h-4 ml-1" /></a>
              <a href="#" className="hover:text-purple-400 flex items-center">Features <ChevronDown className="w-4 h-4 ml-1" /></a>
              <a href="#" className="hover:text-purple-400 flex items-center">Pages <ChevronDown className="w-4 h-4 ml-1" /></a>
              <a href="#" className="hover:text-purple-400 flex items-center">Blogs <ChevronDown className="w-4 h-4 ml-1" /></a>
              <a href="#" className="hover:text-purple-400">Contact</a>
            </div>

            <div className="flex items-center space-x-3 lg:space-x-6">
              <div className="hidden md:flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <div>
                  <div className="text-xs text-gray-400">Call Us:</div>
                  <div className="text-sm font-semibold">+123 5959 66</div>
                </div>
              </div>
              <div className="relative hidden sm:block">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">1</span>
              </div>
              <button className="hidden sm:flex bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Login</span>
              </button>
              
              <button 
                className="lg:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-700">
              <div className="flex flex-col space-y-4">
                <a href="#" className="hover:text-purple-400 flex items-center">Home <ChevronDown className="w-4 h-4 ml-1" /></a>
                <a href="#" className="hover:text-purple-400 flex items-center">Features <ChevronDown className="w-4 h-4 ml-1" /></a>
                <a href="#" className="hover:text-purple-400 flex items-center">Pages <ChevronDown className="w-4 h-4 ml-1" /></a>
                <a href="#" className="hover:text-purple-400 flex items-center">Blogs <ChevronDown className="w-4 h-4 ml-1" /></a>
                <a href="#" className="hover:text-purple-400">Contact</a>
                <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full flex items-center space-x-2 justify-center">
                  <User className="w-4 h-4" />
                  <span>Login</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Image Container with overflow hidden */}
        <div className="absolute inset-0 overflow-hidden">
          {heroSlides.map((slide, index) => (
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
          <div className="absolute inset-0 bg-black/40 z-10"></div>
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">{heroSlides[currentSlide].title}</h1>
            <p className="text-base sm:text-xl mb-2">{heroSlides[currentSlide].subtitle}</p>
            <p className="text-base sm:text-xl mb-6">{heroSlides[currentSlide].subtitle2}</p>
            <div className="text-3xl sm:text-4xl font-bold mb-8">
              Booking Start From <span className="text-4xl sm:text-5xl">${299}</span><span className="text-xl sm:text-2xl">/night</span>
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold flex items-center mx-auto">
              TAKE A TOUR <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-6xl bg-white rounded-lg shadow-2xl mx-4" style={{zIndex: 50}}>
            <div className="flex overflow-x-auto border-b scrollbar-hide bg-white rounded-t-lg">
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
        </div>
      </div>

      {/* TriPlan Section */}
      <div className="py-20 sm:py-32 px-4 max-w-7xl mx-auto ">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex flex-col justify-center">
            <h3 className="text-red-500 font-semibold mb-4 text-sm sm:text-base uppercase tracking-wide">Our Tour Gallery</h3>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">Best Traveler's Shared Photos</h2>
            <p className="text-gray-600 text-base leading-relaxed">Aperiam sociosqu urna praesent, tristique, corrupti condimentum asperiores platea ipsum ad arcu. Nostrud. Esse? Aut nostrum, ornare quas provident laoreet nesciunt odio voluptates etiam, omnis.</p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg">
                <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600" alt="Travel" className="w-full h-56 sm:h-64 object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600" alt="Travel" className="w-full h-56 sm:h-64 object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg">
                <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=600" alt="Travel" className="w-full h-72 sm:h-80 object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600" alt="Travel" className="w-full h-72 sm:h-80 object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>

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
              <div key={pkg.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
                  <span className={`absolute top-4 left-4 ${pkg.badgeColor} text-white px-3 py-1 rounded text-sm font-semibold`}>
                    {pkg.badge}
                  </span>
                  <button className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-3">{pkg.title}</h3>
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {pkg.location}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm mb-4">
                    <Clock className="w-4 h-4 mr-1" />
                    {pkg.days}
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <div>
                      {pkg.oldPrice && (
                        <span className="text-gray-400 line-through text-sm mr-2">${pkg.oldPrice}</span>
                      )}
                      <span className="text-purple-600 font-bold text-2xl">${pkg.price}</span>
                      <span className="text-gray-600 text-sm">/Person</span>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < pkg.reviews ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">({pkg.reviews})</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {tourPackages.map((pkg) => (
              <div key={`row2-${pkg.id}`} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
                  <span className={`absolute top-4 left-4 ${pkg.badgeColor} text-white px-3 py-1 rounded text-sm font-semibold`}>
                    {pkg.badge}
                  </span>
                  <button className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-3">{pkg.title}</h3>
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {pkg.location}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm mb-4">
                    <Clock className="w-4 h-4 mr-1" />
                    {pkg.days}
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <div>
                      {pkg.oldPrice && (
                        <span className="text-gray-400 line-through text-sm mr-2">${pkg.oldPrice}</span>
                      )}
                      <span className="text-purple-600 font-bold text-2xl">${pkg.price}</span>
                      <span className="text-gray-600 text-sm">/Person</span>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < pkg.reviews ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">({pkg.reviews})</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dream Your Next Trip */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h3 className="text-purple-600 font-semibold mb-4">Dream Your Next Trip</h3>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Discover When Even You Want To Go</h2>
              <p className="text-gray-600 mb-8">Are You Tired Of The Typical Tourist Destinations And Looking To Step Out Of Your Comfort Zone? Adventure Travel May Be The Perfect Solution For You! Here Are Four.</p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Best Travel Agency</h4>
                    <p className="text-gray-600">Are you tired of the typical tourist destinatio and looking step out of your comfort.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Secure Journey With Us</h4>
                    <p className="text-gray-600">Are you tired of the typical tourist destinatio and looking step out of your comfort.</p>
                  </div>
                </div>
              </div>

              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center">
                BOOK YOUR TRIP <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute -right-12 top-1/2 transform -translate-y-1/2 text-7xl lg:text-9xl font-bold text-gray-100 tracking-wider" style={{writingMode: 'vertical-rl', textOrientation: 'mixed'}}>
                TRAVEL
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400" alt="" className="rounded-lg w-full h-60 sm:h-72 object-cover" />
                <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400" alt="" className="rounded-lg w-full h-80 sm:h-96 object-cover mt-8 sm:mt-12" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
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

      {/* Popular Destinations */}
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

      {/* Explore Section */}
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

      {/* Testimonials */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-purple-600 font-semibold mb-4">Clients Feedback About Us</h3>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">See Those Lovely Words From Clients</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Are You Tired Of The Typical Tourist Destinations And Looking To Step Out Of Your Comfort Zonetravel</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mr-4" />
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-purple-600 font-semibold mb-4">Blog And Article</h3>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Latest News & Articles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Are You Tired Of The Typical Tourist Destinations And Looking To Step Out Of Your Comfort Zonetravel</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                  <span className={`absolute top-4 right-4 ${blog.categoryColor} text-white px-4 py-2 rounded text-sm font-semibold`}>
                    {blog.category}
                  </span>
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-3 group-hover:text-purple-600">{blog.title}</h3>
                <div className="flex items-center text-gray-600 text-xs sm:text-sm space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {blog.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {blog.readTime}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600">
              Want To See Our Recent News & Updates.{' '}
              <a href="#" className="text-purple-600 font-semibold hover:underline">Click Here To View More</a>
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="bg-teal-500 py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4">
              <img 
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600" 
                alt="Travel Friends" 
                className="rounded-2xl w-full h-96 object-cover shadow-xl"
              />
            </div>

            <div className="md:col-span-5 text-white space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-white/20 p-3 rounded-lg mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">support@gmail.com</p>
                    <p className="text-lg font-semibold">info@domain.com</p>
                    <p className="text-lg font-semibold">name@company.com</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-white/20 p-3 rounded-lg mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">+132 (599) 254 669</p>
                    <p className="text-lg font-semibold">+123 (669) 255 587</p>
                    <p className="text-lg font-semibold">+01 (977) 2599 12</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center">
                  <div className="bg-white/20 p-3 rounded-lg mr-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">3146 Koontz, California</p>
                    <p className="text-lg font-semibold">Quze, 24 Second floor</p>
                    <p className="text-lg font-semibold">36 Street, Melbourne</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 text-white text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 leading-tight">
                LET'S JOIN US FOR MORE UPDATE !!
              </h2>
              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition-all hover:scale-105">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <Mountain className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-bold">Kashmir</div>
                  <div className="text-xs text-gray-400">A Travel Agency</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 text-sm sm:text-base">Pharetra Maecenas Felis Vestibulum Convallis Mollis Nullam Congue Sild Rviers Of Finland Quebec.</p>
              <div className="relative">
                <input type="email" placeholder="Enter your mail" className="w-full bg-gray-800 px-4 py-3 rounded-lg pr-12 outline-none text-sm sm:text-base" />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 p-2 rounded-lg">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="flex space-x-3 mt-6">
                <a href="#" className="bg-gray-800 hover:bg-purple-600 p-2 rounded-full transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-purple-600 p-2 rounded-full transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-purple-600 p-2 rounded-full transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-purple-600 p-2 rounded-full transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                  </svg>
                </a>
                <a href="#" className="bg-gray-800 hover:bg-purple-600 p-2 rounded-full transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3 text-sm sm:text-base">
                <li><a href="#" className="text-gray-400 hover:text-purple-400">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400">Tour Guide</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Information</h3>
              <div className="space-y-4 text-sm sm:text-base">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-400">58 Street Commercial Road Fratton, Australia</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <p className="text-gray-400">+123 888 9999</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-400">
                    <p>Mon - Sat: 8 Am - 5 Pm,</p>
                    <p>Sunday: <span className="text-white">CLOSED</span></p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Utility Pages</h3>
              <ul className="space-y-3 text-sm sm:text-base">
                <li><a href="#" className="text-gray-400 hover:text-purple-400">Style Guide</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400">Password Protected</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400">404 Error</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400">Changelog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400">Licenses</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm sm:text-base">
            <p>Copyright ©Kashmir | All Right Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TourexWebsite;