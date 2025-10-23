import React, { useState } from 'react';
import { Search, Calendar, User, ArrowRight, MapPin, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogsPage = ({onLogoClick, onNavigate}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const blogs = [
    {
      id: 1,
      title: '10 Best Beach Destinations for 2024',
      excerpt: 'Discover the most breathtaking beaches around the world that should be on your travel bucket list.',
      category: 'destinations',
      date: 'Dec 15, 2024',
      author: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=300&fit=crop',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Travel Budget Planning: Save Money While Exploring',
      excerpt: 'Smart tips and tricks to plan your dream vacation without breaking the bank.',
      category: 'tips',
      date: 'Dec 12, 2024',
      author: 'Mike Chen',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Mountain Adventures: Trekking in the Himalayas',
      excerpt: 'An epic journey through one of the world\'s most majestic mountain ranges.',
      category: 'adventures',
      date: 'Dec 10, 2024',
      author: 'Emma Wilson',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Cultural Travel: Immerse Yourself in Local Traditions',
      excerpt: 'Learn how to travel respectfully and experience authentic local cultures around the globe.',
      category: 'culture',
      date: 'Dec 8, 2024',
      author: 'Alex Rodriguez',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop',
      readTime: '8 min read'
    },
    {
      id: 5,
      title: 'The Complete Backpacking Guide for Solo Travelers',
      excerpt: 'Everything you need to know about solo travel, from packing to staying safe.',
      category: 'tips',
      date: 'Dec 5, 2024',
      author: 'James Miller',
      image: 'https://images.unsplash.com/photo-1519671482677-504be0271f1b?w=500&h=300&fit=crop',
      readTime: '9 min read'
    },
    {
      id: 6,
      title: 'Hidden Gems: Secret Destinations Worth Exploring',
      excerpt: 'Off-the-beaten-path locations that offer unforgettable experiences away from crowds.',
      category: 'destinations',
      date: 'Dec 1, 2024',
      author: 'Lisa Anderson',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=300&fit=crop',
      readTime: '6 min read'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'adventures', label: 'Adventures' },
    { id: 'tips', label: 'Travel Tips' },
    { id: 'culture', label: 'Culture' }
  ];

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || blog.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full bg-white">
      {/* Navbar */}
      <Navbar onLogoClick={onLogoClick} onNavigate={onNavigate} />

      {/* Hero Section */}
      <div className="h-80 bg-cover bg-center relative" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=95)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-6xl font-bold mb-4 drop-shadow-lg">Travel Blog</h1>
          <p className="text-xl drop-shadow-lg">Stories, Tips & Inspirations for Your Next Adventure</p>
        </div>
      </div>

      {/* Search & Filter Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="relative mb-8">
            <Search className="absolute left-4 top-3 w-6 h-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-600 focus:outline-none text-lg"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-gray-600 mb-8">Showing {filteredBlogs.length} articles</p>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredBlogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {categories.find(c => c.id === blog.category)?.label}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 line-clamp-2 hover:text-purple-600 transition-colors cursor-pointer">
                  {blog.title}
                </h3>

                <p className="text-gray-600 line-clamp-2 text-sm">
                  {blog.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-xs text-gray-500 pt-4 border-t">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {blog.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {blog.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {blog.readTime}
                  </div>
                </div>

                {/* Read More Button */}
                <button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-16">
            <p className="text-2xl text-gray-500 mb-4">No blogs found matching your criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('all');
              }}
              className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Subscribe to Our Travel Newsletter</h2>
          <p className="text-lg mb-8 text-purple-100">Get the latest travel tips, destination guides, and exclusive offers delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-lg text-gray-900 focus:outline-none flex-1 max-w-md"
            />
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
 <Footer/>
    </div>
  );
};

export default BlogsPage;