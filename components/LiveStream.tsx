
import React from 'react';
import { EVENTS } from '../constants';
import { MonitorPlay, Wifi, Youtube, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

const LiveStream: React.FC = () => {
  // Filter events that have a live stream URL
  const streamingEvents = EVENTS.filter(event => event.liveStreamUrl);

  if (streamingEvents.length === 0) return null;

  return (
    <section id="live" className="py-24 bg-wedding-900 text-white relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-wedding-800 via-wedding-900 to-black opacity-80 pointer-events-none"></div>
      <div className="absolute inset-0 pattern-overlay opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4 text-wedding-300">
              <Wifi className="w-5 h-5 animate-pulse" />
              <span className="uppercase tracking-[0.2em] text-sm font-bold">Virtual Attendance</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-wedding-50 mb-4">Live Streaming</h2>
            <p className="text-wedding-200 italic font-serif text-lg max-w-2xl mx-auto">
              Distance shouldn't keep us apart. We invite our loved ones from around the world to join our celebrations virtually.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {streamingEvents.map((event, idx) => (
            <ScrollReveal key={event.id} animation="fade-up" delay={idx * 100}>
              <div className="bg-white/5 backdrop-blur-sm border border-wedding-300/20 rounded-sm p-8 hover:bg-white/10 transition-colors duration-300 group">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-serif text-2xl text-wedding-100 mb-2 group-hover:text-wedding-300 transition-colors">{event.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-wedding-200/80">
                      <Calendar className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <div className="bg-wedding-800/50 p-3 rounded-full text-wedding-300 border border-wedding-300/30">
                    <MonitorPlay className="w-6 h-6" />
                  </div>
                </div>

                <p className="text-wedding-200/60 text-sm mb-8 line-clamp-2">
                  {event.description}
                </p>

                <Link 
                  to="/live-wait"
                  className="flex items-center justify-center gap-3 w-full bg-red-700 hover:bg-red-600 text-white py-4 rounded-sm font-medium uppercase tracking-wider text-sm transition-all shadow-lg hover:shadow-red-900/50 group-hover:translate-y-[-2px]"
                >
                  <Youtube className="w-5 h-5" />
                  <span>Watch Live</span>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-in" delay={400}>
           <div className="mt-12 text-center">
             <p className="text-xs text-wedding-200/40 uppercase tracking-widest">
               * Stream links will become active 15 minutes prior to event start
             </p>
           </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default LiveStream;
