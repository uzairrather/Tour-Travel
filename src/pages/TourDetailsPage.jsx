import React, { useState } from 'react';
import { MapPin, ChevronRight, Star, Play, Clock, Globe, Users, MessageSquare, CheckCircle2, XCircle, ChevronDown, Calendar } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TourDetailsPage = ({ tour, onBack, onLogoClick,onNavigate}) => {
  const [expandedDay, setExpandedDay] = useState(0);
  const [selectedTime, setSelectedTime] = useState('12:00');
  const [tickets, setTickets] = useState({ adult: 0, youth: 0, children: 0 });
  const [extras, setExtras] = useState({ serviceBooking: false, servicePerson: false });

  const calculateTotal = () => {
    let total = 0;
    total += tickets.adult * 20;
    total += tickets.youth * 20;
    total += tickets.children * 15;
    if (extras.serviceBooking) total += 30;
    if (extras.servicePerson) total += 20;
    if (extras.servicePerson && tickets.adult > 0) total += tickets.adult * 15;
    if (extras.servicePerson && tickets.youth > 0) total += tickets.youth * 20;
    return total;
  };

  return (
    <div className="min-h-screen bg-white">
       <Navbar onLogoClick={onLogoClick} onNavigate={onNavigate} />
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center text-sm text-gray-600">
            <button onClick={onBack} className="hover:text-purple-600">Home</button>
            <ChevronRight className="w-4 h-4 mx-2" />
            <button onClick={onBack} className="hover:text-purple-600">Tour Grid</button>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-purple-600">{tour.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Title Section */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-4">{tour.title}</h1>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center text-gray-600">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{tour.location}</span>
              <div className="flex items-center ml-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
                <span className="ml-2">({tour.reviews} Reviews)</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                <span>Share</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-purple-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>Add To Wishlist</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="col-span-2 rounded-lg overflow-hidden">
                <img src={tour.gallery[0]} alt="" className="w-full h-96 object-cover" />
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <img src={tour.gallery[1]} alt="" className="w-full h-48 object-cover" />
                <button className="absolute inset-0 bg-black/30 flex items-center justify-center hover:bg-black/40">
                  <Play className="w-12 h-12 text-white" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden">
                  <img src={tour.gallery[2]} alt="" className="w-full h-48 object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img src={tour.gallery[3]} alt="" className="w-full h-48 object-cover" />
                </div>
              </div>
            </div>

            {/* Tour Info Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-purple-50 p-4 rounded-lg">
                <Clock className="w-6 h-6 text-purple-600 mb-2" />
                <div className="text-sm text-gray-600">Duration</div>
                <div className="font-semibold">{tour.duration}</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <Globe className="w-6 h-6 text-purple-600 mb-2" />
                <div className="text-sm text-gray-600">Type</div>
                <div className="font-semibold">{tour.type}</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <Users className="w-6 h-6 text-purple-600 mb-2" />
                <div className="text-sm text-gray-600">Group Size</div>
                <div className="font-semibold">{tour.groupSize}</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <MessageSquare className="w-6 h-6 text-purple-600 mb-2" />
                <div className="text-sm text-gray-600">Languages</div>
                <div className="font-semibold">{tour.languages}</div>
              </div>
            </div>

            {/* About This Tour */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">About This Tour</h2>
              <p className="text-gray-600 leading-relaxed">{tour.description}</p>
            </div>

            {/* Trip Highlights */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Trip Highlights</h2>
              <div className="space-y-3">
                {tour.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Included/Excluded */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Included/Exclude</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  {tour.included.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {tour.excluded.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <XCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tour Plan */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Tour Plan</h2>
              <p className="text-gray-600 mb-6">Castle In One Day Is Next To Impossible. Designed Specifically For Trave Arelimited Time In London Ws You To Check Off A Range Of Southern England's Are Historical</p>
              <div className="space-y-4">
                {tour.tourPlan.map((day, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => setExpandedDay(expandedDay === idx ? -1 : idx)}
                      className="w-full flex items-center justify-between p-4 hover:bg-gray-50"
                    >
                      <div className="flex items-center space-x-4">
                        <span className="bg-purple-600 text-white px-3 py-1 rounded text-sm font-semibold">{day.day}</span>
                        <span className="font-semibold">{day.title}</span>
                      </div>
                      <ChevronDown className={`w-5 h-5 transition-transform ${expandedDay === idx ? 'rotate-180' : ''}`} />
                    </button>
                    {expandedDay === idx && (
                      <div className="p-4 border-t border-gray-200 bg-gray-50">
                        <p className="text-gray-600">{day.description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Location</h2>
              <p className="text-gray-600 mb-4">Castle In One Day Is Next To Impossible. Designed Specifically For Trave Arelimited Time In London, This Tour Ws You To Check Off A Range Of Southern England's Are Historical.</p>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <MapPin className="w-12 h-12 text-gray-400" />
              </div>
            </div>

            {/* Customer Reviews */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
              <p className="text-gray-600 mb-6">Castle In One Day Is Next To Impossible. Designed Specifically For Trave Arelimited Time In London This Tour Ws You To Check Off A Range Of Southern England's Are Historical</p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-purple-600">4.9</div>
                    <div className="text-lg font-semibold mt-2">Excellent</div>
                    <div className="text-sm text-gray-600">Based On 1562 Reviews</div>
                  </div>
                  <div className="flex-1 space-y-2">
                    {[
                      { label: 'Location', value: 4 },
                      { label: 'Amenities', value: 4 },
                      { label: 'Services', value: 4 },
                      { label: 'Price', value: 3.5 },
                      { label: 'Rooms', value: 5 }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <span className="w-24 text-sm text-gray-600">{item.label}</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${(item.value / 5) * 100}%` }}></div>
                        </div>
                        <span className="w-12 text-sm font-semibold">{item.value}/5</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Individual Reviews */}
              <div className="space-y-6 mb-8">
                <div className="border-b border-gray-200 pb-6">
                  <div className="flex items-start space-x-4">
                    <img src="https://i.pravatar.cc/150?img=12" alt="" className="w-16 h-16 rounded-full" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-bold">Ronald Richards</h4>
                          <p className="text-sm text-gray-600">20 Mar, 2023 . 4:00 Pm</p>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600">Castle In One Day Is Next To Impossible. Designed Specifically For Trave Areli Areafol Time In London, This Tour Allou To Check Off A Range Of Southern Day Is Next Together Impossible. Designed SpecificEngland.</p>
                      <button className="mt-3 text-purple-600 font-semibold text-sm">Reply</button>
                    </div>
                  </div>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <div className="flex items-start space-x-4">
                    <img src="https://i.pravatar.cc/150?img=45" alt="" className="w-16 h-16 rounded-full" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-bold">Annette Black</h4>
                          <p className="text-sm text-gray-600">20 Mar, 2023 . 4:00 Pm</p>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600">Castle In One Day Is Next To Impossible. Designed Specifically For Trave Areli Areafol Time In London, This Tour Allou To Check Off A Range Of Southern Day Is Next Together Impossible. Designed SpecificEngland.</p>
                      <button className="mt-3 text-purple-600 font-semibold text-sm">Reply</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leave A Reply */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-6">Leave A Reply</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  {[
                    { label: 'Location', value: 0 },
                    { label: 'Price', value: 0 },
                    { label: 'Amenities', value: 0 },
                    { label: 'Rooms', value: 0 },
                    { label: 'Services', value: 0 }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-gray-700">{item.label} :</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-gray-300 cursor-pointer hover:text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <input type="text" placeholder="Your Name" className="px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-purple-600" />
                  <input type="email" placeholder="E-mail Address" className="px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-purple-600" />
                </div>
                <textarea placeholder="Write Message" rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-purple-600 mb-4"></textarea>
                <div className="flex items-center mb-4">
                  <input type="checkbox" id="save" className="mr-2" />
                  <label htmlFor="save" className="text-sm text-gray-600">Save My Name, Email, And Website In This Browser For The Next Time I Comment.</label>
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold">SUBMIT REVIEW</button>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-24">
              <h3 className="text-2xl font-bold mb-6">Book This Tour</h3>
              
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">When (Date)</label>
                <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3">
                  <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                  <input type="text" placeholder="Select date" className="w-full outline-none" />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Time:</label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input type="radio" name="time" value="12:00" checked={selectedTime === '12:00'} onChange={(e) => setSelectedTime(e.target.value)} className="mr-2" />
                    <span>12:00</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="time" value="19:00" checked={selectedTime === '19:00'} onChange={(e) => setSelectedTime(e.target.value)} className="mr-2" />
                    <span>19:00</span>
                  </label>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-4">Tickets:</label>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">Adult</div>
                      <div className="text-sm text-gray-600">(14+ years) $20</div>
                    </div>
                    <select value={tickets.adult} onChange={(e) => setTickets({...tickets, adult: parseInt(e.target.value)})} className="border border-gray-300 rounded px-3 py-2">
                      {[...Array(11)].map((_, i) => (
                        <option key={i} value={i}>{i}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">Youth</div>
                      <div className="text-sm text-gray-600">(13-17 years) $20</div>
                    </div>
                    <select value={tickets.youth} onChange={(e) => setTickets({...tickets, youth: parseInt(e.target.value)})} className="border border-gray-300 rounded px-3 py-2">
                      {[...Array(11)].map((_, i) => (
                        <option key={i} value={i}>{i}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">Children</div>
                      <div className="text-sm text-gray-600">(13-17 years) $15</div>
                    </div>
                    <select value={tickets.children} onChange={(e) => setTickets({...tickets, children: parseInt(e.target.value)})} className="border border-gray-300 rounded px-3 py-2">
                      {[...Array(11)].map((_, i) => (
                        <option key={i} value={i}>{i}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-4">Add Extra:</label>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" checked={extras.serviceBooking} onChange={(e) => setExtras({...extras, serviceBooking: e.target.checked})} className="mr-2" />
                      <span>Service Per Booking</span>
                    </label>
                    <span className="font-semibold">$30.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" checked={extras.servicePerson} onChange={(e) => setExtras({...extras, servicePerson: e.target.checked})} className="mr-2" />
                      <span>Service Per Person</span>
                    </label>
                    <span className="font-semibold">$20.00</span>
                  </div>
                  {extras.servicePerson && (
                    <>
                      <div className="flex items-center justify-between pl-6">
                        <span className="text-sm text-gray-600">Adult:</span>
                        <span className="text-sm">$15.00</span>
                      </div>
                      <div className="flex items-center justify-between pl-6">
                        <span className="text-sm text-gray-600">Youth:</span>
                        <span className="text-sm">$20.00</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-semibold">Total Cost:</span>
                  <span className="text-2xl font-bold text-purple-600">${calculateTotal()}.00</span>
                </div>
                <div className="text-sm text-gray-600 mb-4">From ${tour.price}.00/Person</div>
              </div>

              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-lg font-bold text-lg">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default TourDetailsPage;