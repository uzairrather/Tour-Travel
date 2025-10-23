import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Jacob Jones",
      title: "CEO, Traveller",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      text: "Morem Ipsum Dolor Siterey Amet Mean Early Areasew Consec Taetur Adipisrvice Olivirg Ipsum Dolor Consectetur.",
      rating: 4
    },
    {
      name: "Floyd Miles",
      title: "CEO, Traveller",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      text: "Morem Ipsum Dolor Siterey Amet Mean Early Areasew Consec Taetur Adipisrvice Olivirg Ipsum Dolor Consectetur.",
      rating: 3
    },
    {
      name: "Esther Howard",
      title: "CEO, Traveller",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      text: "Morem Ipsum Dolor Siterey Amet Mean Early Areasew Consec Taetur Adipisrvice Olivirg Ipsum Dolor Consectetur.",
      rating: 4
    },
    {
      name: "Jacob Jones",
      title: "CEO, Traveller",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      text: "Morem Ipsum Dolor Siterey Amet Mean Early Areasew Consec Taetur Adipisrvice Olivirg Ipsum Dolor Consectetur.",
      rating: 4
    },
    {
      name: "Floyd Miles",
      title: "CEO, Traveller",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      text: "Morem Ipsum Dolor Siterey Amet Mean Early Areasew Consec Taetur Adipisrvice Olivirg Ipsum Dolor Consectetur.",
      rating: 3
    },
    {
      name: "Esther Howard",
      title: "CEO, Traveller",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      text: "Morem Ipsum Dolor Siterey Amet Mean Early Areasew Consec Taetur Adipisrvice Olivirg Ipsum Dolor Consectetur.",
      rating: 4
    }
  ];

  return (
    <div className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-purple-600 font-semibold mb-4">Clients Feedback About Us</h3>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">See Those Lovely Words From Clients</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Are You Tired Of The Typical Tourist Destinations And Looking To Step Out Of Your Comfort Zonetravel</p>
        </div>

        {/* Auto-scrolling Carousel */}
        <div className="overflow-hidden px-4">
          <div className="flex gap-6 animate-scroll py-6">
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 sm:p-8 rounded-lg flex-shrink-0 w-80"
                style={{
                  boxShadow: '0 -8px 16px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full mr-4 object-cover" 
                  />
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{testimonial.text}</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }

        .animate-scroll {
          animation: scroll 10s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSection;