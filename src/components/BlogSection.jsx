import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const BlogSection = ({ blogs }) => {
  return (
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
  );
};

export default BlogSection;