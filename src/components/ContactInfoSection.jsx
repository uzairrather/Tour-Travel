import React from 'react';
import { MapPin } from 'lucide-react';

const ContactInfoSection = () => {
  return (
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
  );
};

export default ContactInfoSection;