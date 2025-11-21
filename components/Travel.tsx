
import React from 'react';
import { TRAVEL_DETAILS, WEDDING_DETAILS } from '../constants';
import { MapPin, Hotel, Sun, ExternalLink, Plane, Car } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Travel: React.FC = () => {
  return (
    <section id="travel" className="py-24 bg-wedding-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-wedding-800 mb-4">Travel & Stay</h2>
            <p className="text-wedding-600 italic font-serif text-lg">
              We recommend the following accommodations and travel options for your journey.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Accommodation Column */}
          <ScrollReveal animation="slide-right" delay={100}>
            <div>
              <h3 className="font-serif text-2xl text-wedding-800 mb-8 flex items-center gap-2 border-b border-wedding-200 pb-4">
                <Hotel className="w-6 h-6" />
                Where to Stay
              </h3>
              
              <div className="space-y-6">
                {TRAVEL_DETAILS.hotels.map((hotel, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-sm shadow-sm border border-wedding-100 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-serif text-xl text-wedding-800 font-semibold pr-2">{hotel.name}</h4>
                      <span className="text-wedding-500 text-sm font-medium whitespace-nowrap">{hotel.priceRange}</span>
                    </div>
                    <p className="text-wedding-600 text-sm mb-4">{hotel.description}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-wedding-500 mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {hotel.address}
                      </div>
                      {hotel.distance && (
                        <div className="flex items-center text-wedding-700 font-medium">
                          <Car className="w-3 h-3 mr-1" />
                          {hotel.distance}
                        </div>
                      )}
                    </div>
                    <a 
                      href={hotel.bookingUrl}
                      className="inline-flex items-center text-xs uppercase tracking-widest text-wedding-800 border-b border-wedding-800 pb-1 hover:text-wedding-500 hover:border-wedding-500 transition-colors"
                    >
                      Book Room <ExternalLink className="w-3 h-3 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Airports & Activities */}
          <ScrollReveal animation="slide-left" delay={200}>
            <div className="space-y-12">
              
              {/* Airports Section */}
              <div>
                <h3 className="font-serif text-2xl text-wedding-800 mb-8 flex items-center gap-2 border-b border-wedding-200 pb-4">
                  <Plane className="w-6 h-6" />
                  Getting Here
                </h3>
                
                <div className="bg-white p-6 rounded-sm border border-wedding-100 space-y-6">
                  {TRAVEL_DETAILS.airports.map((airport, idx) => (
                    <div key={idx} className={`${idx !== TRAVEL_DETAILS.airports.length - 1 ? 'border-b border-wedding-100 pb-6' : ''}`}>
                      <div className="flex justify-between items-start mb-1">
                         <h4 className="font-serif text-lg text-wedding-800">{airport.name}</h4>
                         <span className="text-[10px] uppercase tracking-wider text-wedding-400 border border-wedding-200 px-2 py-1 rounded-full">Airport</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-wedding-600 mb-2 font-medium">
                        <Car className="w-4 h-4" />
                        {airport.distance}
                      </div>
                      <p className="text-xs text-wedding-500 italic">{airport.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activities Section */}
              <div>
                <h3 className="font-serif text-2xl text-wedding-800 mb-8 flex items-center gap-2 border-b border-wedding-200 pb-4">
                  <Sun className="w-6 h-6" />
                  Local Activities
                </h3>
                
                <div className="bg-white p-8 rounded-sm border border-wedding-100">
                  <p className="text-wedding-600 mb-6 text-sm">
                    While you're in town for our special day, we hope you take some time to explore the beautiful {WEDDING_DETAILS.location.venue.split(' ')[0]} area.
                  </p>
                  
                  <ul className="space-y-6">
                    {TRAVEL_DETAILS.activities.map((activity, idx) => (
                      <li key={idx} className="flex gap-4">
                        <div className="w-1 h-full bg-wedding-300 rounded-full flex-shrink-0"></div>
                        <div>
                          <h5 className="font-serif text-lg text-wedding-800">{activity.title}</h5>
                          <p className="text-sm text-wedding-600">{activity.description}</p>
                          <span className="text-xs text-wedding-400 italic mt-1 block">{activity.location}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Travel;
